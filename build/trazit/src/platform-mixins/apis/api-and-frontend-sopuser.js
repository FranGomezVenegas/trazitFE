import {
  backendUrl,
  ApiSopUserUrl,
  frontEndSopUrl,
} from "../../config/platform/logic/api-config.js";
import { store } from "../../store.js";
import {
  sopUserAllSop,
  sopUserPendingSop,
} from "../../config/platform/logic/sop-config.js";
import { tokenMixin } from "../store/token-mixin.js";
import { ToastMethods } from "../functions/toast-methods.js";
import { ApiSettings } from "./api-settings.js";
import { ProcedureList } from "./api-platform-procedurelist.js";
import { addNotification } from "../../elements/platformComponents/Redux/actions/notifications_actions.js";
import {
  userAllSop,
  userPendingSop,
  procedureSops,
} from "../../elements/platformComponents/Redux/actions/sop_actions.js";
/**
 * @mixinFunction
 * @polymer
 */ export const ApiAndFrontendSopUser = (superClass) =>
  class extends ProcedureList(
    ApiSettings(ToastMethods(tokenMixin(superClass)))
  ) {
    fieldButtonClickedForSops(e) {
      if (!e.target.value.sop_name) {
        this.toastErrorMessage(this.objectNotSelected());
        return;
      }
      var datas = [],
        paramsUrl = "",
        actionName = e.detail.buttonName.toUpperCase(),
        schemaPrefix = e.target.value.procedure;
      switch (actionName) {
        case "SOP_MARK_AS_COMPLETED":
          var sopName = e.target.value.sop_name;
          datas.sopName = sopName;
          paramsUrl = paramsUrl + "&sopName=" + sopName;
          break;
        default:
          return;
      }
      paramsUrl =
        "&actionName=" +
        actionName + //+"&finalToken="+this.finalToken
        "&schemaPrefix=" +
        schemaPrefix +
        paramsUrl;
      datas.schemaPrefix = schemaPrefix;
      datas.actionName = actionName;
      datas.paramsUrl = paramsUrl;
      datas.callBackFunction = this.refreshAllAndMyPendingSops.bind(this);
      var tabInfo = {
        currTabEsignRequired: this.currTabEsignRequired,
        currTabConfirmUserRequired: this.currTabConfirmUserRequired,
      };
      datas.tabInfo = tabInfo;
      this.sopUserEndPoint(datas);
    }
    refreshAllAndMyPendingSops() {
      this.getMyPendingSops();
      this.getAllMySops();
    }
    getSopOnStartSession(data) {
      this.getMyPendingSops(data.finalToken);
      this.getAllMySops(data.finalToken);
    }
    getMyPendingSops(finalToken) {
      var actionName = "MY_PENDING_SOPS";
      if (!finalToken) {
        var finalToken = this.getFinalToken();
      }
      var paramsUrl =
          "actionName=" +
          actionName +
          "&finalToken=" +
          finalToken +
          "&sopFieldsToRetrieve=" +
          sopUserPendingSop.fieldToRetrieve,
        datas = [];
      datas.finalToken = finalToken;
      datas.actionName = actionName;
      datas.paramsUrl = paramsUrl;
      this.frontEndSopUserAPI(datas);
    }
    getAllMySops(finalToken) {
      var actionName = "ALL_MY_SOPS";
      if (!finalToken) {
        var finalToken = this.getFinalToken();
      }
      var paramsUrl =
          "actionName=" +
          actionName +
          "&finalToken=" +
          finalToken +
          "&sopFieldsToRetrieve=" +
          sopUserAllSop.fieldToRetrieve,
        datas = [];
      datas.finalToken = finalToken;
      datas.actionName = actionName;
      datas.paramsUrl = paramsUrl;
      this.frontEndSopUserAPI(datas);
    }
    statusLegend(item, lang) {
      //console.log('statusLegend', item.status);
      switch (item.light) {
        case "GREEN":
          return this.labelValue(lang, this.sopStatusLabel.pass);
        case "RED":
          return this.labelValue(lang, this.sopStatusLabel.not_pass);
        default:
          break;
      }
      switch (item.status) {
        case "PASS":
          return this.labelValue(lang, this.sopStatusLabel.pass);
        case "NOT_PASS":
          return this.labelValue(lang, this.sopStatusLabel.not_pass);
        default:
          return "Unknown";
      }
    }
    displayCompleteButton(item) {
      //console.log(item);
      switch (item.status) {
        case "PASS":
          return !1;
        case "NOT_PASS":
          return !0;
        default:
          return !1;
      }
    }
    certificationStatus(item) {
      //console.log('certificationStatus', item);
      switch (item.status) {
        case "PASS":
          return "icons:bookmark";
        case "NOT_PASS":
          return "icons:warning";
        case "CERTIFICATION_EXPIRED":
          return "icons:watch-later";
        default:
          return "icons:warning";
      } //return "icons:warning"; "icons:bookmark";"xf046@FontAwesome";
    }
    certificationStatusStyleDefinition(item) {
      switch (item.status) {
        case "PASS":
          return "color:green;";
        case "NOT_PASS":
          return "color:red;";
        default:
          return "color:red;";
      }
    }
    frontEndSopUserAPI(data) {
      var apiUrl = backendUrl + frontEndSopUrl + "?" + data.paramsUrl;
      if (!data.finalToken) {
        return;
      }
      axios
        .get(apiUrl)
        .then((response) => {
          if (200 == response.status) {
            switch (data.actionName) {
              case "ALL_MY_SOPS":
                store.dispatch(userAllSop(response.data));
                break;
              case "MY_PENDING_SOPS":
                store.dispatch(userPendingSop(response.data));
                break;
              case "*************PROCEDURE_SOPS":
                store.dispatch(procedureSops(response.data));
                break;
              default:
                return;
            }
            if (data && data.callBackFunction) {
              data.callBackFunction();
            }
            return;
          }
          if (data.callBackFunctionError) {
            data.callBackFunctionError();
          }
          store.dispatch(
            addNotification({
              notificationName: data.prefixName + "." + data.actionName,
              label_en: error.message,
              label_es: error.message,
              new_sample: 0,
              diagnoses: "ERROR",
            })
          );
        })
        .catch(function (error) {
          console.log(error.message);
          if (data && data.callBackFunctionError) {
            data.callBackFunctionError();
          }
        })
        .then(function () {});
    }
    sopUserEndPoint(data) {
      var endpoints_returningError = this.endpoints_returningError(),
        finalToken = this.getFinalToken();
      if (!finalToken) {
        finalToken = data.finalToken;
      }
      var apiUrl = backendUrl + ApiSopUserUrl + "?" + data.paramsUrl;
      apiUrl = apiUrl + "&finalToken=" + finalToken;
      axios
        .get(apiUrl)
        .then((response) => {
          var notifObj = [];
          notifObj.notificationName = data.schemaPrefix + "." + data.actionName;
          notifObj.label_en = response.data.message_en;
          notifObj.label_es = response.data.message_es;
          notifObj.diagnostic = response.data.diagnostic;
          store.dispatch(addNotification(notifObj));
          if ("LABPLANET_TRUE" == response.data.diagnostic) {
            this.toastSuccessMessage(response.data);
          } else {
            this.toastErrorMessageWithApiResponse(response.data);
          }
          if (200 == response.status) {
            if (data.callBackFunction) {
              data.callBackFunction();
            }
            if ("SOP_MARK_AS_COMPLETED" == data.actionName) {
              var procListData = [];
              this.getProcedureList(procListData);
            }
            return;
          }
          if (data.callBackFunctionError) {
            data.callBackFunctionError();
          }
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
        })
        .then(function () {});
    }
  };
