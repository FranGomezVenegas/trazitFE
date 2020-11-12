import{css}from"../../../../../../node_modules/lit-element/lit-element.js";import{schema_name}from"../config-process.js";export const home_defaultTab="study-samples";export const window_tabs=[{procedure:schema_name,tabConfirmUserRequired:!1,tabEsignRequired:!1,tabLabel_en:"Home",tabLabel_es:"Inicio",tabName:"home",tabIndex:0},{procedure:schema_name,tabConfirmUserRequired:!1,tabEsignRequired:!1,tabLabel_en:"Variable Values",tabLabel_es:"Variables y valores",tabName:"study-variablevalues",tabIndex:1},{procedure:schema_name,tabConfirmUserRequired:!1,tabEsignRequired:!1,tabLabel_en:"Samples",tabLabel_es:"Muestras",tabName:"study-samples",tabIndex:1},{procedure:schema_name,tabConfirmUserRequired:!1,tabEsignRequired:!1,tabLabel_en:"Individuals",tabLabel_es:"Individuos",tabName:"study-individuals",tabIndex:1},{procedure:schema_name,tabConfirmUserRequired:!1,tabEsignRequired:!1,tabLabel_en:"Families",tabLabel_es:"Familias",tabName:"study-family",tabIndex:1},{procedure:schema_name,tabConfirmUserRequired:!1,tabEsignRequired:!1,tabLabel_en:"Samples Set",tabLabel_es:"Agrupaci\xF3n Muestras",tabName:"samples-set",tabIndex:1},{procedure:schema_name,tabConfirmUserRequired:!1,tabEsignRequired:!1,tabLabel_en:"Files",tabLabel_es:"Archivos",tabName:"study-files",tabIndex:1},{procedure:schema_name,tabConfirmUserRequired:!1,tabEsignRequired:!1,tabLabel_en:"Summary",tabLabel_es:"Resumen",tabName:"summary-cards",tabIndex:2}];export const tabsDefinition={// configCalendar:{
//   displayCalendar: true,
//   displayTable: true,
// }
};export const projectMain_projectSelectionForm=[{name:"projectList",label_en:"Projects",label_es:"Proyectos",type:"list",value:"",read_only:!1,items:[{keyName:"",keyValue_en:"",keyValue_es:""}]},{name:"studyList",label_en:"Studies",label_es:"Estudios",type:"list",value:"",read_only:!1,items:[{keyName:"",keyValue_en:"",keyValue_es:""}]}];export const elementTableSamplesSet={tableTitle:{display:!0,label:{label_en:"Samples Set",label_es:"Agrupaci\xF3n Muestras"}},displayRefreshButton:!0,displayButtons:!0,buttons:[{name:"STUDY_CREATE_SAMPLES_SET",requires_selected_object:!1,label_en:"Create new Sample Set",label_es:"Crear Agrupaci\xF3n Muestras",requires_selected_object:!1,type:"icon-button",icon_name:"icons:add-box",read_only:!1}],tableHdrFlds:[{name:"name",label_en:"Name",label_es:"Nombre",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"description",label_en:"Description",label_es:"Descripci\xF3n",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"type",label_en:"Type",label_es:"Tipo",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"active",label_en:"Active",label_es:"Activo",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"created_on",label_en:"Creation Date",label_es:"F.Creaci\xF3n",sort:!0,filter:!1,is_icon:!1,width:"20%"}],tableSectionWhenHidden:{displaySelectedObjectData:!0,selectedObjectData:[{name:"name",label_en:"Name",label_es:"Nombre",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"description",label_en:"Description",label_es:"Descripci\xF3n",sort:!1,filter:!0,is_icon:!1,width:"20%"}]}};export const elementTableConfigVariablesSet={tableTitle:{display:!0,label:{label_en:"Variables Set",label_es:"Variables Set"}},displayRefreshButton:!0,displayButtons:!0,buttons:[{name:"STUDY_CREATE_FAMILY",requires_selected_object:!1,label_en:"Create new family",label_es:"Crear Familia",type:"icon-button",requires_selected_object:!1,icon_name:"icons:add-box",read_only:!1},{name:"STUDY_FAMILY_ACTIVATE",label_en:"Activate Family",label_es:"Activar Familia",type:"icon-button",icon_name:"icons:alarm-add",read_only:!1},{name:"STUDY_FAMILY_DEACTIVATE",label_en:"Deactivate Family",label_es:"Desactivar Familia",type:"icon-button",icon_name:"alarm-off",read_only:!1},{name:"STUDY_FAMILY_ADD_INDIVIDUAL",label_en:"Add individual to family",label_es:"A\xF1adir invididuo a familia",type:"icon-button",icon_name:"icons:add-box",read_only:!1},{name:"STUDY_FAMILY_REMOVE_INDIVIDUAL",label_en:"Remove Individual from Family",label_es:"Quitar individuo de familia",type:"icon-button",icon_name:"icons:remove",read_only:!1}],tableHdrFlds:[{name:"name",label_en:"Name",label_es:"Nombre",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"type",label_en:"Type",label_es:"Tipo",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"active",label_en:"Active",label_es:"Activo",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"created_on",label_en:"Creation Date",label_es:"F.Creaci\xF3n",sort:!0,filter:!1,is_icon:!1,width:"20%"}],tableSectionWhenHidden:{displaySelectedObjectData:!0,selectedObjectData:[{name:"name",label_en:"Name",label_es:"Nombre",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"type",label_en:"Type",label_es:"Tipo",sort:!1,filter:!0,is_icon:!1,width:"20%"}]}};export const elementTableFamily={tableTitle:{display:!0,label:{label_en:"Families",label_es:"Familias"}},displayRefreshButton:!0,displayButtons:!0,buttons:[{name:"STUDY_CREATE_FAMILY",requires_selected_object:!1,label_en:"Create new family",label_es:"Crear Familia",type:"icon-button",requires_selected_object:!1,icon_name:"icons:add-box",read_only:!1},{name:"STUDY_FAMILY_ACTIVATE",label_en:"Activate Family",label_es:"Activar Familia",type:"icon-button",icon_name:"icons:alarm-add",read_only:!1},{name:"STUDY_FAMILY_DEACTIVATE",label_en:"Deactivate Family",label_es:"Desactivar Familia",type:"icon-button",icon_name:"alarm-off",read_only:!1},{name:"STUDY_FAMILY_ADD_INDIVIDUAL",label_en:"Add individual to family",label_es:"A\xF1adir invididuo a familia",type:"icon-button",icon_name:"icons:add-box",read_only:!1},{name:"STUDY_FAMILY_REMOVE_INDIVIDUAL",label_en:"Remove Individual from Family",label_es:"Quitar individuo de familia",type:"icon-button",icon_name:"icons:remove",read_only:!1}],tableHdrFlds:[{name:"name",label_en:"Name",label_es:"Nombre",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"type",label_en:"Type",label_es:"Tipo",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"active",label_en:"Active",label_es:"Activo",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"created_on",label_en:"Creation Date",label_es:"F.Creaci\xF3n",sort:!0,filter:!1,is_icon:!1,width:"20%"}],tableSectionWhenHidden:{displaySelectedObjectData:!0,selectedObjectData:[{name:"name",label_en:"Name",label_es:"Nombre",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"type",label_en:"Type",label_es:"Tipo",sort:!1,filter:!0,is_icon:!1,width:"20%"}]}};export const elementTableIndividual={tableTitle:{display:!0,label:{label_en:"Individuals",label_es:"Individuos"}},displayRefreshButton:!0,displayButtons:!0,buttons:[{name:"STUDY_CREATE_INDIVIDUAL",label_en:"Create Individual",label_es:"Crear Individuo",type:"icon-button",requires_selected_object:!1,icon_name:"icons:alarm-add",read_only:!1},{name:"STUDY_INDIVIDUAL_ACTIVATE",label_en:"Activate Individual",label_es:"Activar Individuo",type:"icon-button",icon_name:"icons:alarm-add",read_only:!1},{name:"STUDY_INDIVIDUAL_DEACTIVATE",label_en:"Deactivate Individual",label_es:"Desactivar Individuo",type:"icon-button",icon_name:"alarm-off",read_only:!1},{name:"STUDY_FAMILY_ADD_INDIVIDUAL",label_en:"Add individual to family",label_es:"A\xF1adir invididuo a familia",type:"icon-button",icon_name:"icons:add-box",read_only:!1},{name:"STUDY_FAMILY_REMOVE_INDIVIDUAL",label_en:"Remove Individual from Family",label_es:"Quitar individuo de familia",type:"icon-button",icon_name:"icons:remove",read_only:!1},{name:"STUDY_CREATE_INDIVIDUAL_SAMPLE",requires_selected_object:!1,label_en:"Create Individual Sample",label_es:"Crear Muestra de Individuo",type:"icon-button",icon_name:"icons:add-box",read_only:!1}],tableHdrFlds:[{name:"individual_id",label_en:"Id",label_es:"Id",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"individual_name",label_en:"Name",label_es:"Nombre",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"description",label_en:"Description",label_es:"Descripci\xF3n",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"active",label_en:"active",label_es:"activo",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"created_on",label_en:"Creation",label_es:"Creado El",sort:!1,filter:!0,is_icon:!1,width:"20%"}],tableSectionWhenHidden:{displaySelectedObjectData:!0,selectedObjectData:[{name:"individual_id",label_en:"Id",label_es:"Id",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"individual_name",label_en:"Name",label_es:"Nombre",sort:!1,filter:!0,is_icon:!1,width:"20%"}]}};export const elementTableFamilyIndividual={tableTitle:{display:!0,label:{label_en:"All Family and Individuals",label_es:"Todas las familias e individuos"}},displayRefreshButton:!0,displayButtons:!0,buttons:[],tableHdrFlds:[{name:"family_name",label_en:"Family",label_es:"Familia",sort:!1,filter:!0,is_icon:!1,width:"50%"},{name:"linked_on",label_en:"Creation",label_es:"Creado El",sort:!1,filter:!0,is_icon:!1,width:"50%"}],tableSectionWhenHidden:{displaySelectedObjectData:!0,selectedObjectData:[{name:"family_name",label_en:"Id",label_es:"Id",sort:!1,filter:!0,is_icon:!1,width:"20%"}]}};export const elementTableSample={tableTitle:{display:!0,label:{label_en:"All Study Samples",label_es:"Todas las Muestras del estudio"}},displayRefreshButton:!0,displayButtons:!0,buttons:[{name:"STUDY_INDIVIDUAL_SAMPLE_ACTIVATE",label_en:"Activate Sample",label_es:"Activar Muestra",type:"icon-button",icon_name:"icons:alarm-add",read_only:!1},{name:"STUDY_INDIVIDUAL_SAMPLE_DEACTIVATE",label_en:"Deactivate Sample",label_es:"Desactivar Muestra",type:"icon-button",icon_name:"alarm-off",read_only:!1},// {
//   "name": "STUDY_FAMILY_ADD_INDIVIDUAL",
//   "requires_selected_object":false,
//   "label_en": "Add Sample Individual to Family", "label_es": "Añadir individuo de la muestra a Familia",
//   "type": "icon-button",
//   "icon_name": "icons:add-box",
//   "read_only": false,
// },  
{name:"STUDY_SAMPLES_SET_ADD_SAMPLE",requires_selected_object:!1,label_en:"Add to Samples Set",label_es:"A\xF1adir a Samples Set",type:"icon-button",icon_name:"icons:add-box",read_only:!1},{name:"STUDY_SAMPLES_SET_REMOVE_SAMPLE",requires_selected_object:!1,label_en:"Remove from Samples Set",label_es:"Borrar de Samples Set",type:"icon-button",icon_name:"icons:add-box",read_only:!1},{name:"ADD_VARIABLE_SET_TO_STUDY_OBJECT",requires_selected_object:!1,label_en:"Add Variables Set",label_es:"A\xF1adir Conjunto de Variables",type:"icon-button",icon_name:"icons:add-box",read_only:!1,ownerTable:"study_individual_sample"}],tableHdrFlds:[{name:"sample_id",label_en:"Id",label_es:"Id",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"description",label_en:"Description",label_es:"Descripci\xF3n",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"active",label_en:"active",label_es:"activo",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"created_on",label_en:"Creation",label_es:"Creado El",sort:!1,filter:!0,is_icon:!1,width:"20%"}],tableSectionWhenHidden:{displaySelectedObjectData:!0,selectedObjectData:[{name:"sample_id",label_en:"Id",label_es:"Id",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"description",label_en:"Description",label_es:"Descripci\xF3n",sort:!1,filter:!0,is_icon:!1,width:"20%"}]}};export const elementTableSampleVariable={tableTitle:{display:!0,label:{label_en:"Sample Variables",label_es:"Variables de la muestra"}},displayRefreshButton:!0,displayButtons:!0,buttons:[{name:"STUDY_OBJECT_SET_VARIABLE_VALUE",label_en:"Enter Variable Value",label_es:"Entrar Valor a Variable",type:"icon-button",icon_name:"icons:alarm-add",read_only:!1}],tableHdrFlds:[{name:"id",label_en:"Id",label_es:"Id",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"name",label_en:"Name",label_es:"Nombre",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"value",label_en:"Value",label_es:"Valor",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"variable_set",label_en:"Var Set",label_es:"Conjunto",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"type",label_en:"Type",label_es:"Tipo",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"owner_table",label_en:"Owner",label_es:"Due\xF1o",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"owner_id",label_en:"Owner Id",label_es:"Id Due\xF1o",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"sample",label_en:"Sample",label_es:"Muestra",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"individual",label_en:"Individual",label_es:"Individuo",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"family",label_en:"Family",label_es:"Familia",sort:!0,filter:!1,is_icon:!1,width:"20%"}],tableSectionWhenHidden:{displaySelectedObjectData:!0,selectedObjectData:[{name:"id",label_en:"Id",label_es:"Id",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"owner_table",label_en:"Owner",label_es:"Due\xF1o",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"name",label_en:"Name",label_es:"Nombre",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"value",label_en:"Value",label_es:"Valor",sort:!1,filter:!0,is_icon:!1,width:"20%"},{name:"variable_set",label_en:"Var Set",label_es:"Conjunto",sort:!1,filter:!0,is_icon:!1,width:"20%"}]}};const documentContainerGenomaInstancia1ProjectmainviewStyle=document.createElement("gemoma-instancia1-projectmainview-style");documentContainerGenomaInstancia1ProjectmainviewStyle.setAttribute("style","display: none;");export const documentContainerGenomaInstancia1ProjectmainviewStyleLit=css`
  div {            
    width: 80%;
    height: 80%;
  }
  div.wrapper{
    display: flex;
  }
  div.filtersList{display: flex;}
  div.projectsList {
    margin-top:0px; margin-left:0px;margin-bottom:0px;margin-right:0px;
    /* display: inline-block; */
    width: 100%;
    height: 100%;
    margin: 0px;
  }  
  div.projectTabs {
    /*display: var(--layout_-_display); */
    margin-top:0px; margin-left:0px;margin-bottom:0px;margin-right:0px;
    /* display: inline-block; */
    /* top: 170px;*/
    width: 100%;
    height: 300px;
    /* margin: 1em; */
    max-height: 300px;
    min-height: 150px;
  } 
  paper-tab.tabItem {
    color: var(--paper-light-blue-50);
    background-color: var(--paper-light-blue-500);
    /* width:38px; */
    height:100%;
    /* max-width:112px; */
  }  
  paper-tabs{
  height: 3vh;
  font-size: 2vw;
  }                               
`;documentContainerGenomaInstancia1ProjectmainviewStyle.innerHTML=`
  <dom-module id="gemoma-instancia1-projectmainview-style">
    <template>
    <style>
      div {            
          width: 80%;
          height: 80%;
      }
      div.wrapper{
          display: flex;
      }
      div.filtersList{display: flex;}
      div.projectsList {
          margin-top:0px; margin-left:0px;margin-bottom:0px;margin-right:0px;
          /* display: inline-block; */
          width: 100%;
          height: 100%;
          margin: 0px;
      }  
      div.projectTabs {
          /*display: var(--layout_-_display); */
          margin-top:0px; margin-left:0px;margin-bottom:0px;margin-right:0px;
          /* display: inline-block; */
          /* top: 170px;*/
          width: 100%;
          height: 300px;
          /* margin: 1em; */
          max-height: 300px;
          min-height: 150px;
      } 
      paper-tab.tabItem {
          color: var(--paper-light-blue-50);
          background-color: var(--paper-light-blue-500);
          /* width:38px; */
          height:100%;
          /* max-width:112px; */
      }  
      paper-tabs{
        height: 3vh;
        font-size: 2vw;
      }                               
    </style>
    </template>
  </dom-module>`;document.head.appendChild(documentContainerGenomaInstancia1ProjectmainviewStyle);