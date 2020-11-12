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
  _exports.FrontendEndpointsEnvMonitKpis = void 0;
  /**
   * @mixinFunction
   * @polymer
   */ const FrontendEndpointsEnvMonitKpis = (superClass) =>
    class extends (0, _apiSettings.ApiSettings)(
      (0, _toastMethods.ToastMethods)((0, _tokenMixin.tokenMixin)(superClass))
    ) {
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
          apiUrl = _apiConfig.backendUrl + _apiConfig.ApiEnvMonitStatsUrl; //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
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
              _store.store.dispatch(
                (0, _emDemoA_actions.setKPIs)(response.data)
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
  _exports.FrontendEndpointsEnvMonitKpis = FrontendEndpointsEnvMonitKpis;
});
