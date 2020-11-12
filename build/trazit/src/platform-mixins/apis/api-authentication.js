import {
  backendUrl,
  appAuthenticateApiUrl,
} from "../../config/platform/logic/api-config.js";
import { store } from "../../store.js";
import { ToastMethods } from "../functions/toast-methods.js";
import { TabsMethods } from "../platform-functions/tabs-functions.js";
import {
  stopLoading,
  updateFinalToken,
  setPartialToken,
  doLogin,
  setUserTabsOnLogin,
} from "../../elements/platformComponents/Redux/actions/app_actions.js";
import { addSession } from "../../elements/platformComponents/Redux/actions/session_actions.js";
import { ProcedureList } from "./api-platform-procedurelist.js";
import { UserSession } from "./api-usersession.js";
import { ApiAndFrontendSopUser } from "./api-and-frontend-sopuser.js";
import { ApiSettings } from "./api-settings.js"; //import {ApiMessage} from '../app-functions/apiMessage';
//import { addNotification  } from '../../../app/Redux/actions/notifications_actions';
import { userSessionMixin } from "../store/user-session-mixin.js";
import { loginMixin } from "./login-mixin.js";
import { tokenMixin } from "../store/token-mixin.js";
/**
 * @mixinFunction
 * @polymer
 */ export const AuthenticationApi = (superClass) =>
  class extends ApiSettings(
    tokenMixin(
      ApiAndFrontendSopUser(
        UserSession(
          ProcedureList(
            loginMixin(userSessionMixin(TabsMethods(ToastMethods(superClass))))
          )
        )
      )
    )
  ) {
    ajaxAuthenticate(data) {
      var apiUrl = backendUrl + appAuthenticateApiUrl,
        actionName = "authenticate"; //    console.log('authentication-api.ajaxAuthenticate', data, data.actionName);
      axios
        .get(apiUrl, {
          params: {
            actionName: actionName,
            dbUserName: data.dbUserName,
            dbUserPassword: data.dbUserPassword,
          },
        })
        .then((response) => {
          if (200 == response.status) {
            //            console.log(response.data);
            if (data.callBackFunction) {
              data.callBackFunction();
            }
            var finalTokenData = [];
            finalTokenData.personId = response.data.userInfoId;
            finalTokenData.partialToken = response.data.myToken; //this.userInfoId=response.data.userInfoId;
            store.dispatch(setPartialToken(finalTokenData));
            this.ajaxUserRoles();
            return;
          }
          var state = store.getState(),
            language = state.app.user.appLanguage,
            message = "";
          switch (language) {
            case "es":
              message = response.data.message_es;
              break;
            default:
              message = response.data.message_en;
              break;
          } //console.log('.then , response!=200, calling callBackFunctionError', 'response.data', response.data);
          //if (data.callBackFunctionError){data.callBackFunctionError();}
          //var errMessage = ApiMessage.errorMessage(response.data);
          this.dispatchEvent(
            new CustomEvent("toast-error", {
              bubbles: !0,
              composed: !0,
              detail: message, //response.data.error_code //ApiMessage.errorMessage(response.data)
            })
          );
        })
        .catch(function (error) {
          //        console.log('.catch , calling callBackFunctionError', error.response.data, data.callBackFunctionError);
          //if (data.callBackFunctionError){data.callBackFunctionError();}
          //var errMessage = ApiMessage.errorMessage(response.data);
          this.dispatchEvent(
            new CustomEvent("toast-error", {
              bubbles: !0,
              composed: !0,
              detail: response.data.error_code,
            })
          );
        })
        .then(function () {});
    }
    ajaxUserRoles(data) {
      var actionName = "getuserrole",
        apiUrl = backendUrl + appAuthenticateApiUrl,
        partialToken = this.getPartialToken(); //    console.log('authentication-api.ajaxUserRoles', partialToken);
      axios
        .get(apiUrl, {
          params: { actionName: actionName, myToken: partialToken },
        })
        .then((response) => {
          if (200 == response.status) {
            //            console.log(response);
            this.userRoles = response.data;
            this.fillUserRoleList();
            if (data && data.callBackFunction) {
              data.callBackFunction();
            }
            return;
          }
          if (data && data.callBackFunctionError) {
            data.callBackFunctionError();
          }
          this.dispatchEvent(
            new CustomEvent("toast-error", {
              bubbles: !0,
              composed: !0,
              detail:
                "Error on authentication although the connectivity with the API ended with success! Status: " +
                response.status,
            })
          );
        })
        .catch(function (error) {
          if (data && data.callBackFunctionError) {
            data.callBackFunctionError();
          }
          this.dispatchEvent(
            new CustomEvent("toast-error", {
              bubbles: !0,
              composed: !0,
              detail: "Error on getting user roles",
            })
          );
        })
        .then(function () {
          //        console.log('always executed')
        });
    }
    ajaxFinalToken(data) {
      var apiUrl = backendUrl + appAuthenticateApiUrl,
        actionName = "finaltoken",
        partialToken = this.getPartialToken(); //    console.log('authentication-api.ajaxUserRoles', data);
      axios
        .get(apiUrl, {
          params: {
            actionName: actionName,
            myToken: partialToken,
            userRole: data.userRole,
          },
        })
        .then((response) => {
          if (200 == response.status) {
            var finalToken = response.data.finalToken,
              userTabsOnLogin = response.data.userTabsOnLogin;
            this.appSessionId = response.data.appSessionId;
            this.appSessionStartDate = response.data.appSessionStartDate;
            var addSessionData = {
              sessionId: this.appSessionId,
              userRole: data.userRole,
              startDate: this.appSessionStartDate,
            };
            store.dispatch(addSession(addSessionData));
            store.dispatch(updateFinalToken(finalToken));
            store.dispatch(doLogin(data.userName));
            store.dispatch(setUserTabsOnLogin(userTabsOnLogin));
            this.openTabsOnLogin(); // if (userTabsOnLogin.length>0){
            //     var i=0;
            //     for (i=0; i<userTabsOnLogin.length; i++){
            //         if (userTabsOnLogin[i].systemTab==true || userTabsOnLogin[i].tabType=='systab'){
            //             store.dispatch(addSystemTab(userTabsOnLogin[i]));
            //         }
            //         if (userTabsOnLogin[i].systemTab==false || userTabsOnLogin[i].tabType=='tab'){
            //             store.dispatch(addTab(userTabsOnLogin[i]));
            //         }
            //     }
            //     store.dispatch(setCurrentTab(userTabsOnLogin[userTabsOnLogin.length-1]));
            // }
            var procListData = [];
            procListData.finalToken = finalToken;
            this.getProcedureList(procListData);
            this.getAPIPlatformHeader(procListData);
            this.getSopOnStartSession(procListData);
            store.dispatch(stopLoading());
            if (data.callBackFunction) {
              data.callBackFunction();
            }
            this.initAppSession(); //            console.log(store.getState());
            return;
          } else {
            if (data.callBackFunctionError) {
              data.callBackFunctionError();
            }
            var msgObj = {
              message_en: "Error running ajaxFinalToken: " + response.data,
              message_es: "Error ejecutando ajaxFinalToken: " + response.data,
            };
            this.toastErrorMessage(msgObj);
            return;
          }
        })
        .catch(function (error) {
          if (data.callBackFunctionError) {
            data.callBackFunctionError();
          }
          var msgObj = {
            message_en: "Error running ajaxFinalToken: " + error,
            message_es: "Error ejecutando ajaxFinalToken: " + error,
          };
          this.toastErrorMessage(msgObj);
          return;
        })
        .then(function () {
          //      console.log('always executed')
        });
    }
    ajaxTokenValidateEsignPhrase(data) {
      var finalToken = this.getFinalToken(),
        apiUrl = backendUrl + appAuthenticateApiUrl,
        endpoints_returningError = this.endpoints_returningError(),
        endpoints_for_apiAuthentication = this.endpoints_for_apiAuthentication(),
        actionName =
          endpoints_for_apiAuthentication.validateEsignPhrase.action_name;
      if (!data || 0 == data.esignPhraseToCheck.length) {
        this.toastErrorMessage(
          endpoints_for_apiAuthentication.validateEsignPhrase
            .mandatory_field_message
        );
        return;
      } //console.log('authentication-api.ajaxUserRoles', data);
      axios
        .get(apiUrl, {
          params: {
            actionName: actionName,
            finalToken: finalToken,
            esignPhraseToCheck: data.esignPhraseToCheck,
          },
        })
        .then((response) => {
          if (200 == response.status) {
            //this.finalToken=response.data.finalToken;
            if (data.callBackFunction) {
              data.callBackFunction();
            }
            return;
          }
          if (data.callBackFunctionError) {
            data.callBackFunctionError();
          }
          this.toastErrorMessageWithApiResponse(
            endpoints_returningError.response_not_status_200,
            response
          );
          return;
        })
        .catch(function (error) {
          if (data.callBackFunctionError) {
            data.callBackFunctionError();
          }
          this.toastErrorMessageWithApiResponse(
            endpoints_returningError.response_error,
            error
          );
          return;
        })
        .then(function () {
          //      console.log('always executed')
        });
    }
    ajaxTokenValidateUserCredentials(data) {
      var apiUrl = backendUrl + appAuthenticateApiUrl,
        finalToken = this.getFinalToken(),
        endpoints_for_apiAuthentication = this.endpoints_for_apiAuthentication(),
        actionName =
          endpoints_for_apiAuthentication.validateUserCredentials.action_name;
      if (
        !data ||
        0 == data.userToCheck.length ||
        0 == data.passwordToCheck.length
      ) {
        this.toastErrorMessage(
          endpoints_for_apiAuthentication.validateUserCredentials
            .mandatory_field_message
        );
        return;
      } //var endpoints_returningError=this.endpoints_returningError();
      //console.log('authentication-api.ajaxUserRoles', data);
      axios
        .get(apiUrl, {
          params: {
            actionName: actionName,
            finalToken: finalToken,
            userToCheck: data.userToCheck,
            passwordToCheck: data.passwordToCheck,
          },
        })
        .then((response) => {
          if (200 == response.status) {
            //            console.log(response);
            //this.finalToken=response.data.finalToken;
            if (data.callBackFunction) {
              data.callBackFunction();
            }
            return;
          }
          if (data.callBackFunctionError) {
            data.callBackFunctionError();
          }
          this.toastErrorMessageWithApiResponse(
            endpoints_returningError.response_not_status_200,
            response
          );
          return;
        })
        .catch(function (error) {
          if (data.callBackFunctionError) {
            data.callBackFunctionError();
          }
          this.toastErrorMessageWithApiResponse(
            endpoints_returningError.response_error,
            error
          );
          return;
        })
        .then(function () {
          //      console.log('always executed')
        });
    }
  };
