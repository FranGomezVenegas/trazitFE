define(["../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../store.js","../../../../../node_modules/@polymer/paper-tabs/paper-tabs.js","../../../../../node_modules/@polymer/paper-tabs/paper-tab.js","../../../../../node_modules/@polymer/iron-pages/iron-pages.js","../../../../platform-mixins/functions/fields-methods.js","../../../../platform-mixins/platform-functions/tabs-functions.js","../03config/Programs/proc-deploy-programmainview-settings.js","../01moduleFunctionality/endpoints-frontend-env-monit.js","../02Redux/proc-deploy_actions.js","./program-tabs/proc-deploy-prog-limits.js","./program-tabs/proc-deploy-prog-points.js","./program-tabs/proc-deploy-prog-points-map.js"],function(_polymerElement,_connectMixin,_store,_paperTabs,_paperTab,_ironPages,_fieldsMethods,_tabsFunctions,_procDeployProgrammainviewSettings,_endpointsFrontendEnvMonit,_procDeploy_actions,_procDeployProgLimits,_procDeployProgPoints,_procDeployProgPointsMap){"use strict";//import './program-tabs/proc-deploy-prog-home.js';
// import './program-tabs/proc-deploy-prog-configcalendar.js'; -> aqui esta el fallo del polymer-legacy
// import './program-tabs/proc-deploy-prog-corrective-actions.js';
class procDeployPrograms extends(0,_fieldsMethods.FieldsMethods)((0,_tabsFunctions.TabsMethods)((0,_endpointsFrontendEnvMonit.FrontendEndpointsEnvMonitForProductionLot)((0,_endpointsFrontendEnvMonit.FrontendEndpointsEnvMonitForPrograms)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement))))){stateChanged(state){if(null!=state.procDeploy){this.programs=state.procDeploy.programs.programsList;if(null!=this.programs){this.fillProgramsList()}}// if (state.app.user.appProcedureList.procedures!=null){  
//     this.procedure=state.app.user.appProcedureList.procedures[2];    
// }
this.selectedLanguage=state.app.user.appLanguage}fillProgramsList(){if(null==this.programs){return}var i;this.set("programsList.0.items",[]);for(i=0;i<this.programs.length;i++){this.push("programsList.0.items",{keyName:this.programs[i].name,keyValue_es:this.programs[i].description_en,keyValue_en:this.programs[i].description_es})}}programSelected(e){if("programsList"==e.detail.name){this.selectedSampleTemplateIndex=e.detail.index;this.selectedProgram=this.programs[e.detail.index];_store.store.dispatch((0,_procDeploy_actions.setSelectedProgram)(this.programs[e.detail.index]));this.getSelectedProgramCorrectiveAction({programName:this.programs[e.detail.index].name});var elem=this.shadowRoot.getElementById("proc-deploy-corrective-actions");// if (elem){elem.getSelectedProgramCorrectiveActions();}            
}}tabSelected(e){var curTab=[];curTab.tabName="home";//e.currentTarget.name;
curTab.name="home";//e.currentTarget.name;
curTab.currTabEsignRequired=!1;//this.tabs[meIndex].tabEsignRequired;
curTab.currTabConfirmUserRequired=!1;//this.tabs[meIndex].tabConfirmUserRequired;
this.currentTab=curTab;return}static get properties(){return{selectedLanguage:String,programs:Object,selectedProgram:Object,programsList:{type:Array,notify:!0,bubble:!0,value:_procDeployProgrammainviewSettings.programMain_programSelectionForm},tabs:{type:Object,value:_procDeployProgrammainviewSettings.em_programs_tabs},currentSubTab:{type:String,value:_procDeployProgrammainviewSettings.programHome_defaultTab},tabsDefinition:{type:Object,value:_procDeployProgrammainviewSettings.tabsDefinition}}}static get template(){return _polymerElement.html`
        <style include="proc-deploy-programmainview-style"></style>
        <div class="wrapper">
            <vaadin-button on-click="refresh"><iron-icon icon="refresh"></iron-icon></vaadin-button> 
            <div id="programs" class="programsList"> 
                <template is="dom-repeat" index="{{index}}" items="{{programsList}}" as="currentfield">
                <field-controller on-field-list-value-changed="programSelected" 
                    name="{{currentfield.name}}" 
                    field="{{currentfield}}" value="{{selectedSampleTemplate}}"
                    style="width:100px;">
                </field-controller>
                </template>          
            </div>
        </div>
        <div id="program_definition" class="programTabs">        
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
            {{id}}            
                <proc-deploy-prog-home id="proc-deploy-home"> </proc-deploy-prog-home>  
                <proc-deploy-prog-configcalendar display-calendar="{{tabsDefinition.configCalendar.displayCalendar}}" display-table="{{tabsDefinition.configCalendar.displayTable}}" id="proc-deploy-config-calendar" selected-program="{{selectedProgram}}"> </proc-deploy-prog-configcalendar>                  
                <proc-deploy-prog-limits id="proc-deploy-limits" selected-program="{{selectedProgram}}"> </proc-deploy-prog-limits>                  
                <proc-deploy-prog-points-map id="proc-deploy-sampling-points-map" selected-program="{{selectedProgram}}"> </proc-deploy-prog-points-map>
                <proc-deploy-prog-points id="proc-deploy-sampling-points" selected-program="{{selectedProgram}}"> </proc-deploy-prog-points>
                <proc-deploy-prog-corrective-actions id="proc-deploy-corrective-actions" selected-program="{{selectedProgram}}"> </proc-deploy-prog-corrective-actions>
            </iron-pages>
        </div>
        `}refreshWindow(){this.getActivePrograms()}getActivePrograms(){this.callBackRefreshWindow=this.refreshWindow.bind(this);this.getPrograms();this.getActiveProductionLotsList()}ready(){super.ready();this.getActivePrograms()}}customElements.define("proc-deploy-programs",procDeployPrograms)});