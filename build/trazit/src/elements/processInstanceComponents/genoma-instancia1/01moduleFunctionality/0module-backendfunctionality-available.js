import{backendUrl as rootAPIUrl,ApiGenomaProjectUrl,ApiGenomaStudyUrl,frontEndGenomaProjectUrl,ApiGenomaStudyObjectsVariablesUrl}from"../../../../config/platform/logic/api-config.js";import{ApiEnvMonitSampleUrl,ApiEnvMonitProdLotUrl,ApiEnvMonitUrl,ApiEnvMonitIncubBatchUrl}from"../../../../config/platform/logic/api-config.js";export const GenomaModuleDefinition=superClass=>class extends superClass{moduleDefinition(){return{name:"genoma humano",version:1,functionalAreas:[{name:"PROJECTS",apiUrlForActions:ApiGenomaProjectUrl,actionsFunction:this.genomaModuleProjectActions.bind(this)},{name:"STUDIES",apiUrlForActions:ApiGenomaStudyUrl,actionsFunction:this.genomaModuleStudyActions.bind(this)},{name:"STUDY_FAMILIES",apiUrlForActions:ApiGenomaStudyUrl,actionsFunction:this.genomaModuleStudyActions.bind(this)},{name:"STUDY_SAMPLES_SET",apiUrlForActions:ApiGenomaStudyUrl,actionsFunction:this.genomaModuleStudyActions.bind(this)},{name:"STUDY_INDIVIDUALS",apiUrlForActions:ApiGenomaStudyUrl,actionsFunction:this.genomaModuleStudyActions.bind(this)},{name:"STUDY_INDIVIDUAL_SAMPLES",apiUrlForActions:ApiGenomaStudyUrl,actionsFunction:this.genomaModuleStudyActions.bind(this)},{name:"STUDY_INDIVIDUAL_SAMPLE_VARIABLES",apiUrlForActions:ApiGenomaStudyObjectsVariablesUrl,actionsFunction:this.genomaModuleStudyActions.bind(this)}]}}getFunctionalArea(name){var moduleDefinition=this.moduleDefinition(),functionalAreas=[];functionalAreas=moduleDefinition.functionalAreas;var actionDefinition=functionalAreas.find(function(tab){return tab.name.toUpperCase()==name.toUpperCase()});return actionDefinition}genomaModuleProjectActions(){return[{actionName:"PROJECT_NEW",dialogInfo:{requiresDialog:!0,webComponentName:"myElementsProject",dialogName:"createNewProject",dialogArgument:"SAMPLINGCOMMENTADD"},apiParams:[{paramName:"projectName",dataArrName:"newProjectName",isMandatory:!0},{paramName:"fieldsNames",dataArrName:"newProjectFieldsNames",isMandatory:!1},{paramName:"fieldsValues",dataArrName:"newProjectFieldsValues",isMandatory:!1}]},{actionName:"PROJECT_UPDATE",dialogInfo:{requiresDialog:!0,webComponentName:"myElementsProject",dialogName:"updateProject",dialogArgument:"SAMPLINGCOMMENTADD"},apiParams:[{paramName:"projectName",dataArrName:"name",isMandatory:!0},{paramName:"fieldsNames",dataArrName:"newProjectFieldsNames",isMandatory:!1},{paramName:"fieldsValues",dataArrName:"newProjectFieldsValues",isMandatory:!1}]},{actionName:"PROJECT_ACTIVATE",dialogInfo:{requiresDialog:!1,webComponentName:"myElementsProject",dialogName:"updateProject",dialogArgument:"SAMPLINGCOMMENTADD"},apiParams:[{paramName:"projectName",dataArrName:"name",isMandatory:!0}]},{actionName:"PROJECT_DEACTIVATE",dialogInfo:{requiresDialog:!1,webComponentName:"myElementsProject",dialogName:"updateProject",dialogArgument:"SAMPLINGCOMMENTADD"},apiParams:[{paramName:"projectName",dataArrName:"name",isMandatory:!0}]},{actionName:"STUDY_NEW",dialogInfo:{requiresDialog:!0,webComponentName:"myElementsProject",dialogName:"createNewStudy",dialogArgument:""},apiParams:[{paramName:"projectName",dataArrName:"name",isMandatory:!0},{paramName:"studyName",dataArrName:"newStudyName",isMandatory:!0},{paramName:"fieldsNames",dataArrName:"newStudyFieldsNames",isMandatory:!1},{paramName:"fieldsValues",dataArrName:"newStudyFieldsValues",isMandatory:!1}]}]}genomaModuleStudyActions(){return[//STUDY
{actionName:"STUDY_UPDATE",dialogInfo:{requiresDialog:!0,webComponentName:"myElementsProject",dialogName:"updateStudy",dialogArgument:""},apiParams:[{paramName:"projectName",dataArrName:"project",isMandatory:!0},{paramName:"studyName",dataArrName:"name",isMandatory:!0},{paramName:"fieldsNames",dataArrName:"fieldsNames",isMandatory:!1},{paramName:"fieldsValues",dataArrName:"fieldsValues",isMandatory:!1}]},{actionName:"STUDY_ACTIVATE",dialogInfo:{requiresDialog:!1},apiParams:[{paramName:"studyName",dataArrName:"name",isMandatory:!0}]},{actionName:"STUDY_DEACTIVATE",dialogInfo:{requiresDialog:!1},apiParams:[{paramName:"studyName",dataArrName:"name",isMandatory:!0}]},//STUDY_FAMILY    
{actionName:"STUDY_CREATE_FAMILY",dialogInfo:{requiresDialog:!0,webComponentName:"myElementsProject",dialogName:"createNewStudyFamily",dialogArgument:"SAMPLINGCOMMENTADD"},apiParams:[{paramName:"studyName",dataArrName:"study",isMandatory:!0},{paramName:"familyName",dataArrName:"newStudyFamilyName",isMandatory:!0},{paramName:"individualsList",dataArrName:"individualsList",isMandatory:!1}]},{actionName:"STUDY_FAMILY_ACTIVATE",dialogInfo:{requiresDialog:!1,webComponentName:"myElementsProject",dialogName:"updateStudyFamily"},apiParams:[{paramName:"studyName",dataArrName:"study",isMandatory:!0},{paramName:"familyName",dataArrName:"name",isMandatory:!0}]},{actionName:"STUDY_FAMILY_DEACTIVATE",dialogInfo:{requiresDialog:!1},apiParams:[{paramName:"studyName",dataArrName:"study",isMandatory:!0},{paramName:"familyName",dataArrName:"name",isMandatory:!0}]},{actionName:"STUDY_FAMILY_ADD_INDIVIDUAL",dialogInfo:{requiresDialog:!0,webComponentName:"myElementsProject",dialogName:"STUDY_FAMILY_ADD_INDIVIDUAL"},apiParams:[{paramName:"studyName",dataArrName:"study",isMandatory:!0},{paramName:"familyName",dataArrName:"familyName",isMandatory:!0},{paramName:"individualsList",dataArrName:"individualsList",isMandatory:!0}]},{actionName:"STUDY_FAMILY_REMOVE_INDIVIDUAL",dialogInfo:{requiresDialog:!0,webComponentName:"myElementsProject",dialogName:"STUDY_FAMILY_REMOVE_INDIVIDUAL",dialogArgument:"STUDY_FAMILY_REMOVE_INDIVIDUAL"},apiParams:[{paramName:"studyName",dataArrName:"study",isMandatory:!0},{paramName:"familyName",dataArrName:"name",isMandatory:!0},{paramName:"individualId",dataArrName:"indivId",isMandatory:!0}]},//STUDY_SAMPLES_SET    
{actionName:"STUDY_CREATE_SAMPLES_SET",dialogInfo:{requiresDialog:!0,webComponentName:"myElementsProject",dialogName:"createNewStudySamplesSet",dialogArgument:""},apiParams:[{paramName:"studyName",dataArrName:"study",isMandatory:!0},{paramName:"samplesSetName",dataArrName:"newStudySamplesSetName",isMandatory:!0},{paramName:"fieldsNames",dataArrName:"newStudySamplesSetFieldsNames",isMandatory:!1},{paramName:"fieldsValues",dataArrName:"newStudySamplesSetFieldsValues",isMandatory:!1},{paramName:"samplesList",dataArrName:"samplesList",isMandatory:!1}]},{actionName:"STUDY_SAMPLES_SET_ACTIVATE",dialogInfo:{requiresDialog:!1,webComponentName:"myElementsProject",dialogName:"updateStudySamplesSet"},apiParams:[{paramName:"studyName",dataArrName:"study",isMandatory:!0},{paramName:"samplesSetName",dataArrName:"name",isMandatory:!0}]},{actionName:"STUDY_SAMPLES_SET_DEACTIVATE",dialogInfo:{requiresDialog:!1},apiParams:[{paramName:"studyName",dataArrName:"study",isMandatory:!0},{paramName:"samplesSetName",dataArrName:"name",isMandatory:!0}]},{actionName:"STUDY_SAMPLES_SET_ADD_SAMPLE",dialogInfo:{requiresDialog:!0,webComponentName:"myElementsProject",dialogName:"STUDY_SAMPLES_SET_ADD_SAMPLE"},apiParams:[{paramName:"studyName",dataArrName:"study",isMandatory:!0},{paramName:"samplesSetName",dataArrName:"samplesSetName",isMandatory:!0},{paramName:"sampleId",dataArrName:"sampleId",isMandatory:!0}]},{actionName:"STUDY_SAMPLES_SET_REMOVE_SAMPLE",dialogInfo:{requiresDialog:!0,webComponentName:"myElementsProject",dialogName:"STUDY_SAMPLES_SET_REMOVE_SAMPLE",dialogArgument:"STUDY_SAMPLES_SET_REMOVE_SAMPLE"},apiParams:[{paramName:"studyName",dataArrName:"study",isMandatory:!0},{paramName:"samplesSetName",dataArrName:"name",isMandatory:!0},{paramName:"sampleId",dataArrName:"sampleId",isMandatory:!0}]},//STUDY_INDIVIDUAL
{actionName:"STUDY_CREATE_INDIVIDUAL",dialogInfo:{requiresDialog:!0,webComponentName:"myElementsProject",dialogName:"createNewStudyIndividual",dialogArgument:""},apiParams:[{paramName:"studyName",dataArrName:"study",isMandatory:!0},{paramName:"individualName",dataArrName:"newStudyIndividualName",isMandatory:!0},{paramName:"fieldsNames",dataArrName:"newStudyFieldsNames",isMandatory:!1},{paramName:"fieldsValues",dataArrName:"newStudyFieldsValues",isMandatory:!1}]},{actionName:"STUDY_INDIVIDUAL_ACTIVATE",dialogInfo:{requiresDialog:!1},apiParams:[{paramName:"studyName",dataArrName:"study",isMandatory:!0},{paramName:"individualId",dataArrName:"individual_id",isMandatory:!0}]},{actionName:"STUDY_INDIVIDUAL_DEACTIVATE",dialogInfo:{requiresDialog:!1},apiParams:[{paramName:"studyName",dataArrName:"study",isMandatory:!0},{paramName:"individualId",dataArrName:"individual_id",isMandatory:!0}]},//STUDY_INDIVIDUAL_SAMPLE
{actionName:"STUDY_CREATE_INDIVIDUAL_SAMPLE",dialogInfo:{requiresDialog:!1},apiParams:[{paramName:"studyName",dataArrName:"study",isMandatory:!0},{paramName:"individualId",dataArrName:"individual_id",isMandatory:!0}]},{actionName:"STUDY_INDIVIDUAL_SAMPLE_ACTIVATE",dialogInfo:{requiresDialog:!1},apiParams:[{paramName:"studyName",dataArrName:"study",isMandatory:!0},{paramName:"individualId",dataArrName:"individual_id",isMandatory:!0},{paramName:"sampleId",dataArrName:"sample_id",isMandatory:!0}]},{actionName:"STUDY_INDIVIDUAL_SAMPLE_DEACTIVATE",dialogInfo:{requiresDialog:!1},apiParams:[{paramName:"studyName",dataArrName:"study",isMandatory:!0},{paramName:"individualId",dataArrName:"individual_id",isMandatory:!0},{paramName:"sampleId",dataArrName:"sample_id",isMandatory:!0}]},//Variable Values
{actionName:"ADD_VARIABLE_SET_TO_STUDY_OBJECT",dialogInfo:{requiresDialog:!0,webComponentName:"myElementsProject",dialogName:"variablesSetListAddToObject"},apiParams:[{paramName:"studyName",dataArrName:"study",isMandatory:!0},{paramName:"variableSetName",dataArrName:"variableSetName",isMandatory:!0},{paramName:"ownerTable",dataArrName:"ownerTable",isMandatory:!0},{paramName:"ownerId",dataArrName:"ownerId",isMandatory:!0}]},{actionName:"STUDY_OBJECT_SET_VARIABLE_VALUE",dialogInfo:{requiresDialog:!0,webComponentName:"myElementsProject",dialogName:"enterVariableValue"},apiParams:[{paramName:"studyName",dataArrName:"study",isMandatory:!0},{paramName:"variableSetName",dataArrName:"variable_set",isMandatory:!0},{paramName:"ownerTable",dataArrName:"owner_table",isMandatory:!0},{paramName:"ownerId",dataArrName:"owner_id",isMandatory:!0},{paramName:"variableName",dataArrName:"name",isMandatory:!0},{paramName:"newValue",dataArrName:"newValue",isMandatory:!0}]}]}endPoints(){return[{actionName:"ALL_ACTIVE_VARIABLES_AND_VARIABLES_SET",apiParams:[],apiurl:rootAPIUrl+frontEndGenomaProjectUrl,storeReducer:"getActiveVariablesAndVariablesSet_genoma_instancia1"},{actionName:"ALL_ACTIVE_PROJECTS",apiParams:[],apiurl:rootAPIUrl+frontEndGenomaProjectUrl,storeReducer:"getActiveProjects_genoma_instancia1"},{actionName:"SET_SELECTED_PROJECT",apiParams:[{paramName:"sampleId",dataArrName:"sample_id",isMandatory:!1},{paramName:"sampleComment",dataArrName:"sample_comment",isMandatory:!1}],apiCallDiscarded:!0,apiurl:rootAPIUrl+frontEndGenomaProjectUrl,storeReducer:"setSelectedProject_genoma_instancia1"}]}};