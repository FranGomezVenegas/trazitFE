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
  _exports.FrontendEndpointsEnvMonitBrowser = void 0;
  /**
   * @mixinFunction
   * @polymer
   */ const FrontendEndpointsEnvMonitBrowser = (superClass) =>
    class extends (0, _apiSettings.ApiSettings)(
      (0, _toastMethods.ToastMethods)((0, _tokenMixin.tokenMixin)(superClass))
    ) {
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
      getBrowserSelectedIncubatorData(data) {
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
              actionName: "GET_INCUBATOR_REPORT",
              finalToken: this.getFinalToken(),
              incubatorName: data.incubName,
              incubatorFieldToRetrieve: data.browserIncubatorFieldToRetrieve,
              incubatorFieldsToDisplay: data.browserIncubatorFieldsToDisplay,
              startDate: data.startDate,
              endDate: data.endDate,
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _procDeploy_actions.getBrowserIncubatorData)(response.data)
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
      getBrowserSelectedBatchData(data) {
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
              actionName: "GET_BATCH_REPORT",
              finalToken: this.getFinalToken(),
              batchName: data.BatchName,
              batchFieldToRetrieve: data.browserBatchFieldToRetrieve,
              batchFieldsToDisplay: data.browserBatchFieldsToDisplay,
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _procDeploy_actions.getBrowserBatchData)(response.data)
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
      getBrowserSelectedProdLotData(data) {
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
              actionName: "GET_PRODLOT_REPORT",
              finalToken: this.getFinalToken(),
              lotName: data.prodLotName,
              prodLotFieldToRetrieve: data.browserProdLotFieldToRetrieve,
              prodLotFieldsToDisplay: data.browserProdLotFieldsToDisplay,
              sampleFieldToRetrieve: data.browserSampleFieldToRetrieve,
              sampleFieldsToDisplay: data.browserSampleFieldsToDisplay,
              sampleWhereFieldName: data.sampleWhereFieldName,
              sampleWhereFieldValue: data.sampleWhereFieldValue,
              sampleGroups: data.sampleGroups,
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _procDeploy_actions.getBrowserProdLotData)(response.data)
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
  _exports.FrontendEndpointsEnvMonitBrowser = FrontendEndpointsEnvMonitBrowser;
});
