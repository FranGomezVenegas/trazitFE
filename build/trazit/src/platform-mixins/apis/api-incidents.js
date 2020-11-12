import {
  backendUrl,
  ApiIncidentsUrl,
} from "../../config/platform/logic/api-config.js";
import { store } from "../../store.js";
import { addNotification } from "../../elements/platformComponents/Redux/actions/notifications_actions.js";
import { ToastMethods } from "../functions/toast-methods.js";
import { ApiSettings } from "./api-settings.js";
import { tokenMixin } from "../store/token-mixin.js";
/**
 * @mixinFunction
 * @polymer
 */ export const ApiIncidents = (superClass) =>
  class extends ApiSettings(ToastMethods(tokenMixin(superClass))) {
    incidentsEndPoint(data) {
      var endpoints_returningError = this.endpoints_returningError(),
        finalToken = this.getFinalToken(),
        apiUrl =
          backendUrl + ApiIncidentsUrl + "?" + "finalToken=" + finalToken;
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
            store.dispatch(addNotification(response.data));
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
          store.dispatch(
            addNotification({
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
