define(["exports","./proc-deploy_actions.js"],function(_exports,_procDeploy_actions){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.default=void 0;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){keys.push.apply(keys,Object.getOwnPropertySymbols(object))}if(enumerableOnly)keys=keys.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(source,!0).forEach(function(key){babelHelpers.defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}const INITIAL_STATE={programs:[],selectedProgram:[],selectedProgramCorrectiveActions:[],selectedSamplingPoint:[],allIncubators:[],selectedIncubator:[],allActiveBatches:[],selectedBatch:[],allProgramsUnreceivedSamples:[],microorganismList:[],activeProductionLots:[],openInvestigations:[],samplesInProgressFQ:[],samplesInProgressMB:[],samplePendingRevisionTheTestingGroupFQ:[],samplePendingRevisionTheTestingGroupMB:[],samplePendingSampleRevision:[],samplesAnalysisPendingRevisionFQ:[],samplesAnalysisPendingRevisionMB:[],allSamplesStageSampling:[],allSamplesStageIncubation1:[],allSamplesStageIncubation2:[],allSamplesStagePlateReading:[],allSamplesStageMicroorganism:[],allPersonSamplesStageSampling:[],allPersonSamplesStagePlateReading:[],allPersonSamplesStageMicroorganism:[],sampleTemplates:[],unReceivedSamples:[],receivedSamplesInSession:[],forResultsSamples:[],forRevisionSamples:[],analysisList:[],givenSampleAnalysisList:[],givenSampleAnalysisResultEntryList:[],forResultsSamplesCustodian:[],forResultsSamplesCandidate:[],cocSampleHistory:[],cocUsersList:[],sampleAudit:[],sampleBrowserSamplesList:[],browserSelectedSample:[],browserSelectedIncubator:[],browserSelectedBatch:[],browserSelectedProdLot:[],kpis:[],sampleStatsCounterByStage:[],sampleStatsLastNresults:[]},procDeployReducer=(state=INITIAL_STATE,action)=>{switch(action.type){case _procDeploy_actions.PROGRAMS://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{programs:action.DATA});case _procDeploy_actions.SELECTED_PROGRAM://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{selectedProgram:action.DATA});case _procDeploy_actions.SELECTED_SAMPLING_POINT://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{selectedSamplingPoint:action.DATA});case _procDeploy_actions.GET_ALL_INCUBATORS://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{allIncubators:action.DATA});case _procDeploy_actions.SET_SELECTED_INCUBATOR://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{selectedIncubator:action.DATA});case _procDeploy_actions.GET_ACTIVE_BATCHES:/*        var selBatchName=state.selectedBatch.name;
        //console.log('proc-deploy_reducers.programs', action);
        var found = action.DATA.find(function(selBatchName) {
            console.log('proc-deploy_reducers >> GET_ACTIVE_BATCHES >> tab reducer find', selBatchName, action.DATA);
            return index == action.DATA.index;
          });      
        //console.log('tab reducer', action, state, found);
        if (found != undefined){
          return {
            ...state,
            selectedBatch: action.DATA[index],
            allActiveBatches: action.DATA,    
        }
        }else{ */return _objectSpread({},state,{allActiveBatches:action.DATA//} 
});case _procDeploy_actions.SET_SELECTED_BATCH://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{selectedBatch:action.DATA});case _procDeploy_actions.SELECTED_PROGRAMS_CORRECTIVE_ACTION_LIST://console.log('proc-deploy_reducers.SELECTED_PROGRAMS_CORRECTIVE_ACTION_LIST', action);
return _objectSpread({},state,{selectedProgramCorrectiveActions:action.DATA});case _procDeploy_actions.ACTIVE_PRODUCTION_LOTS:return _objectSpread({},state,{activeProductionLots:action.DATA});case _procDeploy_actions.OPEN_INVESTIGATIONS:return _objectSpread({},state,{openInvestigations:action.DATA});case _procDeploy_actions.ALL_PROGRAMS_UNRECEIVED_SAMPLES://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{allProgramsUnreceivedSamples:action.DATA});case _procDeploy_actions.SAMPLES_IN_PROGRESS_FQ://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{samplesInProgressFQ:action.DATA});case _procDeploy_actions.SAMPLES_IN_PROGRESS_MB://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{samplesInProgressMB:action.DATA});case _procDeploy_actions.SAMPLES_PENDING_REVISION_TESTINGGROUPFQ://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{samplePendingRevisionTheTestingGroupFQ:action.DATA});case _procDeploy_actions.SAMPLES_PENDING_REVISION_TESTINGGROUPMB://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{samplePendingRevisionTheTestingGroupMB:action.DATA});case _procDeploy_actions.SAMPLES_ANALYSIS_PENDING_REVISION_FQ://console.log('proc-deploy_reducers.SAMPLES_ANALYSIS_PENDING_REVISION_FQ', action);
return _objectSpread({},state,{samplesAnalysisPendingRevisionFQ:action.DATA});case _procDeploy_actions.SAMPLES_ANALYSIS_PENDING_REVISION_MB://console.log('proc-deploy_reducers.SAMPLES_ANALYSIS_PENDING_REVISION_MB', action);
return _objectSpread({},state,{samplesAnalysisPendingRevisionMB:action.DATA});case _procDeploy_actions.SAMPLES_PENDING_SAMPLE_REVISION://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{samplePendingSampleRevision:action.DATA});case _procDeploy_actions.ALL_SAMPLES_STAGE_SAMPLING://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{allSamplesStageSampling:action.DATA});case _procDeploy_actions.ALL_SAMPLES_STAGE_INCUBATION1://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{allSamplesStageIncubation1:action.DATA});case _procDeploy_actions.ALL_SAMPLES_STAGE_INCUBATION2://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{allSamplesStageIncubation2:action.DATA});case _procDeploy_actions.ALL_SAMPLES_STAGE_PLATEREADING://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{allSamplesStagePlateReading:action.DATA});case _procDeploy_actions.ALL_SAMPLES_STAGE_MICROORGANISM://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{allSamplesStageMicroorganism:action.DATA});case _procDeploy_actions.ALL_PERSON_SAMPLES_STAGE_SAMPLING://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{allPersonSamplesStageSampling:action.DATA});case _procDeploy_actions.ALL_PERSON_SAMPLES_STAGE_PLATEREADING://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{allPersonSamplesStagePlateReading:action.DATA});case _procDeploy_actions.ALL_PERSON_SAMPLES_STAGE_MICROORGANISM://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{allPersonSamplesStageMicroorganism:action.DATA});case _procDeploy_actions.MICROORGANISM_LIST://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{microorganismList:action.DATA});case _procDeploy_actions.OBJECT_BROWSER_ADD://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{sampleBrowserSamplesList:[...state.sampleBrowserSamplesList,action.DATA]});case _procDeploy_actions.SELECT_BROWSER_SAMPLE_OBJECT://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{browserSelectedSample:action.DATA});case _procDeploy_actions.SELECT_BROWSER_INCUBATOR_OBJECT://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{browserSelectedIncubator:action.DATA});case _procDeploy_actions.SELECT_BROWSER_BATCH_OBJECT://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{browserSelectedBatch:action.DATA});case _procDeploy_actions.SELECT_BROWSER_PRODLOT_OBJECT://console.log('proc-deploy_reducers.programs', action);
return _objectSpread({},state,{browserSelectedProdLot:action.DATA});case _procDeploy_actions.SAMPLE_TEMPLATES://console.log('process-us_reducers.sampleTemplates', action);
return _objectSpread({},state,{sampleTemplates:action.DATA});case _procDeploy_actions.UNRECEIVED_SAMPLES_LIST://console.log('process-us_reducers.sampleTemplates', action);
return _objectSpread({},state,{unReceivedSamples:action.DATA});case _procDeploy_actions.RECEIVED_SAMPLES_IN_SESSION://console.log('process-us_reducers.sampleTemplates', action);
return _objectSpread({},state,{//tabIndex: state.tabIndex + 1,
receivedSamplesInSession:[...state.receivedSamplesInSession,action.data]});case _procDeploy_actions.FOR_RESULTS_SAMPLES_LIST://console.log('process-us_reducers.sampleTemplates', action);
return _objectSpread({},state,{forResultsSamples:action.DATA});case _procDeploy_actions.FOR_RESULTS_SAMPLES_CUSTODIAN_LIST://console.log('process-us_reducers.sampleTemplates', action);
return _objectSpread({},state,{forResultsSamplesCustodian:action.DATA});case _procDeploy_actions.FOR_RESULTS_SAMPLES_CANDIDATE_LIST://console.log('process-us_reducers.sampleTemplates', action);
return _objectSpread({},state,{forResultsSamplesCandidate:action.DATA});case _procDeploy_actions.FOR_REVISION_SAMPLES_LIST://console.log('process-us_reducers.sampleTemplates', action);
return _objectSpread({},state,{forRevisionSamples:action.DATA});case _procDeploy_actions.ANALYSIS_LIST://    console.log('process-us_reducers.sampleTemplates', action);
return _objectSpread({},state,{analysisList:action.DATA});case _procDeploy_actions.GIVEN_SAMPLE_ANALYSIS_LIST://    console.log('process-us_reducers.GIVEN_SAMPLE_ANALYSIS_LIST', action);
return _objectSpread({},state,{givenSampleAnalysisList:action.DATA});case _procDeploy_actions.GIVEN_SAMPLE_ANALYSIS_RESULT_LIST://    console.log('process-us_reducers.GIVEN_SAMPLE_ANALYSIS_RESULT_LIST', action);
return _objectSpread({},state,{givenSampleAnalysisResultEntryList:action.DATA});case _procDeploy_actions.COC_SAMPLE_HISTORY://    console.log('process-us_reducers.COC_SAMPLE_HISTORY', action);
return _objectSpread({},state,{cocSampleHistory:action.DATA});case _procDeploy_actions.COC_USERS_LIST://    console.log('process-us_reducers.COC_SAMPLE_HISTORY', action);
return _objectSpread({},state,{cocUsersList:action.DATA});case _procDeploy_actions.GET_SAMPLE_AUDIT://    console.log('process-us_reducers.COC_SAMPLE_HISTORY', action);
return _objectSpread({},state,{sampleAudit:action.DATA});case _procDeploy_actions.SAMPLE_STATS_COUNTER_BY_STAGE://    console.log('process-us_reducers.COC_SAMPLE_HISTORY', action);
return _objectSpread({},state,{sampleStatsCounterByStage:action.DATA});case _procDeploy_actions.SAMPLE_STATS_LAST_N_RESULTS://    console.log('process-us_reducers.COC_SAMPLE_HISTORY', action);
return _objectSpread({},state,{sampleStatsLastNresults:action.DATA});case _procDeploy_actions.KPIS://    console.log('process-us_reducers.COC_SAMPLE_HISTORY', action);
return _objectSpread({},state,{kpis:action.DATA});default:return state;}};var _default=procDeployReducer;_exports.default=_default});