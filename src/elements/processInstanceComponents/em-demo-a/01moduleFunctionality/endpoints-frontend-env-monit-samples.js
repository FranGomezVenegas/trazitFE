import {backendUrl, frontEndEnvMonitSampleUrl} from '../../../../config/platform/logic/api-config';
import {store} from '../../../../store';
import {ApiSettings} from '../../../../platform-mixins/apis/api-settings';
import {tokenMixin} from '../../../../platform-mixins/store/token-mixin';
import {ToastMethods} from '../../../../platform-mixins/functions/toast-methods';
import {schema_name} from '../03config/config-process';
import {
    getAllProgramsUnreceivedSamples as allProgramsUnreceivedSamples_em_demo_a   
    , getAllSamplesStageSampling as getAllSamplesStageSampling_em_demo_a   
    , getAllSamplesStageIncubation1 as getAllSamplesStageIncubation1_em_demo_a   
    , getAllSamplesStageIncubation2 as getAllSamplesStageIncubation2_em_demo_a   
    , getAllSamplesStagePlateReading as getAllSamplesStagePlateReading_em_demo_a   
    , getAllSamplesStageMicroorganism as getAllSamplesStageMicroorganism_em_demo_a   
    , getAllPersonSamplesStageSampling as getAllPersonSamplesStageSampling_em_demo_a   
    , getAllPersonSamplesStagePlateReading as getAllPersonSamplesStagePlateReading_em_demo_a   
    , getAllPersonSamplesStageMicroorganism as getAllPersonSamplesStageMicroorganism_em_demo_a   
    , getMicroorganismList as getMicroorganismList_em_demo_a
    , getBrowserSampleData as getBrowserSampleData_em_demo_a, getBrowserIncubatorData as getBrowserIncubatorData_em_demo_a, getBrowserBatchData as getBrowserBatchData_em_demo_a
    
    , getSampleAudit as getSampleAudit_em_demo_a
    
    , sampleTemplates as sampleTemplates_em_demo_a, unReceivedSamples as unReceivedSamples_em_demo_a
    , forResultsSamples as forResultsSamples_em_demo_a, givenCocSampleHistory as givenCocSampleHistory_em_demo_a
    , getGivenCocUsersList as getGivenCocUsersList_em_demo_a
    , forResultsSamplesCustodian as forResultsSamplesCustodian_em_demo_a, forResultsSamplesCandidate as forResultsSamplesCandidate_em_demo_a
        , forRevisionSamples as forRevisionSamples_em_demo_a
    , analysisAllList as analysisAllList_em_demo_a, givenSampleAnalysisList as givenSampleAnalysisList_em_demo_a
    , getGivenSampleAnalysisResultEntry as getGivenSampleAnalysisResultEntry_em_demo_a
    
    , getSampleStatsCounterByStage as getSampleStatsCounterByStage_em_demo_a
    , getSampleStatsLastNresults as getSampleStatsLastNresults_em_demo_a
    
    } from '../02Redux/em-demo-a_actions';
    
/**
 * @mixinFunction
 * @polymer
 */
