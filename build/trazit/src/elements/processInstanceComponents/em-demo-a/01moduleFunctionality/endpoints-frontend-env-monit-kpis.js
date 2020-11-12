import {
  backendUrl,
  ApiEnvMonitStatsUrl,
} from "../../../../config/platform/logic/api-config.js";
import { store } from "../../../../store.js";
import { ApiSettings } from "../../../../platform-mixins/apis/api-settings.js";
import { tokenMixin } from "../../../../platform-mixins/store/token-mixin.js";
import { ToastMethods } from "../../../../platform-mixins/functions/toast-methods.js";
import { schema_name } from "../03config/config-process.js";
import { setKPIs as setKPIs_em_demo_a } from "../02Redux/em-demo-a_actions.js";
/**
 * @mixinFunction
 * @polymer
 */ export const FrontendEndpointsEnvMonitKpis = (superClass) =>
  class extends ApiSettings(ToastMethods(tokenMixin(superClass))) {
    convertKPIDataArrayToParams(data) {
      var newData = {},
        i,
        objGroupName = "",
        tableCategory = "",
        tableName = "",
        whereFieldsName = "",
        whereFieldsValue = "",
        fieldsToRetrieveOrGrouping = "",
        dataGrouped = "";
      for (i = 0; i < data.length; i++) {
        objGroupName = objGroupName + data[i].objGroupName;
        tableCategory = tableCategory + data[i].tableCategory;
        tableName = tableName + data[i].tableName;
        whereFieldsName = whereFieldsName + data[i].whereFieldsName;
        whereFieldsValue = whereFieldsValue + data[i].whereFieldsValue;
        fieldsToRetrieveOrGrouping =
          fieldsToRetrieveOrGrouping + data[i].fieldsToRetrieveOrGrouping;
        dataGrouped = dataGrouped + data[i].dataGrouped;
        if (i < data.length - 1) {
          objGroupName = objGroupName + "/";
          tableCategory = tableCategory + "/";
          tableName = tableName + "/";
          whereFieldsName = whereFieldsName + "/";
          whereFieldsValue = whereFieldsValue + "/";
          fieldsToRetrieveOrGrouping = fieldsToRetrieveOrGrouping + "/";
          dataGrouped = dataGrouped + "/";
        }
      }
      newData.objGroupName = objGroupName;
      newData.tableCategory = tableCategory;
      newData.tableName = tableName;
      newData.whereFieldsName = whereFieldsName;
      newData.whereFieldsValue = whereFieldsValue;
      newData.fieldsToRetrieveOrGrouping = fieldsToRetrieveOrGrouping;
      newData.dataGrouped = dataGrouped;
      return newData;
    }
    setKPIs(data) {
      var newData = this.convertKPIDataArrayToParams(data),
        apiUrl = backendUrl + ApiEnvMonitStatsUrl; //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
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
            actionName: "KPIS",
            finalToken: this.getFinalToken(),
            objGroupName: newData.objGroupName,
            dataGrouped: newData.dataGrouped,
            tableCategory: newData.tableCategory,
            tableName: newData.tableName,
            whereFieldsName: newData.whereFieldsName,
            whereFieldsValue: newData.whereFieldsValue,
            fieldsToRetrieveOrGrouping: newData.fieldsToRetrieveOrGrouping,
          },
        })
        .then((response) => {
          if (200 == response.status) {
            //console.log(response.data);
            store.dispatch(setKPIs_em_demo_a(response.data));
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
