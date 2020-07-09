import {schema_name} from '../03config/config-process';
var schemaName=schema_name.replace('-','_');

export const ALL_ACTIVE_PROJECTS = 'ALL_ACTIVE_PROJECTS'+schemaName;
export const SELECTED_PROJECT = 'SELECTED_PROJECT'+schemaName;
export const SELECTED_STUDY = 'SELECTED_STUDY'+schemaName;

export function activeProjects(data) {
    //console.log('genoma-instancia1_actions.activeProjects', 'data', data);
    return {
      type: ALL_ACTIVE_PROJECTS,
      DATA: data
    }
  }
  export function setSelectedProject(data) {
    //console.log('genoma-instancia1_actions.activeProjects', 'data', data);
    return {
      type: SELECTED_PROJECT,
      DATA: data
    }
  }  
  export function setSelectedStudy(data) {
    //console.log('genoma-instancia1_actions.activeProjects', 'data', data);
    return {
      type: SELECTED_STUDY,
      DATA: data
    }
  }   