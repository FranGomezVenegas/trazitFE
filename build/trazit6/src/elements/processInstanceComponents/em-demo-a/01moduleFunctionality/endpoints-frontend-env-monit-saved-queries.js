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
  _exports.FrontendEndpointsEnvMonitSavedQueries = void 0;
  /**
   * @mixinFunction
   * @polymer
   */ const FrontendEndpointsEnvMonitSavedQueries = (superClass) =>
    class extends (0, _apiSettings.ApiSettings)(
      (0, _toastMethods.ToastMethods)((0, _tokenMixin.tokenMixin)(superClass))
    ) {
      getAllSavedQueries(data, url) {
        var apiUrl =
          _apiConfig.backendUrl +
          _apiConfig.frontEndSavedQueriesUrl +
          "?" +
          url; // console.log('getAllSavedQueries', apiUrl, data);
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
              actionName: "ALL_SAVED_QUERIES",
              finalToken: this.getFinalToken(),
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _emDemoA_actions.getAllSavedQueries)(response.data)
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
  _exports.FrontendEndpointsEnvMonitSavedQueries = FrontendEndpointsEnvMonitSavedQueries;
});
