define([
  "exports",
  "../../../../config/platform/logic/api-config.js",
  "../../../../store.js",
  "../../../../platform-mixins/apis/api-settings.js",
  "../../../../platform-mixins/store/token-mixin.js",
  "../../../../platform-mixins/functions/toast-methods.js",
  "../02Redux/procedures_actions.js",
], function (
  _exports,
  _apiConfig,
  _store,
  _apiSettings,
  _tokenMixin,
  _toastMethods,
  _procedures_actions
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.FrontendEndpointsProcedures = void 0;
  const FrontendEndpointsProcedures = (superClass) =>
    class extends (0, _apiSettings.ApiSettings)(
      (0, _toastMethods.ToastMethods)((0, _tokenMixin.tokenMixin)(superClass))
    ) {
      getProcedureDefinition(data) {
        var apiUrl =
          _apiConfig.backendUrl + _apiConfig.frontEndProcedureDefinition;
        console.log("getProcedureDefinition", apiUrl, data);
        if (!this.getFinalToken()) {
          return;
        }
        axios
          .get(apiUrl, {
            params: {
              actionName: "ALL_PROCEDURE_DEFINITION",
              schemaPrefix: (data.procedureName + "").replace(/_/g, "-"),
              finalToken: this.getFinalToken(),
            },
          })
          .then((response) => {
            if (200 == response.status) {
              //console.log(response.data);
              _store.store.dispatch(
                (0, _procedures_actions.setSelectedProcedure)(response.data)
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
  _exports.FrontendEndpointsProcedures = FrontendEndpointsProcedures;
});
