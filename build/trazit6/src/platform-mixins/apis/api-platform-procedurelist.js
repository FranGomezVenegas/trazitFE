define(["exports","../../config/platform/logic/api-config.js","../../store.js","../store/token-mixin.js","../functions/toast-methods.js","../../elements/platformComponents/Redux/actions/app_actions.js","./api-settings.js"],function(_exports,_apiConfig,_store,_tokenMixin,_toastMethods,_app_actions,_apiSettings){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.ProcedureList=void 0;/**
 * @mixinFunction
 * @polymer
 */const ProcedureList=superClass=>class extends(0,_apiSettings.ApiSettings)((0,_toastMethods.ToastMethods)((0,_tokenMixin.tokenMixin)(superClass))){sleep(milliseconds){for(var start=new Date().getTime(),i=0;1e7>i;i++){if(new Date().getTime()-start>milliseconds){break}}}getProcedureList(data){var endpoints_returningError=this.endpoints_returningError();if(data&&data.finalToken){var finalToken=data.finalToken}else{var finalToken=this.getFinalToken()}if(!finalToken){return}var apiUrl=_apiConfig.backendUrl+_apiConfig.appProcedureListApiUrl;if(!finalToken){return}axios.get(apiUrl,{params:{finalToken:finalToken}}).then(response=>{if(200==response.status){_store.store.dispatch((0,_app_actions.setAppProcedureList)(response.data));if(data&&data.callBackFunction){data.callBackFunction()}if(data&&data.callBackFunction2){data.callBackFunction2()}return}if(data&&data.callBackFunctionError){data.callBackFunctionError()}this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200,response)}).catch(function(error){if(data&&data.callBackFunctionError){data.callBackFunctionError()}this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error,error)}).then(function(){})}};_exports.ProcedureList=ProcedureList});