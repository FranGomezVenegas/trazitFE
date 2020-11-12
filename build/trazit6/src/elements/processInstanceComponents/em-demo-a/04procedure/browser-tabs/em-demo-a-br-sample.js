define(["../../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../../store.js","../../../../platformComponents/Redux/actions/tabs_actions.js","../../01moduleFunctionality/endpoints-frontend-env-monit-browser.js","../../03config/tablefield_labels.js","../../03config/Browser/em-demo-a-browser-sample-settings.js","../../03config/config-process.js"],function(_polymerElement,_connectMixin,_store,_tabs_actions,_endpointsFrontendEnvMonitBrowser,_tablefield_labels,_emDemoABrowserSampleSettings,_configProcess){"use strict";class emDemoABrSample extends(0,_tablefield_labels.tableFieldLabel)((0,_endpointsFrontendEnvMonitBrowser.FrontendEndpointsEnvMonitBrowser)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement))){stateChanged(state){if(null!=state.emDemoA){if(null!=state.emDemoA.browserSelectedSample){this.selSample=state.emDemoA.browserSelectedSample}}this.selectedLanguage=state.app.user.appLanguage}static get properties(){return{schemaPrefix:{type:String,value:_configProcess.schema_name},personTemplate:{type:String,value:_configProcess.personal_smp_template},selectedLanguage:String,selSample:{type:Object},browserFields:{type:Object,value:_emDemoABrowserSampleSettings.browserSampleFields},windowContent:{type:Array,value:_emDemoABrowserSampleSettings.windowContent}}}static get template(){return _polymerElement.html`
        <style include="em-demo-a-browser-sample-style"></style> 

        <div id="mainDiv"> <!--This is the Div 1 in the picture-->        
        <template is="dom-repeat" items="{{windowContent.fields}}" as="currentfield">       
          <field-controller on-keydown="keyPressed" on-field-button-clicked="RunReport" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
        </template>       
            <div class="filter">            
                <div class="detailDataSection"> 
                <p><h2><b>{{getTableFieldLabel(browserFields.schemaName, browserFields.tableName, '*sample_info_title', selectedLanguage)}}</h2></p>
                <template is="dom-repeat" items="[[selSample.sampleFieldsToDisplay]]">  
                    <p><b>{{getTableFieldLabel(browserFields.schemaName, browserFields.tableName, item.field_name, selectedLanguage)}}:</b> {{valueTranslation(browserFields.schemaName, browserFields.tableName, item.field_value, selectedLanguage)}}<p></p>
                </template>
                </div>
            </div>
            <div class="detailMain"> 
                <template is="dom-repeat" items="[[selSample.stages]]" as="stage">  
                    <div class="detailDataSection"> 
                        <p><h2><b>{{stageTitle(browserFields.schemaName, browserFields.tableName, stage, selectedLanguage)}}</h2> {{stage.started_on}} >> {{stage.ended_on}}   </b></p>                        
                        <template is="dom-if" if="{{isTheCurrentStage(stage)}}">                                   
                            <field-controller id="OpenStage"  field="{{windowContent.goToStageTabButton}}" value="{{item}}"
                                on-field-button-clicked="openTab" 
                                selected-Object="[[item]]"> 
                            </field-controller>
                        </template>            
                        <template is="dom-if" if="{{isIncubationStage(stage)}}">  
                            <div id="incub1" class="detailDataSection"> 
                                <p><h2><b>{{getTableFieldLabel(browserFields.schemaName, browserFields.tableName, '*sample_stage_Incubation1_title', selectedLanguage)}}</h2></p>
                                <template is="dom-repeat" items="[[stage.data.0.incubation_1]]" as="incub1item">  
                                    <template is="dom-if" if="{{displayStageFld(stage, incub1item)}}"> 
                                        <p><b>{{getTableFieldLabel(browserFields.schemaName, browserFields.tableName, incub1item.field_name, selectedLanguage)}}:</b> {{valueTranslation(browserFields.schemaName, browserFields.tableName, incub1item.field_value, selectedLanguage)}}<p></p>
                                    </template>
                                </template>
                            </div>
                            <div id="incub2" class="detailDataSection"> 
                                <p><h2><b>{{getTableFieldLabel(browserFields.schemaName, browserFields.tableName, '*sample_stage_Incubation2_title', selectedLanguage)}}</h2></p>
                                <template is="dom-repeat" items="[[stage.data.0.incubation_2]]" as="incub2item">  
                                    <template is="dom-if" if="{{displayStageFld(stage, incub2item)}}"> 
                                        <p><b>{{getTableFieldLabel(browserFields.schemaName, browserFields.tableName, incub2item.field_name, selectedLanguage)}}:</b> {{valueTranslation(browserFields.schemaName, browserFields.tableName, incub2item.field_value, selectedLanguage)}}<p></p>
                                    </template>    
                                </template>
                            </div>
                        </template>
                        <template is="dom-if" if="{{!isIncubationStage(stage)}}">    
                            <template is="dom-repeat" items="[[stage.data]]">  
                                <template is="dom-if" if="{{displayStageFld(stage, item)}}"> 
                                    <p><b>{{getTableFieldLabel(browserFields.schemaName, browserFields.tableName, item.field_name, selectedLanguage)}}:</b> {{valueTranslation(browserFields.schemaName, browserFields.tableName, item.field_value, selectedLanguage)}}<p></p>
                                </template>    
                            </template>
                        </template>
                    </div>
                </template>            
            </div><!--Closing "central"-->            
        </div>
        `}isIncubationStage(st){if("Incubation"==st.current_stage)return!0;return!1}isTheCurrentStage(st){console.log("current stage",st.current_stage,"this.selSample.currentStage",this.selSample.sampleFieldToRetrieve.current_stage);if(st.current_stage==this.selSample.sampleFieldToRetrieve.current_stage)return!0;return!1}displayStageFld(st,currFld){if(!currFld)return!1;if(!currFld.field_name)return!1;if("PlateReading"==st.current_stage){if("raw_value"==currFld.field_name){return!0}return!1}if("MicroorganismIdentification"==st.current_stage){if("microorganism_list"==currFld.field_name){return!0}return!1}if("Incubation"==st.current_stage){if(""==currFld.field_name)return!1}return!0}keyPressed(e){if(e.code.includes("Enter")){this.RunReport();return}}RunReport(){var data=[];data.sampleId=this.windowContent.fields[0].value;data.browserSampleFieldToRetrieve=this.browserFields.fieldToRetrieve;data.browserSampleFieldsToDisplay=this.browserFields.fieldsToDisplay;this.getBrowserSelectedSampleData(data)}openTab(){//console.log('openTab > '+this.schemaPrefix+ '-' + this.selSample.currentStage);
var procObj={name:this.schemaPrefix},pageForStage="";if(this.selSample.sampleFieldToRetrieve.sample_config_code==this.personTemplate){pageForStage=pageForStage+"person-"}else{pageForStage=pageForStage+"sample-"}switch(this.selSample.sampleFieldToRetrieve.current_stage){case"Sampling":pageForStage=pageForStage+"sampling";break;case"Incubation":pageForStage=pageForStage+"incub-batch";break;case"Incubation":pageForStage=pageForStage+"incub-batch";break;case"PlateReading":pageForStage=pageForStage+"plate-reading";break;case"MicroorganismIdentification":pageForStage=pageForStage+"microorganism";break;default:break;}_store.store.dispatch((0,_tabs_actions.addTab)({lp_frontend_page_name:pageForStage,tabName:this.schemaPrefix+"-"+pageForStage,tabLabel_en:this.schemaPrefix+"-"+pageForStage,tabLabel_es:this.schemaPrefix+"-"+pageForStage,procedure:procObj,tabEsignRequired:!1,tabConfirmUserRequired:!1}));var curTab=[];curTab.tabName=procObj.name+"-"+pageForStage;curTab.currTabEsignRequired=!1;curTab.currTabConfirmUserRequired=!1;curTab.sops=procObj.sops;_store.store.dispatch((0,_tabs_actions.setCurrentTab)(curTab));_store.store.dispatch((0,_tabs_actions.setCurrentTabSelObject)(this.selSample.sampleFieldToRetrieve.sample_id))}}customElements.define("em-demo-a-br-sample",emDemoABrSample)});