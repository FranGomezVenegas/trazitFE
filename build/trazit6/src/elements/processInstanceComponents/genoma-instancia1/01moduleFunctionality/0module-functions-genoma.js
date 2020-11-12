define([
  "exports",
  "../../../../store.js",
  "../../../../platform-mixins/functions/toast-methods.js",
  "./0module-endpoints-actions-genoma.js",
  "../../../platformComponents/Redux/actions/esign-actions.js",
  "../../../platformComponents/Redux/actions/confirmuser-actions.js",
  "./0module-backendfunctionality-available.js",
], function (
  _exports,
  _store,
  _toastMethods,
  _moduleEndpointsActionsGenoma,
  _esignActions,
  _confirmuserActions,
  _moduleBackendfunctionalityAvailable
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.ModuleFunctionsGenoma = void 0;
  const ModuleFunctionsGenoma = (superClass) =>
    class extends (0,
    _moduleBackendfunctionalityAvailable.GenomaModuleDefinition)(
      (0, _moduleEndpointsActionsGenoma.EndpointsActionsGenomaModule)(
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
      fieldButtonClickedForProjects(e) {
        var buttonDefinition = e.detail.buttonDefinition,
          selObject = e.target.selectedObject;
        if (selObject == void 0) {
          var selObject = e.target.selectedobject;
        } // var elemAttributes=[];
        // elemAttributes=e.target.attributes;
        // var moduleAreaAttr = elemAttributes.find(function(tab) {
        //     return tab.name.toLowerCase() == 'modulearea';
        // });
        var moduleArea = "";
        moduleArea = e.target.modulearea;
        if (moduleArea == void 0) {
          moduleArea = e.currentTarget.attributes.modulearea.value;
        }
        console.log(
          "fieldButtonClickedForProjects ",
          "e.detail.buttonDefinition",
          e.detail.buttonDefinition,
          "this.selectedObject",
          selObject
        );
        if (
          this.selectedObjectIsMandatory(buttonDefinition) &&
          null == selObject
        ) {
          this.toastErrorMessage(this.objectNotSelected());
          return;
        }
        var datas = [];
        datas.selectedObject = selObject; // if (e.detail.buttonName=='STUDY_FAMILY_ADD_INDIVIDUAL'){
        //     datas.selectedObject.indivId=this.selectedStudyIndividual.individual_id;
        // }
        if (this.refreshWindow) {
          datas.callBackFunction = this.refreshWindow.bind(this);
        }
        this.moduleActionTrigger(buttonDefinition, datas, moduleArea);
      }
      dialogClosedProjectNew(e) {
        var buttonDefName = this.buttonDefinition.name,
          actionDefinition = this.genomaModuleStudyActions().find(function (
            tab
          ) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
          var datas = [];
          datas.study = e.currentTarget.selectedStudyName;
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
        var elem = this.shadowRoot.getElementById("myProjectElements"); //(actionDefinition.dialogInfo.webComponentName);
        if (elem) {
          elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        } else {
          this.$.createNewStudy.close();
        }
      }
      dialogClosedProjectActivate(e) {
        var buttonDefName = this.buttonDefinition.name,
          actionDefinition = this.genomaModuleStudyActions().find(function (
            tab
          ) {
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
        var elem = this.shadowRoot.getElementById("myProjectElements"); //(actionDefinition.dialogInfo.webComponentName);
        if (elem) {
          elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        } else {
          this.$.productionLotActivate.close();
        }
      }
      dialogClosedStudyNew(e) {
        var buttonDefName = this.buttonDefinition.name,
          actionDefinition = this.genomaModuleProjectActions().find(function (
            tab
          ) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
          var datas = [];
          datas = e.currentTarget.selectedObject;
          datas.newStudyName = this.dialogStudyNew[0].value;
          var fieldsNames = "",
            fieldsValues = "";
          if (1 < this.dialogStudyNew.length) {
            var i;
            for (i = 1; i < this.dialogStudyNew.length; i++) {
              fieldsNames = fieldsNames + this.dialogStudyNew[i].name;
              fieldsValues = fieldsValues + this.dialogStudyNew[i].value;
              if (i < this.dialogStudyNew.length - 1) {
                fieldsNames = fieldsNames + "|";
                fieldsValues = fieldsValues + "|";
              }
            }
          }
          datas.newStudyFieldsNames = fieldsNames;
          datas.newStudyFieldsValues = fieldsValues;
          this.moduleActionTriggerAPI(
            this.buttonDefinition.name,
            this.buttonDefinition,
            datas,
            this.getFunctionalArea("PROJECTS"),
            actionDefinition,
            this.callBackFunction,
            this.callBackFunctionError,
            this.refreshWindowMethod
          );
        }
        var elem = this.shadowRoot.getElementById("myProjectElements"); //(actionDefinition.dialogInfo.webComponentName);
        if (elem) {
          elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        } else {
          this.$.createNewStudy.close();
        }
      }
      dialogClosedStudyUpdate(e) {
        var buttonDefName = this.buttonDefinition.name,
          actionDefinition = this.genomaModuleStudyActions().find(function (
            tab
          ) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
          var datas = [];
          datas = e.currentTarget.selectedObject; //datas.newStudyName=this.dialogStudyUpdate[0].value;
          var fieldsNames = "",
            fieldsValues = "";
          if (1 < this.dialogStudyUpdate.length) {
            var i;
            for (i = 1; i < this.dialogStudyUpdate.length; i++) {
              fieldsNames = fieldsNames + this.dialogStudyUpdate[i].name;
              fieldsValues = fieldsValues + this.dialogStudyUpdate[i].value;
              if (i < this.dialogStudyUpdate.length - 1) {
                fieldsNames = fieldsNames + "|";
                fieldsValues = fieldsValues + "|";
              }
            }
          }
          datas.newStudyFieldsNames = fieldsNames;
          datas.newStudyFieldsValues = fieldsValues;
          this.moduleActionTriggerAPI(
            this.buttonDefinition.name,
            this.buttonDefinition,
            datas,
            this.getFunctionalArea("STUDIES"),
            actionDefinition,
            this.callBackFunction,
            this.callBackFunctionError,
            this.refreshWindowMethod
          );
        }
        var elem = this.shadowRoot.getElementById("myProjectElements"); //(actionDefinition.dialogInfo.webComponentName);
        if (elem) {
          elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        } else {
          this.$.createNewStudy.close();
        }
      }
      dialogClosedStudyIndividualNew(e) {
        var selStudy = this.selectedStudy,
          buttonDefName = this.buttonDefinition.name,
          functionalArea = this.getFunctionalArea("STUDY_FAMILIES"),
          actionDefinition = this.genomaModuleStudyActions().find(function (
            tab
          ) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
          var datas = {
              study: e.currentTarget.selectedStudyName,
              newStudyIndividualName: this.dialogStudyIndividualNew[0].value,
            },
            fieldsNames = "",
            fieldsValues = "";
          if (1 < this.dialogStudyIndividualNew.length) {
            var i;
            for (i = 1; i < this.dialogStudyIndividualNew.length; i++) {
              fieldsNames = fieldsNames + this.dialogStudyIndividualNew[i].name;
              fieldsValues =
                fieldsValues + this.dialogStudyIndividualNew[i].value;
              if (i < this.dialogStudyIndividualNew.length - 1) {
                fieldsNames = fieldsNames + "|";
                fieldsValues = fieldsValues + "|";
              }
            }
          }
          datas.newStudyIndividualFieldsNames = fieldsNames;
          datas.newStudyIndividualFieldsValues = fieldsValues;
          this.moduleActionTriggerAPI(
            this.buttonDefinition.name,
            this.buttonDefinition,
            datas,
            functionalArea,
            actionDefinition,
            this.callBackFunction,
            this.callBackFunctionError,
            this.refreshWindowMethod
          );
        }
        var elem = this.shadowRoot.getElementById("myProjectElements"); //(actionDefinition.dialogInfo.webComponentName);
        if (elem) {
          elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        } else {
          this.$.createNewStudyIndividual.close();
        }
      }
      dialogClosedStudyIndividualUpdate(e) {
        var buttonDefName = this.buttonDefinition.name,
          functionalArea = this.getFunctionalArea("STUDY_FAMILIES"),
          actionDefinition = this.genomaModuleStudyActions().find(function (
            tab
          ) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
          var datas = [];
          datas = e.currentTarget.selectedObject; //datas.newStudyName=this.dialogStudyIndividualUpdate[0].value;
          var fieldsNames = "",
            fieldsValues = "";
          if (1 < this.dialogStudyIndividualUpdate.length) {
            var i;
            for (i = 1; i < this.dialogStudyIndividualUpdate.length; i++) {
              fieldsNames =
                fieldsNames + this.dialogStudyIndividualUpdate[i].name;
              fieldsValues =
                fieldsValues + this.dialogStudyIndividualUpdate[i].value;
              if (i < this.dialogStudyIndividualUpdate.length - 1) {
                fieldsNames = fieldsNames + "|";
                fieldsValues = fieldsValues + "|";
              }
            }
          }
          datas.newStudyFieldsNames = fieldsNames;
          datas.newStudyFieldsValues = fieldsValues;
          this.moduleActionTriggerAPI(
            this.buttonDefinition.name,
            this.buttonDefinition,
            datas,
            functionalArea,
            actionDefinition,
            this.callBackFunction,
            this.callBackFunctionError,
            this.refreshWindowMethod
          );
        }
        var elem = this.shadowRoot.getElementById("myProjectElements"); //(actionDefinition.dialogInfo.webComponentName);
        if (elem) {
          elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        } else {
          this.$.updateStudyIndividual.close();
        }
      }
      dialogClosedStudyFamilyNew(e) {
        var buttonDefName = this.buttonDefinition.name,
          functionalArea = this.getFunctionalArea("STUDY_FAMILIES"),
          actionDefinition = this.genomaModuleStudyActions().find(function (
            tab
          ) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
          var datas = {
              study: e.currentTarget.selectedStudyName,
              newStudyFamilyName: this.dialogStudyFamilyNew[0].value,
            },
            fieldsNames = "",
            fieldsValues = "";
          if (1 < this.dialogStudyFamilyNew.length) {
            var i;
            for (i = 1; i < this.dialogStudyFamilyNew.length; i++) {
              fieldsNames = fieldsNames + this.dialogStudyFamilyNew[i].name;
              fieldsValues = fieldsValues + this.dialogStudyFamilyNew[i].value;
              if (i < this.dialogStudyFamilyNew.length - 1) {
                fieldsNames = fieldsNames + "|";
                fieldsValues = fieldsValues + "|";
              }
            }
          }
          datas.newStudyFieldsNames = fieldsNames;
          datas.newStudyFieldsValues = fieldsValues;
          this.moduleActionTriggerAPI(
            this.buttonDefinition.name,
            this.buttonDefinition,
            datas,
            functionalArea,
            actionDefinition,
            this.callBackFunction,
            this.callBackFunctionError,
            this.refreshWindowMethod
          );
        }
        var elem = this.shadowRoot.getElementById("myProjectElements"); //(actionDefinition.dialogInfo.webComponentName);
        if (elem) {
          elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        } else {
          this.$.createNewStudyFamily.close();
        }
      }
      dialogClosedStudyFamilyUpdate(e) {
        var buttonDefName = this.buttonDefinition.name,
          functionalArea = this.getFunctionalArea("STUDY_FAMILIES"),
          actionDefinition = this.genomaModuleStudyActions().find(function (
            tab
          ) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
          var datas = [];
          datas = e.currentTarget.selectedObject; //datas.newStudyName=this.dialogStudyFamilyUpdate[0].value;
          var fieldsNames = "",
            fieldsValues = "";
          if (1 < this.dialogStudyFamilyUpdate.length) {
            var i;
            for (i = 1; i < this.dialogStudyFamilyUpdate.length; i++) {
              fieldsNames = fieldsNames + this.dialogStudyFamilyUpdate[i].name;
              fieldsValues =
                fieldsValues + this.dialogStudyFamilyUpdate[i].value;
              if (i < this.dialogStudyFamilyUpdate.length - 1) {
                fieldsNames = fieldsNames + "|";
                fieldsValues = fieldsValues + "|";
              }
            }
          }
          datas.newStudyFieldsNames = fieldsNames;
          datas.newStudyFieldsValues = fieldsValues;
          this.moduleActionTriggerAPI(
            this.buttonDefinition.name,
            this.buttonDefinition,
            datas,
            functionalArea,
            actionDefinition,
            this.callBackFunction,
            this.callBackFunctionError,
            this.refreshWindowMethod
          );
        }
        var elem = this.shadowRoot.getElementById("myProjectElements"); //(actionDefinition.dialogInfo.webComponentName);
        if (elem) {
          elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        } else {
          this.$.updateStudyFamily.close();
        }
      }
      dialogClosedFamilyList(e) {
        var buttonDefName = this.buttonDefinition.name,
          functionalArea = this.getFunctionalArea("STUDY_FAMILIES"),
          actionDefinition = this.genomaModuleStudyActions().find(function (
            tab
          ) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
          var datas = [];
          console.log("dialogClosedFamilyList");
          datas = e.currentTarget.selectedObject;
          datas.familyName = e.detail.selectedItems.name;
          if (datas.name == void 0) {
            datas.name = e.detail.selectedItems.family_name;
          }
          datas.individualsList = e.currentTarget.selectedObject.individual_id;
          datas.indivId = e.currentTarget.selectedObject.individual_id; //datas.newStudyName=this.dialogStudyFamilyUpdate[0].value;
          var fieldsNames = "",
            fieldsValues = "";
          if (1 < this.dialogStudyFamilyUpdate.length) {
            var i;
            for (i = 1; i < this.dialogStudyFamilyUpdate.length; i++) {
              fieldsNames = fieldsNames + this.dialogStudyFamilyUpdate[i].name;
              fieldsValues =
                fieldsValues + this.dialogStudyFamilyUpdate[i].value;
              if (i < this.dialogStudyFamilyUpdate.length - 1) {
                fieldsNames = fieldsNames + "|";
                fieldsValues = fieldsValues + "|";
              }
            }
          }
          datas.newStudyFieldsNames = fieldsNames;
          datas.newStudyFieldsValues = fieldsValues;
          this.moduleActionTriggerAPI(
            this.buttonDefinition.name,
            this.buttonDefinition,
            datas,
            functionalArea,
            actionDefinition,
            this.callBackFunction,
            this.callBackFunctionError,
            this.refreshWindowMethod
          );
        }
        var elem = this.shadowRoot.getElementById("myProjectElements"); //(actionDefinition.dialogInfo.webComponentName);
        if (elem) {
          elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        } else {
          this.$.updateStudyFamily.close();
        }
      }
      dialogClosedIndividualList(e) {
        var buttonDefName = this.buttonDefinition.name,
          functionalArea = this.getFunctionalArea("STUDY_FAMILIES"),
          actionDefinition = this.genomaModuleStudyActions().find(function (
            tab
          ) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
          var datas = [];
          datas = e.currentTarget.selectedObject;
          datas.individualsList = e.detail.selectedItems.individual_id;
          datas.indivId = e.detail.selectedItems.individual_id;
          datas.familyName = e.currentTarget.selectedObject.name; //datas.newStudyName=this.dialogStudyFamilyUpdate[0].value;
          var fieldsNames = "",
            fieldsValues = "";
          if (1 < this.dialogStudyFamilyUpdate.length) {
            var i;
            for (i = 1; i < this.dialogStudyFamilyUpdate.length; i++) {
              fieldsNames = fieldsNames + this.dialogStudyFamilyUpdate[i].name;
              fieldsValues =
                fieldsValues + this.dialogStudyFamilyUpdate[i].value;
              if (i < this.dialogStudyFamilyUpdate.length - 1) {
                fieldsNames = fieldsNames + "|";
                fieldsValues = fieldsValues + "|";
              }
            }
          }
          datas.newStudyFieldsNames = fieldsNames;
          datas.newStudyFieldsValues = fieldsValues;
          this.moduleActionTriggerAPI(
            this.buttonDefinition.name,
            this.buttonDefinition,
            datas,
            functionalArea,
            actionDefinition,
            this.callBackFunction,
            this.callBackFunctionError,
            this.refreshWindowMethod
          );
        }
        var elem = this.shadowRoot.getElementById("myProjectElements"); //(actionDefinition.dialogInfo.webComponentName);
        if (elem) {
          elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        } else {
          this.$.updateStudyFamily.close();
        }
      }
      dialogClosedSamplesSetList(e) {
        var buttonDefName = this.buttonDefinition.name,
          functionalArea = this.getFunctionalArea("STUDY_SAMPLES_SET"),
          actionDefinition = this.genomaModuleStudyActions().find(function (
            tab
          ) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
          var datas = []; //console.log('dialogClosedSamplesSetList');
          datas = e.currentTarget.selectedObject;
          datas.samplesSetName = e.detail.selectedItems.name;
          if (datas.name == void 0) {
            datas.name = e.detail.selectedItems.name;
          }
          datas.sampleId = e.currentTarget.selectedObject.sample_id; //datas.newStudyName=this.dialogStudyFamilyUpdate[0].value;
          this.moduleActionTriggerAPI(
            this.buttonDefinition.name,
            this.buttonDefinition,
            datas,
            functionalArea,
            actionDefinition,
            this.callBackFunction,
            this.callBackFunctionError,
            this.refreshWindowMethod
          );
        }
        var elem = this.shadowRoot.getElementById("myProjectElements"); //(actionDefinition.dialogInfo.webComponentName);
        if (elem) {
          elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        } else {
          this.$.updateStudyFamily.close();
        }
      }
      dialogClosedSamplesList(e) {
        var buttonDefName = this.buttonDefinition.name,
          functionalArea = this.getFunctionalArea("STUDY_INDIVIDUAL_SAMPLES"),
          actionDefinition = this.genomaModuleStudyActions().find(function (
            tab
          ) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
          var datas = [];
          datas = e.currentTarget.selectedObject;
          datas.sampleId = e.detail.selectedItems.sample_id;
          datas.samplesSetName = e.currentTarget.selectedObject.name; //datas.newStudyName=this.dialogStudyFamilyUpdate[0].value;
          this.moduleActionTriggerAPI(
            this.buttonDefinition.name,
            this.buttonDefinition,
            datas,
            functionalArea,
            actionDefinition,
            this.callBackFunction,
            this.callBackFunctionError,
            this.refreshWindowMethod
          );
        }
        var elem = this.shadowRoot.getElementById("myProjectElements"); //(actionDefinition.dialogInfo.webComponentName);
        if (elem) {
          elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        } else {
          this.$.updateStudyFamily.close();
        }
      }
      dialogClosedStudySamplesSetNew(e) {
        var buttonDefName = this.buttonDefinition.name,
          functionalArea = this.getFunctionalArea("STUDY_FAMILIES"),
          actionDefinition = this.genomaModuleStudyActions().find(function (
            tab
          ) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
          var datas = {
              study: e.currentTarget.selectedStudyName,
              newStudySamplesSetName: this.dialogStudySamplesSetNew[0].value,
            },
            fieldsNames = "",
            fieldsValues = "";
          if (1 < this.dialogStudySamplesSetNew.length) {
            var i;
            for (i = 1; i < this.dialogStudySamplesSetNew.length; i++) {
              fieldsNames = fieldsNames + this.dialogStudySamplesSetNew[i].name;
              fieldsValues =
                fieldsValues + this.dialogStudySamplesSetNew[i].value;
              if (i < this.dialogStudySamplesSetNew.length - 1) {
                fieldsNames = fieldsNames + "|";
                fieldsValues = fieldsValues + "|";
              }
            }
          }
          datas.newStudyFieldsNames = fieldsNames;
          datas.newStudyFieldsValues = fieldsValues;
          this.moduleActionTriggerAPI(
            this.buttonDefinition.name,
            this.buttonDefinition,
            datas,
            functionalArea,
            actionDefinition,
            this.callBackFunction,
            this.callBackFunctionError,
            this.refreshWindowMethod
          );
        }
        var elem = this.shadowRoot.getElementById("myProjectElements"); //(actionDefinition.dialogInfo.webComponentName);
        if (elem) {
          elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        } else {
          this.$.createNewStudySamplesSet.close();
        }
      }
      dialogClosedStudySamplesSetUpdate(e) {
        var buttonDefName = this.buttonDefinition.name,
          functionalArea = this.getFunctionalArea("STUDY_FAMILIES"),
          actionDefinition = this.genomaModuleStudyActions().find(function (
            tab
          ) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
          var datas = [];
          datas = e.currentTarget.selectedObject; //datas.newStudyName=this.dialogStudySamplesSetUpdate[0].value;
          var fieldsNames = "",
            fieldsValues = "";
          if (1 < this.dialogStudySamplesSetUpdate.length) {
            var i;
            for (i = 1; i < this.dialogStudySamplesSetUpdate.length; i++) {
              fieldsNames =
                fieldsNames + this.dialogStudySamplesSetUpdate[i].name;
              fieldsValues =
                fieldsValues + this.dialogStudySamplesSetUpdate[i].value;
              if (i < this.dialogStudySamplesSetUpdate.length - 1) {
                fieldsNames = fieldsNames + "|";
                fieldsValues = fieldsValues + "|";
              }
            }
          }
          datas.newStudyFieldsNames = fieldsNames;
          datas.newStudyFieldsValues = fieldsValues;
          this.moduleActionTriggerAPI(
            this.buttonDefinition.name,
            this.buttonDefinition,
            datas,
            functionalArea,
            actionDefinition,
            this.callBackFunction,
            this.callBackFunctionError,
            this.refreshWindowMethod
          );
        }
        var elem = this.shadowRoot.getElementById("myProjectElements"); //(actionDefinition.dialogInfo.webComponentName);
        if (elem) {
          elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        } else {
          this.$.updateStudySamplesSet.close();
        }
      }
      dialogClosedEnterVariableValue(e) {
        console.log("dialogClosedEnterVariableValue");
        var functionalArea = this.getFunctionalArea(
            "STUDY_INDIVIDUAL_SAMPLE_VARIABLES"
          ),
          buttonDefName = this.buttonDefinition.name,
          actionDefinition = this.genomaModuleStudyActions().find(function (
            tab
          ) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
          var datas = [];
          datas = e.currentTarget.selectedObject;
          datas.newValue = e.currentTarget.newValue;
          this.moduleActionTriggerAPI(
            this.buttonDefinition.name,
            this.buttonDefinition,
            datas,
            functionalArea,
            actionDefinition,
            this.callBackFunction,
            this.callBackFunctionError,
            this.refreshWindowMethod
          );
        }
        var elem = this.shadowRoot.getElementById("myProjectElements"); //(actionDefinition.dialogInfo.webComponentName);
        if (elem) {
          elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        } else {
          this.$.createNewStudy.close();
        }
      }
      dialogClosedVariablesSetListAddToObject(e) {
        var buttonDefName = this.buttonDefinition.name,
          functionalArea = this.getFunctionalArea(
            "STUDY_INDIVIDUAL_SAMPLE_VARIABLES"
          ),
          actionDefinition = this.genomaModuleStudyActions().find(function (
            tab
          ) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
          });
        if ("confirmed" == e.detail.dialogState) {
          var datas = [];
          datas = e.currentTarget.selectedObject;
          if (this.buttonDefinition.ownerTable == void 0) {
            console.log(
              "The action for adding Variables Set to study Objects requires the attribute called OwnerTable in the BUTTON definition to know for which object type it should be added"
            );
            return;
          }
          switch (this.buttonDefinition.ownerTable) {
            case "study_individual_sample":
              datas.ownerId = e.currentTarget.selectedObject.sample_id;
              break;
            default:
              console.log(
                "The ownerTable " +
                  ownerTable +
                  " is not recognized in the list of objects type where variables set can be added"
              );
              return;
          }
          datas.ownerTable = this.buttonDefinition.ownerTable;
          datas.variableSetName = e.detail.selectedItems.name; //datas.newStudyName=this.dialogStudyFamilyUpdate[0].value;
          this.moduleActionTriggerAPI(
            this.buttonDefinition.name,
            this.buttonDefinition,
            datas,
            functionalArea,
            actionDefinition,
            this.callBackFunction,
            this.callBackFunctionError,
            this.refreshWindowMethod
          );
        }
        var elem = this.shadowRoot.getElementById("myProjectElements"); //(actionDefinition.dialogInfo.webComponentName);
        if (elem) {
          elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        } else {
          this.$.updateStudyFamily.close();
        }
      }
    };
  _exports.ModuleFunctionsGenoma = ModuleFunctionsGenoma;
});
