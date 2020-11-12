import { store } from "../../store.js";
import {
  backendUrl,
  appAuthenticateApiUrl,
} from "../../config/platform/logic/api-config.js";
import { addNotification } from "../../elements/platformComponents/Redux/actions/notifications_actions.js";
import { diagnosticToNotification } from "../platform-functions/notification-obj.js";
import { updateFinalToken } from "../../elements/platformComponents/Redux/actions/app_actions.js";
import { ToastMethods } from "../functions/toast-methods.js";
import { ApiSettings } from "./api-settings.js";
import { tokenMixin } from "../store/token-mixin.js";
export const ApiPlatform = (superClass) =>
  class extends ApiSettings(ToastMethods(tokenMixin(superClass))) {
    appActionTriggerAPI(
      schemaPrefix,
      finalToken,
      actionName,
      selectedRow,
      tabInfo,
      callBackFunction2
    ) {
      //console.log('invoked ApiPlatform >> appActionTriggerAPI');
      this.appActionControllerAPI(
        schemaPrefix,
        finalToken,
        actionName,
        selectedRow,
        tabInfo,
        callBackFunction2
      );
    }
    appActionControllerAPI(
      schemaPrefix,
      finalToken,
      actionName,
      selectedRow,
      tabInfo,
      callBackFunction2
    ) {
      this.internalCallbackFunction = callBackFunction2; //console.log('selectedRow', selectedRow);
      actionName = actionName.toUpperCase();
      var paramsUrl = "",
        endpoints_for_apiPlatform = this.endpoints_for_apiPlatform();
      switch (actionName) {
        case endpoints_for_apiPlatform.userChangePassword.action_name: //'USER_CHANGE_PSWD':
          if (!selectedRow.newPassword || 0 == selectedRow.newPassword.length) {
            this.toastErrorMessage(
              endpoints_for_apiPlatform.userChangePassword
                .mandatory_field_message
            );
          }
          paramsUrl = paramsUrl + "&newPassword=" + selectedRow.newPassword;
          paramsUrl = paramsUrl + "&userToCheck=" + selectedRow.userToCheck;
          paramsUrl =
            paramsUrl + "&passwordToCheck=" + selectedRow.passwordToCheck;
          break;
        case endpoints_for_apiPlatform.userChangeEsign.action_name: //'USER_CHANGE_ESIGN':
          if (!selectedRow.newEsign || 0 == selectedRow.newEsign.length) {
            this.toastErrorMessage(
              endpoints_for_apiPlatform.userChangeEsign.mandatory_field_message
            );
          }
          paramsUrl = paramsUrl + "&newEsign=" + selectedRow.newEsign;
          paramsUrl = paramsUrl + "&userToCheck=" + selectedRow.userToCheck;
          paramsUrl =
            paramsUrl + "&passwordToCheck=" + selectedRow.passwordToCheck;
          break;
        case "SET_DEFAULT_TABS_ON_LOGIN":
          paramsUrl = paramsUrl + "&tabsString=" + selectedRow.tabsString;
          break;
        default:
          var errorMsg = {
            message_en:
              "Action " +
              actionName +
              " not declared on api-platform >> appActionControllerAPI.",
            message_en:
              "Acci\xF3n " +
              actionName +
              " no declarado en api-env-monit >> appActionControllerAPI.",
          };
          this.toastErrorMessage(errorMsg);
          return;
      }
      if (selectedRow.eSignToVerify) {
        paramsUrl = paramsUrl + "&eSignToCheck=" + selectedRow.eSignToVerify;
      }
      paramsUrl =
        "actionName=" +
        actionName +
        "&finalToken=" +
        finalToken +
        "&schemaPrefix=" +
        schemaPrefix +
        paramsUrl;
      var datas = [];
      datas.schemaPrefix = schemaPrefix;
      datas.actionName = actionName;
      datas.paramsUrl = paramsUrl;
      if (null != this.callBackFunction2) {
        datas.callBackFunction = this.callBackFunction2.bind(this);
      } //console.log('api-env-monit >> itemSelected >> EnvMonitAPI', paramsUrl, datas);
      this.appBackEndCallAPI(datas); //if (callBackFunction2){callBackFunction2();}
    }
    appBackEndCallAPI(data) {
      var endpoints_returningError = this.endpoints_returningError(),
        apiUrl = backendUrl + appAuthenticateApiUrl + "?" + data.paramsUrl; //console.log('process-us>api-sample>sampleBackEndCallAPI', data.schemaPrefix, data.actionName, apiUrl, data.paramsUrl);
      axios
        .get(apiUrl)
        .then((response) => {
          var notifObj = diagnosticToNotification(response.data, data); //console.log('process-us>api-sample>sampleBackEndCallAPI.addNotification', 'notifObj', notifObj);
          store.dispatch(addNotification(notifObj));
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
          }
          if ("LABPLANET_TRUE" == response.data.diagnostic) {
            this.toastSuccessMessage(response.data);
          } else {
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_not_status_200,
              response
            );
          }
          if (200 == response.status) {
            if (
              "USER_CHANGE_PSWD" == data.actionName.toUpperCase() ||
              "USER_CHANGE_ESIGN" == data.actionName.toUpperCase()
            ) {
              this.finalToken = response.data.finalToken;
              store.dispatch(updateFinalToken(this.finalToken));
            }
            if (this.callBackFunctionEnvMonitElem) {
              this.callBackFunctionEnvMonitElem();
            }
            if (data.callBackFunction) {
              data.callBackFunction();
            }
            return;
          }
          if (data.callBackFunctionError) {
            data.callBackFunctionError();
          }
        })
        .catch(function (error) {
          console.log(error.message);
          if (data.callBackFunctionError) {
            data.callBackFunctionError();
          } // store.dispatch(addNotification({
          //     notificationName: data.schemaPrefix+'.'+data.actionName,
          //     label_en: error.message,
          //     label_es: error.message,
          //     diagnoses: 'ERROR'
          // }));
          this.toastErrorMessageWithApiResponse(
            endpoints_returningError.response_error,
            error
          );
        })
        .then(function () {});
    }
  };
