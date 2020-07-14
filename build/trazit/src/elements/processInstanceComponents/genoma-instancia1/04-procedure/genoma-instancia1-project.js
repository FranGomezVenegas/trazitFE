import{PolymerElement,html}from"../../../../../node_modules/@polymer/polymer/polymer-element.js";import{connect}from"../../../../../node_modules/pwa-helpers/connect-mixin.js";import{store}from"../../../../store.js";import"../../../../../node_modules/@polymer/paper-tabs/paper-tabs.js";import"../../../../../node_modules/@polymer/paper-tabs/paper-tab.js";import"../../../../../node_modules/@polymer/iron-pages/iron-pages.js";import{FieldsMethods}from"../../../../platform-mixins/functions/fields-methods.js";import{TabsMethods}from"../../../../platform-mixins/platform-functions/tabs-functions.js";import"../03config/Project/genoma-instancia1-projectmainview-settings.js";import{FrontendEndpointsModuleGenoma}from"../01moduleFunctionality/endpoints-frontend-genoma.js";import{window_tabs,projectMain_projectSelectionForm,home_defaultTab,tabsDefinition}from"../03config/Project/genoma-instancia1-projectmainview-settings.js";import{setSelectedProject as setSelectedProject_genoma_instancia1,setSelectedStudy as setSelectedStudy_genoma_instancia1//    as activeProjects_genoma_instancia1
}from"../02Redux/genoma-instancia1_actions.js";// import {setSelectedProgram} from '../02Redux/em-demo-a_actions.js.js';
import"../01moduleFunctionality/genoma-instancia1-webcomponent-project.js";import"./project-tabs/genoma-instancia1-proj-home.js";import"./project-tabs/genoma-instancia1-proj-summary-cards.js";import"./project-tabs/genoma-instancia1-proj-samples-set.js";import"./project-tabs/genoma-instancia1-proj-study-variablevalues.js";import"./project-tabs/genoma-instancia1-proj-study-samples.js";import"./project-tabs/genoma-instancia1-proj-study-family.js";import"./project-tabs/genoma-instancia1-proj-study-individuals.js";import"./project-tabs/genoma-instancia1-proj-study-files.js";// FrontendEndpointsEnvMonitForProductionLot FrontendEndpointsEnvMonitForPrograms
class GenomaInstancia1Project extends FieldsMethods(TabsMethods(FrontendEndpointsModuleGenoma(connect(store)(PolymerElement)))){stateChanged(state){if(null!=state.genomaInstancia1){this.projects=state.genomaInstancia1.activeProjects.project;if(null!=this.projects){this.fillProjectsList()}}this.selectedLanguage=state.app.user.appLanguage}fillProjectsList(){if(null==this.projects){return}var i,projectList=[];for(i=0;i<this.projects.length;i++){var newElement=[{keyName:"",keyValue_en:"",keyValue_es:""}];newElement.keyName=this.projects[i].name,newElement.keyValue_es=this.projects[i].name,newElement.keyValue_en=this.projects[i].name;projectList[i]=newElement}this.set("filtersList.0.items",projectList);var mye={detail:{name:"filtersList",index:0}};if(1==this.projects.length){this.projectSelected(mye)}else{mye={detail:{name:"filtersList",index:1}};this.projectSelected(mye)}}projectSelected(e){if("filtersList"==e.detail.name){this.selectedSampleTemplateIndex=e.detail.index;this.selectedProject=this.projects[e.detail.index];var data=[];data=this.selectedProject;//store.dispatch(setSelectedProject_genoma_instancia1(data));    
var i,studyList=[];for(i=0;i<this.selectedProject.study.length;i++){var newElement=[{keyName:"",keyValue_en:"",keyValue_es:""}];newElement.keyName=this.selectedProject.study[i].name,newElement.keyValue_es=this.selectedProject.study[i].name,newElement.keyValue_en=this.selectedProject.study[i].name;studyList[i]=newElement}this.set("filtersList.1.items",studyList)}}filterListValueChanged(e){//console.log('filterListValueChanged', 'e', e);
if("projectList"==e.detail.name){this.selectedProject=this.projects[e.detail.index];var mye={detail:{name:"filtersList",index:e.detail.index}};this.projectSelected(mye)}if("studyList"==e.detail.name){this.selectedStudy=this.selectedProject.study[e.detail.index];var data=[];data=this.selectedStudy;//this.callEndpoint(data, 'SET_SELECTED_PROJECT');
store.dispatch(setSelectedStudy_genoma_instancia1(data));//console.log(this.selectedStudy.name);
}}tabSelected(e){var curTab=[];curTab.tabName="home";//e.currentTarget.name;
curTab.name="home";//e.currentTarget.name;
curTab.currTabEsignRequired=!1;//this.tabs[meIndex].tabEsignRequired;
curTab.currTabConfirmUserRequired=!1;//this.tabs[meIndex].tabConfirmUserRequired;
this.currentTab=curTab;return}static get properties(){return{selectedLanguage:String,projects:Object,selectedProject:Object,selectedStudy:Object,filtersList:{type:Array,notify:!0,bubble:!0,value:projectMain_projectSelectionForm},tabs:{type:Object,value:window_tabs},currentSubTab:{type:String,value:home_defaultTab},tabsDefinition:{type:Object,value:tabsDefinition}}}static get template(){return html`
        <style include="gemoma-instancia1-projectmainview-style"></style>
        <genoma-instancia1-webcomponent-project id="myElementsProject"></genoma-instancia1-webcomponent-project>
        <div class="wrapper">
            <vaadin-button on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button> 
            <div id="projects" class="filtersList"> 
                <template is="dom-repeat" index="{{index}}" items="{{filtersList}}" as="currentfield">
                <field-controller on-field-list-value-changed="filterListValueChanged" 
                    name="{{currentfield.name}}" id="{{currentfield.name}}" 
                    field="{{currentfield}}" value="{{selectedSampleTemplate}}"
                    style="width:100px;">
                </field-controller>
                </template>          
            </div>
        </div>
        <div id="project_definition" class="projectTabs">        
            <paper-tabs selected="{{currentSubTab}}" attr-for-selected="name" noink scrollable>
                <template is="dom-repeat" items="[[tabs]]" as="tab">                
                    <paper-tab class="tabItem"  esign-required="[[tab.esign_required]]" 
                        confirmuser-required="[[tab.confirmUser_required]]" 
                        on-click="tabSelected" name="[[tab.tabName]]" tab-name="[[tab.tabName]]"
                        tab-index="{{index}}">{{tabLabelValue(selectedLanguage, tab)}} 
                    </paper-tab>                
                </template>
            </paper-tabs>
            <iron-pages selected="[[currentSubTab]]" attr-for-selected="id">                
                <genoma-instancia1-proj-home id="home" selected-project="{{selectedProject}}" selected-object="{{selectedStudy}}"> </genoma-instancia1-proj-home>  
                <genoma-instancia1-proj-summary-cards id="summary-cards" selected-project="{{selectedProject}}"> </genoma-instancia1-proj-summary-cards>  
                <genoma-instancia1-proj-samples-set display-table="{{tabsDefinition.configCalendar.displayTable}}" 
                    id="samples-set" selected-project="{{selectedProject}}"> </genoma-instancia1-proj-samples-set>                  
                <genoma-instancia1-proj-study-variablevalues id="study-variablevalues" selected-project="{{selectedProject}}"> </genoma-instancia1-proj-study-variablevalues>                  
                <genoma-instancia1-proj-study-samples id="study-samples" selected-project="{{selectedProject}}"> </genoma-instancia1-proj-study-samples>
                <genoma-instancia1-proj-study-family id="study-family" selected-project="{{selectedProject}}"> </genoma-instancia1-proj-study-family>                    
                <genoma-instancia1-proj-study-individuals id="study-individuals" selected-project="{{selectedProject}}"> </genoma-instancia1-proj-study-individuals>                    
                <genoma-instancia1-proj-study-files id="study-files" selected-project="{{selectedProject}}"> </genoma-instancia1-proj-study-files>                    
            </iron-pages>
        </div>
        
        `}refreshWindow(){this.getProjects();this.getVariablesAndVariablesSet()}ready(){super.ready();this.getProjects();this.getVariablesAndVariablesSet()}}customElements.define("genoma-instancia1-project",GenomaInstancia1Project);