define([
  "exports",
  "../../../../store.js",
  "../../../../platform-mixins/functions/toast-methods.js",
  "./0module-endpoints-actions-env-monit.js",
  "../../../platformComponents/Redux/actions/esign-actions.js",
  "../../../platformComponents/Redux/actions/confirmuser-actions.js",
  "./0module-actions-available.js",
], function (
  _exports,
  _store,
  _toastMethods,
  _moduleEndpointsActionsEnvMonit,
  _esignActions,
  _confirmuserActions,
  _moduleActionsAvailable
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.FunctionsEnvMonit = void 0;
  const FunctionsEnvMonit = (superClass) =>
    class extends (0, _moduleActionsAvailable.EnvMonitModuleDefinition)(
      (0, _moduleEndpointsActionsEnvMonit.EndpointsActionsEnvMonitModule)(
        (0, _toastMethods.ToastMethods)(superClass)
      )
    ) {
      selectedObjectIsMandatory(button) {
        if (
          button &&
          button.requires_selected_object != void 0 &&
          !1 == button.requires_selected_object
        ) {
          return !1;
        } else {
          return !0;
        }
      }
      fieldButtonClickedForInvestigations(e) {
        var buttonDefinition = e.detail.buttonDefinition;
        console.log(
          "functions-env-monit >> fieldButtonClickedForInvestigations ",
          "e.detail.buttonDefinition",
          e.detail.buttonDefinition,
          "this.selectedObject",
          this.selectedObject
        );
        if (
          this.selectedObjectIsMandatory(buttonDefinition) &&
          null == this.selectedObject
        ) {
          this.toastErrorMessage(this.objectNotSelected());
          return;
        }
        var datas = [];
        datas.selectedObject = this.selectedObject;
        if (this.refreshWindow) {
          datas.callBackFunction = this.refreshWindow.bind(this);
        }
        if ("CORRECTIVE_ACTION_COMPLETE" == buttonDefinition.actionName) {
          this.moduleActionTrigger(buttonDefinition, datas, "PROGRAMS");
        } else {
          this.moduleActionTrigger(buttonDefinition, datas, "INVESTIGATION");
        }
      }
      fieldButtonClickedForProductionLots(e) {
        var buttonDefinition = e.detail.buttonDefinition; // console.log('frontend-env-monit-sample >> fieldButtonClicked ',
        //     'e.detail.buttonDefinition', e.detail.buttonDefinition, 'this.selectedObject', this.selectedObject);
        if (
          this.selectedObjectIsMandatory(buttonDefinition) &&
          null == this.selectedObject
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
          null == this.selectedObject
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
      fieldButtonClickedForSavedQueries(e) {
        var buttonDefinition = e.detail.buttonDefinition;
        console.log(
          "frontend-env-monit-sample >> fieldButtonClickedForSavedQueries ",
          "e.detail.buttonDefinition",
          e.detail.buttonDefinition,
          "this.selectedObject",
          this.selectedObject
        );
        if (
          this.selectedObjectIsMandatory(buttonDefinition) &&
          null == this.selectedObject
        ) {
          this.toastErrorMessage(this.objectNotSelected());
          return;
        }
        var datas = [];
        datas.selectedObject = this.selectedObject;
        if (this.refreshWindow) {
          datas.callBackFunction = this.refreshWindow.bind(this);
        }
        this.moduleActionTrigger(buttonDefinition, datas, "SAVED_QUERIES");
      }
      dialogClosedProductionLotNew(e) {
        var buttonDefName = this.buttonDefinition.name,
          actionDefinition = this.productionLotsActions().find(function (tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
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
        var buttonDefName = this.buttonDefinition.name,
          actionDefinition = this.productionLotsActions().find(function (tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
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
        var buttonDefName = this.buttonDefinition.name,
          actionDefinition = this.batchActions().find(function (tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
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
        var buttonDefName = this.buttonDefinition.name,
          actionDefinition = this.batchActions().find(function (tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
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
        var buttonDefName = this.buttonDefinition.name,
          moduleArea = this.getFunctionalArea("INCUBATOR"),
          actionDefinition = this.incubatorActions().find(function (tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
          var datas = [];
          datas.name = this.selectedObject.incubatorFieldToRetrieve.name;
          datas.tempValue = this.dialogincubAddTmpReading[0].value;
          console.log("dialogClosedIncubatorAddTempReading"); //datas.tempValue=e.target.simpleModalSelectedObject.name;
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
        var state = _store.store.getState(),
          selectedLanguage = state.app.user.appLanguage; //    console.log('frontend-env-monit-sample >> fieldButtonClicked ',
        //        'e.detail.buttonName', e.detail.buttonName, 'this.selectedObject', this.selectedObject, 'e.detail.buttonDefinition', e.detail.buttonDefinition);
        if (null == this.selIncubator) {
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
              bubbles: !0,
              composed: !0,
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
        }; //var elem=this.shadowRoot.getElementById("myelements");
        this.moduleActionTrigger(e.detail.buttonDefinition, datas, "INCUBATOR"); //this.$.myelements.moduleActionTrigger(e.detail.buttonDefinition, datas, "INCUBATOR");
      }
      investigationNewNoDialog() {
        console.log("investigationNewNoDialog");
        var functionalArea = "INVESTIGATION",
          buttonDefName = this.buttonDefinition.name,
          actionDefinition = this.investigationActions().find(function (tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          }),
          datas = [];
        datas = this.selectedObject;
        datas.objectsToAdd =
          "sample_analysis_result*" + this.selectedObject.result_id;
        datas.fieldName = "description";
        datas.fieldValue =
          "Investigation for " + this.selectedObject.result_id + "*String";
        this.moduleActionTriggerAPI(
          this.buttonDefinition.name,
          this.buttonDefinition,
          datas,
          this.getFunctionalArea(functionalArea),
          actionDefinition,
          this.callBackFunction,
          this.callBackFunctionError,
          this.refreshWindowMethod
        );
      }
      dialogClosedInvestigationAddObject(e) {
        console.log("dialogClosedInvestigationAddObject"); //return;
        var functionalArea = "INVESTIGATION",
          buttonDefName = this.buttonDefinition.name,
          actionDefinition = this.investigationActions().find(function (tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          }),
          datas = [];
        datas = this.selectedObject;
        datas.objectsToAdd =
          "sample_analysis_result*" + this.selectedObject.result_id;
        datas.investigationId = e.target.simpleModalSelectedObject.id; //datas.fieldValue="Investigation for "+this.selectedObject.result_id+"*String";
        //datas.fieldName="description";
        this.moduleActionTriggerAPI(
          this.buttonDefinition.name,
          this.buttonDefinition,
          datas,
          this.getFunctionalArea(functionalArea),
          actionDefinition,
          this.callBackFunction,
          this.callBackFunctionError,
          this.refreshWindowMethod
        );
        var elem = this.shadowRoot.getElementById("myelements"); //(actionDefinition.dialogInfo.webComponentName);
        if (elem) {
          elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        } else {
          this.$.investigationAddObject.close();
        }
      }
      dialogClosedInvestigationDecision(e) {
        console.log("dialogClosedInvestigationDecision");
        return;
        var functionalArea = "INVESTIGATION",
          buttonDefName = this.buttonDefinition.name,
          actionDefinition = this.investigationActions().find(function (tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          }),
          datas = [];
        datas = this.selectedObject;
        datas.objectsToAdd =
          "sample_analysis_result*" + this.selectedObject.result_id;
        datas.investigationId = e.target.simpleModalSelectedObject.id; //datas.fieldValue="Investigation for "+this.selectedObject.result_id+"*String";
        //datas.fieldName="description";
        this.moduleActionTriggerAPI(
          this.buttonDefinition.name,
          this.buttonDefinition,
          datas,
          this.getFunctionalArea(functionalArea),
          actionDefinition,
          this.callBackFunction,
          this.callBackFunctionError,
          this.refreshWindowMethod
        );
        var elem = this.shadowRoot.getElementById("myelements"); //(actionDefinition.dialogInfo.webComponentName);
        if (elem) {
          elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        } else {
          this.$.investigationAddObject.close();
        }
      }
    };
  _exports.FunctionsEnvMonit = FunctionsEnvMonit;
});
