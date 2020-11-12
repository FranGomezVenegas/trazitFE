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
  _exports.FrontendEndpointsEnvMonitForInvestigation = _exports.FrontendEndpointsEnvMonitForProductionLot = _exports.FrontendEndpointsEnvMonitForBatches = _exports.FrontendEndpointsEnvMonitForPrograms = void 0;
  const FrontendEndpointsEnvMonitForPrograms = (superClass) =>
    class extends (0, _apiSettings.ApiSettings)(
      (0, _toastMethods.ToastMethods)((0, _tokenMixin.tokenMixin)(superClass))
    ) {
      getPrograms(data) {
        var apiUrl = _apiConfig.backendUrl + _apiConfig.frontEndEnvMonitUrl; //console.log('getActiveBatches', apiUrl, data);
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
              actionName: "PROGRAMS_LIST",
              finalToken: this.getFinalToken(),
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _emDemoA_actions.getPrograms)(response.data)
              );
              if (data && data.callBackFunction) {
                data.callBackFunction();
              }
              return;
            }
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
      getSelectedProgramCorrectiveAction(data) {
        var apiUrl = _apiConfig.backendUrl + _apiConfig.frontEndEnvMonitUrl; //console.log('getActiveBatches', apiUrl, data);
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
              actionName: "PROGRAMS_CORRECTIVE_ACTION_LIST",
              finalToken: this.getFinalToken(),
              programName: data.programName,
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _emDemoA_actions.selectedProgramCorrectiveActionList)(
                  response.data
                )
              );
              if (data && data.callBackFunction) {
                data.callBackFunction();
              }
              return;
            }
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
    };
  _exports.FrontendEndpointsEnvMonitForPrograms = FrontendEndpointsEnvMonitForPrograms;
  const FrontendEndpointsEnvMonitForBatches = (superClass) =>
    class extends (0, _apiSettings.ApiSettings)(
      (0, _toastMethods.ToastMethods)((0, _tokenMixin.tokenMixin)(superClass))
    ) {
      getActiveBatches(data) {
        var apiUrl =
          _apiConfig.backendUrl + _apiConfig.frontEndEnvMonitIncubBatchUrl; //console.log('getActiveBatches', apiUrl, data);
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
              actionName: "ACTIVE_BATCH_LIST",
              finalToken: this.getFinalToken(),
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _emDemoA_actions.getActiveBatches)(response.data)
              );
              if (data && data.callBackFunction) {
                data.callBackFunction();
              }
              return;
            }
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
      getAllIncubators(data) {
        var apiUrl =
          _apiConfig.backendUrl + _apiConfig.frontEndEnvMonitIncubationUrl; //console.log('getAllIncubators', apiUrl, data);
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
              actionName: "INCUBATORS_LIST",
              finalToken: this.getFinalToken(),
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _emDemoA_actions.getAllIncubators)(response.data)
              );
              if (data && data.callBackFunction) {
                data.callBackFunction();
              }
              return;
            }
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
    };
  _exports.FrontendEndpointsEnvMonitForBatches = FrontendEndpointsEnvMonitForBatches;
  const FrontendEndpointsEnvMonitForProductionLot = (superClass) =>
    class extends (0, _apiSettings.ApiSettings)(
      (0, _toastMethods.ToastMethods)((0, _tokenMixin.tokenMixin)(superClass))
    ) {
      getActiveProductionLotsList(data) {
        var apiUrl = _apiConfig.backendUrl + _apiConfig.frontEndEnvMonitUrl; //console.log('getActiveBatches', apiUrl, data);
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
              actionName: "GET_ACTIVE_PRODUCTION_LOTS",
              finalToken: this.getFinalToken(),
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _emDemoA_actions.getActiveProductionLots)(response.data)
              );
              if (data && data.callBackFunction) {
                data.callBackFunction();
              }
              return;
            }
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
    };
  _exports.FrontendEndpointsEnvMonitForProductionLot = FrontendEndpointsEnvMonitForProductionLot;
  const FrontendEndpointsEnvMonitForInvestigation = (superClass) =>
    class extends (0, _apiSettings.ApiSettings)(
      (0, _toastMethods.ToastMethods)((0, _tokenMixin.tokenMixin)(superClass))
    ) {
      getOpenInvestigationsList(data) {
        var apiUrl =
          _apiConfig.backendUrl + _apiConfig.frontEndInvestigationUrl; //console.log('getOpenInvestigationsList', apiUrl, data);
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
              actionName: "OPEN_INVESTIGATIONS",
              finalToken: this.getFinalToken(),
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _emDemoA_actions.getOpenInvestigations)(response.data)
              );
              if (data && data.callBackFunction) {
                data.callBackFunction();
              }
              return;
            }
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
      getInvestigationResultsPendingDecision(data) {
        var apiUrl =
          _apiConfig.backendUrl + _apiConfig.frontEndInvestigationUrl; //console.log('getInvestigationResultsPendingDecision', apiUrl, data);
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
              actionName: "INVESTIGATION_RESULTS_PENDING_DECISION",
              finalToken: this.getFinalToken(),
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _emDemoA_actions.getInvestigationResultsPendingDecision)(
                  response.data
                )
              );
              if (data && data.callBackFunction) {
                data.callBackFunction();
              }
              return;
            }
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
    };
  _exports.FrontendEndpointsEnvMonitForInvestigation = FrontendEndpointsEnvMonitForInvestigation;
});
