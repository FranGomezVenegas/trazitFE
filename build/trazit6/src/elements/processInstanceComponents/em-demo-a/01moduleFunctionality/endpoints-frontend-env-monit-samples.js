define([
  "exports",
  "../../../../config/platform/logic/api-config.js",
  "../../../../store.js",
  "../../../../platform-mixins/apis/api-settings.js",
  "../../../../platform-mixins/store/token-mixin.js",
  "../../../../platform-mixins/functions/toast-methods.js",
  "../03config/config-process.js",
  "../02Redux/em-demo-a_actions.js",
], function (
  _exports,
  _apiConfig,
  _store,
  _apiSettings,
  _tokenMixin,
  _toastMethods,
  _configProcess,
  _emDemoA_actions
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.FrontendEndpointsEnvMonitSamples = _exports.samplesStagesReduxVariables = void 0;
  /**
   * @mixinFunction
   * @polymer
   */ const samplesStagesReduxVariables = {
    SAMPLES_SAMPLING: {
      name: "samples_sampling",
      actionName: "SAMPLES_BY_STAGE",
      reducerPropertyName: "getAllSamplesStageSampling",
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
        //console.log('getSamplesInProgress', apiUrl, data, 'reduxVariable', reduxVariable);
        var actionName = reduxVariable.actionName,
          endpoints_returningError = this.endpoints_returningError(),
          apiUrl = _apiConfig.backendUrl + _apiConfig.frontEndEnvMonitSampleUrl;
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
              actionName: actionName,
              finalToken: this.getFinalToken(),
              sampleFieldToRetrieve: data.sampleFieldToRetrieve,
              whereFieldsName: data.samplesWhereFieldsName,
              whereFieldsValue: data.samplesWhereFieldsValue,
              sortFieldsName: data.samplesTabSortFields,
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //            console.log(response.data);
              switch (reduxVariable.name) {
                case "samples_sampling":
                  _store.store.dispatch(
                    (0, _emDemoA_actions.getAllSamplesStageSampling)(
                      response.data
                    )
                  );
                  break;
                case "samples_plate_reading":
                  _store.store.dispatch(
                    (0, _emDemoA_actions.getAllSamplesStagePlateReading)(
                      response.data
                    )
                  );
                  break;
                case "samples_microorg_identif":
                  _store.store.dispatch(
                    (0, _emDemoA_actions.getAllSamplesStageMicroorganism)(
                      response.data
                    )
                  );
                  break;
                case "person_sampling":
                  _store.store.dispatch(
                    (0, _emDemoA_actions.getAllPersonSamplesStageSampling)(
                      response.data
                    )
                  );
                  break;
                case "person_plate_reading":
                  _store.store.dispatch(
                    (0, _emDemoA_actions.getAllPersonSamplesStagePlateReading)(
                      response.data
                    )
                  );
                  break;
                case "person_microorg_identif":
                  _store.store.dispatch(
                    (0, _emDemoA_actions.getAllPersonSamplesStageMicroorganism)(
                      response.data
                    )
                  );
                  break;
                case "pending_incubation1":
                  _store.store.dispatch(
                    (0, _emDemoA_actions.getAllSamplesStageIncubation1)(
                      response.data
                    )
                  );
                  break;
                case "pending_incubation2":
                  _store.store.dispatch(
                    (0, _emDemoA_actions.getAllSamplesStageIncubation2)(
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
                (0, _emDemoA_actions.getSampleAudit)(response.data)
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
        axios
          .get(apiUrl, {
            params: {
              schemaPrefix: _configProcess.schema_name,
              actionName: "GET_SAMPLE_ANALYSIS_RESULT_LIST",
              finalToken: this.getFinalToken(),
              sampleId: data.sampleId,
              sampleAnalysisResultFieldToRetrieve: data.fieldToRetrieve,
              sortFieldsName: data.fieldToSort,
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _emDemoA_actions.getGivenSampleAnalysisResultEntry)(
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
                (0, _emDemoA_actions.getMicroorganismList)(response.data)
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
                (0, _emDemoA_actions.getSampleStatsCounterByStage)(
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
                (0, _emDemoA_actions.getSampleStatsLastNresults)(response.data)
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
                (0, _emDemoA_actions.getBrowserSampleData)(response.data)
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