export const samplesStagesReduxVariables={
    "SAMPLES_SAMPLING": {name:"samples_sampling", actionName:'SAMPLES_BY_STAGE', reducerPropertyName:'getAllSamplesStageSampling'},
    "SAMPLES_PLATE_READING": {name:"samples_plate_reading", actionName:'SAMPLES_BY_STAGE', reducerPropertyName:'getAllSamplesStagePlateReading'},
    "SAMPLES_MICROORG_IDENTIF": {name:"samples_microorg_identif", actionName:'GET_SAMPLE_MICROORGANISM_VIEW', reducerPropertyName:'getAllSamplesStageMicroorganism'},
    "PERSON_SAMPLING": {name:"person_sampling", actionName:'SAMPLES_BY_STAGE', reducerPropertyName:'getAllPersonSamplesStageSampling'},
    "PERSON_PLATE_READING": {name:"person_plate_reading", actionName:'SAMPLES_BY_STAGE', reducerPropertyName:'getAllPersonSamplesStagePlateReading'},
    "PERSON_MICROORG_IDENTIF": {name:"person_microorg_identif", actionName:'GET_SAMPLE_MICROORGANISM_VIEW', reducerPropertyName:'getAllPersonSamplesStageMicroorganism'},
    "PENDING_INCUBATION1": {name:"pending_incubation1", actionName:'SAMPLES_BY_STAGE', reducerPropertyName:'getAllSamplesStageIncubation1'},
    "PENDING_INCUBATION2": {name:"pending_incubation2", actionName:'SAMPLES_BY_STAGE', reducerPropertyName:'getAllSamplesStageIncubation2'},
};
export const FrontendEndpointsEnvMonitSamples = (superClass) => class extends (ApiSettings(ToastMethods(tokenMixin(superClass)))) {
    getAllSamplesStageSampling(data, reduxVariable) {
        //console.log('getSamplesInProgress', apiUrl, data, 'reduxVariable', reduxVariable);
        var actionName=reduxVariable.actionName;
        var endpoints_returningError=this.endpoints_returningError();
        var apiUrl=backendUrl+frontEndEnvMonitSampleUrl; 
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'schemaPrefix':schema_name, 'actionName':actionName, 
                'finalToken':this.getFinalToken(), 'sampleFieldToRetrieve':data.sampleFieldToRetrieve,
                'whereFieldsName': data.samplesWhereFieldsName, 
                'whereFieldsValue': data.samplesWhereFieldsValue, 'sortFieldsName':data.samplesTabSortFields
            }
        })
        .then( response => {
            if(response.status == 200) {
    //            console.log(response.data);
                switch (reduxVariable.name){
                    case 'samples_sampling':
                        store.dispatch(getAllSamplesStageSampling_em_demo_a(response.data));
                        break;
                    case 'samples_plate_reading':
                        store.dispatch(getAllSamplesStagePlateReading_em_demo_a(response.data));
                        break;
                    case 'samples_microorg_identif':
                        store.dispatch(getAllSamplesStageMicroorganism_em_demo_a(response.data));
                        break;
                    case 'person_sampling':
                        store.dispatch(getAllPersonSamplesStageSampling_em_demo_a(response.data));
                        break;
                    case 'person_plate_reading':
                        store.dispatch(getAllPersonSamplesStagePlateReading_em_demo_a(response.data));
                        break;
                    case 'person_microorg_identif':
                        store.dispatch(getAllPersonSamplesStageMicroorganism_em_demo_a(response.data));
                        break;
                    case 'pending_incubation1':
                        store.dispatch(getAllSamplesStageIncubation1_em_demo_a(response.data));
                        break;
                    case 'pending_incubation2':
                        store.dispatch(getAllSamplesStageIncubation2_em_demo_a(response.data));
                        break;
                    default:
                        this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
                        return;
                }
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
        })
        .catch(function (error) {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
        });
    }
    getSampleAudit(data) {
        var apiUrl=backendUrl+frontEndEnvMonitSampleUrl; 
        //console.log('getSampleAudit', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'schemaPrefix':schema_name, 'actionName':'GET_SAMPLE_AUDIT', 
                'finalToken':this.getFinalToken(), 'sampleId':data.sampleId,
                'sampleAuditFieldToRetrieve': data.sampleAuditFieldToRetrieve
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getSampleAudit_em_demo_a(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
            if (data && data.callBackFunctionError){data.callBackFunctionError()};
            return;
        })
        .catch(function (error) {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }
    getGivenSampleAnalysisResultEntry(data) {
        var apiUrl=backendUrl+frontEndEnvMonitSampleUrl; 
        //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'schemaPrefix':schema_name, 'actionName':'GET_SAMPLE_ANALYSIS_RESULT_LIST', 
                'finalToken':this.getFinalToken(), 'sampleId':data.sampleId,
                'sampleAnalysisResultFieldToRetrieve': data.fieldToRetrieve,
                'sortFieldsName': data.fieldToSort,
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getGivenSampleAnalysisResultEntry_em_demo_a(response.data));
                if (data.callBackFunction){data.callBackFunction();}
                return;
            }
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
            if (data && data.callBackFunctionError){data.callBackFunctionError()};
            return;
        })
        .catch(function (error) {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }
    getMicroorganismList(data) {
        var apiUrl=backendUrl+frontEndEnvMonitSampleUrl; 
        //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'schemaPrefix':schema_name, 'actionName':'GET_MICROORGANISM_LIST', 
                'finalToken':this.getFinalToken(), 
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getMicroorganismList_em_demo_a(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
            if (data && data.callBackFunctionError){data.callBackFunctionError()};
            return;
        })
        .catch(function (error) {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }
    getSampleStatsCounterByStage(data) {
        var apiUrl=backendUrl+frontEndEnvMonitSampleUrl; 
        //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'schemaPrefix':schema_name, 'actionName':'STATS_SAMPLES_PER_STAGE', 'finalToken':this.getFinalToken(), 
                'programName':data.programName, 'stagesToInclude':data.stagesToInclude, 'stagesToExclude': data.stagesToExclude
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getSampleStatsCounterByStage_em_demo_a(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
            if (data && data.callBackFunctionError){data.callBackFunctionError()};
            return;
        })
        .catch(function (error) {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }    
    getSampleStatsLastNresults(data) {
        var apiUrl=backendUrl+frontEndEnvMonitSampleUrl; 
        //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'schemaPrefix':schema_name, 'actionName':'STATS_PROGRAM_LAST_RESULTS', 'finalToken':this.getFinalToken(), 
                'sampleId':data.sampleId, 'sampleFieldToRetrieve': data.browserSampleFieldToRetrieve, 'sampleFieldsToDisplay': data.browserSampleFieldsToDisplay
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getSampleStatsLastNresults_em_demo_a(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
            if (data && data.callBackFunctionError){data.callBackFunctionError()};
            return;
        })
        .catch(function (error) {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }    
    getBrowserSelectedSampleData(data) {
        var apiUrl=backendUrl+frontEndEnvMonitSampleUrl; 
        //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'schemaPrefix':schema_name, 'actionName':'GET_SAMPLE_STAGES_SUMMARY_REPORT', 
                'finalToken':this.getFinalToken(), 
                'sampleId':data.sampleId, 'sampleFieldToRetrieve': data.browserSampleFieldToRetrieve, 'sampleFieldsToDisplay': data.browserSampleFieldsToDisplay
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getBrowserSampleData_em_demo_a(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
            if (data && data.callBackFunctionError){data.callBackFunctionError()};
            return;
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