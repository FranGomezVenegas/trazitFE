import { store } from "../../../../store";
import { ToastMethods } from "../../../../platform-mixins/functions/toast-methods";
import { EndpointsActionsEnvMonitModule } from "./0module-endpoints-actions-env-monit";
import { openEsignDialog } from "../../../platformComponents/Redux/actions/esign-actions";
import { openConfirmUserDialog } from "../../../platformComponents/Redux/actions/confirmuser-actions";
import { EnvMonitModuleDefinition } from "./0module-actions-available";

export const FunctionsEnvMonit = (superClass) =>
  class extends EnvMonitModuleDefinition(
    EndpointsActionsEnvMonitModule(ToastMethods(superClass))
  ) {
    selectedObjectIsMandatory(button) {
      if (
        button &&
        button.requires_selected_object != undefined &&
        button.requires_selected_object == false
      ) {
        return false;
      } else {
        return true;
      }
    }

    fieldButtonClickedForPrograms(e) {
      var buttonDefinition = e.detail.buttonDefinition;
      // console.log('frontend-env-monit-sample >> fieldButtonClicked ',
      //     'e.detail.buttonDefinition', e.detail.buttonDefinition, 'this.selectedObject', this.selectedObject);
      if (
        this.selectedObjectIsMandatory(buttonDefinition) &&
        this.selectedObject == null
      ) {
        this.toastErrorMessage(this.objectNotSelected());
        return;
      }
      var datas = [];
      datas.selectedObject = this.selectedObject;
      if (this.refreshWindow) {
        datas.callBackFunction = this.refreshWindow.bind(this);
      }
      this.moduleActionTrigger(buttonDefinition, datas, "PROGRAMS");
    }
    fieldButtonClickedForProductionLots(e) {
      var buttonDefinition = e.detail.buttonDefinition;
      // console.log('frontend-env-monit-sample >> fieldButtonClicked ',
      //     'e.detail.buttonDefinition', e.detail.buttonDefinition, 'this.selectedObject', this.selectedObject);
      if (
        this.selectedObjectIsMandatory(buttonDefinition) &&
        this.selectedObject == null
      ) {
        this.toastErrorMessage(this.objectNotSelected());
        return;
      }
      var datas = [];
      datas.selectedObject = this.selectedObject;
      if (this.refreshWindow) {
        datas.callBackFunction = this.refreshWindow.bind(this);
      }
      this.moduleActionTrigger(buttonDefinition, datas, "PRODUCTION_LOTS");
    }
    fieldButtonClickedForIncubBatch(e) {
      var buttonDefinition = e.detail.buttonDefinition;
      console.log(
        "frontend-env-monit-sample >> fieldButtonClicked ",
        "e.detail.buttonDefinition",
        e.detail.buttonDefinition,
        "this.selectedObject",
        this.selectedObject
      );
      if (
        this.selectedObjectIsMandatory(buttonDefinition) &&
        this.selectedObject == null
      ) {
        this.toastErrorMessage(this.objectNotSelected());
        return;
      }
      var datas = [];
      datas.selectedObject = this.selectedObject;
      if (this.refreshWindow) {
        datas.callBackFunction = this.refreshWindow.bind(this);
      }
      this.moduleActionTrigger(buttonDefinition, datas, "INCUB_BATCH");
    }

    dialogClosedProductionLotNew(e) {
      var buttonDefName = this.buttonDefinition.name;
      var actionDefinition = this.productionLotsActions().find(function (tab) {
        return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
      });
      if (e.detail.dialogState == "confirmed") {
        var datas = [];
        datas.newLotName = this.dialogProductionLotNew[0].value;
        this.moduleActionTriggerAPI(
          this.buttonDefinition.name,
          this.buttonDefinition,
          datas,
          this.getFunctionalArea("PRODUCTION_LOTS"),
          actionDefinition,
          this.callBackFunction,
          this.callBackFunctionError,
          this.refreshWindowMethod
        );
      }
      var elem = this.shadowRoot.getElementById("myelements"); //(actionDefinition.dialogInfo.webComponentName);
      if (elem) {
        elem.closeDialog(actionDefinition.dialogInfo.dialogName);
      } else {
        this.$.productionLotNew.close();
      }
    }

    dialogClosedProductionLotActivate(e) {
      var buttonDefName = this.buttonDefinition.name;
      var actionDefinition = this.productionLotsActions().find(function (tab) {
        return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
      });
      if (e.detail.dialogState == "confirmed") {
        var datas = [];
        datas.lot_name = this.dialogProductionLotActivate[0].value;
        this.moduleActionTriggerAPI(
          this.buttonDefinition.name,
          this.buttonDefinition,
          datas,
          this.getFunctionalArea("PRODUCTION_LOTS"),
          actionDefinition,
          this.callBackFunction,
          this.callBackFunctionError,
          this.refreshWindowMethod
        );
      }
      var elem = this.shadowRoot.getElementById("myelements"); //(actionDefinition.dialogInfo.webComponentName);
      if (elem) {
        elem.closeDialog(actionDefinition.dialogInfo.dialogName);
      } else {
        this.$.productionLotActivate.close();
      }
    }
    dialogClosedincubBatchNew(e) {
      var buttonDefName = this.buttonDefinition.name;
      var actionDefinition = this.batchActions().find(function (tab) {
        return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
      });
      if (e.detail.dialogState == "confirmed") {
        var datas = [];
        datas.newBatchName = this.dialogincubBatchNew[0].value;
        this.moduleActionTriggerAPI(
          this.buttonDefinition.name,
          this.buttonDefinition,
          datas,
          this.getFunctionalArea("INCUB_BATCH"),
          actionDefinition,
          this.callBackFunction,
          this.callBackFunctionError,
          this.refreshWindowMethod
        );
      }
      var elem = this.shadowRoot.getElementById("myelements"); //(actionDefinition.dialogInfo.webComponentName);
      if (elem) {
        elem.closeDialog(actionDefinition.dialogInfo.dialogName);
      } else {
        this.$.incubBatchNew.close();
      }
    }
    dialogClosedincubBatchAssignIncubator(e) {
      var buttonDefName = this.buttonDefinition.name;
      var actionDefinition = this.batchActions().find(function (tab) {
        return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
      });
      if (e.detail.dialogState == "confirmed") {
        var datas = [];
        datas = this.selectedObject;
        datas.incubatorName = e.target.simpleModalSelectedObject.name;
        this.moduleActionTriggerAPI(
          this.buttonDefinition.name,
          this.buttonDefinition,
          datas,
          this.getFunctionalArea("INCUB_BATCH"),
          actionDefinition,
          this.callBackFunction,
          this.callBackFunctionError,
          this.refreshWindowMethod
        );
      }
      var elem = this.shadowRoot.getElementById("myelements"); //(actionDefinition.dialogInfo.webComponentName);
      if (elem) {
        elem.closeDialog(actionDefinition.dialogInfo.dialogName);
      } else {
        this.$.incubBatchNew.close();
      }
    }

    dialogClosedIncubatorAddTempReading(e) {
      var buttonDefName = this.buttonDefinition.name;
      var moduleArea = this.getFunctionalArea("INCUBATOR");
      var actionDefinition = this.incubatorActions().find(function (tab) {
        return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
      });
      if (e.detail.dialogState == "confirmed") {
        var datas = [];
        datas.name = this.selectedObject.incubatorFieldToRetrieve.name;
        datas.tempValue = this.dialogincubAddTmpReading[0].value;
        console.log("dialogClosedIncubatorAddTempReading");
        //datas.tempValue=e.target.simpleModalSelectedObject.name;
        this.moduleActionTriggerAPI(
          this.buttonDefinition.name,
          this.buttonDefinition,
          datas,
          moduleArea,
          actionDefinition,
          this.callBackFunction,
          this.callBackFunctionError,
          this.refreshWindowMethod
        );
      }
      var elem = this.shadowRoot.getElementById("myelements"); //(actionDefinition.dialogInfo.webComponentName);
      if (elem) {
        elem.closeDialog(actionDefinition.dialogInfo.dialogName);
      } else {
        this.$.incubBatchNew.close();
      }
    }
    incubatorFieldButtonClicked(e) {
      var state = store.getState();
      var selectedLanguage = state.app.user.appLanguage;

      //    console.log('frontend-env-monit-sample >> fieldButtonClicked ',
      //        'e.detail.buttonName', e.detail.buttonName, 'this.selectedObject', this.selectedObject, 'e.detail.buttonDefinition', e.detail.buttonDefinition);
      if (this.selIncubator == null) {
        var message = "";
        switch (selectedLanguage) {
          case "es":
            message = "Por favor selecciona una incubadora primero";
            break; //message=response.data.message_es; break;
          default:
            message = "Please select one incubator first.";
            break; //message=response.data.message_en; break;
        }
        this.dispatchEvent(
          new CustomEvent("toast-error", {
            bubbles: true,
            composed: true,
            detail: message,
          })
        );
        return;
      }
      this.selectedObject = this.selIncubator;
      var datas = [];
      datas.actionName = e.detail.buttonName;
      datas.selectedObject = this.selIncubator;
      if (this.refreshWindow) {
        datas.callBackFunction = this.refreshWindow.bind(this);
      }
      var tabInfo = {
        currTabEsignRequired: e.detail.buttonDefinition.esign_required,
        currTabConfirmUserRequired:
          e.detail.buttonDefinition.confirmuser_required,
      };
      //var elem=this.shadowRoot.getElementById("myelements");
      this.moduleActionTrigger(e.detail.buttonDefinition, datas, "INCUBATOR");
      //this.$.myelements.moduleActionTrigger(e.detail.buttonDefinition, datas, "INCUBATOR");
    }
  };
