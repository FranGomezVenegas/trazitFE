define(["exports", "../03config/config-process.js"], function (
  _exports,
  _configProcess
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.getSampleAudit = getSampleAudit;
  _exports.getPrograms = getPrograms;
  _exports.setSelectedProgram = setSelectedProgram;
  _exports.getAllIncubators = getAllIncubators;
  _exports.setSelectedIncubator = setSelectedIncubator;
  _exports.getActiveBatches = getActiveBatches;
  _exports.setSelectedBatch = setSelectedBatch;
  _exports.selectedProgramCorrectiveActionList = selectedProgramCorrectiveActionList;
  _exports.setSelectedSamplingPoint = setSelectedSamplingPoint;
  _exports.getActiveProductionLots = getActiveProductionLots;
  _exports.getOpenInvestigations = getOpenInvestigations;
  _exports.getAllProgramsUnreceivedSamples = getAllProgramsUnreceivedSamples;
  _exports.getSamplesInProgressFQ = getSamplesInProgressFQ;
  _exports.getSamplesInProgressMB = getSamplesInProgressMB;
  _exports.getSamplesPendingRevisionTestingGroupFQ = getSamplesPendingRevisionTestingGroupFQ;
  _exports.getSamplesPendingRevisionTestingGroupMB = getSamplesPendingRevisionTestingGroupMB;
  _exports.getSamplesAnalysisPendingRevisionFQ = getSamplesAnalysisPendingRevisionFQ;
  _exports.getSamplesAnalysisPendingRevisionMB = getSamplesAnalysisPendingRevisionMB;
  _exports.getSamplesPendingSampleRevision = getSamplesPendingSampleRevision;
  _exports.getAllSamplesStageSampling = getAllSamplesStageSampling;
  _exports.getAllSamplesStageIncubation1 = getAllSamplesStageIncubation1;
  _exports.getAllSamplesStageIncubation2 = getAllSamplesStageIncubation2;
  _exports.getAllSamplesStagePlateReading = getAllSamplesStagePlateReading;
  _exports.getAllSamplesStageMicroorganism = getAllSamplesStageMicroorganism;
  _exports.getAllPersonSamplesStageSampling = getAllPersonSamplesStageSampling;
  _exports.getAllPersonSamplesStagePlateReading = getAllPersonSamplesStagePlateReading;
  _exports.getAllPersonSamplesStageMicroorganism = getAllPersonSamplesStageMicroorganism;
  _exports.getMicroorganismList = getMicroorganismList;
  _exports.getBrowserSampleData = getBrowserSampleData;
  _exports.getBrowserIncubatorData = getBrowserIncubatorData;
  _exports.getBrowserBatchData = getBrowserBatchData;
  _exports.getBrowserProdLotData = getBrowserProdLotData;
  _exports.setKPIs = setKPIs;
  _exports.getGivenCocUsersList = getGivenCocUsersList;
  _exports.getGivenSampleAnalysisResultEntry = getGivenSampleAnalysisResultEntry;
  _exports.givenSampleAnalysisList = givenSampleAnalysisList;
  _exports.analysisAllList = analysisAllList;
  _exports.sampleTemplates = sampleTemplates;
  _exports.unReceivedSamples = unReceivedSamples;
  _exports.receivedSamplesInSession = receivedSamplesInSession;
  _exports.forResultsSamples = forResultsSamples;
  _exports.forResultsSamplesCustodian = forResultsSamplesCustodian;
  _exports.forResultsSamplesCandidate = forResultsSamplesCandidate;
  _exports.givenCocSampleHistory = givenCocSampleHistory;
  _exports.forRevisionSamples = forRevisionSamples;
  _exports.getSampleStatsCounterByStage = getSampleStatsCounterByStage;
  _exports.getSampleStatsLastNresults = getSampleStatsLastNresults;
  _exports.COC_USERS_LIST = _exports.COC_SAMPLE_HISTORY = _exports.GIVEN_SAMPLE_ANALYSIS_RESULT_LIST = _exports.GIVEN_SAMPLE_ANALYSIS_LIST = _exports.ANALYSIS_LIST = _exports.FOR_RESULTS_SAMPLES_CANDIDATE_LIST = _exports.FOR_RESULTS_SAMPLES_CUSTODIAN_LIST = _exports.FOR_RESULTS_SAMPLES_LIST = _exports.FOR_REVISION_SAMPLES_LIST = _exports.RECEIVED_SAMPLES_IN_SESSION = _exports.UNRECEIVED_SAMPLES_LIST = _exports.SAMPLE_TEMPLATES = _exports.KPIS = _exports.SELECT_BROWSER_PRODLOT_OBJECT = _exports.SELECT_BROWSER_BATCH_OBJECT = _exports.SELECT_BROWSER_INCUBATOR_OBJECT = _exports.SELECT_BROWSER_SAMPLE_OBJECT = _exports.OBJECT_BROWSER_ADD = _exports.GET_SAMPLE_AUDIT = _exports.MICROORGANISM_LIST = _exports.ALL_PERSON_SAMPLES_STAGE_MICROORGANISM = _exports.ALL_PERSON_SAMPLES_STAGE_PLATEREADING = _exports.ALL_PERSON_SAMPLES_STAGE_SAMPLING = _exports.ALL_SAMPLES_STAGE_MICROORGANISM = _exports.ALL_SAMPLES_STAGE_PLATEREADING = _exports.ALL_SAMPLES_STAGE_INCUBATION2 = _exports.ALL_SAMPLES_STAGE_INCUBATION1 = _exports.ALL_SAMPLES_STAGE_SAMPLING = _exports.SAMPLES_PENDING_SAMPLE_REVISION = _exports.SAMPLES_ANALYSIS_PENDING_REVISION_MB = _exports.SAMPLES_ANALYSIS_PENDING_REVISION_FQ = _exports.SAMPLES_PENDING_REVISION_TESTINGGROUPMB = _exports.SAMPLES_PENDING_REVISION_TESTINGGROUPFQ = _exports.SAMPLES_IN_PROGRESS_MB = _exports.SAMPLES_IN_PROGRESS_FQ = _exports.SAMPLE_STATS_LAST_N_RESULTS = _exports.SAMPLE_STATS_COUNTER_BY_STAGE = _exports.OPEN_INVESTIGATIONS = _exports.ACTIVE_PRODUCTION_LOTS = _exports.ALL_PROGRAMS_UNRECEIVED_SAMPLES = _exports.SET_SELECTED_BATCH = _exports.GET_ACTIVE_BATCHES = _exports.SET_SELECTED_INCUBATOR = _exports.GET_ALL_INCUBATORS = _exports.SELECTED_PROGRAMS_CORRECTIVE_ACTION_LIST = _exports.SELECTED_SAMPLING_POINT = _exports.SELECTED_PROGRAM = _exports.PROGRAMS = void 0;
  var schemaName = _configProcess.schema_name.replace("-", "_");
  const PROGRAMS = "PROGRAMS" + schemaName;
  _exports.PROGRAMS = PROGRAMS;
  const SELECTED_PROGRAM = "SELECTED_PROGRAM" + schemaName;
  _exports.SELECTED_PROGRAM = SELECTED_PROGRAM;
  const SELECTED_SAMPLING_POINT = "SELECTED_SAMPLING_POINT" + schemaName;
  _exports.SELECTED_SAMPLING_POINT = SELECTED_SAMPLING_POINT;
  const SELECTED_PROGRAMS_CORRECTIVE_ACTION_LIST =
    "SELECTED_PROGRAMS_CORRECTIVE_ACTION_LIST" + schemaName;
  _exports.SELECTED_PROGRAMS_CORRECTIVE_ACTION_LIST = SELECTED_PROGRAMS_CORRECTIVE_ACTION_LIST;
  const GET_ALL_INCUBATORS = "GET_ALL_INCUBATORS" + schemaName;
  _exports.GET_ALL_INCUBATORS = GET_ALL_INCUBATORS;
  const SET_SELECTED_INCUBATOR = "SET_SELECTED_INCUBATOR" + schemaName;
  _exports.SET_SELECTED_INCUBATOR = SET_SELECTED_INCUBATOR;
  const GET_ACTIVE_BATCHES = "GET_ACTIVE_BATCHES" + schemaName;
  _exports.GET_ACTIVE_BATCHES = GET_ACTIVE_BATCHES;
  const SET_SELECTED_BATCH = "SET_SELECTED_BATCH" + schemaName;
  _exports.SET_SELECTED_BATCH = SET_SELECTED_BATCH;
  const ALL_PROGRAMS_UNRECEIVED_SAMPLES =
    "ALL_PROGRAMS_UNRECEIVED_SAMPLES" + schemaName;
  _exports.ALL_PROGRAMS_UNRECEIVED_SAMPLES = ALL_PROGRAMS_UNRECEIVED_SAMPLES;
  const ACTIVE_PRODUCTION_LOTS = "ACTIVE_PRODUCTION_LOTS" + schemaName;
  _exports.ACTIVE_PRODUCTION_LOTS = ACTIVE_PRODUCTION_LOTS;
  const OPEN_INVESTIGATIONS = "OPEN_INVESTIGATIONS" + schemaName;
  _exports.OPEN_INVESTIGATIONS = OPEN_INVESTIGATIONS;
  const SAMPLE_STATS_COUNTER_BY_STAGE =
    "SAMPLE_STATS_COUNTER_BY_STAGE" + schemaName;
  _exports.SAMPLE_STATS_COUNTER_BY_STAGE = SAMPLE_STATS_COUNTER_BY_STAGE;
  const SAMPLE_STATS_LAST_N_RESULTS =
    "SAMPLE_STATS_LAST_N_RESULTS" + schemaName;
  _exports.SAMPLE_STATS_LAST_N_RESULTS = SAMPLE_STATS_LAST_N_RESULTS;
  const SAMPLES_IN_PROGRESS_FQ = "SAMPLES_IN_PROGRESS_FQ" + schemaName;
  _exports.SAMPLES_IN_PROGRESS_FQ = SAMPLES_IN_PROGRESS_FQ;
  const SAMPLES_IN_PROGRESS_MB = "SAMPLES_IN_PROGRESS_MB" + schemaName;
  _exports.SAMPLES_IN_PROGRESS_MB = SAMPLES_IN_PROGRESS_MB;
  const SAMPLES_PENDING_REVISION_TESTINGGROUPFQ =
    "SAMPLES_PENDING_REVISION_TESTINGGROUPFQ" + schemaName;
  _exports.SAMPLES_PENDING_REVISION_TESTINGGROUPFQ = SAMPLES_PENDING_REVISION_TESTINGGROUPFQ;
  const SAMPLES_PENDING_REVISION_TESTINGGROUPMB =
    "SAMPLES_PENDING_REVISION_TESTINGGROUPMB" + schemaName;
  _exports.SAMPLES_PENDING_REVISION_TESTINGGROUPMB = SAMPLES_PENDING_REVISION_TESTINGGROUPMB;
  const SAMPLES_ANALYSIS_PENDING_REVISION_FQ =
    "SAMPLES_ANALYSIS_PENDING_REVISION_FQ" + schemaName;
  _exports.SAMPLES_ANALYSIS_PENDING_REVISION_FQ = SAMPLES_ANALYSIS_PENDING_REVISION_FQ;
  const SAMPLES_ANALYSIS_PENDING_REVISION_MB =
    "SAMPLES_ANALYSIS_PENDING_REVISION_MB" + schemaName;
  _exports.SAMPLES_ANALYSIS_PENDING_REVISION_MB = SAMPLES_ANALYSIS_PENDING_REVISION_MB;
  const SAMPLES_PENDING_SAMPLE_REVISION =
    "SAMPLES_PENDING_SAMPLE_REVISION" + schemaName;
  _exports.SAMPLES_PENDING_SAMPLE_REVISION = SAMPLES_PENDING_SAMPLE_REVISION;
  const ALL_SAMPLES_STAGE_SAMPLING = "ALL_SAMPLES_STAGE_SAMPLING" + schemaName;
  _exports.ALL_SAMPLES_STAGE_SAMPLING = ALL_SAMPLES_STAGE_SAMPLING;
  const ALL_SAMPLES_STAGE_INCUBATION1 =
    "ALL_SAMPLES_STAGE_INCUBATION1" + schemaName;
  _exports.ALL_SAMPLES_STAGE_INCUBATION1 = ALL_SAMPLES_STAGE_INCUBATION1;
  const ALL_SAMPLES_STAGE_INCUBATION2 =
    "ALL_SAMPLES_STAGE_INCUBATION2" + schemaName;
  _exports.ALL_SAMPLES_STAGE_INCUBATION2 = ALL_SAMPLES_STAGE_INCUBATION2;
  const ALL_SAMPLES_STAGE_PLATEREADING =
    "ALL_SAMPLES_STAGE_PLATEREADING" + schemaName;
  _exports.ALL_SAMPLES_STAGE_PLATEREADING = ALL_SAMPLES_STAGE_PLATEREADING;
  const ALL_SAMPLES_STAGE_MICROORGANISM =
    "ALL_SAMPLES_STAGE_MICROORGANISM" + schemaName;
  _exports.ALL_SAMPLES_STAGE_MICROORGANISM = ALL_SAMPLES_STAGE_MICROORGANISM;
  const ALL_PERSON_SAMPLES_STAGE_SAMPLING =
    "ALL_PERSON_SAMPLES_STAGE_SAMPLING" + schemaName;
  _exports.ALL_PERSON_SAMPLES_STAGE_SAMPLING = ALL_PERSON_SAMPLES_STAGE_SAMPLING;
  const ALL_PERSON_SAMPLES_STAGE_PLATEREADING =
    "ALL_PERSON_SAMPLES_STAGE_PLATEREADING" + schemaName;
  _exports.ALL_PERSON_SAMPLES_STAGE_PLATEREADING = ALL_PERSON_SAMPLES_STAGE_PLATEREADING;
  const ALL_PERSON_SAMPLES_STAGE_MICROORGANISM =
    "ALL_PERSON_SAMPLES_STAGE_MICROORGANISM" + schemaName;
  _exports.ALL_PERSON_SAMPLES_STAGE_MICROORGANISM = ALL_PERSON_SAMPLES_STAGE_MICROORGANISM;
  const MICROORGANISM_LIST = "MICROORGANISM_LIST" + schemaName;
  _exports.MICROORGANISM_LIST = MICROORGANISM_LIST;
  const GET_SAMPLE_AUDIT = "GET_SAMPLE_AUDIT" + schemaName;
  _exports.GET_SAMPLE_AUDIT = GET_SAMPLE_AUDIT;
  const OBJECT_BROWSER_ADD = "OBJECT_BROWSER_ADD" + schemaName;
  _exports.OBJECT_BROWSER_ADD = OBJECT_BROWSER_ADD;
  const SELECT_BROWSER_SAMPLE_OBJECT =
    "SELECT_BROWSER_SAMPLE_OBJECT" + schemaName;
  _exports.SELECT_BROWSER_SAMPLE_OBJECT = SELECT_BROWSER_SAMPLE_OBJECT;
  const SELECT_BROWSER_INCUBATOR_OBJECT =
    "SELECT_BROWSER_INCUBATOR_OBJECT" + schemaName;
  _exports.SELECT_BROWSER_INCUBATOR_OBJECT = SELECT_BROWSER_INCUBATOR_OBJECT;
  const SELECT_BROWSER_BATCH_OBJECT =
    "SELECT_BROWSER_BATCH_OBJECT" + schemaName;
  _exports.SELECT_BROWSER_BATCH_OBJECT = SELECT_BROWSER_BATCH_OBJECT;
  const SELECT_BROWSER_PRODLOT_OBJECT =
    "SELECT_BROWSER_PRODLOT_OBJECT" + schemaName;
  _exports.SELECT_BROWSER_PRODLOT_OBJECT = SELECT_BROWSER_PRODLOT_OBJECT;
  const KPIS = "KPIS" + schemaName;
  _exports.KPIS = KPIS;
  function getSampleAudit(data) {
    //console.log('proc-deploy_actions.getPrograms', data);
    return { type: GET_SAMPLE_AUDIT, DATA: data };
  }
  function getPrograms(data) {
    //console.log('proc-deploy_actions.getPrograms', data);
    return { type: PROGRAMS, DATA: data };
  }
  function setSelectedProgram(data) {
    //console.log('proc-deploy_actions.setSelectedProgram', data);
    return { type: SELECTED_PROGRAM, DATA: data };
  }
  function getAllIncubators(data) {
    //console.log('proc-deploy_actions.getAllIncubators', data);
    return { type: GET_ALL_INCUBATORS, DATA: data };
  }
  function setSelectedIncubator(data) {
    //console.log('proc-deploy_actions.setSelectedProgram', data);
    return { type: SET_SELECTED_INCUBATOR, DATA: data };
  }
  function getActiveBatches(data) {
    //console.log('proc-deploy_actions.getActiveBatches', data);
    return { type: GET_ACTIVE_BATCHES, DATA: data };
  }
  function setSelectedBatch(data) {
    //console.log('proc-deploy_actions.setSelectedBatch', data);
    return { type: SET_SELECTED_BATCH, DATA: data };
  }
  function selectedProgramCorrectiveActionList(data) {
    //console.log('proc-deploy_actions.selectedProgramCorrectiveActionList', data);
    return { type: SELECTED_PROGRAMS_CORRECTIVE_ACTION_LIST, DATA: data };
  }
  function setSelectedSamplingPoint(data) {
    //console.log('proc-deploy_actions.setSelectedProgram', data);
    return { type: SELECTED_SAMPLING_POINT, DATA: data };
  }
  function getActiveProductionLots(data) {
    //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
    return { type: ACTIVE_PRODUCTION_LOTS, DATA: data };
  }
  function getOpenInvestigations(data) {
    //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
    return { type: OPEN_INVESTIGATIONS, DATA: data };
  }
  function getAllProgramsUnreceivedSamples(data) {
    //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
    return { type: ALL_PROGRAMS_UNRECEIVED_SAMPLES, DATA: data };
  }
  function getSamplesInProgressFQ(data) {
    //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
    return { type: SAMPLES_IN_PROGRESS_FQ, DATA: data };
  }
  function getSamplesInProgressMB(data) {
    //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
    return { type: SAMPLES_IN_PROGRESS_MB, DATA: data };
  }
  function getSamplesPendingRevisionTestingGroupFQ(data) {
    //console.log('proc-deploy_actions.getSamplesPendingRevisionTestingGroupFQ', data);
    return { type: SAMPLES_PENDING_REVISION_TESTINGGROUPFQ, DATA: data };
  }
  function getSamplesPendingRevisionTestingGroupMB(data) {
    //console.log('proc-deploy_actions.getSamplesPendingRevisionTestingGroupMB', data);
    return { type: SAMPLES_PENDING_REVISION_TESTINGGROUPMB, DATA: data };
  }
  function getSamplesAnalysisPendingRevisionFQ(data) {
    //console.log('proc-deploy_actions.getSamplesAnalysisPendingRevisionFQ', data);
    return { type: SAMPLES_ANALYSIS_PENDING_REVISION_FQ, DATA: data };
  }
  function getSamplesAnalysisPendingRevisionMB(data) {
    //console.log('proc-deploy_actions.getSamplesAnalysisPendingRevisionMB', data);
    return { type: SAMPLES_ANALYSIS_PENDING_REVISION_MB, DATA: data };
  }
  function getSamplesPendingSampleRevision(data) {
    //console.log('proc-deploy_actions.getSamplesPendingSampleRevision', data);
    return { type: SAMPLES_PENDING_SAMPLE_REVISION, DATA: data };
  }
  function getAllSamplesStageSampling(data) {
    //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
    return { type: ALL_SAMPLES_STAGE_SAMPLING, DATA: data };
  }
  function getAllSamplesStageIncubation1(data) {
    //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
    return { type: ALL_SAMPLES_STAGE_INCUBATION1, DATA: data };
  }
  function getAllSamplesStageIncubation2(data) {
    //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
    return { type: ALL_SAMPLES_STAGE_INCUBATION2, DATA: data };
  }
  function getAllSamplesStagePlateReading(data) {
    //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
    return { type: ALL_SAMPLES_STAGE_PLATEREADING, DATA: data };
  }
  function getAllSamplesStageMicroorganism(data) {
    //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
    return { type: ALL_SAMPLES_STAGE_MICROORGANISM, DATA: data };
  }
  function getAllPersonSamplesStageSampling(data) {
    //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
    return { type: ALL_PERSON_SAMPLES_STAGE_SAMPLING, DATA: data };
  }
  function getAllPersonSamplesStagePlateReading(data) {
    //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
    return { type: ALL_PERSON_SAMPLES_STAGE_PLATEREADING, DATA: data };
  }
  function getAllPersonSamplesStageMicroorganism(data) {
    //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
    return { type: ALL_PERSON_SAMPLES_STAGE_MICROORGANISM, DATA: data };
  }
  function getMicroorganismList(data) {
    //console.log('proc-deploy_actions.getMicroorganismList', data);
    return { type: MICROORGANISM_LIST, DATA: data };
  }
  function getBrowserSampleData(data) {
    //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
    return { type: SELECT_BROWSER_SAMPLE_OBJECT, DATA: data };
  }
  function getBrowserIncubatorData(data) {
    //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
    return { type: SELECT_BROWSER_INCUBATOR_OBJECT, DATA: data };
  }
  function getBrowserBatchData(data) {
    //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
    return { type: SELECT_BROWSER_BATCH_OBJECT, DATA: data };
  }
  function getBrowserProdLotData(data) {
    //console.log('proc-deploy_actions.getBrowserProdLotData', data);
    return { type: SELECT_BROWSER_PRODLOT_OBJECT, DATA: data };
  }
  function setKPIs(data) {
    //console.log('proc-deploy_actions.getBrowserProdLotData', data);
    return { type: KPIS, DATA: data };
  }
  const SAMPLE_TEMPLATES = "SAMPLE_TEMPLATES" + schemaName;
  _exports.SAMPLE_TEMPLATES = SAMPLE_TEMPLATES;
  const UNRECEIVED_SAMPLES_LIST = "UNRECEIVED_SAMPLES_LIST" + schemaName;
  _exports.UNRECEIVED_SAMPLES_LIST = UNRECEIVED_SAMPLES_LIST;
  const RECEIVED_SAMPLES_IN_SESSION = "COC_USERS_LIST" + schemaName;
  _exports.RECEIVED_SAMPLES_IN_SESSION = RECEIVED_SAMPLES_IN_SESSION;
  const FOR_REVISION_SAMPLES_LIST = "FOR_REVISION_SAMPLES_LIST" + schemaName;
  _exports.FOR_REVISION_SAMPLES_LIST = FOR_REVISION_SAMPLES_LIST;
  const FOR_RESULTS_SAMPLES_LIST = "FOR_RESULTS_SAMPLES_LIST" + schemaName;
  _exports.FOR_RESULTS_SAMPLES_LIST = FOR_RESULTS_SAMPLES_LIST;
  const FOR_RESULTS_SAMPLES_CUSTODIAN_LIST =
    "FOR_RESULTS_SAMPLES_CUSTODIAN_LIST" + schemaName;
  _exports.FOR_RESULTS_SAMPLES_CUSTODIAN_LIST = FOR_RESULTS_SAMPLES_CUSTODIAN_LIST;
  const FOR_RESULTS_SAMPLES_CANDIDATE_LIST =
    "FOR_RESULTS_SAMPLES_CANDIDATE_LIST" + schemaName;
  _exports.FOR_RESULTS_SAMPLES_CANDIDATE_LIST = FOR_RESULTS_SAMPLES_CANDIDATE_LIST;
  const ANALYSIS_LIST = "ANALYSIS_LIST" + schemaName;
  _exports.ANALYSIS_LIST = ANALYSIS_LIST;
  const GIVEN_SAMPLE_ANALYSIS_LIST = "GIVEN_SAMPLE_ANALYSIS_LIST" + schemaName;
  _exports.GIVEN_SAMPLE_ANALYSIS_LIST = GIVEN_SAMPLE_ANALYSIS_LIST;
  const GIVEN_SAMPLE_ANALYSIS_RESULT_LIST =
    "GIVEN_SAMPLE_ANALYSIS_RESULT_LIST" + schemaName;
  _exports.GIVEN_SAMPLE_ANALYSIS_RESULT_LIST = GIVEN_SAMPLE_ANALYSIS_RESULT_LIST;
  const COC_SAMPLE_HISTORY = "COC_SAMPLE_HISTORY" + schemaName;
  _exports.COC_SAMPLE_HISTORY = COC_SAMPLE_HISTORY;
  const COC_USERS_LIST = "COC_USERS_LIST" + schemaName;
  _exports.COC_USERS_LIST = COC_USERS_LIST;
  function getGivenCocUsersList(data) {
    //  console.log('process-us_actions.sampleTemplates', data);
    return { type: COC_USERS_LIST, DATA: data };
  }
  function getGivenSampleAnalysisResultEntry(data) {
    //  console.log('process-us_actions.sampleTemplates', data);
    return { type: GIVEN_SAMPLE_ANALYSIS_RESULT_LIST, DATA: data };
  }
  function givenSampleAnalysisList(data) {
    //  console.log('process-us_actions.sampleTemplates', data);
    return { type: GIVEN_SAMPLE_ANALYSIS_LIST, DATA: data };
  }
  function analysisAllList(data) {
    //  console.log('process-us_actions.sampleTemplates', data);
    return { type: ANALYSIS_LIST, DATA: data };
  }
  function sampleTemplates(data) {
    //  console.log('process-us_actions.sampleTemplates', data);
    return { type: SAMPLE_TEMPLATES, DATA: data };
  }
  function unReceivedSamples(data) {
    //    console.log('process-us_actions.sampleTemplates', data);
    return { type: UNRECEIVED_SAMPLES_LIST, DATA: data };
  }
  function receivedSamplesInSession(data) {
    //    console.log('process-us_actions.sampleTemplates', data);
    return { type: RECEIVED_SAMPLES_IN_SESSION, DATA: data };
  }
  function forResultsSamples(data) {
    //      console.log('Redux.Actions >> process-us_actions.forResultsSamples', data);
    return { type: FOR_RESULTS_SAMPLES_LIST, DATA: data };
  }
  function forResultsSamplesCustodian(data) {
    //      console.log('Redux.Actions >> process-us_actions.forResultsSamples', data);
    return { type: FOR_RESULTS_SAMPLES_CUSTODIAN_LIST, DATA: data };
  }
  function forResultsSamplesCandidate(data) {
    //      console.log('Redux.Actions >> process-us_actions.forResultsSamples', data);
    return { type: FOR_RESULTS_SAMPLES_CANDIDATE_LIST, DATA: data };
  }
  function givenCocSampleHistory(data) {
    //        console.log('Redux.Actions >> process-us_actions.forResultsSamples', data);
    return { type: COC_SAMPLE_HISTORY, DATA: data };
  }
  function forRevisionSamples(data) {
    //  console.log('process-us_actions.forRevisionSamples', data);
    return { type: FOR_REVISION_SAMPLES_LIST, DATA: data };
  }
  function getSampleStatsCounterByStage(data) {
    //  console.log('process-us_actions.forRevisionSamples', data);
    return { type: SAMPLE_STATS_COUNTER_BY_STAGE, DATA: data };
  }
  function getSampleStatsLastNresults(data) {
    //  console.log('process-us_actions.forRevisionSamples', data);
    return { type: SAMPLE_STATS_LAST_N_RESULTS, DATA: data };
  }
});
