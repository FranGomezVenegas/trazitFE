define(["exports","../../../../store.js","../../../../platform-mixins/apis/api-settings.js","../../../../platform-mixins/store/token-mixin.js","../../../../platform-mixins/functions/toast-methods.js","../03config/config-process.js","./0module-backendfunctionality-available.js","../02Redux/genoma-instancia1_actions.js"],function(_exports,_store,_apiSettings,_tokenMixin,_toastMethods,_configProcess,_moduleBackendfunctionalityAvailable,_genomaInstancia1_actions){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.FrontendEndpointsModuleGenoma=void 0;//import {backendUrl, frontEndGenomaStudyUrl} from '../../../../config/platform/logic/api-config';
const FrontendEndpointsModuleGenoma=superClass=>class extends(0,_moduleBackendfunctionalityAvailable.GenomaModuleDefinition)((0,_apiSettings.ApiSettings)((0,_toastMethods.ToastMethods)((0,_tokenMixin.tokenMixin)(superClass)))){getProjects(){this.callBackRefreshWindow=this.refreshWindow.bind(this);var data=[];this.callEndpoint(data,"ALL_ACTIVE_PROJECTS");//this.getActiveProductionLotsList();
}refreshSelectedStudyOnGetProjects(projects){var state=_store.store.getState();if(state.genomaInstancia1.selectedStudy.name!=void 0){var selStudyName=state.genomaInstancia1.selectedStudy.name,selProjectName=state.genomaInstancia1.selectedStudy.project,selProject=projects.project.find(function(tab){return tab.name.toUpperCase()==selProjectName.toUpperCase()});if(selProject==void 0){return}var selStudy=selProject.study.find(function(tab){return tab.name.toUpperCase()==selStudyName.toUpperCase()});_store.store.dispatch((0,_genomaInstancia1_actions.setSelectedStudy)(selStudy));console.log("setSelectedStudy fired by getProjects")}}callEndpoint(data,endpointName){var endpoints_returningError=this.endpoints_returningError(),moduleEndpoints=[];//console.log('callEndpoint', 'data', data, 'endpointName', endpointName);
moduleEndpoints=this.endPoints();var endpointDefinition=moduleEndpoints.find(function(tab){return tab.actionName.toUpperCase()==endpointName.toUpperCase()});if(!endpointDefinition){this.toastErrorMessage(this.actionNameNotRecognized(endpointName.toUpperCase(),"FrontendEndpointsModuleGenoma"));return}if(endpointDefinition.apiCallDiscarded!=void 0&&!0==endpointDefinition.apiCallDiscarded){_store.store.dispatch(activeProjects(data,endpointName));return}var apiUrl=endpointDefinition.apiurl;//backendUrl+frontEndGenomaStudyUrl; 
//console.log('callEndpoint', apiUrl, data);
if(!this.getFinalToken()){return}if(!_configProcess.schema_name){return}apiUrl=apiUrl+"?finalToken="+this.getFinalToken()+"&schemaPrefix="+_configProcess.schema_name+"&actionName="+endpointName;//console.log('process-us>api-sample>sampleAPIEndpointCall', data.schemaPrefix, data.actionName, apiUrl, data.paramsUrl);    
// if (button && button.esign_required){    
//     var ePhrase=this.getEsignPhrase()
//     apiUrl=apiUrl+"&esignPhraseToCheck="+ePhrase;
// }
// if (button && button.confirmuser_required){   
//     var userPhrase=this.getUserPhrase()
//     var userPwPhrase=this.getUserPwPhrase()
//     apiUrl=apiUrl+"&userToCheck="+userPhrase;
//     apiUrl=apiUrl+"&passwordToCheck="+userPwPhrase;
// }        
//axios.get(apiUrl)        
// .then( response => {
axios.get(apiUrl,{params:{//'schemaPrefix':schema_name, 'actionName':'ALL_ACTIVE_PROJECTS',
//'finalToken':this.getFinalToken(), 
}}).then(response=>{if(200==response.status){//console.log(response.data);
_store.store.dispatch((0,_genomaInstancia1_actions.activeProjects)(response.data));this.refreshSelectedStudyOnGetProjects(response.data);//store.dispatch(activeProjects_genoma_instancia1(response.data, endpointName));
if(data&&data.callBackFunction){data.callBackFunction()}return}if(data&&data.callBackFunctionError){data.callBackFunctionError()}}).catch(function(error){console.log("FrontendEndpointsModuleGenoma","callEndpoint","error",error);this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error,error);if(data&&data.callBackFunctionError){data.callBackFunctionError()}console.log(error.message)}).then(function(){})}};_exports.FrontendEndpointsModuleGenoma=FrontendEndpointsModuleGenoma});