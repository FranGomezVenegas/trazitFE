import { store } from "../../../../store.js";
import { ToastMethods } from "../../../../platform-mixins/functions/toast-methods.js";
import { EndpointsActionsEnvMonitModule } from "./0module-endpoints-actions-env-monit.js";
import { EnvMonitModuleDefinition } from "./0module-actions-available.js";
import { openEsignDialog } from "../../../platformComponents/Redux/actions/esign-actions.js";
import { openConfirmUserDialog } from "../../../platformComponents/Redux/actions/confirmuser-actions.js";
export const FunctionsEnvMonitSamples = (superClass) =>
  class extends EnvMonitModuleDefinition(
    EndpointsActionsEnvMonitModule(ToastMethods(superClass))
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
    fieldButtonClickedForSamples(e) {
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
      this.moduleActionTrigger(buttonDefinition, datas, "samples");
    }
    enterResultChecker(rawValue, selectedRow) {
      //console.log('enterResultChecker', rawValue, 'selectedRow', selectedRow);
      var messageErr = [];
      if (
        selectedRow.min_val_allowed != void 0 &&
        0 < (selectedRow.min_val_allowed + "").length
      ) {
        var minStrict = !0;
        if (
          selectedRow.min_allowed_strict != void 0 &&
          !1 == selectedRow.min_allowed_strict
        ) {
          minStrict = !1;
        }
        if (!minStrict && rawValue < selectedRow.min_val_allowed) {
          messageErr.message_en = this.resultCheckerMessages.valueLessThanMinAllowed.message_en
            .replace("<*1*>", rawValue + "")
            .replace("<*2*>", selectedRow.min_val_allowed + "");
          messageErr.message_es = this.resultCheckerMessages.valueLessThanMinAllowed.message_es
            .replace("<*1*>", rawValue + "")
            .replace("<*2*>", selectedRow.min_val_allowed + "");
          this.toastErrorMessage(messageErr);
          return !1;
        }
        if (minStrict && rawValue <= selectedRow.min_val_allowed) {
          messageErr.message_en = this.resultCheckerMessages.valueLessThanMinAllowed.message_en
            .replace("<*1*>", rawValue + "")
            .replace("<*2*>", "<" + (selectedRow.min_val_allowed + ""));
          messageErr.message_es = this.resultCheckerMessages.valueLessThanMinAllowed.message_es
            .replace("<*1*>", rawValue + "")
            .replace("<*2*>", "<" + (selectedRow.min_val_allowed + ""));
          this.toastErrorMessage(messageErr);
          return !1;
        }
      }
      if (
        selectedRow.max_val_allowed != void 0 &&
        0 < (selectedRow.max_val_allowed + "").length
      ) {
        var maxStrict = !0;
        if (
          selectedRow.max_allowed_strict != void 0 &&
          !1 == selectedRow.max_allowed_strict
        ) {
          maxStrict = !1;
        }
        if (!maxStrict && rawValue > selectedRow.max_val_allowed) {
          messageErr.message_en = this.resultCheckerMessages.valueGreaterThanMaxAllowed.message_en
            .replace("<*1*>", rawValue + "")
            .replace("<*2*>", selectedRow.max_val_allowed + "");
          messageErr.message_es = this.resultCheckerMessages.valueGreaterThanMaxAllowed.message_es
            .replace("<*1*>", rawValue + "")
            .replace("<*2*>", selectedRow.max_val_allowed + "");
          this.toastErrorMessage(messageErr);
          return !1;
        }
        if (maxStrict && rawValue >= selectedRow.max_val_allowed) {
          messageErr.message_en = this.resultCheckerMessages.valueGreaterThanMaxAllowed.message_en
            .replace("<*1*>", rawValue + "")
            .replace("<*2*>", ">" + (selectedRow.max_val_allowed + ""));
          messageErr.message_es = this.resultCheckerMessages.valueGreaterThanMaxAllowed.message_es
            .replace("<*1*>", rawValue + "")
            .replace("<*2*>", ">" + (selectedRow.max_val_allowed + ""));
          this.toastErrorMessage(messageErr);
          return !1;
        }
      }
      return !0;
    }
    enterResult(e) {
      var actionName = "ENTERRESULT";
      let rawValue = e.currentTarget.value,
        selectedRow = this.$.mygridid.__data.items[e.currentTarget.id];
      if (!this.enterResultChecker(rawValue, selectedRow)) {
        return;
      } //console.log('enterResult', 'callBackFunctionEnvMonitElem', this.callBackFunctionEnvMonitElem, e.currentTarget.id, e.currentTarget.value, this.$.mygridid.__data.items[e.currentTarget.id].result_id);
      this.$.mygridid.__data.items[e.currentTarget.id].raw_value =
        e.currentTarget.value;
      var actionDefinition = this.sampleActions().find(function (tab) {
        return tab.actionName.toUpperCase() == actionName.toUpperCase();
      });
      let sampleId = selectedRow.sample_id,
        resultId = selectedRow.result_id; //this.$.mygridid.__data.items[e.currentTarget.id].sample_id;
      //this.$.mygridid.__data.items[e.currentTarget.id].result_id;
      var datas = [];
      datas.sampleId = sampleId;
      datas.resultId = resultId;
      datas.rawValue = rawValue;
      this.moduleActionTriggerAPI(
        actionName,
        e.detail.buttonDefinition,
        datas,
        this.getFunctionalArea("samples"),
        actionDefinition,
        this.loadData.bind(this),
        this.callBackFunctionError,
        this.refreshWindowMethod
      );
    }
    setAuditReviewed(e) {
      if (
        e.detail.buttonDefinition &&
        e.detail.buttonDefinition.esign_required
      ) {
        store.dispatch(openEsignDialog(this.setAuditReviewedAPI.bind(this, e)));
        return;
      } //if (this.currTabConfirmUserRequired){
      if (
        e.detail.buttonDefinition &&
        e.detail.buttonDefinition.confirmuser_required
      ) {
        store.dispatch(
          openConfirmUserDialog(this.setAuditReviewedAPI.bind(this, e))
        );
        return;
      }
      this.setAuditReviewedAPI(e);
    }
    setAuditReviewedAPI(e) {
      //console.log('frontend-env-monit-sample >> setAuditReviewedAPI >> e.detail = ', 'e.detail');
      var actionDefinition = this.sampleActions().find(function (tab) {
          return (
            tab.actionName.toUpperCase() ==
            e.detail.buttonDefinition.name.toUpperCase()
          );
        }),
        datas = [];
      datas.audit_id = this.selectedObject.audit_id;
      datas.sample_id = this.selectedObject.sample_id;
      this.moduleActionTriggerAPI(
        e.detail.buttonDefinition.name,
        e.detail.buttonDefinition,
        datas,
        this.getFunctionalArea("samples"),
        actionDefinition,
        this.loadData.bind(this),
        this.callBackFunctionError,
        this.refreshWindowMethod
      );
    }
    dialogClosedAddComment(e) {
      var buttonDefinition = this.buttonDefinition,
        buttonName = this.$.addComment.actionName,
        formElements = this.$.addComment.formElements,
        actionDefinition = this.sampleActions().find(function (tab) {
          return tab.actionName.toUpperCase() == buttonName.toUpperCase();
        }),
        elem = this.shadowRoot.getElementById("myElementsSample"); //(actionDefinition.dialogInfo.webComponentName);
      console.log(
        "dialogClosedAddComment >> buttonName",
        buttonName,
        "formElements",
        formElements
      );
      if ("confirmed" == e.detail.dialogState) {
        var datas = [];
        datas.sample_id = this.selectedObject.sample_id;
        switch (buttonName) {
          case "SAMPLINGCOMMENTADD":
            datas.sample_comment = this.fieldsDialogAddComment[0].value;
            this.moduleActionTriggerAPI(
              buttonDefinition.name,
              buttonDefinition,
              datas,
              this.getFunctionalArea("samples"),
              actionDefinition,
              this.callBackFunction,
              this.callBackFunctionError,
              this.refreshWindowMethod
            );
            break;
          case "COC_CONFIRMCHANGE":
            this.backEndData.actionName = buttonName; //actionName; //datas.paramsUrl=paramsUrl;
            datas.confirmChangeComment = this.fieldsDialogAddComment[0].value;
            this.moduleActionTriggerAPI(
              buttonName,
              datas,
              datas.tabInfo,
              this.getFunctionalArea("samples"),
              actionDefinition,
              this.refreshWindowMethod
            );
            break;
          case "COC_ABORTCHANGE":
            this.backEndData.actionName = buttonName; //actionName; //datas.paramsUrl=paramsUrl;
            datas.cancelChangeComment = this.fieldsDialogAddComment[0].value;
            this.moduleActionTriggerAPI(
              buttonName,
              datas,
              datas.tabInfo,
              this.getFunctionalArea("samples"),
              actionDefinition,
              this.refreshWindowMethod
            );
            break;
          default:
            break;
        }
      }
      if (elem) {
        elem.closeDialog("addComment");
      } else {
        this.$.addComment.close();
      }
    }
    dialogClosedaddSampleMicroorg(e) {
      var elemName = e.target.formElements[0].name;
      console.log("dialogClosedaddSampleMicroorg", "elemName", elemName);
      var elem = this.shadowRoot.getElementById("adhoc_name"); //this.dialogMicroorgListAdhocMicroorg[0].name); //this.$.addSampleMicroorgDialog.formElements[0].name);
      if (elem) {
        elem.resetValue();
      }
      if (this.$.addSampleMicroorgDialog.callbackFunction) {
        this.$.addSampleMicroorgDialog.callbackFunction();
      }
    }
    microorgKeyPressedAdhoc(e) {
      var buttonName = "buttonNewAdhocMicroorganism";
      if ("Enter" == e.key) {
        var elem = this.shadowRoot.getElementById(buttonName);
        if (elem) {
          //console.log('keyPressedAdhoc', 'elem', this.adhocFormFields[1]);
          elem.focus();
          var i = 0;
          for (i = 0; i < this.adhocFormFields.length; i++) {
            if (this.adhocFormFields[i].name == buttonName) {
              var mye = {
                detail: {
                  buttonName: this.adhocFormFields[1].name,
                  value: this.adhocFormFields[1].value,
                  buttonDefinition: this.adhocFormFields[1],
                },
              };
              this.addAdhocMicroorganism(mye);
              return;
            }
          }
        }
      }
    }
    microorgActionOnSel(e) {
      if ("ADD_MICROORGANISM" == e.detail.buttonName) {
        this.addMicroorganism(e);
      }
      if ("ADD_ADHOC_MICROORGANISM" == e.detail.buttonName) {
        this.addAdhocMicroorganism(e);
      }
    }
    addAdhocMicroorganism(e) {
      var actionName = "ADD_SAMPLE_MICROORGANISM",
        actionDefinition = this.sampleActions().find(function (tab) {
          return tab.actionName.toUpperCase() == actionName.toUpperCase();
        }),
        allowed = this.checkAdditionIsCorrect(this.selectedObject, 1);
      if (!allowed) {
        return;
      }
      this.increaseMicroorgAdded(1);
      var row = [];
      row.actionName = actionName;
      row.sampleId = this.sampleId;
      row.microorganismName = this.formElements[0].value;
      if (this.callBackFunction) {
        row.callBackFunction = this.callBackFunction.bind(this);
      }
      this.moduleActionTriggerAPI(
        actionName,
        e.detail.buttonDefinition,
        row,
        this.getFunctionalArea("samples"),
        actionDefinition,
        this.refreshWindowMethod
      );
      var elem = this.shadowRoot.getElementById(this.formElements[0].name);
      if (elem) {
        elem.resetValue();
      }
    }
    checkAdditionIsCorrect(object, number) {
      //console.log(object, number);
      if (
        number == void 0 ||
        object == void 0 ||
        object.microorganism_count == void 0 ||
        object.raw_value == void 0
      ) {
        var errMsg = {
          message_en:
            "Wrong data passed for the addition, review checkAdditionIsCorrect in functions-env-minit-samples",
          message_es:
            "Recibida informaci\xF3n incorrecta para a\xF1adir microorganismos, revisar checkAdditionIsCorrect en functions-env-minit-samples",
        };
        console.log(errMsg.message_en);
        this.toastErrorMessage(errMsg);
        return !1;
      }
      if (0 == number) {
        var errMsg = {
          message_en: "Nothing to add",
          message_es: "Nada que a\xF1adir",
        };
        console.log(errMsg.message_en);
        this.toastErrorMessage(errMsg);
        return !1;
      }
      var sumVal =
        parseInt(object.microorganism_count, 10) + parseInt(number, 10);
      if (sumVal <= +object.raw_value) {
        return !0;
      }
      var errMsg = {
        message_en:
          "this addition would be " +
          sumVal +
          " what is greater than the reading " +
          object.raw_value +
          " what is not allowed.",
        message_es:
          "Est\xE1 adici\xF3n sumar\xEDa un total de " +
          sumVal +
          ", mayor a la lectura identificada, " +
          object.raw_value +
          ", lo que no es permitido.",
      };
      this.toastErrorMessage(errMsg);
      return !1;
    }
    increaseMicroorgAdded(number) {
      // Now it adds the microorganisms without knowing the response status...improvable.
      this.selectedObject.microorganism_count =
        this.selectedObject.microorganism_count + number;
    }
    addMicroorganism(e) {
      console.log("addMicroorganism");
      var actionName = "ADD_SAMPLE_MICROORGANISM",
        actionDefinition = this.sampleActions().find(function (tab) {
          return tab.actionName.toUpperCase() == actionName.toUpperCase();
        }),
        row = [],
        microorganismName = "",
        i,
        len,
        elem = this.shadowRoot.getElementById("simplemodaldialoggrid"),
        selectedItems = elem.selectedItems,
        allowed = this.checkAdditionIsCorrect(
          this.selectedObject,
          selectedItems.length
        );
      if (!allowed) {
        return;
      }
      this.increaseMicroorgAdded(selectedItems.length);
      for (
        i = 0, len = selectedItems.length, microorganismName = "";
        i < len;
        i++
      ) {
        if (0 < microorganismName.length) {
          microorganismName = microorganismName + "|";
        }
        if ("undefined" != selectedItems[i].name) {
          microorganismName = microorganismName + selectedItems[i].name;
        }
      }
      row.actionName = actionName;
      row.sampleId = this.sampleId;
      row.microorganismName = microorganismName;
      this.moduleActionTriggerAPI(
        actionName,
        e.detail.buttonDefinition,
        row,
        this.getFunctionalArea("samples"),
        actionDefinition,
        this.refreshWindowMethod
      );
    }
    sampleLogButtonClicked(e) {
      if ("logSample" != e.detail.buttonName) {
        // this.dispatchEvent(new CustomEvent('toast-error', {
        //     bubbles: true,
        //     composed: true,
        //     detail: 'For sample login, the button name should be logSample, this button name is '+e.detail.buttonName
        //     }));
        return;
      }
      var locationName = "",
        numSamplesToLog = 1; //console.log('sampleLogButtonClicked', e.detail.name, this.selectedSamplingPoint);
      //this.sampleTemplatesList[1].value;
      if (0 == numSamplesToLog) {
        this.dispatchEvent(
          new CustomEvent("toast-error", {
            bubbles: !0,
            composed: !0,
            detail:
              "Nothing to log when the number is set to " + numSamplesToLog,
          })
        );
        return;
      }
      var iField,
        fieldsStringNames = "",
        fieldsStringValues = "",
        fieldType;
      for (iField = 0; iField < this.selectedSamplingPoint.length; iField++) {
        if (0 < (this.selectedSamplingPoint[iField].value + "").length) {
          if ("location_name" == this.selectedSamplingPoint[iField].name) {
            locationName = this.selectedSamplingPoint[iField].value;
          }
          fieldType = this.selectedSamplingPoint[iField].dbType;
          if (!fieldType) {
            fieldType = ">>>";
          } //this.selectedSamplingPoint[iField].type;}
          switch (fieldType) {
            case "date":
            case "Date":
              if (0 < fieldsStringValues.length) {
                fieldsStringNames = fieldsStringNames + "|";
                fieldsStringValues = fieldsStringValues + "|";
              }
              fieldsStringNames =
                fieldsStringNames + this.selectedSamplingPoint[iField].name;
              fieldsStringValues =
                fieldsStringValues +
                this.selectedSamplingPoint[iField].value +
                "*Date";
              break;
            case "string":
            case "text":
            case "Text":
            case "String":
              if (0 < fieldsStringValues.length) {
                fieldsStringNames = fieldsStringNames + "|";
                fieldsStringValues = fieldsStringValues + "|";
              }
              fieldsStringNames =
                fieldsStringNames + this.selectedSamplingPoint[iField].name;
              fieldsStringValues =
                fieldsStringValues +
                this.selectedSamplingPoint[iField].value +
                "*String";
              break;
            case "Boolean":
              if (0 < fieldsStringValues.length) {
                fieldsStringNames = fieldsStringNames + "|";
                fieldsStringValues = fieldsStringValues + "|";
              }
              fieldsStringNames =
                fieldsStringNames + this.selectedSamplingPoint[iField].name;
              fieldsStringValues =
                fieldsStringValues +
                this.selectedSamplingPoint[iField].value +
                "*Boolean";
              break;
            case "integer":
            case "Integer":
              if (0 < fieldsStringValues.length) {
                fieldsStringNames = fieldsStringNames + "|";
                fieldsStringValues = fieldsStringValues + "|";
              }
              fieldsStringNames =
                fieldsStringNames + this.selectedSamplingPoint[iField].name;
              fieldsStringValues =
                fieldsStringValues +
                this.selectedSamplingPoint[iField].value +
                "*Integer";
              break;
            case "Button":
              break;
            case ">>>":
              break;
            default:
              this.dispatchEvent(
                new CustomEvent("toast-error", {
                  bubbles: !0,
                  composed: !0,
                  detail:
                    "The field type " +
                    fieldType +
                    " is not implemented yet in onButonClicked then this field is discarded",
                })
              );
              break;
          }
        }
      }
      var actionName = "LOGSAMPLE",
        actionDefinition = this.sampleActions().find(function (tab) {
          return tab.actionName.toUpperCase() == actionName.toUpperCase();
        }),
        row = [];
      row.actionName = actionName;
      row.programName = this.selectedProgram.name;
      row.sampleTemplate = this.selectedProgram.sample_config_code; //this.selectedSampleTemplate;
      row.sampleTemplateVersion = this.selectedProgram.sample_config_code_version;
      row.locationName = locationName;
      row.fieldName = fieldsStringNames;
      row.fieldValue = fieldsStringValues;
      row.numSamplesToLog = 1;
      this.moduleActionTriggerAPI(
        actionName,
        e.detail.buttonDefinition,
        row,
        this.getFunctionalArea("samples"),
        actionDefinition,
        this.refreshWindowMethod
      );
      this.$.pointCard.close();
    }
  };
