define(["../../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../../store.js","../../../../../../node_modules/@polymer/polymer/lib/elements/dom-if.js","../../01moduleFunctionality/endpoints-frontend-env-monit-browser.js","../../03config/tablefield_labels.js","../../01moduleFunctionality/em-demo-a-webcomponent-env-monit.js","../../03config/Browser/em-demo-a-browser-batch-settings.js"],function(_polymerElement,_connectMixin,_store,_domIf,_endpointsFrontendEnvMonitBrowser,_tablefield_labels,_emDemoAWebcomponentEnvMonit,_emDemoABrowserBatchSettings){"use strict";//import {schema_name, browserBatchFieldToRetrieve, browserBatchFieldsToDisplay, browserBatchNoContent } from '../../03config/config-process.js';
class emDemoABrBatch extends(0,_tablefield_labels.tableFieldLabel)((0,_endpointsFrontendEnvMonitBrowser.FrontendEndpointsEnvMonitBrowser)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement))){stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(null!=state.emDemoA){if(null!=state.emDemoA.browserSelectedBatch){this.selBatch=state.emDemoA.browserSelectedBatch;if(null!=this.selBatch.lastTemperatureReadings){var i;this.selBatchTempReadings=[["Time","Temperature"]];if(!this.selBatch.lastTemperatureReadings){this.displayChart=!1;return}if(this.selBatch.lastTemperatureReadings[0].error){this.displayChart=!1;return}this.displayChart=!0;for(i=0;i<this.selBatch.lastTemperatureReadings.length;i++){if(!this.selBatch.lastTemperatureReadings[i].error){this.selBatchTempReadings.push([this.selBatch.lastTemperatureReadings[i].created_on,this.selBatch.lastTemperatureReadings[i].temperature])}}this.selectedObject=this.selBatch.batchFieldToRetrieve.name}}}}static get properties(){return{windowContent:{type:Array,notify:!0,value:_emDemoABrowserBatchSettings.windowContent},browserBatchFields:{type:Object,notify:!0,value:_emDemoABrowserBatchSettings.browserBatchFields},displayChart:Boolean,selectedLanguage:String,selBatchTempReadings:{type:Array},selBatch:{type:Object}}}static get template(){return _polymerElement.html`
        <style include="em-demo-a-browser-batch-style"></style>
        <em-demo-a-webcomponent-env-monit id="myElements"></em-demo-a-webcomponent-env-monit> 
        <div class="mainDiv"> <!--This is the Div 1 in the picture-->        
        <template is="dom-repeat" items="{{windowContent.fields}}" as="currentfield">       
          <field-controller on-keydown="keyPressed" on-field-button-clicked="RunReport" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
        </template>       
            <div class="filter">            
                <div class="detailDataSection"> 
                    <p><h2><b>{{getTableFieldLabel(browserBatchFields.schemaName, browserBatchFields.tableName, '*batch_info_title', selectedLanguage)}}</h2></p>
                    <template is="dom-repeat" items="[[selBatch.batchFieldsToDisplay]]">  
                        <p><b>{{getTableFieldLabel(browserBatchFields.schemaName, browserBatchFields.tableName, item.field_name, selectedLanguage)}}:</b> {{item.field_value}}<p></p>
                    </template>
                </div>
            </div>  
            <div class="detailMain"> 
                <div class="detailDataSection"> 
                    <p><h2><b>{{getTableFieldLabel(browserBatchFields.schemaName, browserBatchFields.tableName, '*batch_content_title', selectedLanguage)}}</h2></p>
                    <template is="dom-repeat" items="{{selBatch.SAMPLES_ARRAY}}" as="currentfield"> 
                        <div class="detailDataSection"> 
                            {{currentfield.sample_id}} Incubation {{currentfield.incubation_moment}}
                        </div>
                    </template>
                </div>
                <div class="detailDataSection">                   
                    <template is="dom-if" if="{{displayChart(selBatchTempReadings)}}" >
                        <p><h2><b>{{getTableFieldLabel(browserBatchFields.schemaName, browserBatchFields.tableName, '*incubator_temp_reading_title', selectedLanguage)}}</h2></p>
                        <google-chart type="line" style="height: 500px; width: 750px;" data="{{selBatchTempReadings}}"></google-chart>
                    </template>                                            
                    <template is="dom-if" if="{{!displayChart(selBatchTempReadings)}}" >
                        <template is="dom-repeat" items="{{windowContent.batchNoContent}}" as="currentfield">       
                            <field-controller on-keydown="keyPressed" on-field-button-clicked="RunReport" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                        </template>                               
                    </template>    
                </div>     
            </div>     
        `}keyPressed(e){if(e.code.includes("Enter")){this.RunReport();return}}RunReport(){var data=[];data.BatchName=this.windowContent.fields[0].value;data.browserBatchFieldToRetrieve=this.browserBatchFields.fieldToRetrieve;data.browserBatchFieldsToDisplay=this.browserBatchFields.fieldsToDisplay;this.getBrowserSelectedBatchData(data);//console.log('RunReport', 'browserBatchFields', this.browserBatchFields);
}}customElements.define("em-demo-a-br-batch",emDemoABrBatch)});