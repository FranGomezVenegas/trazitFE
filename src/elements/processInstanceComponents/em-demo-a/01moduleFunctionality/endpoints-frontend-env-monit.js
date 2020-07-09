import {backendUrl, frontEndEnvMonitIncubationUrl, frontEndEnvMonitIncubBatchUrl, frontEndEnvMonitUrl} from '../../../../config/platform/logic/api-config';
import {store} from '../../../../store';
import {ApiSettings} from '../../../../platform-mixins/apis/api-settings';
import {tokenMixin} from '../../../../platform-mixins/store/token-mixin';
import {ToastMethods} from '../../../../platform-mixins/functions/toast-methods';
import {schema_name} from '../03config/config-process';
import { getActiveProductionLots as getActiveProductionLots_em_demo_a} from '../02Redux/em-demo-a_actions';
import { getActiveBatches as getActiveBatches_em_demo_a, getAllIncubators as getAllIncubators_em_demo_a} from '../02Redux/em-demo-a_actions';
import { getPrograms as getPrograms_em_demo_a, selectedProgramCorrectiveActionList as selectedProgramCorrectiveActionList_em_demo_a} from '../02Redux/em-demo-a_actions';


export const FrontendEndpointsEnvMonitForPrograms = (superClass) => class extends (ApiSettings(ToastMethods(tokenMixin(superClass)))) {
    getPrograms(data) {
        var apiUrl=backendUrl+frontEndEnvMonitUrl; 
        //console.log('getActiveBatches', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'schemaPrefix':schema_name, 'actionName':'PROGRAMS_LIST',
                'finalToken':this.getFinalToken(), 
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getPrograms_em_demo_a(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
        })
        .catch(function (error) {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }
    getSelectedProgramCorrectiveAction(data) {
        var apiUrl=backendUrl+frontEndEnvMonitUrl; 
        //console.log('getActiveBatches', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'schemaPrefix':schema_name, 'actionName':'PROGRAM_CORRECTIVE_ACTION_LIST',
                'finalToken':this.getFinalToken(), 'programName':data.programName, 
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(selectedProgramCorrectiveActionList_em_demo_a(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
        })
        .catch(function (error) {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }
}

export const FrontendEndpointsEnvMonitForBatches = (superClass) => class extends (ApiSettings(ToastMethods(tokenMixin(superClass)))) {
    getActiveBatches(data) {
        var apiUrl=backendUrl+frontEndEnvMonitIncubBatchUrl; 
        //console.log('getActiveBatches', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'schemaPrefix':schema_name, 'actionName':'ACTIVE_BATCH_LIST',
                'finalToken':this.getFinalToken(), 
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getActiveBatches_em_demo_a(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
        })
        .catch(function (error) {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }
    getAllIncubators(data) {
        var apiUrl=backendUrl+frontEndEnvMonitIncubationUrl; 
        //console.log('getAllIncubators', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'schemaPrefix':schema_name, 'actionName':'INCUBATORS_LIST',
                'finalToken':this.getFinalToken(), 
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getAllIncubators_em_demo_a(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
        })
        .catch(function (error) {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }
}    

export const FrontendEndpointsEnvMonitForProductionLot = (superClass) => class extends (ApiSettings(ToastMethods(tokenMixin(superClass)))) {
    getActiveProductionLotsList(data) {
        var apiUrl=backendUrl+frontEndEnvMonitUrl; 
        //console.log('getActiveBatches', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'schemaPrefix':schema_name, 'actionName':'GET_ACTIVE_PRODUCTION_LOTS',
                'finalToken':this.getFinalToken(), 
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getActiveProductionLots_em_demo_a(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
        })
        .catch(function (error) {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }


}   