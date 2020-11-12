import {
  backendUrl as rootAPIUrl,
  ApiGenomaProjectUrl,
  ApiGenomaStudyUrl,
  frontEndGenomaProjectUrl,
  ApiGenomaStudyObjectsVariablesUrl,
} from "../../../../config/platform/logic/api-config";
import {
  ApiEnvMonitSampleUrl,
  ApiEnvMonitProdLotUrl,
  ApiEnvMonitUrl,
  ApiEnvMonitIncubBatchUrl,
} from "../../../../config/platform/logic/api-config";
export const GenomaModuleDefinition = (superClass) =>
  class extends superClass {
    moduleDefinition() {
      return {
        name: "genoma humano",
        version: 1.0,
        functionalAreas: [
          {
            name: "PROJECTS",
            apiUrlForActions: ApiGenomaProjectUrl,
            actionsFunction: this.genomaModuleProjectActions.bind(this),
          },
          {
            name: "STUDIES",
            apiUrlForActions: ApiGenomaStudyUrl,
            actionsFunction: this.genomaModuleStudyActions.bind(this),
          },
          {
            name: "STUDY_FAMILIES",
            apiUrlForActions: ApiGenomaStudyUrl,
            actionsFunction: this.genomaModuleStudyActions.bind(this),
          },
          {
            name: "STUDY_SAMPLES_SET",
            apiUrlForActions: ApiGenomaStudyUrl,
            actionsFunction: this.genomaModuleStudyActions.bind(this),
          },
          {
            name: "STUDY_INDIVIDUALS",
            apiUrlForActions: ApiGenomaStudyUrl,
            actionsFunction: this.genomaModuleStudyActions.bind(this),
          },
          {
            name: "STUDY_INDIVIDUAL_SAMPLES",
            apiUrlForActions: ApiGenomaStudyUrl,
            actionsFunction: this.genomaModuleStudyActions.bind(this),
          },
          {
            name: "STUDY_INDIVIDUAL_SAMPLE_VARIABLES",
            apiUrlForActions: ApiGenomaStudyObjectsVariablesUrl,
            actionsFunction: this.genomaModuleStudyActions.bind(this),
          },
        ],
      };
    }
    getFunctionalArea(name) {
      var moduleDefinition = this.moduleDefinition();
      var functionalAreas = [];
      functionalAreas = moduleDefinition.functionalAreas;
      var actionDefinition = functionalAreas.find(function (tab) {
        return tab.name.toUpperCase() == name.toUpperCase();
      });
      return actionDefinition;
    }
    genomaModuleProjectActions() {
      return [
        {
          actionName: "PROJECT_NEW",
          dialogInfo: {
            requiresDialog: true,
            webComponentName: "myElementsProject",
            dialogName: "createNewProject",
            dialogArgument: "SAMPLINGCOMMENTADD",
          },
          apiParams: [
            {
              paramName: "projectName",
              dataArrName: "newProjectName",
              isMandatory: true,
            },
            {
              paramName: "fieldsNames",
              dataArrName: "newProjectFieldsNames",
              isMandatory: false,
            },
            {
              paramName: "fieldsValues",
              dataArrName: "newProjectFieldsValues",
              isMandatory: false,
            },
          ],
        },
        {
          actionName: "PROJECT_UPDATE",
          dialogInfo: {
            requiresDialog: true,
            webComponentName: "myElementsProject",
            dialogName: "updateProject",
            dialogArgument: "SAMPLINGCOMMENTADD",
          },
          apiParams: [
            {
              paramName: "projectName",
              dataArrName: "name",
              isMandatory: true,
            },
            {
              paramName: "fieldsNames",
              dataArrName: "newProjectFieldsNames",
              isMandatory: false,
            },
            {
              paramName: "fieldsValues",
              dataArrName: "newProjectFieldsValues",
              isMandatory: false,
            },
          ],
        },
        {
          actionName: "PROJECT_ACTIVATE",
          dialogInfo: {
            requiresDialog: false,
            webComponentName: "myElementsProject",
            dialogName: "updateProject",
            dialogArgument: "SAMPLINGCOMMENTADD",
          },
          apiParams: [
            {
              paramName: "projectName",
              dataArrName: "name",
              isMandatory: true,
            },
          ],
        },
        {
          actionName: "PROJECT_DEACTIVATE",
          dialogInfo: {
            requiresDialog: false,
            webComponentName: "myElementsProject",
            dialogName: "updateProject",
            dialogArgument: "SAMPLINGCOMMENTADD",
          },
          apiParams: [
            {
              paramName: "projectName",
              dataArrName: "name",
              isMandatory: true,
            },
          ],
        },
        {
          actionName: "STUDY_NEW",
          dialogInfo: {
            requiresDialog: true,
            webComponentName: "myElementsProject",
            dialogName: "createNewStudy",
            dialogArgument: "",
          },
          apiParams: [
            {
              paramName: "projectName",
              dataArrName: "name",
              isMandatory: true,
            },
            {
              paramName: "studyName",
              dataArrName: "newStudyName",
              isMandatory: true,
            },
            {
              paramName: "fieldsNames",
              dataArrName: "newStudyFieldsNames",
              isMandatory: false,
            },
            {
              paramName: "fieldsValues",
              dataArrName: "newStudyFieldsValues",
              isMandatory: false,
            },
          ],
        },
      ];
    }
    genomaModuleStudyActions() {
      return [
        //STUDY
        {
          actionName: "STUDY_UPDATE",
          dialogInfo: {
            requiresDialog: true,
            webComponentName: "myElementsProject",
            dialogName: "updateStudy",
            dialogArgument: "",
          },
          apiParams: [
            {
              paramName: "projectName",
              dataArrName: "project",
              isMandatory: true,
            },
            { paramName: "studyName", dataArrName: "name", isMandatory: true },
            {
              paramName: "fieldsNames",
              dataArrName: "fieldsNames",
              isMandatory: false,
            },
            {
              paramName: "fieldsValues",
              dataArrName: "fieldsValues",
              isMandatory: false,
            },
          ],
        },
        {
          actionName: "STUDY_ACTIVATE",
          dialogInfo: { requiresDialog: false },
          apiParams: [
            { paramName: "studyName", dataArrName: "name", isMandatory: true },
          ],
        },
        {
          actionName: "STUDY_DEACTIVATE",
          dialogInfo: { requiresDialog: false },
          apiParams: [
            { paramName: "studyName", dataArrName: "name", isMandatory: true },
          ],
        },
        //STUDY_FAMILY
        {
          actionName: "STUDY_CREATE_FAMILY",
          dialogInfo: {
            requiresDialog: true,
            webComponentName: "myElementsProject",
            dialogName: "createNewStudyFamily",
            dialogArgument: "SAMPLINGCOMMENTADD",
          },
          apiParams: [
            { paramName: "studyName", dataArrName: "study", isMandatory: true },
            {
              paramName: "familyName",
              dataArrName: "newStudyFamilyName",
              isMandatory: true,
            },
            {
              paramName: "individualsList",
              dataArrName: "individualsList",
              isMandatory: false,
            },
          ],
        },
        {
          actionName: "STUDY_FAMILY_ACTIVATE",
          dialogInfo: {
            requiresDialog: false,
            webComponentName: "myElementsProject",
            dialogName: "updateStudyFamily",
          },
          apiParams: [
            { paramName: "studyName", dataArrName: "study", isMandatory: true },
            { paramName: "familyName", dataArrName: "name", isMandatory: true },
          ],
        },
        {
          actionName: "STUDY_FAMILY_DEACTIVATE",
          dialogInfo: { requiresDialog: false },
          apiParams: [
            { paramName: "studyName", dataArrName: "study", isMandatory: true },
            { paramName: "familyName", dataArrName: "name", isMandatory: true },
          ],
        },
        {
          actionName: "STUDY_FAMILY_ADD_INDIVIDUAL",
          dialogInfo: {
            requiresDialog: true,
            webComponentName: "myElementsProject",
            dialogName: "STUDY_FAMILY_ADD_INDIVIDUAL",
          },
          apiParams: [
            { paramName: "studyName", dataArrName: "study", isMandatory: true },
            {
              paramName: "familyName",
              dataArrName: "familyName",
              isMandatory: true,
            },
            {
              paramName: "individualsList",
              dataArrName: "individualsList",
              isMandatory: true,
            },
          ],
        },
        {
          actionName: "STUDY_FAMILY_REMOVE_INDIVIDUAL",
          dialogInfo: {
            requiresDialog: true,
            webComponentName: "myElementsProject",
            dialogName: "STUDY_FAMILY_REMOVE_INDIVIDUAL",
            dialogArgument: "STUDY_FAMILY_REMOVE_INDIVIDUAL",
          },
          apiParams: [
            { paramName: "studyName", dataArrName: "study", isMandatory: true },
            { paramName: "familyName", dataArrName: "name", isMandatory: true },
            {
              paramName: "individualId",
              dataArrName: "indivId",
              isMandatory: true,
            },
          ],
        },
        //STUDY_SAMPLES_SET
        {
          actionName: "STUDY_CREATE_SAMPLES_SET",
          dialogInfo: {
            requiresDialog: true,
            webComponentName: "myElementsProject",
            dialogName: "createNewStudySamplesSet",
            dialogArgument: "",
          },
          apiParams: [
            { paramName: "studyName", dataArrName: "study", isMandatory: true },
            {
              paramName: "samplesSetName",
              dataArrName: "newStudySamplesSetName",
              isMandatory: true,
            },
            {
              paramName: "fieldsNames",
              dataArrName: "newStudySamplesSetFieldsNames",
              isMandatory: false,
            },
            {
              paramName: "fieldsValues",
              dataArrName: "newStudySamplesSetFieldsValues",
              isMandatory: false,
            },
            {
              paramName: "samplesList",
              dataArrName: "samplesList",
              isMandatory: false,
            },
          ],
        },
        {
          actionName: "STUDY_SAMPLES_SET_ACTIVATE",
          dialogInfo: {
            requiresDialog: false,
            webComponentName: "myElementsProject",
            dialogName: "updateStudySamplesSet",
          },
          apiParams: [
            { paramName: "studyName", dataArrName: "study", isMandatory: true },
            {
              paramName: "samplesSetName",
              dataArrName: "name",
              isMandatory: true,
            },
          ],
        },
        {
          actionName: "STUDY_SAMPLES_SET_DEACTIVATE",
          dialogInfo: { requiresDialog: false },
          apiParams: [
            { paramName: "studyName", dataArrName: "study", isMandatory: true },
            {
              paramName: "samplesSetName",
              dataArrName: "name",
              isMandatory: true,
            },
          ],
        },
        {
          actionName: "STUDY_SAMPLES_SET_ADD_SAMPLE",
          dialogInfo: {
            requiresDialog: true,
            webComponentName: "myElementsProject",
            dialogName: "STUDY_SAMPLES_SET_ADD_SAMPLE",
          },
          apiParams: [
            { paramName: "studyName", dataArrName: "study", isMandatory: true },
            {
              paramName: "samplesSetName",
              dataArrName: "samplesSetName",
              isMandatory: true,
            },
            {
              paramName: "sampleId",
              dataArrName: "sampleId",
              isMandatory: true,
            },
          ],
        },
        {
          actionName: "STUDY_SAMPLES_SET_REMOVE_SAMPLE",
          dialogInfo: {
            requiresDialog: true,
            webComponentName: "myElementsProject",
            dialogName: "STUDY_SAMPLES_SET_REMOVE_SAMPLE",
            dialogArgument: "STUDY_SAMPLES_SET_REMOVE_SAMPLE",
          },
          apiParams: [
            { paramName: "studyName", dataArrName: "study", isMandatory: true },
            {
              paramName: "samplesSetName",
              dataArrName: "name",
              isMandatory: true,
            },
            {
              paramName: "sampleId",
              dataArrName: "sampleId",
              isMandatory: true,
            },
          ],
        },
        //STUDY_INDIVIDUAL
        {
          actionName: "STUDY_CREATE_INDIVIDUAL",
          dialogInfo: {
            requiresDialog: true,
            webComponentName: "myElementsProject",
            dialogName: "createNewStudyIndividual",
            dialogArgument: "",
          },
          apiParams: [
            { paramName: "studyName", dataArrName: "study", isMandatory: true },
            {
              paramName: "individualName",
              dataArrName: "newStudyIndividualName",
              isMandatory: true,
            },
            {
              paramName: "fieldsNames",
              dataArrName: "newStudyFieldsNames",
              isMandatory: false,
            },
            {
              paramName: "fieldsValues",
              dataArrName: "newStudyFieldsValues",
              isMandatory: false,
            },
          ],
        },
        {
          actionName: "STUDY_INDIVIDUAL_ACTIVATE",
          dialogInfo: { requiresDialog: false },
          apiParams: [
            { paramName: "studyName", dataArrName: "study", isMandatory: true },
            {
              paramName: "individualId",
              dataArrName: "individual_id",
              isMandatory: true,
            },
          ],
        },
        {
          actionName: "STUDY_INDIVIDUAL_DEACTIVATE",
          dialogInfo: { requiresDialog: false },
          apiParams: [
            { paramName: "studyName", dataArrName: "study", isMandatory: true },
            {
              paramName: "individualId",
              dataArrName: "individual_id",
              isMandatory: true,
            },
          ],
        },
        //STUDY_INDIVIDUAL_SAMPLE
        {
          actionName: "STUDY_CREATE_INDIVIDUAL_SAMPLE",
          dialogInfo: { requiresDialog: false },
          apiParams: [
            { paramName: "studyName", dataArrName: "study", isMandatory: true },
            {
              paramName: "individualId",
              dataArrName: "individual_id",
              isMandatory: true,
            },
          ],
        },
        {
          actionName: "STUDY_INDIVIDUAL_SAMPLE_ACTIVATE",
          dialogInfo: { requiresDialog: false },
          apiParams: [
            { paramName: "studyName", dataArrName: "study", isMandatory: true },
            {
              paramName: "individualId",
              dataArrName: "individual_id",
              isMandatory: true,
            },
            {
              paramName: "sampleId",
              dataArrName: "sample_id",
              isMandatory: true,
            },
          ],
        },
        {
          actionName: "STUDY_INDIVIDUAL_SAMPLE_DEACTIVATE",
          dialogInfo: { requiresDialog: false },
          apiParams: [
            { paramName: "studyName", dataArrName: "study", isMandatory: true },
            {
              paramName: "individualId",
              dataArrName: "individual_id",
              isMandatory: true,
            },
            {
              paramName: "sampleId",
              dataArrName: "sample_id",
              isMandatory: true,
            },
          ],
        },
        //Variable Values
        {
          actionName: "ADD_VARIABLE_SET_TO_STUDY_OBJECT",
          dialogInfo: {
            requiresDialog: true,
            webComponentName: "myElementsProject",
            dialogName: "variablesSetListAddToObject",
          },
          apiParams: [
            { paramName: "studyName", dataArrName: "study", isMandatory: true },
            {
              paramName: "variableSetName",
              dataArrName: "variableSetName",
              isMandatory: true,
            },
            {
              paramName: "ownerTable",
              dataArrName: "ownerTable",
              isMandatory: true,
            },
            { paramName: "ownerId", dataArrName: "ownerId", isMandatory: true },
          ],
        },
        {
          actionName: "STUDY_OBJECT_SET_VARIABLE_VALUE",
          dialogInfo: {
            requiresDialog: true,
            webComponentName: "myElementsProject",
            dialogName: "enterVariableValue",
          },
          apiParams: [
            { paramName: "studyName", dataArrName: "study", isMandatory: true },
            {
              paramName: "variableSetName",
              dataArrName: "variable_set",
              isMandatory: true,
            },
            {
              paramName: "ownerTable",
              dataArrName: "owner_table",
              isMandatory: true,
            },
            {
              paramName: "ownerId",
              dataArrName: "owner_id",
              isMandatory: true,
            },
            {
              paramName: "variableName",
              dataArrName: "name",
              isMandatory: true,
            },
            {
              paramName: "newValue",
              dataArrName: "newValue",
              isMandatory: true,
            },
          ],
        },
      ];
    }

    endPoints() {
      return [
        {
          actionName: "ALL_ACTIVE_VARIABLES_AND_VARIABLES_SET",
          apiParams: [],
          apiurl: rootAPIUrl + frontEndGenomaProjectUrl,
          storeReducer: "getActiveVariablesAndVariablesSet_genoma_instancia1",
        },
        {
          actionName: "ALL_ACTIVE_PROJECTS",
          apiParams: [],
          apiurl: rootAPIUrl + frontEndGenomaProjectUrl,
          storeReducer: "getActiveProjects_genoma_instancia1",
        },
        {
          actionName: "SET_SELECTED_PROJECT",
          apiParams: [
            {
              paramName: "sampleId",
              dataArrName: "sample_id",
              isMandatory: false,
            },
            {
              paramName: "sampleComment",
              dataArrName: "sample_comment",
              isMandatory: false,
            },
          ],
          apiCallDiscarded: true,
          apiurl: rootAPIUrl + frontEndGenomaProjectUrl,
          storeReducer: "setSelectedProject_genoma_instancia1",
        },
      ];
    }
  };
