import {
  ApiEnvMonitSampleUrl,
  ApiEnvMonitProdLotUrl,
  ApiEnvMonitUrl,
  ApiEnvMonitIncubationUrl,
  ApiEnvMonitIncubBatchUrl,
} from "../../../../config/platform/logic/api-config.js";
export const EnvMonitModuleDefinition = (superClass) =>
  class extends superClass {
    moduleDefinition() {
      return {
        name: "environmental_monitoring",
        version: 1,
        functionalAreas: [
          { name: "SAMPLES", apiUrlForActions: ApiEnvMonitSampleUrl },
          { name: "PROGRAMS", apiUrlForActions: ApiEnvMonitUrl },
          { name: "PRODUCTION_LOTS", apiUrlForActions: ApiEnvMonitProdLotUrl },
          { name: "INCUB_BATCH", apiUrlForActions: ApiEnvMonitUrl },
          { name: "INCUBATOR", apiUrlForActions: ApiEnvMonitIncubationUrl },
        ],
      };
    }
    getFunctionalArea(name) {
      var moduleDefinition = this.moduleDefinition(),
        functionalAreas = [];
      functionalAreas = moduleDefinition.functionalAreas;
      var actionDefinition = functionalAreas.find(function (tab) {
        return tab.name.toUpperCase() == name.toUpperCase();
      });
      return actionDefinition;
    }
    sampleActions() {
      return [
        {
          actionName: "SAMPLINGCOMMENTADD",
          dialogInfo: {
            requiresDialog: !0,
            webComponentName: "myElementsSample",
            dialogName: "addComment",
            dialogArgument: "SAMPLINGCOMMENTADD",
          },
          apiParams: [
            {
              paramName: "sampleId",
              dataArrName: "sample_id",
              isMandatory: !0,
            },
            {
              paramName: "sampleComment",
              dataArrName: "sample_comment",
              isMandatory: !0,
            },
          ],
        },
        {
          actionName: "COC_CONFIRMCHANGE",
          apiParams: [
            {
              paramName: "sampleId",
              dataArrName: "selectedSample",
              isMandatory: !0,
            },
            {
              paramName: "confirmChangeComment",
              dataArrName: "confirmChangeComment",
              isMandatory: !0,
            },
          ],
          dialogInfo: {
            requiresDialog: !0,
            webComponentName: "myElementsSample",
            dialogName: "addComment",
            dialogArgument: "COC_CONFIRMCHANGE",
          },
        },
        {
          actionName: "COC_ABORTCHANGE",
          apiParams: [
            {
              paramName: "sampleId",
              dataArrName: "selectedSample",
              isMandatory: !0,
            },
            {
              paramName: "cancelChangeComment",
              dataArrName: "cancelChangeComment",
              isMandatory: !0,
            },
          ],
          dialogInfo: {
            requiresDialog: !0,
            webComponentName: "myElementsSample",
            dialogName: "addComment",
            dialogArgument: "COC_ABORTCHANGE",
          },
        },
        {
          actionName: "SETSAMPLINGDATE",
          apiParams: [
            {
              paramName: "sampleId",
              dataArrName: "sample_id",
              isMandatory: !0,
            },
          ],
          dialogInfo: { requiresDialog: !1 },
        },
        {
          actionName: "SAMPLINGCOMMENTREMOVE",
          apiParams: [
            {
              paramName: "sampleId",
              dataArrName: "sample_id",
              isMandatory: !0,
            },
          ],
          dialogInfo: { requiresDialog: !1 },
        },
        {
          actionName: "SAMPLESTAGE_MOVETONEXT",
          apiParams: [
            {
              paramName: "sampleId",
              dataArrName: "sample_id",
              isMandatory: !0,
            },
            {
              paramName: "sampleStage",
              dataArrName: "currentStage",
              isMandatory: !1,
            },
          ],
          dialogInfo: { requiresDialog: !1 },
        },
        {
          actionName: "SAMPLESTAGE_MOVETOPREVIOUS",
          apiParams: [
            {
              paramName: "sampleId",
              dataArrName: "sample_id",
              isMandatory: !0,
            },
            {
              paramName: "sampleStage",
              dataArrName: "currentStage",
              isMandatory: !1,
            },
          ],
          dialogInfo: { requiresDialog: !1 },
        },
        {
          actionName: "SAMPLE_AUDIT",
          apiParams: ["sampleId"],
          dialogInfo: {
            requiresDialog: !0,
            webComponentName: "myElementsSample",
            dialogName: "sampleAudit",
            dialogArgument: "",
          },
        },
        {
          actionName: "SAMPLEAUDIT_SET_AUDIT_ID_REVIEWED",
          apiParams: [
            {
              paramName: "sampleId",
              dataArrName: "sample_id",
              isMandatory: !0,
            },
            { paramName: "auditId", dataArrName: "audit_id", isMandatory: !0 },
          ],
          dialogInfo: {
            requiresDialog: !0,
            webComponentName: "myElementsSample",
            dialogName: "sampleAudit",
            dialogArgument: "",
          },
        },
        {
          actionName: "ADD_SAMPLE_MICROORGANISM",
          apiParams: [
            { paramName: "sampleId", dataArrName: "sampleId", isMandatory: !0 },
            {
              paramName: "microorganismName",
              dataArrName: "microorganismName",
              isMandatory: !0,
            },
          ],
          dialogInfo: {
            requiresDialog: !0,
            webComponentName: "myElementsSample",
            dialogName: "addSampleMicroorg",
            dialogArgument: "",
          },
        },
        {
          actionName: "EM_BATCH_INCUB_ADD_SMP",
          apiParams: [
            {
              paramName: "sampleId",
              dataArrName: "sample_id",
              isMandatory: !0,
            },
            {
              paramName: "batchName",
              dataArrName: "batchName",
              isMandatory: !0,
            },
            {
              paramName: "batchTemplateId",
              dataArrName: "batchtemplateId",
              isMandatory: !0,
            },
            {
              paramName: "batchTemplateVersion",
              dataArrName: "batchtemplateVersion",
              isMandatory: !0,
            },
          ],
          dialogInfo: { requiresDialog: !1 },
          functionInfo: {
            requiresTriggerFunction: !0,
            functionName: "REDUX_GET_INCUBBATCH",
          },
        },
        {
          actionName: "EM_BATCH_INCUB_REMOVE_SMP",
          apiParams: [
            {
              paramName: "sampleId",
              dataArrName: "sample_id",
              isMandatory: !0,
            },
            {
              paramName: "batchName",
              dataArrName: "batchName",
              isMandatory: !0,
            },
            {
              paramName: "batchTemplateId",
              dataArrName: "batchtemplateId",
              isMandatory: !0,
            },
            {
              paramName: "batchTemplateVersion",
              dataArrName: "batchtemplateVersion",
              isMandatory: !0,
            },
          ],
          dialogInfo: { requiresDialog: !1 },
          functionInfo: {
            requiresTriggerFunction: !0,
            functionName: "REDUX_GET_INCUBBATCH",
          },
        },
        {
          actionName: "GIVENSAMPLEENTERRESULT",
          apiParams: ["sampleId"],
          dialogInfo: {
            requiresDialog: !0,
            webComponentName: "myElementsSample",
            dialogName: "enterResults",
            dialogArgument: "",
          },
        },
        {
          actionName: "ENTERRESULT",
          apiParams: [
            { paramName: "sampleId", dataArrName: "sampleId", isMandatory: !0 },
            { paramName: "resultId", dataArrName: "resultId", isMandatory: !0 },
            {
              paramName: "rawValueResult",
              dataArrName: "rawValue",
              isMandatory: !0,
            },
          ],
          dialogInfo: {
            requiresDialog: !0,
            webComponentName: "myElementsSample",
            dialogName: "enterResults",
            dialogArgument: "",
          },
        },
        {
          actionName: "LOGSAMPLE",
          apiParams: [
            {
              paramName: "programName",
              dataArrName: "programName",
              isMandatory: !0,
            },
            {
              paramName: "locationName",
              dataArrName: "locationName",
              isMandatory: !0,
            },
            {
              paramName: "sampleTemplate",
              dataArrName: "sampleTemplate",
              isMandatory: !0,
            },
            {
              paramName: "sampleTemplateVersion",
              dataArrName: "sampleTemplateVersion",
              isMandatory: !0,
            },
            {
              paramName: "fieldName",
              dataArrName: "fieldName",
              isMandatory: !0,
            },
            {
              paramName: "fieldValue",
              dataArrName: "fieldValue",
              isMandatory: !0,
            },
            {
              paramName: "numSamplesToLog",
              dataArrName: "numSamplesToLog",
              isMandatory: !0,
            },
          ],
          dialogInfo: { requiresDialog: !1 },
        },
        {
          actionName: "CANCELSAMPLE",
          apiParams: [
            {
              paramName: "sampleId",
              dataArrName: "sample_id",
              isMandatory: !0,
            },
          ],
          dialogInfo: { requiresDialog: !1 },
          functionInfo: { requiresTriggerFunction: !1, functionName: "" },
        },
        {
          actionName: "UNCANCELSAMPLE",
          apiParams: [
            {
              paramName: "sampleId",
              dataArrName: "sample_id",
              isMandatory: !0,
            },
          ],
          dialogInfo: { requiresDialog: !1 },
          functionInfo: { requiresTriggerFunction: !1, functionName: "" },
        },
        {
          actionName: "REVIEWSAMPLE",
          apiParams: [
            {
              paramName: "sampleId",
              dataArrName: "sample_id",
              isMandatory: !0,
            },
          ],
          dialogInfo: { requiresDialog: !1 },
          functionInfo: { requiresTriggerFunction: !1, functionName: "" },
        },
        {
          actionName: "REVIEWTEST",
          apiParams: [
            { paramName: "testId", dataArrName: "test_id", isMandatory: !0 },
          ],
          dialogInfo: { requiresDialog: !1 },
          functionInfo: { requiresTriggerFunction: !1, functionName: "" },
        },
        {
          actionName: "REVIEWSAMPLE_TESTINGGROUP",
          apiParams: [
            {
              paramName: "sampleId",
              dataArrName: "sample_id",
              isMandatory: !0,
            },
            {
              paramName: "testingGroup",
              dataArrName: "testing_group",
              isMandatory: !0,
            },
          ],
          dialogInfo: { requiresDialog: !1 },
          functionInfo: { requiresTriggerFunction: !1, functionName: "" },
        },
      ];
    }
    programActions() {
      return [
        {
          actionName: "CORRECTIVE_ACTION_COMPLETE",
          dialogInfo: { requiresDialog: !1 },
          apiParams: [
            {
              paramName: "programName",
              dataArrName: "program_name",
              isMandatory: !0,
            },
            {
              paramName: "programCorrectiveActionId",
              dataArrName: "id",
              isMandatory: !0,
            },
          ],
        },
      ];
    }
    investigationActions() {
      return [
        {
          actionName: "NEW_INVESTIGATION",
          dialogInfo: {
            requiresDialog: !0,
            webComponentName: "myelements",
            dialogName: "investigationNew",
            dialogArgument: "",
          },
          apiParams: [
            {
              paramName: "fieldName",
              dataArrName: "field_name",
              defaultValue: "",
              isMandatory: !0,
            },
            {
              paramName: "fieldValue",
              dataArrName: "field_value",
              defaultValue: "",
              isMandatory: !0,
            },
            {
              paramName: "objectsToAdd",
              dataArrName: "objects_to_add",
              defaultValue: "",
              isMandatory: !1,
            },
          ],
        },
        {
          actionName: "ADD_INVEST_OBJECTS",
          dialogInfo: {
            requiresDialog: !0,
            webComponentName: "myelements",
            dialogName: "investigationAddObject",
            dialogArgument: "",
          },
          apiParams: [
            {
              paramName: "investigationId",
              dataArrName: "id",
              isMandatory: !0,
            },
            {
              paramName: "objectsToAdd",
              dataArrName: "objects_to_add",
              isMandatory: !0,
            },
          ],
        },
        {
          actionName: "EM_DEACTIVATE_PRODUCTION_LOT",
          dialogInfo: { requiresDialog: !1 },
          apiParams: [
            { paramName: "lotName", dataArrName: "lot_name", isMandatory: !0 },
          ],
        },
      ];
    }
    productionLotsActions() {
      return [
        {
          actionName: "EM_NEW_PRODUCTION_LOT",
          dialogInfo: {
            requiresDialog: !0,
            webComponentName: "myelements",
            dialogName: "productionLotNew",
            dialogArgument: "",
          },
          apiParams: [
            {
              paramName: "lotName",
              dataArrName: "newLotName",
              isMandatory: !0,
            },
            {
              paramName: "fieldName",
              dataArrName: "",
              defaultValue: "active",
              isMandatory: !0,
            },
            {
              paramName: "fieldValue",
              dataArrName: "",
              defaultValue: "true*Boolean",
              isMandatory: !0,
            },
          ],
        },
        {
          actionName: "EM_ACTIVATE_PRODUCTION_LOT",
          dialogInfo: {
            requiresDialog: !0,
            webComponentName: "myelements",
            dialogName: "productionLotActivate",
            dialogArgument: "",
          },
          apiParams: [
            { paramName: "lotName", dataArrName: "lot_name", isMandatory: !0 },
          ],
        },
        {
          actionName: "EM_DEACTIVATE_PRODUCTION_LOT",
          dialogInfo: { requiresDialog: !1 },
          apiParams: [
            { paramName: "lotName", dataArrName: "lot_name", isMandatory: !0 },
          ],
        },
      ];
    }
    batchActions() {
      return [
        {
          actionName: "EM_BATCH_INCUB_CREATE",
          dialogInfo: {
            requiresDialog: !0,
            webComponentName: "myelements",
            dialogName: "incubBatchNew",
            dialogArgument: "",
          },
          apiParams: [
            {
              paramName: "batchName",
              dataArrName: "newBatchName",
              isMandatory: !0,
            },
            {
              paramName: "batchTemplateId",
              dataArrName: "",
              defaultValue: "1",
              isMandatory: !0,
            },
            {
              paramName: "batchTemplateVersion",
              dataArrName: "",
              defaultValue: "1",
              isMandatory: !0,
            },
          ],
        },
        {
          actionName: "EM_BATCH_INCUB_REMOVE",
          dialogInfo: { requiresDialog: !1 },
          apiParams: [
            { paramName: "batchName", dataArrName: "name", isMandatory: !0 },
          ],
        },
        {
          actionName: "EM_BATCH_ASSIGN_INCUB",
          dialogInfo: {
            requiresDialog: !0,
            webComponentName: "myelements",
            dialogName: "incubBatchAssignIncubator",
            dialogArgument: "",
          },
          apiParams: [
            { paramName: "batchName", dataArrName: "name", isMandatory: !0 },
            {
              paramName: "incubatorName",
              dataArrName: "incubatorName",
              isMandatory: !0,
            },
          ],
        },
        {
          actionName: "EM_BATCH_INCUB_START",
          dialogInfo: { requiresDialog: !1 },
          apiParams: [
            { paramName: "batchName", dataArrName: "name", isMandatory: !0 },
            {
              paramName: "batchTemplateId",
              dataArrName: "incub_batch_config_id",
              defaultValue: "1",
              isMandatory: !0,
            },
            {
              paramName: "batchTemplateVersion",
              dataArrName: "incub_batch_config_version",
              defaultValue: "1",
              isMandatory: !0,
            },
          ],
        },
        {
          actionName: "EM_BATCH_INCUB_END",
          dialogInfo: { requiresDialog: !1 },
          apiParams: [
            { paramName: "batchName", dataArrName: "name", isMandatory: !0 },
            {
              paramName: "batchTemplateId",
              dataArrName: "incub_batch_config_id",
              defaultValue: "1",
              isMandatory: !0,
            },
            {
              paramName: "batchTemplateVersion",
              dataArrName: "incub_batch_config_version",
              defaultValue: "1",
              isMandatory: !0,
            },
          ],
        },
      ];
    }
    incubatorActions() {
      return [
        {
          actionName: "EM_INCUBATION_ADD_TEMP_READING",
          dialogInfo: {
            requiresDialog: !0,
            webComponentName: "myelements",
            dialogName: "incubatorAddTempReading",
            dialogArgument: "",
          },
          apiParams: [
            {
              paramName: "incubatorName",
              dataArrName: "name",
              isMandatory: !0,
            },
            {
              paramName: "temperature",
              dataArrName: "tempValue",
              isMandatory: !0,
            },
          ],
        },
      ];
    }
  };
