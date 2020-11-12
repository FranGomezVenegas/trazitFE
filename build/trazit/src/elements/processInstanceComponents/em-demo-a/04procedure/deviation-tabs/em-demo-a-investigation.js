import{PolymerElement,html}from"../../../../../../node_modules/@polymer/polymer/polymer-element.js";import{connect}from"../../../../../../node_modules/pwa-helpers/connect-mixin.js";import{store}from"../../../../../store.js";import{FieldsMethods}from"../../../../../platform-mixins/functions/fields-methods.js";// import '../../../internalComponents/grid-components/vaadingrid-singleselectrunaction.js'; borrado por refactoring
import"../../../../internalComponents/Grids/vaadingrid-lit-singleselect.js";import{FrontendEndpointsEnvMonitForInvestigation}from"../../01moduleFunctionality/endpoints-frontend-env-monit.js";import{FunctionsEnvMonit}from"../../01moduleFunctionality/functions-env-monit.js";import"../../01moduleFunctionality/em-demo-a-webcomponent-env-monit.js";import"../../03config/ResultDeviation/em-demo-a-investigation-settings.js";import{windowDefinition}from"../../03config/ResultDeviation/em-demo-a-investigation-settings.js";//'../03config/config-process.js';
class emDemoAInvestigation extends FieldsMethods(FunctionsEnvMonit(FrontendEndpointsEnvMonitForInvestigation(connect(store)(PolymerElement)))){static get properties(){return{tableDefinition:{type:Object,value:windowDefinition},openInvestigations:{type:Array,notify:!0},selectedObject:Object,selectedObject2:Object,callBackRefreshWindow:Object,selectedLanguage:{type:String}}}dataminingfiledownload(){var apiUrl="http://localhost:8080/LabPLANET-API/moduleenvmon/EnvMonAPIstats?schemaPrefix=em-demo-a&actionName=QUERY_SAMPLING_HISTORY&finalToken=eyJ1c2VyREIiOiJsYWJwbGFuZXQiLCJlU2lnbiI6InZhbGUiLCJ1c2VyREJQYXNzd29yZCI6InZhbGUiLCJ1c2VyX3Byb2NlZHVyZXMiOiJbZ2Vub21hLTEsIHByb2MtZGVwbG95XSIsInR5cCI6IkpXVCIsImFwcFNlc3Npb25JZCI6IjExNDAzIiwiYXBwU2Vzc2lvblN0YXJ0ZWREYXRlIjoiTW9uIEF1ZyAyNCAxNTo0ODozOCBDRVNUIDIwMjAiLCJ1c2VyUm9sZSI6ImNvb3JkaW5hdG9yIiwiYWxnIjoiSFMyNTYiLCJpbnRlcm5hbFVzZXJJRCI6IjEifQ.eyJpc3MiOiJMYWJQTEFORVRkZXN0cmFuZ2lzSW5UaGVOaWdodCJ9.b0fVxUL8pny1cfHQfIgQjvhP_ItDh49uNvJPD6UHnh8&sampleGroups=area%2C+spec_code%2Csample_config_code*counter_by_area_spec_tmp%7Carea*counter_by_area%7Chas_pre_invest*counter_out%7Cspec_eval*counter_range_eval%7Chas_invest*counter_investigations%7Chas_pre_invest%2C+has_invest*counter_pre_and_invest&includeSamplerSamples=true&samplingDayStart&samplingDayEnd&includeSamples=true&excludeReadingNotEntered=true&fileName=cambioNombre.csv&outputIsFile=true";console.log("dataminingfiledownload",apiUrl);axios.get(apiUrl,{params:{}}).then(response=>{if(200==response.status){//console.log(response.data);
return}return}).catch(function(error){console.log(error.message)}).then(function(){})}static get template(){return html`            
            <style include="em-demo-a-investigation-style"></style> 
            <em-demo-a-webcomponent-env-monit id="myelements"></em-demo-a-webcomponent-env-monit>
            <env-monit-elements id="myElements" refresh-window-method="{{callBackRefreshWindow}}"></env-monit-elements>  
            <div class="main">
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
                        <em-demo-a-prog-home id="em-demo-a-home"> </em-demo-a-prog-home>  
                        <em-demo-a-prog-configcalendar display-calendar="{{tabsDefinition.configCalendar.displayCalendar}}" display-table="{{tabsDefinition.configCalendar.displayTable}}" id="em-demo-a-config-calendar" selected-program="{{selectedProgram}}"> </em-demo-a-prog-configcalendar>                  
                        <em-demo-a-prog-limits id="em-demo-a-limits" selected-program="{{selectedProgram}}"> </em-demo-a-prog-limits>                  
                        <em-demo-a-prog-points-map id="em-demo-a-sampling-points-map" selected-program="{{selectedProgram}}"> </em-demo-a-prog-points-map>
                        <em-demo-a-prog-points id="em-demo-a-sampling-points" selected-program="{{selectedProgram}}"> </em-demo-a-prog-points>
                        <em-demo-a-prog-corrective-actions id="em-demo-a-corrective-actions" selected-program="{{selectedProgram}}"> </em-demo-a-prog-corrective-actions>
                    </iron-pages>
                </div>            
                <template is="dom-if" if="[[tableDefinition.tableTitle.display]]"> 
                    <p class="tableTitle">{{labelValue(selectedLanguage, tableDefinition.tableTitle.label)}}</p>
                </template>  
                <div name="tableDefinitionButtons" class="buttonGroup">
                    <template is="dom-if" if="[[tableDefinition.displayRefreshButton]]"> 
                        <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
                    </template>  
                    <template is="dom-if" if="[[tableDefinition.displayButtons]]"> 
                        <template is="dom-repeat" items="{{tableDefinition.buttons}}" as="currentfield">       
                            <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                            on-field-button-clicked="fieldButtonClickedForInvestigations" on-field-list-value-changed="onListChange"> 
                            </field-controller>
                        </template>  
                    </template>  
                </div>            
                <vaadingrid-lit-singleselect id="emdemoa-investigation" headerfields="{{tableDefinition.fieldsToDisplay}}" 
                    rowcontainer="{{openInvestigations}}" selected-object="{{selectedObject}}">
                </vaadingrid-lit-singleselect>

                <template is="dom-if" if="[[tableDefinition.tableTitle2.display]]"> 
                    <p class="tableTitle">{{labelValue(selectedLanguage, tableDefinition.tableTitle2.label)}}</p>
                </template>  
                <vaadingrid-lit-singleselect id="emdemoa-investobjects" headerfields="{{tableDefinition.fieldsToDisplayTable2}}" 
                    rowcontainer="{{selectedObject.invest_objects}}" selected-object="{{selectedObject2}}">
                </vaadingrid-lit-singleselect>
            </div>       
        `}refreshWindow(){this.tableContentRows()}tableContentRows(){this.callBackRefreshWindow=this.refreshWindow.bind(this);this.getOpenInvestigationsList([])}stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(null!=state.emDemoA){this.openInvestigations=state.emDemoA.openInvestigations}}ready(){super.ready();this.tableContentRows()}}customElements.define("em-demo-a-investigation",emDemoAInvestigation);