import {
  backendUrl,
  appProcedureListApiUrl,
} from "../../config/platform/logic/api-config.js";
import { store } from "../../store.js";
import { tokenMixin } from "../store/token-mixin.js";
import { ToastMethods } from "../functions/toast-methods.js";
import { setAppProcedureList } from "../../elements/platformComponents/Redux/actions/app_actions.js";
import { ApiSettings } from "./api-settings.js";
/**
 * @mixinFunction
 * @polymer
 */ export const ProcedureList = (superClass) =>
  class extends ApiSettings(ToastMethods(tokenMixin(superClass))) {
    sleep(milliseconds) {
      for (var start = new Date().getTime(), i = 0; 1e7 > i; i++) {
        if (new Date().getTime() - start > milliseconds) {
          break;
        }
      }
    }
    getProcedureList(data) {
      var endpoints_returningError = this.endpoints_returningError();
      if (data && data.finalToken) {
        var finalToken = data.finalToken;
      } else {
        var finalToken = this.getFinalToken();
      }
      if (!finalToken) {
        return;
      }
      var apiUrl = backendUrl + appProcedureListApiUrl;
      if (!finalToken) {
        return;
      }
      axios
        .get(apiUrl, { params: { finalToken: finalToken } })
        .then((response) => {
          if (200 == response.status) {
            store.dispatch(setAppProcedureList(response.data));
            if (data && data.callBackFunction) {
              data.callBackFunction();
            }
            if (data && data.callBackFunction2) {
              data.callBackFunction2();
            }
            return;
          }
          if (data && data.callBackFunctionError) {
            data.callBackFunctionError();
          }
          this.toastErrorMessageWithApiResponse(
            endpoints_returningError.response_not_status_200,
            response
          );
        })
        .catch(function (error) {
          if (data && data.callBackFunctionError) {
            data.callBackFunctionError();
          }
          this.toastErrorMessageWithApiResponse(
            endpoints_returningError.response_error,
            error
          );
        })
        .then(function () {});
    }
  };
