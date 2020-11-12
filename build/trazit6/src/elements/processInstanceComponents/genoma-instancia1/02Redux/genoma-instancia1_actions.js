define(["exports", "../03config/config-process.js"], function (
  _exports,
  _configProcess
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.activeVariablesAndVariablesSet = activeVariablesAndVariablesSet;
  _exports.activeProjects = activeProjects;
  _exports.setSelectedProject = setSelectedProject;
  _exports.setSelectedStudy = setSelectedStudy;
  _exports.ALL_ACTIVE_VARIABLES_AND_VARIABLES_SET = _exports.SELECTED_STUDY = _exports.SELECTED_PROJECT = _exports.ALL_ACTIVE_PROJECTS = void 0;
  var schemaName = _configProcess.schema_name.replace("-", "_");
  const ALL_ACTIVE_PROJECTS = "ALL_ACTIVE_PROJECTS" + schemaName;
  _exports.ALL_ACTIVE_PROJECTS = ALL_ACTIVE_PROJECTS;
  const SELECTED_PROJECT = "SELECTED_PROJECT" + schemaName;
  _exports.SELECTED_PROJECT = SELECTED_PROJECT;
  const SELECTED_STUDY = "SELECTED_STUDY" + schemaName;
  _exports.SELECTED_STUDY = SELECTED_STUDY;
  const ALL_ACTIVE_VARIABLES_AND_VARIABLES_SET =
    "ALL_ACTIVE_VARIABLES_AND_VARIABLES_SET" + schemaName;
  _exports.ALL_ACTIVE_VARIABLES_AND_VARIABLES_SET = ALL_ACTIVE_VARIABLES_AND_VARIABLES_SET;
  function activeVariablesAndVariablesSet(data) {
    //console.log('genoma-instancia1_actions.activeVariablesAndVariablesSet', 'data', data);
    return { type: ALL_ACTIVE_VARIABLES_AND_VARIABLES_SET, DATA: data };
  }
  function activeProjects(data) {
    //console.log('genoma-instancia1_actions.activeProjects', 'data', data);
    return { type: ALL_ACTIVE_PROJECTS, DATA: data };
  }
  function setSelectedProject(data) {
    //console.log('genoma-instancia1_actions.activeProjects', 'data', data);
    return { type: SELECTED_PROJECT, DATA: data };
  }
  function setSelectedStudy(data) {
    //console.log('genoma-instancia1_actions.activeProjects', 'data', data);
    return { type: SELECTED_STUDY, DATA: data };
  }
});
