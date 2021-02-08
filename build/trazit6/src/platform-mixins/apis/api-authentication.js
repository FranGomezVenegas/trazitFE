define(["exports","../../config/platform/logic/api-config.js","../../store.js","../functions/toast-methods.js","../platform-functions/tabs-functions.js","../../elements/platformComponents/Redux/actions/app_actions.js","../../elements/platformComponents/Redux/actions/session_actions.js","./api-platform-procedurelist.js","./api-usersession.js","./api-and-frontend-sopuser.js","./api-settings.js","../store/user-session-mixin.js","./login-mixin.js","../store/token-mixin.js"],function(_exports,_apiConfig,_store,_toastMethods,_tabsFunctions,_app_actions,_session_actions,_apiPlatformProcedurelist,_apiUsersession,_apiAndFrontendSopuser,_apiSettings,_userSessionMixin,_loginMixin,_tokenMixin){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.AuthenticationApi=void 0;//import {ApiMessage} from '../app-functions/apiMessage';
//import { addNotification  } from '../../../app/Redux/actions/notifications_actions';
/**
 * @mixinFunction
 * @polymer
 */const AuthenticationApi=superClass=>class extends(0,_apiSettings.ApiSettings)((0,_tokenMixin.tokenMixin)((0,_apiAndFrontendSopuser.ApiAndFrontendSopUser)((0,_apiUsersession.UserSession)((0,_apiPlatformProcedurelist.ProcedureList)((0,_loginMixin.loginMixin)((0,_userSessionMixin.userSessionMixin)((0,_tabsFunctions.TabsMethods)((0,_toastMethods.ToastMethods)(superClass))))))))){ajaxAuthenticate(data){var apiUrl=_apiConfig.backendUrl+_apiConfig.appAuthenticateApiUrl,actionName="authenticate";//    console.log('authentication-api.ajaxAuthenticate', data, data.actionName);
axios.get(apiUrl,{params:{actionName:actionName,dbUserName:data.dbUserName,dbUserPassword:data.dbUserPassword}}).then(response=>{if(200==response.status){//            console.log(response.data);
if(data.callBackFunction){data.callBackFunction()}var finalTokenData=[];finalTokenData.personId=response.data.userInfoId;finalTokenData.partialToken=response.data.myToken;//this.userInfoId=response.data.userInfoId;
_store.store.dispatch((0,_app_actions.setPartialToken)(finalTokenData));this.ajaxUserRoles();return}var state=_store.store.getState(),language=state.app.user.appLanguage,message="";switch(language){case"es":message=response.data.message_es;break;default:message=response.data.message_en;break;}//console.log('.then , response!=200, calling callBackFunctionError', 'response.data', response.data);
//if (data.callBackFunctionError){data.callBackFunctionError();}
//var errMessage = ApiMessage.errorMessage(response.data);
this.dispatchEvent(new CustomEvent("toast-error",{bubbles:!0,composed:!0,detail:message//response.data.error_code //ApiMessage.errorMessage(response.data)
}))}).catch(function(error){//        console.log('.catch , calling callBackFunctionError', error.response.data, data.callBackFunctionError);
//if (data.callBackFunctionError){data.callBackFunctionError();}
//var errMessage = ApiMessage.errorMessage(response.data);
this.dispatchEvent(new CustomEvent("toast-error",{bubbles:!0,composed:!0,detail:response.data.error_code}))}).then(function(){})}ajaxUserRoles(data){var actionName="getuserrole",apiUrl=_apiConfig.backendUrl+_apiConfig.appAuthenticateApiUrl,partialToken=this.getPartialToken();//    console.log('authentication-api.ajaxUserRoles', partialToken);
axios.get(apiUrl,{params:{actionName:actionName,myToken:partialToken}}).then(response=>{if(200==response.status){//            console.log(response);
this.userRoles=response.data;this.fillUserRoleList();if(data&&data.callBackFunction){data.callBackFunction()}return}if(data&&data.callBackFunctionError){data.callBackFunctionError()}this.dispatchEvent(new CustomEvent("toast-error",{bubbles:!0,composed:!0,detail:"Error on authentication although the connectivity with the API ended with success! Status: "+response.status}))}).catch(function(error){if(data&&data.callBackFunctionError){data.callBackFunctionError()}this.dispatchEvent(new CustomEvent("toast-error",{bubbles:!0,composed:!0,detail:"Error on getting user roles"}))}).then(function(){//        console.log('always executed')
})}ajaxFinalToken(data){var apiUrl=_apiConfig.backendUrl+_apiConfig.appAuthenticateApiUrl,actionName="finaltoken",partialToken=this.getPartialToken();//    console.log('authentication-api.ajaxUserRoles', data);
axios.get(apiUrl,{params:{actionName:actionName,myToken:partialToken,userRole:data.userRole}}).then(response=>{if(200==response.status){var finalToken=response.data.finalToken,userTabsOnLogin=response.data.userTabsOnLogin;this.appSessionId=response.data.appSessionId;this.appSessionStartDate=response.data.appSessionStartDate;var addSessionData={sessionId:this.appSessionId,userRole:data.userRole,startDate:this.appSessionStartDate};_store.store.dispatch((0,_session_actions.addSession)(addSessionData));_store.store.dispatch((0,_app_actions.updateFinalToken)(finalToken));_store.store.dispatch((0,_app_actions.doLogin)(data.userName));_store.store.dispatch((0,_app_actions.setUserTabsOnLogin)(userTabsOnLogin));this.openTabsOnLogin();// if (userTabsOnLogin.length>0){
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
var procListData=[];procListData.finalToken=finalToken;this.getProcedureList(procListData);this.getAPIPlatformHeader(procListData);this.getSopOnStartSession(procListData);_store.store.dispatch((0,_app_actions.stopLoading)());if(data.callBackFunction){data.callBackFunction()}this.initAppSession();//            console.log(store.getState());
return}else{if(data.callBackFunctionError){data.callBackFunctionError()}var msgObj={message_en:"Error running ajaxFinalToken: "+response.data,message_es:"Error ejecutando ajaxFinalToken: "+response.data};this.toastErrorMessage(msgObj);return}}).catch(function(error){if(data.callBackFunctionError){data.callBackFunctionError()}var msgObj={message_en:"Error running ajaxFinalToken: "+error,message_es:"Error ejecutando ajaxFinalToken: "+error};this.toastErrorMessage(msgObj);return}).then(function(){//      console.log('always executed')
})}ajaxTokenValidateEsignPhrase(data){var finalToken=this.getFinalToken(),apiUrl=_apiConfig.backendUrl+_apiConfig.appAuthenticateApiUrl,endpoints_returningError=this.endpoints_returningError(),endpoints_for_apiAuthentication=this.endpoints_for_apiAuthentication(),actionName=endpoints_for_apiAuthentication.validateEsignPhrase.action_name;if(!data||0==data.esignPhraseToCheck.length){this.toastErrorMessage(endpoints_for_apiAuthentication.validateEsignPhrase.mandatory_field_message);return}//console.log('authentication-api.ajaxUserRoles', data);
axios.get(apiUrl,{params:{actionName:actionName,finalToken:finalToken,esignPhraseToCheck:data.esignPhraseToCheck}}).then(response=>{if(200==response.status){//this.finalToken=response.data.finalToken;
if(data.callBackFunction){data.callBackFunction()}return}if(data.callBackFunctionError){data.callBackFunctionError()}this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200,response);return}).catch(function(error){if(data.callBackFunctionError){data.callBackFunctionError()}this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error,error);return}).then(function(){//      console.log('always executed')
})}ajaxTokenValidateUserCredentials(data){var apiUrl=_apiConfig.backendUrl+_apiConfig.appAuthenticateApiUrl,finalToken=this.getFinalToken(),endpoints_for_apiAuthentication=this.endpoints_for_apiAuthentication(),actionName=endpoints_for_apiAuthentication.validateUserCredentials.action_name;if(!data||0==data.userToCheck.length||0==data.passwordToCheck.length){this.toastErrorMessage(endpoints_for_apiAuthentication.validateUserCredentials.mandatory_field_message);return}//var endpoints_returningError=this.endpoints_returningError();
//console.log('authentication-api.ajaxUserRoles', data);
axios.get(apiUrl,{params:{actionName:actionName,finalToken:finalToken,userToCheck:data.userToCheck,passwordToCheck:data.passwordToCheck}}).then(response=>{if(200==response.status){//            console.log(response);
//this.finalToken=response.data.finalToken;
if(data.callBackFunction){data.callBackFunction()}return}if(data.callBackFunctionError){data.callBackFunctionError()}this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200,response);return}).catch(function(error){if(data.callBackFunctionError){data.callBackFunctionError()}this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error,error);return}).then(function(){//      console.log('always executed')
})}};_exports.AuthenticationApi=AuthenticationApi});