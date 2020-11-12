define([
  "exports",
  "../../config/platform/logic/api-config.js",
  "../../store.js",
  "../../elements/platformComponents/Redux/actions/notifications_actions.js",
  "../functions/toast-methods.js",
  "./api-settings.js",
  "../store/token-mixin.js",
], function (
  _exports,
  _apiConfig,
  _store,
  _notifications_actions,
  _toastMethods,
  _apiSettings,
  _tokenMixin
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.ApiIncidents = void 0;
  /**
   * @mixinFunction
   * @polymer
   */ const ApiIncidents = (superClass) =>
    class extends (0, _apiSettings.ApiSettings)(
      (0, _toastMethods.ToastMethods)((0, _tokenMixin.tokenMixin)(superClass))
    ) {
      incidentsEndPoint(data) {
        var endpoints_returningError = this.endpoints_returningError(),
          finalToken = this.getFinalToken(),
          apiUrl =
            _apiConfig.backendUrl +
            _apiConfig.ApiIncidentsUrl +
            "?" +
            "finalToken=" +
            finalToken;
        if (data.paramsUrl) {
          apiUrl = apiUrl + "&" + data.paramsUrl;
        }
        axios({
          method: "post",
          url: apiUrl,
          data: JSON.stringify({ firstName: "Finn", lastName: "Williams" }),
        })
          .then((response) => {
            if (200 == response.status) {
              _store.store.dispatch(
                (0, _notifications_actions.addNotification)(response.data)
              );
              this.toastSuccessMessage(response.data);
              if (data.callBackFunction) {
                data.callBackFunction();
              }
              return;
            }
            if (data.callBackFunctionError) {
              data.callBackFunctionError();
            }
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_not_status_200,
              response
            );
            return;
          })
          .catch(function (error) {
            if (data.callBackFunctionError) {
              data.callBackFunctionError();
            }
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_error,
              error
            );
            _store.store.dispatch(
              (0, _notifications_actions.addNotification)({
                notificationName: data.schemaPrefix + "." + data.actionName,
                label_en: error.message,
                label_es: error.message,
                diagnoses: "ERROR",
              })
            );
            return;
          })
          .then(function () {});
      }
    };
  _exports.ApiIncidents = ApiIncidents;
});
