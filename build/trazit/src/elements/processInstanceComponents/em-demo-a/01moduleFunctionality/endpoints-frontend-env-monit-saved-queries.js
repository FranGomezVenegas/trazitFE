import {
  backendUrl,
  frontEndSavedQueriesUrl,
} from "../../../../config/platform/logic/api-config.js";
import { store } from "../../../../store.js";
import { ApiSettings } from "../../../../platform-mixins/apis/api-settings.js";
import { tokenMixin } from "../../../../platform-mixins/store/token-mixin.js";
import { ToastMethods } from "../../../../platform-mixins/functions/toast-methods.js";
import { schema_name } from "../03config/config-process.js";
import {
  getBrowserSampleData as getBrowserSampleData_em_demo_a,
  getBrowserIncubatorData as getBrowserIncubatorData_em_demo_a,
  getBrowserBatchData as getBrowserBatchData_em_demo_a,
  getBrowserProdLotData as getBrowserProdLotData_em_demo_a,
  getAllSavedQueries as getAllSavedQueries_em_demo_a,
} from "../02Redux/em-demo-a_actions.js";
/**
 * @mixinFunction
 * @polymer
 */ export const FrontendEndpointsEnvMonitSavedQueries = (superClass) =>
  class extends ApiSettings(ToastMethods(tokenMixin(superClass))) {
    getAllSavedQueries(data, url) {
      var apiUrl = backendUrl + frontEndSavedQueriesUrl + "?" + url; // console.log('getAllSavedQueries', apiUrl, data);
      if (!this.getFinalToken()) {
        return;
      }
      if (!schema_name) {
        return;
      }
      axios
        .get(apiUrl, {
          params: {
            schemaPrefix: schema_name,
            actionName: "ALL_SAVED_QUERIES",
            finalToken: this.getFinalToken(),
          },
        })
        .then((response) => {
          if (200 == response.status) {
            //console.log(response.data);
            store.dispatch(getAllSavedQueries_em_demo_a(response.data));
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
