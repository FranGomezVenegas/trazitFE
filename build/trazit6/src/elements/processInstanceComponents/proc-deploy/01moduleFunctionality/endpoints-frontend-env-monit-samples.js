define([
  "exports",
  "../../../../config/platform/logic/api-config.js",
  "../../../../store.js",
  "../../../../platform-mixins/apis/api-settings.js",
  "../../../../platform-mixins/store/token-mixin.js",
  "../../../../platform-mixins/functions/toast-methods.js",
  "../03config/config-process.js",
  "../02Redux/proc-deploy_actions.js",
], function (
  _exports,
  _apiConfig,
  _store,
  _apiSettings,
  _tokenMixin,
  _toastMethods,
  _configProcess,
  _procDeploy_actions
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.FrontendEndpointsEnvMonitSamples = _exports.samplesStagesReduxVariables = void 0;
  /**
   * @mixinFunction
   * @polymer
   */ const samplesStagesReduxVariables = {
    SAMPLES_IN_PROGRESS_FQ: {
      name: "samples_in_progress_fq",
      actionName: "SAMPLES_INPROGRESS_LIST",
      reducerPropertyName: "getAllSamplesInProgressFQ",
    },
    SAMPLES_IN_PROGRESS_MB: {
      name: "samples_in_progress_mb",
      actionName: "SAMPLES_INPROGRESS_LIST",
      reducerPropertyName: "getAllSamplesInProgressMB",
    },
    SAMPLES_PENDINGREVISION_TESTINGGROUPFQ: {
      name: "samples_pendingrevision_testinggroup_fq",
      actionName: "SAMPLES_PENDING_TESTINGGROUP_REVISION",
      reducerPropertyName: "getSamplesPendingRevisionTestingGroupFQ",
    },
    SAMPLES_PENDINGREVISION_TESTINGGROUPMB: {
      name: "samples_pendingrevision_testinggroup_mb",
      actionName: "SAMPLES_PENDING_TESTINGGROUP_REVISION",
      reducerPropertyName: "getSamplesPendingRevisionTestingGroupMB",
    },
    SAMPLEANALYSIS_PENDINGREVISION_FQ: {
      name: "samplesanalysis_pendingrevision_fq",
      actionName: "SAMPLEANALYSIS_PENDING_REVISION",
      reducerPropertyName: "getSamplesAnalysisPendingRevisionFQ",
    },
    SAMPLEANALYSIS_PENDINGREVISION_MB: {
      name: "samplesanalysis_pendingrevision_mb",
      actionName: "SAMPLEANALYSIS_PENDING_REVISION",
      reducerPropertyName: "getSamplesAnalysisPendingRevisionMB",
    },
    SAMPLES_PENDINGSAMPLEREVISION: {
      name: "samples_pendingrevision_sample",
      actionName: "SAMPLES_PENDING_SAMPLE_REVISION",
      reducerPropertyName: "getSamplesPendingSampleRevision",
    },
    SAMPLES_PLATE_READING: {
      name: "samples_plate_reading",
      actionName: "SAMPLES_BY_STAGE",
      reducerPropertyName: "getAllSamplesStagePlateReading",
    },
    SAMPLES_MICROORG_IDENTIF: {
      name: "samples_microorg_identif",
      actionName: "GET_SAMPLE_MICROORGANISM_VIEW",
      reducerPropertyName: "getAllSamplesStageMicroorganism",
    },
    PERSON_SAMPLING: {
      name: "person_sampling",
      actionName: "SAMPLES_BY_STAGE",
      reducerPropertyName: "getAllPersonSamplesStageSampling",
    },
    PERSON_PLATE_READING: {
      name: "person_plate_reading",
      actionName: "SAMPLES_BY_STAGE",
      reducerPropertyName: "getAllPersonSamplesStagePlateReading",
    },
    PERSON_MICROORG_IDENTIF: {
      name: "person_microorg_identif",
      actionName: "GET_SAMPLE_MICROORGANISM_VIEW",
      reducerPropertyName: "getAllPersonSamplesStageMicroorganism",
    },
    PENDING_INCUBATION1: {
      name: "pending_incubation1",
      actionName: "SAMPLES_BY_STAGE",
      reducerPropertyName: "getAllSamplesStageIncubation1",
    },
    PENDING_INCUBATION2: {
      name: "pending_incubation2",
      actionName: "SAMPLES_BY_STAGE",
      reducerPropertyName: "getAllSamplesStageIncubation2",
    },
  };
  _exports.samplesStagesReduxVariables = samplesStagesReduxVariables;
  const FrontendEndpointsEnvMonitSamples = (superClass) =>
    class extends (0, _apiSettings.ApiSettings)(
      (0, _toastMethods.ToastMethods)((0, _tokenMixin.tokenMixin)(superClass))
    ) {
      getAllSamplesStageSampling(data, reduxVariable) {
        console.log(
          "getSamplesInProgress",
          apiUrl,
          data,
          "reduxVariable",
          reduxVariable
        );
        var actionName = reduxVariable.actionName,
          endpoints_returningError = this.endpoints_returningError(),
          apiUrl = _apiConfig.backendUrl + _apiConfig.frontEndEnvMonitSampleUrl;
        if (!this.getFinalToken()) {
          return;
        }
        if (!_configProcess.schema_name) {
          return;
        }
        console.log("getAllSamplesStageSampling", "data", data);
        var params = {
          schemaPrefix: _configProcess.schema_name,
          actionName: actionName,
          finalToken: this.getFinalToken(),
          sampleFieldToRetrieve: data.sampleFieldToRetrieve,
          whereFieldsName: data.samplesWhereFieldsName,
          whereFieldsValue: data.samplesWhereFieldsValue,
          sortFieldsName: data.samplesTabSortFields,
        };
        if ("SAMPLES_INPROGRESS_LIST" == reduxVariable.actionName) {
          if (data.addSampleAnalysis) {
            params.addSampleAnalysis = data.addSampleAnalysis;
          }
          if (data.addSampleAnalysisFieldToRetrieve) {
            params.addSampleAnalysisFieldToRetrieve =
              data.addSampleAnalysisFieldToRetrieve;
          }
          if (data.sampleAnalysisWhereFieldsName) {
            params.sampleAnalysisWhereFieldsName =
              data.sampleAnalysisWhereFieldsName;
          }
          if (data.sampleAnalysisWhereFieldsValue) {
            params.sampleAnalysisWhereFieldsValue =
              data.sampleAnalysisWhereFieldsValue;
          }
          if (data.addSampleAnalysisResult) {
            params.addSampleAnalysisResult = data.addSampleAnalysisResult;
          }
          if (data.sampleAnalysisResultWhereFieldsName) {
            params.sampleAnalysisResultWhereFieldsName =
              data.sampleAnalysisResultWhereFieldsName;
          }
          if (data.sampleAnalysisResultWhereFieldsValue) {
            params.sampleAnalysisResultWhereFieldsValue =
              data.sampleAnalysisResultWhereFieldsValue;
          }
          if (data.sampleLastLevel) {
            params.sampleLastLevel = data.sampleLastLevel;
          }
        }
        if (
          "SAMPLES_PENDING_TESTINGGROUP_REVISION" == reduxVariable.actionName
        ) {
          if (data.testingGroup) {
            params.testingGroup = data.testingGroup;
          }
        }
        if ("SAMPLEANALYSIS_PENDING_REVISION" == reduxVariable.actionName) {
          if (data.testingGroup) {
            params.sampleAnalysisWhereFieldsName = "testing_group";
            params.sampleAnalysisWhereFieldsValue =
              data.testingGroup + "*String";
          }
        }
        axios
          .get(apiUrl, { params: params })
          .then((response) => {
            if (200 == response.status) {
              //            console.log(response.data);
              // console.log(reduxVariable.name);
              switch (reduxVariable.name) {
                case "samples_in_progress_fq":
                  _store.store.dispatch(
                    (0, _procDeploy_actions.getSamplesInProgressFQ)(
                      response.data
                    )
                  );
                  break;
                case "samples_in_progress_mb":
                  _store.store.dispatch(
                    (0, _procDeploy_actions.getSamplesInProgressMB)(
                      response.data
                    )
                  );
                  break;
                case "samples_pendingrevision_testinggroup_fq":
                  _store.store.dispatch(
                    (0,
                    _procDeploy_actions.getSamplesPendingRevisionTestingGroupFQ)(
                      response.data
                    )
                  );
                  break;
                case "samples_pendingrevision_testinggroup_mb":
                  _store.store.dispatch(
                    (0,
                    _procDeploy_actions.getSamplesPendingRevisionTestingGroupMB)(
                      response.data
                    )
                  );
                  break;
                case "samplesanalysis_pendingrevision_fq":
                  _store.store.dispatch(
                    (0,
                    _procDeploy_actions.getSamplesAnalysisPendingRevisionFQ)(
                      response.data
                    )
                  );
                  break;
                case "samplesanalysis_pendingrevision_mb":
                  _store.store.dispatch(
                    (0,
                    _procDeploy_actions.getSamplesAnalysisPendingRevisionMB)(
                      response.data
                    )
                  );
                  break;
                case "samples_pendingrevision_sample":
                  _store.store.dispatch(
                    (0, _procDeploy_actions.getSamplesPendingSampleRevision)(
                      response.data
                    )
                  );
                  break;
                case "samples_sampling":
                  _store.store.dispatch(
                    (0, _procDeploy_actions.getAllSamplesStageSampling)(
                      response.data
                    )
                  );
                  break;
                case "samples_plate_reading":
                  _store.store.dispatch(
                    (0, _procDeploy_actions.getAllSamplesStagePlateReading)(
                      response.data
                    )
                  );
                  break;
                case "samples_microorg_identif":
                  _store.store.dispatch(
                    (0, _procDeploy_actions.getAllSamplesStageMicroorganism)(
                      response.data
                    )
                  );
                  break;
                case "person_sampling":
                  _store.store.dispatch(
                    (0, _procDeploy_actions.getAllPersonSamplesStageSampling)(
                      response.data
                    )
                  );
                  break;
                case "person_plate_reading":
                  _store.store.dispatch(
                    (0,
                    _procDeploy_actions.getAllPersonSamplesStagePlateReading)(
                      response.data
                    )
                  );
                  break;
                case "person_microorg_identif":
                  _store.store.dispatch(
                    (0,
                    _procDeploy_actions.getAllPersonSamplesStageMicroorganism)(
                      response.data
                    )
                  );
                  break;
                case "pending_incubation1":
                  _store.store.dispatch(
                    (0, _procDeploy_actions.getAllSamplesStageIncubation1)(
                      response.data
                    )
                  );
                  break;
                case "pending_incubation2":
                  _store.store.dispatch(
                    (0, _procDeploy_actions.getAllSamplesStageIncubation2)(
                      response.data
                    )
                  );
                  break;
                default:
                  this.toastErrorMessageWithApiResponse(
                    endpoints_returningError.response_not_status_200,
                    response
                  );
                  return;
              }
              if (data && data.callBackFunction) {
                data.callBackFunction();
              }
              return;
            }
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_not_status_200,
              response
            );
            if (data && data.callBackFunctionError) {
              data.callBackFunctionError();
            }
          })
          .catch(function (error) {
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_error,
              error
            );
            if (data && data.callBackFunctionError) {
              data.callBackFunctionError();
            }
            console.log(error.message);
          })
          .then(function () {});
      }
      getSampleAudit(data) {
        var apiUrl =
          _apiConfig.backendUrl + _apiConfig.frontEndEnvMonitSampleUrl; //console.log('getSampleAudit', apiUrl, data);
        if (!this.getFinalToken()) {
          return;
        }
        if (!_configProcess.schema_name) {
          return;
        }
        axios
          .get(apiUrl, {
            params: {
              schemaPrefix: _configProcess.schema_name,
              actionName: "GET_SAMPLE_AUDIT",
              finalToken: this.getFinalToken(),
              sampleId: data.sampleId,
              sampleAuditFieldToRetrieve: data.sampleAuditFieldToRetrieve,
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _procDeploy_actions.getSampleAudit)(response.data)
              );
              if (data && data.callBackFunction) {
                data.callBackFunction();
              }
              return;
            }
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_not_status_200,
              response
            );
            if (data && data.callBackFunctionError) {
              data.callBackFunctionError();
            }
            return;
          })
          .catch(function (error) {
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_error,
              error
            );
            if (data && data.callBackFunctionError) {
              data.callBackFunctionError();
            }
            console.log(error.message);
          })
          .then(function () {});
      }
      getGivenSampleAnalysisResultEntry(data) {
        var apiUrl =
          _apiConfig.backendUrl + _apiConfig.frontEndEnvMonitSampleUrl; //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()) {
          return;
        }
        if (!_configProcess.schema_name) {
          return;
        }
        var myparams = {
          schemaPrefix: _configProcess.schema_name,
          actionName: "GET_SAMPLE_ANALYSIS_RESULT_LIST",
          finalToken: this.getFinalToken(),
          sampleId: data.sampleId,
        };
        if (data.fieldToRetrieve) {
          myparams.sampleAnalysisResultFieldToRetrieve = data.fieldToRetrieve;
        }
        if (data.fieldToSort) {
          myparams.sortFieldsName = data.fieldToSort;
        }
        if (data.sampleAnalysisWhereFieldsName) {
          myparams.sampleAnalysisWhereFieldsName =
            data.sampleAnalysisWhereFieldsName;
        }
        if (data.sampleAnalysisWhereFieldsValue) {
          myparams.sampleAnalysisWhereFieldsValue =
            data.sampleAnalysisWhereFieldsValue;
        }
        axios
          .get(apiUrl, { params: myparams })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _procDeploy_actions.getGivenSampleAnalysisResultEntry)(
                  response.data
                )
              );
              if (data.callBackFunction) {
                data.callBackFunction();
              }
              return;
            }
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_not_status_200,
              response
            );
            if (data && data.callBackFunctionError) {
              data.callBackFunctionError();
            }
            return;
          })
          .catch(function (error) {
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_error,
              error
            );
            if (data && data.callBackFunctionError) {
              data.callBackFunctionError();
            }
            console.log(error.message);
          })
          .then(function () {});
      }
      getMicroorganismList(data) {
        var apiUrl =
          _apiConfig.backendUrl + _apiConfig.frontEndEnvMonitSampleUrl; //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()) {
          return;
        }
        if (!_configProcess.schema_name) {
          return;
        }
        axios
          .get(apiUrl, {
            params: {
              schemaPrefix: _configProcess.schema_name,
              actionName: "GET_MICROORGANISM_LIST",
              finalToken: this.getFinalToken(),
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _procDeploy_actions.getMicroorganismList)(response.data)
              );
              if (data && data.callBackFunction) {
                data.callBackFunction();
              }
              return;
            }
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_not_status_200,
              response
            );
            if (data && data.callBackFunctionError) {
              data.callBackFunctionError();
            }
            return;
          })
          .catch(function (error) {
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_error,
              error
            );
            if (data && data.callBackFunctionError) {
              data.callBackFunctionError();
            }
            console.log(error.message);
          })
          .then(function () {});
      }
      getSampleStatsCounterByStage(data) {
        var apiUrl =
          _apiConfig.backendUrl + _apiConfig.frontEndEnvMonitSampleUrl; //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()) {
          return;
        }
        if (!_configProcess.schema_name) {
          return;
        }
        axios
          .get(apiUrl, {
            params: {
              schemaPrefix: _configProcess.schema_name,
              actionName: "STATS_SAMPLES_PER_STAGE",
              finalToken: this.getFinalToken(),
              programName: data.programName,
              stagesToInclude: data.stagesToInclude,
              stagesToExclude: data.stagesToExclude,
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _procDeploy_actions.getSampleStatsCounterByStage)(
                  response.data
                )
              );
              if (data && data.callBackFunction) {
                data.callBackFunction();
              }
              return;
            }
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_not_status_200,
              response
            );
            if (data && data.callBackFunctionError) {
              data.callBackFunctionError();
            }
            return;
          })
          .catch(function (error) {
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_error,
              error
            );
            if (data && data.callBackFunctionError) {
              data.callBackFunctionError();
            }
            console.log(error.message);
          })
          .then(function () {});
      }
      getSampleStatsLastNresults(data) {
        var apiUrl =
          _apiConfig.backendUrl + _apiConfig.frontEndEnvMonitSampleUrl; //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()) {
          return;
        }
        if (!_configProcess.schema_name) {
          return;
        }
        axios
          .get(apiUrl, {
            params: {
              schemaPrefix: _configProcess.schema_name,
              actionName: "STATS_PROGRAM_LAST_RESULTS",
              finalToken: this.getFinalToken(),
              sampleId: data.sampleId,
              sampleFieldToRetrieve: data.browserSampleFieldToRetrieve,
              sampleFieldsToDisplay: data.browserSampleFieldsToDisplay,
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _procDeploy_actions.getSampleStatsLastNresults)(
                  response.data
                )
              );
              if (data && data.callBackFunction) {
                data.callBackFunction();
              }
              return;
            }
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_not_status_200,
              response
            );
            if (data && data.callBackFunctionError) {
              data.callBackFunctionError();
            }
            return;
          })
          .catch(function (error) {
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_error,
              error
            );
            if (data && data.callBackFunctionError) {
              data.callBackFunctionError();
            }
            console.log(error.message);
          })
          .then(function () {});
      }
      getBrowserSelectedSampleData(data) {
        var apiUrl =
          _apiConfig.backendUrl + _apiConfig.frontEndEnvMonitSampleUrl; //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()) {
          return;
        }
        if (!_configProcess.schema_name) {
          return;
        }
        axios
          .get(apiUrl, {
            params: {
              schemaPrefix: _configProcess.schema_name,
              actionName: "GET_SAMPLE_STAGES_SUMMARY_REPORT",
              finalToken: this.getFinalToken(),
              sampleId: data.sampleId,
              sampleFieldToRetrieve: data.browserSampleFieldToRetrieve,
              sampleFieldsToDisplay: data.browserSampleFieldsToDisplay,
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _procDeploy_actions.getBrowserSampleData)(response.data)
              );
              if (data && data.callBackFunction) {
                data.callBackFunction();
              }
              return;
            }
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_not_status_200,
              response
            );
            if (data && data.callBackFunctionError) {
              data.callBackFunctionError();
            }
            return;
          })
          .catch(function (error) {
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_error,
              error
            );
            if (data && data.callBackFunctionError) {
              data.callBackFunctionError();
            }
            console.log(error.message);
          })
          .then(function () {});
      }
    };
  _exports.FrontendEndpointsEnvMonitSamples = FrontendEndpointsEnvMonitSamples;
});
