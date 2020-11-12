import {
  backendUrl,
  frontEndEnvMonitIncubationUrl,
  frontEndEnvMonitIncubBatchUrl,
  frontEndEnvMonitUrl,
  frontEndInvestigationUrl,
} from "../../../../config/platform/logic/api-config.js";
import { store } from "../../../../store.js";
import { ApiSettings } from "../../../../platform-mixins/apis/api-settings.js";
import { tokenMixin } from "../../../../platform-mixins/store/token-mixin.js";
import { ToastMethods } from "../../../../platform-mixins/functions/toast-methods.js";
import { schema_name } from "../03config/config-process.js";
import { getActiveProductionLots as getActiveProductionLots_em_demo_a } from "../02Redux/em-demo-a_actions.js";
import {
  getActiveBatches as getActiveBatches_em_demo_a,
  getAllIncubators as getAllIncubators_em_demo_a,
} from "../02Redux/em-demo-a_actions.js";
import {
  getPrograms as getPrograms_em_demo_a,
  selectedProgramCorrectiveActionList as selectedProgramCorrectiveActionList_em_demo_a,
} from "../02Redux/em-demo-a_actions.js";
import {
  getOpenInvestigations as getOpenInvestigations_em_demo_a,
  getInvestigationResultsPendingDecision as getInvestigationResultsPendingDecision_em_demo_a,
} from "../02Redux/em-demo-a_actions.js";
export const FrontendEndpointsEnvMonitForPrograms = (superClass) =>
  class extends ApiSettings(ToastMethods(tokenMixin(superClass))) {
    getPrograms(data) {
      var apiUrl = backendUrl + frontEndEnvMonitUrl; //console.log('getActiveBatches', apiUrl, data);
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
            actionName: "PROGRAMS_LIST",
            finalToken: this.getFinalToken(),
          },
        })
        .then((response) => {
          if (200 == response.status) {
            //console.log(response.data);
            store.dispatch(getPrograms_em_demo_a(response.data));
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
      var apiUrl = backendUrl + frontEndEnvMonitUrl; //console.log('getActiveBatches', apiUrl, data);
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
            actionName: "PROGRAMS_CORRECTIVE_ACTION_LIST",
            finalToken: this.getFinalToken(),
            programName: data.programName,
          },
        })
        .then((response) => {
          if (200 == response.status) {
            //console.log(response.data);
            store.dispatch(
              selectedProgramCorrectiveActionList_em_demo_a(response.data)
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
export const FrontendEndpointsEnvMonitForBatches = (superClass) =>
  class extends ApiSettings(ToastMethods(tokenMixin(superClass))) {
    getActiveBatches(data) {
      var apiUrl = backendUrl + frontEndEnvMonitIncubBatchUrl; //console.log('getActiveBatches', apiUrl, data);
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
            actionName: "ACTIVE_BATCH_LIST",
            finalToken: this.getFinalToken(),
          },
        })
        .then((response) => {
          if (200 == response.status) {
            //console.log(response.data);
            store.dispatch(getActiveBatches_em_demo_a(response.data));
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
      var apiUrl = backendUrl + frontEndEnvMonitIncubationUrl; //console.log('getAllIncubators', apiUrl, data);
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
            actionName: "INCUBATORS_LIST",
            finalToken: this.getFinalToken(),
          },
        })
        .then((response) => {
          if (200 == response.status) {
            //console.log(response.data);
            store.dispatch(getAllIncubators_em_demo_a(response.data));
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
export const FrontendEndpointsEnvMonitForProductionLot = (superClass) =>
  class extends ApiSettings(ToastMethods(tokenMixin(superClass))) {
    getActiveProductionLotsList(data) {
      var apiUrl = backendUrl + frontEndEnvMonitUrl; //console.log('getActiveBatches', apiUrl, data);
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
            actionName: "GET_ACTIVE_PRODUCTION_LOTS",
            finalToken: this.getFinalToken(),
          },
        })
        .then((response) => {
          if (200 == response.status) {
            //console.log(response.data);
            store.dispatch(getActiveProductionLots_em_demo_a(response.data));
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
export const FrontendEndpointsEnvMonitForInvestigation = (superClass) =>
  class extends ApiSettings(ToastMethods(tokenMixin(superClass))) {
    getOpenInvestigationsList(data) {
      var apiUrl = backendUrl + frontEndInvestigationUrl; //console.log('getOpenInvestigationsList', apiUrl, data);
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
            actionName: "OPEN_INVESTIGATIONS",
            finalToken: this.getFinalToken(),
          },
        })
        .then((response) => {
          if (200 == response.status) {
            //console.log(response.data);
            store.dispatch(getOpenInvestigations_em_demo_a(response.data));
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
      var apiUrl = backendUrl + frontEndInvestigationUrl; //console.log('getInvestigationResultsPendingDecision', apiUrl, data);
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
            actionName: "INVESTIGATION_RESULTS_PENDING_DECISION",
            finalToken: this.getFinalToken(),
          },
        })
        .then((response) => {
          if (200 == response.status) {
            //console.log(response.data);
            store.dispatch(
              getInvestigationResultsPendingDecision_em_demo_a(response.data)
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
