import{backendUrl,ApiEnvMonitUrl,ApiEnvMonitProdLotUrl,ApiEnvMonitSampleUrl,ApiEnvMonitIncubationUrl}from"../../../../config/platform/logic/api-config.js";import{store}from"../../../../store.js";import{ApiSettings}from"../../../../platform-mixins/apis/api-settings.js";import{addNotification}from"../../../platformComponents/Redux/actions/notifications_actions.js";import{diagnosticToNotification}from"../../../../platform-mixins/platform-functions/notification-obj.js";import{openEsignDialog}from"../../../platformComponents/Redux/actions/esign-actions.js";import{openConfirmUserDialog}from"../../../platformComponents/Redux/actions/confirmuser-actions.js";import{schema_name}from"../03config/config-process.js";//incubationMode
import{tokenMixin}from"../../../../platform-mixins/store/token-mixin.js";import{userConfirmationMixin}from"../../../../platform-mixins/store/user-confirmation-mixin.js";import{ToastMethods}from"../../../../platform-mixins/functions/toast-methods.js";import{EnvMonitModuleDefinition}from"./0module-actions-available.js";/**
 * @mixinFunction
 * @polymer
 */export const EndpointsActionsEnvMonitModule=superClass=>class extends userConfirmationMixin(EnvMonitModuleDefinition(ApiSettings(ToastMethods(tokenMixin(superClass))))){moduleActionTrigger(buttonDefinition,backEndData,moduleAreaName){var moduleArea=this.getFunctionalArea(moduleAreaName);if(moduleArea==void 0){this.toastErrorMessage(this.moduleAreaNotRecognized(moduleAreaName));console.log("module area not recognized");return}//    console.log('moduleActionTrigger', 'buttonDefinition', buttonDefinition, 'backEndData', backEndData);
if(buttonDefinition&&buttonDefinition.esign_required){store.dispatch(openEsignDialog(this.moduleActionTriggerNext.bind(this,buttonDefinition,backEndData,moduleArea),this.moduleActionTriggerAbort.bind(this)));return}if(buttonDefinition&&buttonDefinition.confirmuser_required){store.dispatch(openConfirmUserDialog(this.moduleActionTriggerNext.bind(this,buttonDefinition,backEndData,moduleArea),this.moduleActionTriggerAbort.bind(this)));return}this.moduleActionTriggerNext(buttonDefinition,backEndData,moduleArea)}moduleActionTriggerAbort(){this.loading=!1}moduleActionTriggerNext(buttonDefinition,backEndData,moduleArea){//    console.log('moduleActionTriggerNext', 'buttonDefinition', buttonDefinition, 'backEndData', backEndData);
var buttonName=buttonDefinition.name,datas=[],areaActions=[];if("SAMPLES"==moduleArea.name){var areaActions=this.sampleActions()}if("PROGRAMS"==moduleArea.name){var areaActions=this.programActions()}if("PRODUCTION_LOTS"==moduleArea.name){var areaActions=this.productionLotsActions()}if("INCUB_BATCH"==moduleArea.name){var areaActions=this.batchActions()}if("INCUBATOR"==moduleArea.name){var areaActions=this.incubatorActions()}if(areaActions==void 0){this.toastErrorMessage(this.moduleAreaNotRecognized(moduleArea.name));console.log("moduleActionTriggerNext","areaActions undefined");return}var actionDefinition=areaActions.find(function(tab){return tab.actionName.toUpperCase()==buttonName.toUpperCase()});if(!actionDefinition){this.toastErrorMessage(this.actionNameNotRecognized(buttonName.toUpperCase(),moduleArea.name));return}if(actionDefinition.dialogInfo.requiresDialog){var elem=this.shadowRoot.getElementById(actionDefinition.dialogInfo.webComponentName);if(!elem){if(actionDefinition.dialogInfo.webComponentName="myelements"){elem=this.shadowRoot.getElementById("myelements")}}if(elem){elem.buttonDefinition=buttonDefinition;elem.selectedObject=backEndData.selectedObject;elem.callBackFunction=backEndData.callBackFunction;elem.callBackFunctionError=backEndData.callBackFunctionError;elem.openDialog(actionDefinition.dialogInfo.dialogName,actionDefinition.dialogInfo.dialogArgument)}return}if(actionDefinition.functionInfo&&actionDefinition.functionInfo.requiresTriggerFunction){this.moduleActionRequiresTriggerFunction(buttonName,buttonDefinition,backEndData.selectedObject,moduleArea,actionDefinition,backEndData.callBackFunction,backEndData.callBackFunctionError,this.refreshWindowMethod);return}this.moduleActionTriggerAPI(buttonName,buttonDefinition,backEndData.selectedObject,moduleArea,actionDefinition,backEndData.callBackFunction,backEndData.callBackFunctionError,this.refreshWindowMethod);return;var actionName=buttonName.toUpperCase();//console.log('env-monit-elements-sample >> actionTriggerNext >> backEndData', backEndData, 'this.backEndData', this.backEndData, 'buttonName', buttonName);                    
switch(buttonName.toUpperCase()){case this.sampleActions.SAMPLINGCOMMENTADD.actionName://this.$.addComment.actionName='SAMPLINGCOMMENTADD'; Revisar si es necesario.
var elem=this.shadowRoot.getElementById("myElementsSample");elem.buttonDefinition=buttonDefinition;elem.selectedObject=backEndData.selectedObject;elem.callBackFunction=backEndData.callBackFunction;elem.callBackFunctionError=backEndData.callBackFunctionError;if(elem){elem.openDialog("addComment","SAMPLINGCOMMENTADD")}break;case"CHANGESAMPLINGDATE":this.$.changeSamplingDate.open();break;case"INCUBATIONSTART":case"INCUBATIONEND":case"INCUBATION2START":case"INCUBATION2END":datas.incubatorName=this.incubatorName;case"ADDSAMPLEANALYSIS":import("../04-procedure/dialogs/em-demo-a-list-modal-addsampleanalysis.js");this.analysisListToDisplay=sampleResults_analysisListToDisplay;var actionName="ANALYSIS_ALL_LIST",paramsUrl="actionName="+actionName+"&fieldToRetrieve="+this.analysisListToDisplay;datas.actionName=actionName;datas.fieldToRetrieve=sampleResults_analysisListFieldsToRetrieve;datas.paramsUrl=paramsUrl;//datas.callBackFunction=this.openAddSampleAnalysisDialog.bind(this);
this.getAnalysisList(datas);this.$.addSampleAnalysis.open();break;case"CHANGEOFCUSTODYSTARTCHANGE":import("../04-procedure/dialogs/em-demo-a-list-modal-coc-users.js");this.cocUsersListFieldToDisplay=sampleCustodian_cocUsersListFieldToDisplay;var actionName="CHANGEOFCUSTODY_USERS_LIST",paramsUrl="actionName="+actionName+"&fieldToRetrieve="+this.cocUsersListFieldToDisplay;datas.actionName=actionName;datas.fieldToRetrieve=sampleCustodian_cocUsersListFieldToRetrieve;datas.paramsUrl=paramsUrl;//datas.callBackFunction=this.openAddSampleAnalysisDialog.bind(this);
this.getGivenCocUsersList(datas);//console.log('ChangeOfCustodyHistory >> this.cocUsersList', this.cocUsersList, 'this.cocUsersListFieldToDisplay', this.cocUsersListFieldToDisplay);
this.$.chainOfCustodyStartChange.open();break;case"CHANGEOFCUSTODYHISTORY":import("../04-procedure/dialogs/em-demo-a-list-modal-coc-samplehistory.js");var actionName="CHANGEOFCUSTODY_SAMPLE_HISTORY",paramsUrl="actionName="+actionName+"&fieldToRetrieve="+this.analysisListToDisplay;datas.actionName=actionName;datas.fieldToRetrieve=sampleCustodian_cocSampleHistoryFieldToRetrieve;datas.paramsUrl=paramsUrl;this.cocSampleHistoryFieldToDisplay=sampleCustodian_cocSampleHistoryFieldToDisplay;//datas.callBackFunction=this.openAddSampleAnalysisDialog.bind(this);
this.givenCocSampleHistory(datas);//console.log('ChangeOfCustodyHistory >> this.cocSampleHistory', this.cocSampleHistory, 'this.cocSampleHistoryFieldToDisplay', this.cocSampleHistoryFieldToDisplay);
this.$.chainOfCustodyHistory.open();break;case"ADDSAMPLEANALYSIS":this.analysisListToDisplay=sampleResults_analysisListToDisplay;var actionName="ANALYSIS_ALL_LIST",paramsUrl="actionName="+actionName+"&fieldToRetrieve="+this.analysisListToDisplay;datas.actionName=actionName;datas.fieldToRetrieve=sampleResults_analysisListFieldsToRetrieve;datas.paramsUrl=paramsUrl;//datas.callBackFunction=this.openAddSampleAnalysisDialog.bind(this);
this.getAnalysisList(datas);this.$.addSampleAnalysis.open();break;case"GIVENSAMPLEANALYSISLIST":import("../04-procedure/dialogs/em-demo-a-list-modal-sampleanalysis.js");var actionName="GET_SAMPLE_ANALYSIS_LIST";this.givenSampleAnalysisToDisplay=sampleResults_sampleAnalysisListToDisplay;console.log("givenSampleAnalysisToDisplay",this.givenSampleAnalysisToDisplay);datas.actionName=actionName;datas.sampleAnalysisFieldToRetrieve=sampleResults_sampleAnalysisListFieldsToRetrieve;datas.sortFieldsName=this.sampleResults_sampleAnalysisListFieldToSort;datas.paramsUrl=backEndData.paramsUrl;//datas.callBackFunction=this.openAddSampleAnalysisDialog.bind(this);
this.getGivenSampleAnalysisList(datas);this.$.givenSampleAnalysisList.open();break;case"TESTASSIGNMENT":console.log("env-monit-elements-sample > TestAssignment");import("../04-procedure/dialogs/em-demo-a-list-modal-coc-users.js");this.cocUsersListFieldToDisplay=sampleCustodian_cocUsersListFieldToDisplay;var actionName="TESTASSIGNMENT",paramsUrl="actionName="+actionName+"&fieldToRetrieve="+this.cocUsersListFieldToDisplay;datas.actionName=actionName;datas.fieldToRetrieve=sampleCustodian_cocUsersListFieldToRetrieve;datas.paramsUrl=paramsUrl;//datas.callBackFunction=this.openAddSampleAnalysisDialog.bind(this);
this.getGivenCocUsersList(datas);//console.log('ChangeOfCustodyHistory >> this.cocUsersList', this.cocUsersList, 'this.cocUsersListFieldToDisplay', this.cocUsersListFieldToDisplay);
this.$.chainOfCustodyStartChange.open();break;case"ADDMICROORGANISM":import("../04-procedure/dialogs/em-demo-a-list-modal-microorganism.js");this.microorganismListToDisplay=this.microorganismListToDisplay;var actionName="GET_MICROORGANISM_LIST",paramsUrl="actionName="+actionName+"&fieldToRetrieve="+this.microorganismListToDisplay;datas.actionName=actionName;datas.fieldToRetrieve=this.microorganismListToDisplay;datas.paramsUrl=paramsUrl;//datas.callBackFunction=this.openAddSampleAnalysisDialog.bind(this);
this.getMicroorganismList(datas);this.$.microorganismList.open();// const field=this.shadowRoot.getElementById('microorganismList_modal');
// if (field){field.openDialog();}
break;case"SAMPLE_AUDIT":import("../04-procedure/dialogs/em-demo-a-list-modal-sample-auditOrig.js");this.sampleAudit_fieldsToRetrieve=sampleAudit_fieldsToRetrieve;var actionName="GET_SAMPLE_AUDIT",paramsUrl="actionName="+actionName+"&sampleAuditFieldToRetrieve="+this.sampleAudit_fieldsToRetrieve;datas.actionName=actionName;datas.sampleAuditFieldToRetrieve=this.sampleAudit_fieldsToRetrieve;datas.paramsUrl=paramsUrl;//datas.callBackFunction=this.openAddSampleAnalysisDialog.bind(this);
this.getSampleAudit(datas);this.$.sampleAudit.open();break;case"EM_BATCH_INCUB_ADD_SMP":case"EM_BATCH_INCUB_REMOVE_SMP":var paramsUrl="actionName="+actionName+"&batchName="+this.selectedBatch.name+"&batchtemplateId="+this.selectedBatch.incub_batch_config_id+"&batchtemplateVersion="+this.selectedBatch.incub_batch_config_version;datas.actionName=actionName;datas.paramsUrl=paramsUrl;datas.selectedBatch=this.selectedBatch;this.moduleActionTriggerAPI(actionName,buttonDefinition,datas,backEndData.callBackFunction,backEndData.callBackFunctionError,this.refreshWindowMethod);break;default:console.log("Action "+buttonName+" is not declared in env-monit-elements.sample.js >> moduleActionTriggerNext");break;}return}buildParamsUrlForAction(actionName,actionDefinition,selectedRow){var message_en="Unhandled exception",message_es="Excepci\xF3n no controlada",paramsUrl="",result=[];result.diagnostic=!1;if(actionDefinition==void 0){message_en="Action "+actionName+" not declared.";message_es="Acci\xF3n "+actionName+"no declarada.";return result}var i=0;for(i=0;i<actionDefinition.apiParams.length;i++){if(actionDefinition.apiParams[i].paramName!=void 0&&selectedRow[actionDefinition.apiParams[i].dataArrName]){paramsUrl=paramsUrl+"&"+actionDefinition.apiParams[i].paramName+"="+selectedRow[actionDefinition.apiParams[i].dataArrName]}else{if(actionDefinition.apiParams[i].defaultValue!=void 0){paramsUrl=paramsUrl+"&"+actionDefinition.apiParams[i].paramName+"="+actionDefinition.apiParams[i].defaultValue}else{if(actionDefinition.apiParams[i].isMandatory==void 0||!0==actionDefinition.apiParams[i].isMandatory){message_en="Not found value for the param "+actionDefinition.apiParams[i].paramName+" which is mandatory for the action "+actionName;message_es="No encontrado valor para el par\xE1metro "+actionDefinition.apiParams[i].paramName+" que es declarado como obligatorio para la acci\xF3n "+actionName;result.message_en=message_en;result.message_es=message_es;console.log("buildParamsUrlForAction, missing mandatory values:",result.message_en,"actionDefinition.apiParams",actionDefinition.apiParams,selectedRow,selectedRow);return result}}}//message_es=actionDefinition.apiParams[0].paramName+selectedRow[actionDefinition.apiParams[0].dataArrName];
}result.diagnostic=!0;result.message_en=message_en;result.message_es=message_es;result.paramsUrl=paramsUrl;return result}moduleActionTriggerAPI(actionName,button,selectedRow,moduleArea,actionDefinition,callBackFunction,callBackFunctionError,refreshFunction){//console.log('moduleActionTriggerAPI', 'selectedRow', selectedRow);   
var paramsUrlObj=this.buildParamsUrlForAction(actionName,actionDefinition,selectedRow);if(!1==paramsUrlObj.diagnostic){var msgErr=[];msgErr.message_en="Error building the call to the API for the action "+actionName+". Error: "+paramsUrlObj.message_en;msgErr.message_es="Error al crear la llamada a la API para la acci\xF3n "+actionName+". Error: "+paramsUrlObj.message_es;this.toastErrorMessage(msgErr);return}actionName=actionName.toUpperCase();var paramsUrl=paramsUrlObj.paramsUrl;this.internalCallbackFunction=callBackFunction;//var selectedSample = selectedRow.sample_id;      
//var selectedObjectLevel = 'SAMPLE';        
// if ((selectedSample==null) && (actionName!='LOGSAMPLE') 
//  && (actionName!='EM_BATCH_INCUB_START') && (actionName!='EM_BATCH_INCUB_END')) {
//     this.toastErrorMessage(this.objectNotSelected());
//     return;
// }  
// actionName=actionName.toUpperCase();
// var paramsUrl='';   
//         switch (actionName) {
//         case 'LOGSAMPLE':       
//             paramsUrl=paramsUrl+"&programName="+selectedRow.programName;    
//             paramsUrl=paramsUrl+"&locationName="+selectedRow.locationName;  
//             paramsUrl=paramsUrl+"&sampleTemplate="+selectedRow.sampleTemplate;
//             paramsUrl=paramsUrl+"&sampleTemplateVersion="+selectedRow.sampleTemplateVersion;
//             paramsUrl=paramsUrl+"&fieldName="+selectedRow.fieldName;
//             paramsUrl=paramsUrl+"&fieldValue="+selectedRow.fieldValue;
//             paramsUrl=paramsUrl+"&numSamplesToLog="+selectedRow.numSamplesToLog;
//             break;        
//         case 'ENTERRESULT':
//             paramsUrl=paramsUrl+"&sampleId="+selectedRow.sampleId;
//             paramsUrl=paramsUrl+"&resultId="+selectedRow.resultId;
//             paramsUrl=paramsUrl+"&rawValueResult="+selectedRow.rawValue;
//             break;        
//         case 'REVIEWRESULT':
//             paramsUrl=paramsUrl+"&objectId="+selectedSample;
//             paramsUrl=paramsUrl+"&objectLevel="+selectedObjectLevel;
//             break;        
//         case 'UNREVIEWRESULT':
//             paramsUrl=paramsUrl+"&objectId="+selectedSample;
//             paramsUrl=paramsUrl+"&objectLevel="+selectedObjectLevel;
//             break; 
//         case 'CANCELRESULT':
//             paramsUrl=paramsUrl+"&objectId="+selectedSample;
//             paramsUrl=paramsUrl+"&objectLevel="+selectedObjectLevel;
//             break;        
//         case 'UNCANCELRESULT':
//             paramsUrl=paramsUrl+"&objectId="+selectedSample;
//             paramsUrl=paramsUrl+"&objectLevel="+selectedObjectLevel;
//             break;  
//         case 'CANCELRESULT':
//             paramsUrl=paramsUrl+"&objectId="+selectedSample;
//             paramsUrl=paramsUrl+"&objectLevel="+'TEST';
//             break;        
//         case 'UNCANCELRESULT':
//             paramsUrl=paramsUrl+"&objectId="+selectedSample;
//             paramsUrl=paramsUrl+"&objectLevel="+'TEST';
//             break;              
//         *case 'SAMPLINGCOMMENTADD':
//             paramsUrl=paramsUrl+"&sampleId="+selectedSample;
//             paramsUrl=paramsUrl+"&sampleComment="+selectedRow.sample_comment;
//             break;
//         *case 'SAMPLINGCOMMENTREMOVE':
//             paramsUrl=paramsUrl+"&sampleId="+selectedSample;            
//             break;            
//         case 'CHANGESAMPLINGDATE':
//             paramsUrl=paramsUrl+"&sampleId="+selectedSample;            
//             paramsUrl=paramsUrl+"&newDate="+selectedRow.newDate;            
//             break;   
//         *case 'SETSAMPLINGDATE':
//             paramsUrl=paramsUrl+"&sampleId="+selectedSample; 
//             break;   
//         case 'INCUBATIONSTART':
//         case 'INCUBATIONEND':
//         case 'INCUBATION2START':
//         case 'INCUBATION2END':
//             paramsUrl=paramsUrl+"&sampleId="+selectedSample; 
//             paramsUrl=paramsUrl+"&incubatorName="+selectedRow.incubatorName; 
//             break;                        
//         case 'COC_STARTCHANGE':
//             paramsUrl=paramsUrl+"&sampleId="+selectedSample; 
//             paramsUrl=paramsUrl+"&custodianCandidate="+selectedRow.person_name;          
//             break;
//         *case 'COC_CONFIRMCHANGE':
//             paramsUrl=paramsUrl+"&sampleId="+selectedSample; 
//             paramsUrl=paramsUrl+"&confirmChangeComment="+selectedRow.confirmChangeComment;          
//             break;
//         *case 'COC_ABORTCHANGE':
//             paramsUrl=paramsUrl+"&sampleId="+selectedSample;            
//             paramsUrl=paramsUrl+"&cancelChangeComment="+selectedRow.cancelChangeComment;           
//             break;                        
//         case 'SAMPLEANALYSISADD':            
//             paramsUrl=paramsUrl+"&sampleId="+selectedSample;            
//             paramsUrl=paramsUrl+"&fieldName="+selectedRow.fieldName;
//             paramsUrl=paramsUrl+"&fieldValue="+selectedRow.fieldValue;
//             break;                                                                    
//         *case 'SAMPLESTAGE_MOVETONEXT':            
//             paramsUrl=paramsUrl+"&sampleId="+selectedSample;
//             if (!selectedRow.current_stage==null){            
//                 paramsUrl=paramsUrl+"&sampleStage="+selectedRow.currentStage;}
//             break;                                                                    
//         *case 'SAMPLESTAGE_MOVETOPREVIOUS':            
//             paramsUrl=paramsUrl+"&sampleId="+selectedSample;
//             if (!selectedRow.current_stage==null){            
//                 paramsUrl=paramsUrl+"&sampleStage="+selectedRow.current_stage;}
//             break;  
//         case 'ADD_SAMPLE_MICROORGANISM':                                                                    
//             paramsUrl=paramsUrl+"&sampleId="+selectedSample;                        
//             paramsUrl=paramsUrl+"&microorganismName="+selectedRow.microorganismName;
//             break;  
//         *case 'SAMPLEAUDIT_SET_AUDIT_ID_REVIEWED':
//             paramsUrl=paramsUrl+"&auditId="+selectedRow.audit_id;                        
//             break;  
//         case 'EM_BATCH_INCUB_ADD_SMP':
//         case 'EM_BATCH_INCUB_REMOVE_SMP': 
// //console.log('EM_BATCH_INCUB_REMOVE_SMP ', 'selectedRow.selectedBatch', selectedRow.selectedBatch);
//             // if (selectedRow.selectedBatch.length==0 || selectedRow.selectedBatch.name==''){
//             //     var errorMessageBatchNotSelected={message_en:'Select Batch', message_es:'Seleccione tanda',diagnostic:'LABPLANET_FALSE', is_error: true, reñatedObjects:[], category:'API-ENV-MONIT'};
//             //     var notifObj=diagnosticToNotification(errorMessageBatchNotSelected, undefined); //response.data, data);
//             //     console.log('process-us>api-sample>sampleAPIEndpointCall.addNotification', 'notifObj', notifObj);
//             //     store.dispatch(addNotification(notifObj));        
//             //     dispatchEvent(new CustomEvent('toastmessage', {
//             //         bubbles: true,
//             //         composed: true,
//             //         detail: 'Seleccione tanda.'
//             //     }));         
//             //     return;
//             // }
//             paramsUrl=paramsUrl+"&sampleId="+selectedSample;    
//             paramsUrl=paramsUrl+"&batchName="+selectedRow.selectedBatch.name;    
//             paramsUrl=paramsUrl+"&batchTemplateId="+selectedRow.selectedBatch.incub_batch_config_id;    
//             paramsUrl=paramsUrl+"&batchTemplateVersion="+selectedRow.selectedBatch.incub_batch_config_version;    
//             break;
//         default:           
//             //console.log('Action '+actionName+' not declared.')            
//             this.toastErrorMessage(this.actionNameNotRecognized());
//             return;            
//         }                    
if(selectedRow.eSignToVerify){paramsUrl=paramsUrl+"&eSignToCheck="+selectedRow.eSignToVerify}paramsUrl="actionName="+actionName+paramsUrl;var datas=[];datas.actionName=actionName;datas.paramsUrl=paramsUrl;if(callBackFunction){datas.callBackFunction=callBackFunction.bind(this)}//console.log('api-env-monit.js >> SampleAPIControllerAPI >> Before calling sampleAPIEndpointCall the datas contains: ', datas);            
this.sampleAPIEndpointCall(datas,button,moduleArea,callBackFunction,callBackFunctionError,refreshFunction)}sampleAPIEndpointCall(data,button,moduleArea,callBackFunction,callBackFunctionError,refreshFunction){var endpoints_returningError=this.endpoints_returningError(),apiUrl=backendUrl+moduleArea.apiUrlForActions+"?"+data.paramsUrl;apiUrl=apiUrl+"&finalToken="+this.getFinalToken()+"&schemaPrefix="+schema_name;//console.log('process-us>api-sample>sampleAPIEndpointCall', data.schemaPrefix, data.actionName, apiUrl, data.paramsUrl);    
if(button&&button.esign_required){var ePhrase=this.getEsignPhrase();apiUrl=apiUrl+"&esignPhraseToCheck="+ePhrase}if(button&&button.confirmuser_required){var userPhrase=this.getUserPhrase(),userPwPhrase=this.getUserPwPhrase();apiUrl=apiUrl+"&userToCheck="+userPhrase;apiUrl=apiUrl+"&passwordToCheck="+userPwPhrase}axios.get(apiUrl).then(response=>{console.log("em-demo-a > api-env-monit.js > sampleAPIEndpointCall","response.data",response.data);var notifObj=diagnosticToNotification(response.data,data);store.dispatch(addNotification(notifObj));if(200==response.status){//console.log('callBackFunction');
this.toastSuccessMessage(response.data);if(callBackFunction){callBackFunction()}if(refreshFunction){refreshFunction()}return}this.toastErrorMessage(response.data);if(callBackFunctionError){callBackFunctionError()}if(refreshFunction){refreshFunction()}return}).catch(function(error){this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error,error);console.log(error.message);if(data.callBackFunctionError){data.callBackFunctionError()}}).then(function(){})}moduleActionRequiresTriggerFunction(buttonName,buttonDefinition,selectedObject,moduleArea,actionDefinition,callBackFunction,callBackFunctionError,refreshWindowMethod){this.REDUX_GET_INCUBBATCH(buttonName,buttonDefinition,selectedObject,moduleArea,actionDefinition,callBackFunction,callBackFunctionError,refreshWindowMethod)}REDUX_GET_INCUBBATCH(buttonName,buttonDefinition,selectedObject,moduleArea,actionDefinition,callBackFunction,callBackFunctionError,refreshWindowMethod){var state=store.getState(),selectedBatch=state.emDemoA.selectedBatch;selectedObject.batchName=selectedBatch.name;selectedObject.batchtemplateId=selectedBatch.incub_batch_config_id;selectedObject.batchtemplateVersion=selectedBatch.incub_batch_config_version;this.moduleActionTriggerAPI(buttonName,buttonDefinition,selectedObject,moduleArea,actionDefinition,callBackFunction,callBackFunctionError,refreshWindowMethod)}};