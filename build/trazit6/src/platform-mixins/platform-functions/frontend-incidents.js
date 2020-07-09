define(["exports","../../config/platform/logic/api-config.js","../../store.js","../../elements/platformComponents/Redux/actions/notifications_actions.js","../../elements/platformComponents/Redux/actions/incidents_actions.js","../store/token-mixin.js","../functions/toast-methods.js","../apis/api-settings.js"],function(_exports,_apiConfig,_store,_notifications_actions,_incidents_actions,_tokenMixin,_toastMethods,_apiSettings){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.FrontendIncidents=void 0;/**
 * @mixinFunction
 * @polymer
 */const FrontendIncidents=superClass=>class extends(0,_apiSettings.ApiSettings)((0,_toastMethods.ToastMethods)((0,_tokenMixin.tokenMixin)(superClass))){fieldButtonClickedForIncidents(e){//console.log('optionPressed', e.detail.buttonName, 'selectedObject', this.selectedObject);                
var datas=[],paramsUrl="",actionName=e.detail.buttonName.toUpperCase();//var schemaPrefix=e.target.value.procedure;
switch(actionName){case"NEW_INCIDENT"://console.log('NEW_INCIDENT');
paramsUrl=paramsUrl+"&actionName="+e.detail.buttonName.toUpperCase();paramsUrl=paramsUrl+"&incidentTitle="+this.formFields[0].value;paramsUrl=paramsUrl+"&incidentDetail="+this.formFields[1].value;var storeCurrentState=JSON.stringify(_store.store.getState());datas.storeCurrentState=storeCurrentState;datas.incidentTitle=this.formFields[0].value;datas.incidentDetail=this.formFields[1].value;this.$.myElements.actionTrigger(e.detail.buttonName,datas,e.detail.buttonDefinition);//paramsUrl=paramsUrl+"&sessionInfo="+storeCurrentState;
return;case"CONFIRM_INCIDENT":case"ADD_NOTE_INCIDENT":case"CLOSE_INCIDENT":case"REOPEN_INCIDENT":if(null==this.selectedObject){var objectNotSelected=this.objectNotSelected();this.toastErrorMessage(objectNotSelected);//this.dispatchEvent(new CustomEvent('toast-error', {bubbles: true, composed: true,
//    detail: 'Please select one incident first'}));    
return}this.$.myElements.actionTrigger(e.detail.buttonName,this.selectedObject,e.detail.buttonDefinition);return;default:var msgObj=this.actionNameNotRecognized(actionName,"frontend-incidents");this.toastErrorMessage(msgObj);// var msgErr='action '+e.detail.buttonName.toUpperCase()+' not declared in frontend-incidents';
// console.log(msgErr);
// this.dispatchEvent(new CustomEvent('toast-error', {bubbles: true, composed: true,
//     detail: msgErr}));             
return;}}frontEndIncidentsAPI(data){var apiUrl=_apiConfig.backendUrl+_apiConfig.frontEndIncidentsUrl+"?"+data.paramsUrl;if(!data.finalToken){return}//    console.log('frontEndIncidentsAPI', apiUrl, data.paramsUrl);
axios.get(apiUrl).then(response=>{if(200==response.status){//            console.log('frontEndIncidentsAPI', apiUrl, data.paramsUrl, data.actionName, response.data);
switch(data.actionName){case"ALL_MY_SOPS"://                store.dispatch(userAllSop(response.data));
case"MY_PENDING_SOPS"://                store.dispatch(userPendingSop(response.data));
case"PROCEDURE_SOPS"://                store.dispatch(procedureSops(response.data));
default:return;}if(data.callBackFunction){data.callBackFunction()}return}if(data.callBackFunctionError){data.callBackFunctionError()}// this.dispatchEvent(new CustomEvent('toast-error', {
//     bubbles: true,
//     composed: true,
//     detail: 'error.message'
// })); 
_store.store.dispatch((0,_notifications_actions.addNotification)({notificationName:data.prefixName+"."+data.actionName,label_en:error.message,label_es:error.message,new_sample:0,diagnoses:"ERROR"}))}).catch(function(error){console.log(error.message);if(data.callBackFunctionError){data.callBackFunctionError()}/*this.dispatchEvent(new CustomEvent('toast-error', {
            bubbles: true,        composed: true,
            detail: 'Error on authentication'+error.message
            }));  */}).then(function(){})}getUserOpenIncidents(data){var finalToken=this.getFinalToken();if(!finalToken){finalToken=data.finalToken}if(!finalToken){return}var apiUrl=_apiConfig.backendUrl+_apiConfig.frontEndIncidentsUrl+"?"+"actionName=USER_OPEN_INCIDENTS";//console.log('getUserOpenIncidents', apiUrl, data.finalToken);
axios.get(apiUrl,{params:{finalToken:finalToken}}).then(response=>{if(200==response.status){//console.log(response.data);
_store.store.dispatch((0,_incidents_actions.userOpenIncidents)(response.data));if(data&&data.callBackFunction){data.callBackFunction()}return}if(data&&data.callBackFunctionError){data.callBackFunctionError()}this.dispatchEvent(new CustomEvent("toast-error",{bubbles:!0,composed:!0,detail:"Error on "+apiUrl+" although the connectivity with the API ended with success! Status: "+response.status}))}).catch(function(error){if(data&&data.callBackFunctionError){data.callBackFunctionError()}//console.log('FrontEnd-incidents.js >> getUserOpenIncidents', error.message);
this.dispatchEvent(new CustomEvent("toast-error",{bubbles:!0,composed:!0,detail:"Error on authentication"+error.message}))}).then(function(){})}getSelectedUserIncidentDetail(data){var finalToken=this.getFinalToken();if(!finalToken){finalToken=data.finalToken}if(!finalToken){return}//console.log('getSelectedUserIncidentDetail', apiUrl, data);
var apiUrl=_apiConfig.backendUrl+_apiConfig.frontEndIncidentsUrl+"?"+"actionName=INCIDENT_DETAIL_FOR_GIVEN_INCIDENT";if(!data.incidentId){var noIncident=[];_store.store.dispatch((0,_incidents_actions.selectedUserIncidentDetail)(noIncident));return}if(!finalToken){return}axios.get(apiUrl,{params:{finalToken:finalToken,incidentId:data.incidentId}}).then(response=>{if(200==response.status){//console.log(response.data);
_store.store.dispatch((0,_incidents_actions.selectedUserIncidentDetail)(response.data));if(data&&data.callBackFunction){data.callBackFunction()}return}if(data&&data.callBackFunctionError){data.callBackFunctionError()}this.dispatchEvent(new CustomEvent("toast-error",{bubbles:!0,composed:!0,detail:"Error on "+apiUrl+" although the connectivity with the API ended with success! Status: "+response.status}))}).catch(function(error){if(data&&data.callBackFunctionError){data.callBackFunctionError()}//console.log('FrontEnd-incidents.js >> getUserOpenIncidents', error.message);
this.dispatchEvent(new CustomEvent("toast-error",{bubbles:!0,composed:!0,detail:"Error on authentication"+error.message}))}).then(function(){})}};_exports.FrontendIncidents=FrontendIncidents});