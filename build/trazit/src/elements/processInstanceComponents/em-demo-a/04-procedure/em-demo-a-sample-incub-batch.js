import{PolymerElement,html}from"../../../../../node_modules/@polymer/polymer/polymer-element.js";import{connect}from"../../../../../node_modules/pwa-helpers/connect-mixin.js";import{store}from"../../../../store.js";import{FieldsMethods}from"../../../../platform-mixins/functions/fields-methods.js";// import '../../../internalComponents/grid-components/vaadingrid-singleselectrunaction.js'; borrado por refactoring
import"../../../internalComponents/Grids/vaadingrid-lit-singleselect.js";import{FrontendEndpointsEnvMonitSamples,samplesStagesReduxVariables}from"../01moduleFunctionality/endpoints-frontend-env-monit-samples.js";import{FunctionsEnvMonitSamples}from"../01moduleFunctionality/functions-env-monit-samples.js";import"../01moduleFunctionality/em-demo-a-webcomponent-env-monit-samples.js";import"./em-demo-a-batches.js";import"../03config/em-demo-a-sample-incub-batch-settings.js";import{sampleIncubBatchScreenSettings,sampleIncubBatchPendingIncub1,sampleIncubBatchPendingIncub2}from"../03config/em-demo-a-sample-incub-batch-settings.js";//'../03config/config-process.js';
class emDemoASampleIncubBatch extends FieldsMethods(FunctionsEnvMonitSamples(FrontendEndpointsEnvMonitSamples(connect(store)(PolymerElement)))){static get properties(){return{sampleIncubBatchScreenSettings:{type:Object,value:sampleIncubBatchScreenSettings},incub1TableDefinition:{type:Object,value:sampleIncubBatchPendingIncub1},incub2TableDefinition:{type:Object,value:sampleIncubBatchPendingIncub2},samplesStagesReduxVariables:{type:String,value:samplesStagesReduxVariables},allSamplesStageIncubation1:{type:Array,notify:!0},allSamplesStageIncubation2:{type:Array,notify:!0},selectedObject:Object,callBackRefreshWindow:Object,selectedLanguage:{type:String}}}static get template(){return html`     
        <style include="em-demo-a-sample-incub-batch-style"></style> 
        <em-demo-a-webcomponent-env-monit-samples id="myElementsSample"></em-demo-a-webcomponent-env-monit-samples>

<!--        <env-monit-elements id="myElements" refresh-window-method="{{callBackRefreshWindow}}"></env-monit-elements>  
        <env-monit-elements-sample id="myElementsSample" refresh-window-method="{{callBackRefreshWindow}}"></env-monit-elements-sample>  
-->
        <div class="mainIncubBatchDiv">
            <template is="dom-if" if="[[sampleIncubBatchScreenSettings.displaySamplesPendingIncub1Tbl]]">  
                <div name="incub1Area">
                    <template is="dom-if" if="[[incub1TableDefinition.tableTitle.display]]"> 
                        <p class="tableTitle">{{labelValue(selectedLanguage, incub1TableDefinition.tableTitle.label)}}</p>
                    </template>  
                    <div name="incub1TableDefinitionButtons" class="buttonGroup">
                        <template is="dom-if" if="[[incub1TableDefinition.displayRefreshButton]]"> 
                            <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
                        </template>  
                        <template is="dom-if" if="[[incub1TableDefinition.displayButtons]]"> 
                            <template is="dom-repeat" items="{{incub1TableDefinition.buttons}}" as="currentfield">       
                                <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                                on-field-button-clicked="fieldButtonClickedForSamples" on-field-list-value-changed="onListChange"> 
                                </field-controller>
                            </template>  
                        </template>  
                    </div>            
                    <vaadingrid-lit-singleselect id="emdemoa-incub1Table" headerfields="{{incub1TableDefinition.sampleFieldToDisplay}}" 
                        rowcontainer="{{allSamplesStageIncubation1}}" selected-object="{{selectedObject}}">
                    </vaadingrid-lit-singleselect>
                </div>
            </template>
            <template is="dom-if" if="[[sampleIncubBatchScreenSettings.displaySamplesPendingIncub2Tbl]]"> 
                <div name="incub2Area">
                    <div name="incub2TableDefinitionButtons" class="buttonGroup">
                        <template is="dom-if" if="[[incub2TableDefinition.tableTitle.display]]"> 
                            <p class="tableTitle">{{labelValue(selectedLanguage, incub2TableDefinition.tableTitle.label)}}</p>
                        </template>  
                        <template is="dom-if" if="[[incub2TableDefinition.displayRefreshButton]]"> 
                            <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
                        </template>  
                        <template is="dom-if" if="[[incub2TableDefinition.displayButtons]]"> 
                            <template is="dom-repeat" items="{{incub2TableDefinition.buttons}}" as="currentfield">       
                                <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                                on-field-button-clicked="fieldButtonClickedForSamples" on-field-list-value-changed="onListChange"> 
                                </field-controller>
                            </template>  
                        </template>  
                    </div>            
                    <vaadingrid-lit-singleselect id="emdemoa-incub2Table" headerfields="{{incub2TableDefinition.sampleFieldToDisplay}}" 
                        rowcontainer="{{allSamplesStageIncubation2}}" selected-object="{{selectedObject}}">
                    </vaadingrid-lit-singleselect>
                </div>
            </template>
        </div> 
            <template is="dom-if" if="[[sampleIncubBatchScreenSettings.displayIncubBatchesTbl]]">  
                <div>           
                    <em-demo-a-batches id="batches"></em-demo-a-batches>
                </div>                       
            </template>
          
        `}refreshWindow(){this.loadWindowTables()}loadWindowTables(){this.callBackRefreshWindow=this.refreshWindow.bind(this);this.getAllSamplesStageSampling(this.incub1TableDefinition,this.samplesStagesReduxVariables.PENDING_INCUBATION1);this.getAllSamplesStageSampling(this.incub2TableDefinition,this.samplesStagesReduxVariables.PENDING_INCUBATION2);var elem=this.shadowRoot.getElementById("batches");if(elem){elem.refreshWindow()}//        this.getAllSamplesStageIncubation1(this.incub1TableDefinition);
//        this.getAllSamplesStageIncubation2(this.incub2TableDefinition);
}stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(null!=state.emDemoA){this.allSamplesStageIncubation1=state.emDemoA.allSamplesStageIncubation1;this.allSamplesStageIncubation2=state.emDemoA.allSamplesStageIncubation2}}ready(){super.ready();this.loadWindowTables()}}customElements.define("em-demo-a-sample-incub-batch",emDemoASampleIncubBatch);// import {PolymerElement, html} from '@polymer/polymer/polymer-element';
// import { connect } from 'pwa-helpers/connect-mixin';
// import { store } from '../../../../store.js';
// import '@polymer/paper-button/paper-button';
// import '../../../internalComponents/cards/card-form.js';
// import '../../../internalComponents/grid-components/vaadingrid-singleselect.js';
// import '../01moduleFunctionality/env-monit-elements-sample.js';
// import './shared-styles.js';  
// import './../../../../config/styles/cards-style';
// import {FrontendEnvMonitSample} from '../01moduleFunctionality/frontend-env-monit-sample.js';
// import './em-demo-a-batches';
// import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
// import {setCurrentTab} from './../../../app/Redux/actions/tabs_actions';
// import {schema_name
// , sampleIncubation1_incubBatch_sampleFieldToRetrieve, sampleIncubation1_incubBatch_sampleFieldToDisplay, sampleIncubation1_incubBatch_samplesWhereFieldsName, sampleIncubation1_incubBatch_samplesWhereFieldsValue, sampleIncubation1_incubBatch_sampleFieldToSort, sampleIncubation1_incubBatch_buttons
// , sampleIncubation2_incubBatch_sampleFieldToRetrieve, sampleIncubation2_incubBatch_sampleFieldToDisplay, sampleIncubation2_incubBatch_samplesWhereFieldsName, sampleIncubation2_incubBatch_samplesWhereFieldsValue, sampleIncubation2_incubBatch_sampleFieldToSort, sampleIncubation2_incubBatch_buttons
//  } from '../03config/config-process.js';
// class emDemoASampleIncubBatch extends FieldsMethods(FrontendEnvMonitSample(connect(store)(PolymerElement))) {
//     static get properties() {
//         return {
//             finalToken: String,
//             schemaPrefix: {type: String, observer:'onFinalTokenFilled'},   
//             currTabEsignRequired: Boolean,
//             currTabConfirmUserRequired: Boolean,
//             selectedSample: {type: Number},                   
//             Incubation1Buttons: {type: Array, value: sampleIncubation1_incubBatch_buttons},
//             sampleIncubation1FieldToDisplay: {type: Array,value: sampleIncubation1_incubBatch_sampleFieldToDisplay},   
//             samplesIncubation1WhereFieldsName: {type: String, value:sampleIncubation1_incubBatch_samplesWhereFieldsName},            
//             samplesIncubation1WhereFieldsValue: {type: String, value:sampleIncubation1_incubBatch_samplesWhereFieldsValue},           
//             Incubation2Buttons: {type: Array, value: sampleIncubation2_incubBatch_buttons},
//             sampleIncubation2FieldToDisplay: {type: Array,value: sampleIncubation2_incubBatch_sampleFieldToDisplay},   
//             samplesWhereFieldsName: {type: String, value:sampleIncubation2_incubBatch_samplesWhereFieldsName},            
//             samplesWhereFieldsValue: {type: String, value:sampleIncubation2_incubBatch_samplesWhereFieldsValue},           
//             buttons: {type: Array, value: sampleIncubation2_incubBatch_buttons},  
//             selectedBatch: {type: Object},
//             callBackRefreshWindow: Object,
//             tabsInfo: Object,
//             selectedLanguage: String,
//             sampleIncubation1TableTitle:{type: Object, value:{label_en:'Samples Pending 1st Incubation', label_es:'Muestras pendientes de la 1ª incubación'}},
//             sampleIncubation2TableTitle:{type: Object, value:{label_en:'Samples Pending 2nd Incubation', label_es:'Muestras pendientes de la 2ª incubación'}},
//         }
//     }
//     refreshWindow() {
//         this.onFinalTokenFilled();
//         //this.$.mygridid.clearCache();
//     }
//     onFinalTokenFilled(){  
//         this.callBackRefreshWindow = this.refreshWindow.bind(this);      
//         if ( (!this.finalToken) || (!this.schemaPrefix) ) {return;}
//         this.getAllSamplesStageIncubation2({
//             finalToken:this.finalToken, schemaPrefix:this.schemaPrefix, actionName:'SAMPLES_BY_STAGE'
//             , sampleFieldToRetrieve:sampleIncubation2_incubBatch_sampleFieldToRetrieve//this.sampleFieldToRetrieve
//             , samplesTabSortFields:sampleIncubation2_incubBatch_sampleFieldToSort//this.samplesTabSortFields,
//             , samplesWhereFieldsName: this.samplesWhereFieldsName, samplesWhereFieldsValue: this.samplesWhereFieldsValue,
//         });         
//         this.getAllSamplesStageIncubation1({
//             finalToken:this.finalToken, schemaPrefix:this.schemaPrefix, actionName:'SAMPLES_BY_STAGE'
//             , sampleFieldToRetrieve:sampleIncubation1_incubBatch_sampleFieldToRetrieve//this.sampleFieldToRetrieve
//             , samplesTabSortFields:sampleIncubation1_incubBatch_sampleFieldToSort//this.samplesTabSortFields,
//             , samplesWhereFieldsName: this.samplesIncubation1WhereFieldsName, samplesWhereFieldsValue: this.samplesIncubation1WhereFieldsValue,
//         });         
//         var i;
//         for (i = 0; i < this.tabsInfo.length; i++) { 
//             if (this.tabsInfo[i].tabName=='em-demo-a-sample-incub-batch'){
//             var curTab={
//               lp_frontend_page_name: this.tabsInfo[i].lp_frontend_page_name,
//               tabName: this.tabsInfo[i].tabName,
//               tabLabel_en: this.tabsInfo[i].tabLabel_en, tabLabel_es: this.tabsInfo[i].tabLabel_es,
//               procedure: this.tabsInfo[i].procedure, tabEsignRequired: this.tabsInfo[i].tabEsignRequired, tabConfirmUserRequired: this.tabsInfo[i].tabConfirmUserRequired
//             };
//             store.dispatch(setCurrentTab(curTab));   
//             }           
//         }
// //console.log('refreshing batches');
//         var elem=this.shadowRoot.getElementById('batches');
//         if (elem){
//             elem.refreshWindow();
//         }
//     }         
//     stateChanged(state) {
//         this.selectedLanguage = state.app.user.appLanguage; 
//         this.finalToken = state.app.user.finalToken;         
//         if (state.emDemoA!=null){
//             this.allSamplesStageIncubation1= state.emDemoA.allSamplesStageIncubation1;
//             this.allSamplesStageIncubation2= state.emDemoA.allSamplesStageIncubation2;
//             this.selectedBatch=state.emDemoA.selectedBatch;
//         }          
//         if (this.tabIndex!=0){
//             //this.schemaPrefix = state.tabs.tabs[this.tabIndex-1].procedure.schemaPrefix;
//             this.currTabEsignRequired = state.tabs.currTabEsignRequired;
//             this.currTabConfirmUserRequired = state.tabs.currTabConfirmUserRequired;            
//         } 
//         if (state.tabs.tabs){
//             this.tabsInfo=state.tabs.tabs;
//         }
//         this.schemaPrefix=schema_name;           
//     }     
// //     createIncubatorsList(){
// //         var i;
// //         for (i = 0; i < this.allIncubators.length; i++) {
// // //console.log('createProductionLotsList', 'this.productionLotsList', this.productionLotsList);
// //             var newElement=[{"keyName":'', "keyValue_en":'',"keyValue_es":''}];
// //             newElement.keyName=this.allIncubators[i].name;
// //             newElement.keyValue_en=this.allIncubators[i].name;
// //             newElement.keyValue_es=this.allIncubators[i].name;
// //             this.incubationsList[i]=newElement;
// //             //{keyName:"M1", :"M1", keyValue_es:"M1"},
// //         }   
// //         //console.log(this.productionLotsList); 
// //         this.set('incubform.0.items', this.rolesList);    
// //     }   
//     static get template() {
//         return html`
//             <style include="cards-style"></style>
//             <style>            
//             :host {
//                 display: block;
//                 padding: 10px;
//             }
//             .buttonGroup {
//                 /* display: flex */
//             }
//             vaadin-grid {
//                 width:95%;
//             }
//             p.tableTitle{
//                 margin-top: 0px;
//                 margin-bottom: 3px;
//                 color: #44cbe6;
//                 font-size:30px;
//             }    
//             </style>  
//             <env-monit-elements-sample id="myElementsSample" refresh-window-method="{{callBackRefreshWindow}}"></env-monit-elements-sample>  	
//             <vaadin-button on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button> 
//             <div style="display: flex">
//                 <div style="display: inline-table">
//                     <p class="tableTitle">{{labelValue(selectedLanguage, sampleIncubation1TableTitle)}}</p>
//                     <div name="Incubation1Buttons" style="width: 622px; display: inline-flex;" class="buttonGroup">
//                         <template is="dom-repeat" items="{{Incubation1Buttons}}" as="currentfield">       
//                             <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
//                             on-field-button-clicked="fieldButtonClicked" on-field-list-value-changed="onListChange"> 
//                             </field-controller>
//                         </template>  
//                     </div>            
//                     <vaadingrid-singleselect id="Incubation1" style="width: 83%;" headerfields="{{sampleIncubation1FieldToDisplay}}" rowcontainer="{{allSamplesStageIncubation1}}"            
//                     selected-object="{{selectedObject}}"></vaadingrid-singleselect>
//                     <p class="tableTitle">{{labelValue(selectedLanguage, sampleIncubation2TableTitle)}}</p>
//                     <div name="Incubation2Buttons" style="width: 622px; display: inline-flex;" class="buttonGroup">
//                         <template is="dom-repeat" items="{{Incubation2Buttons}}" as="currentfield">       
//                             <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
//                             on-field-button-clicked="fieldButtonClicked" on-field-list-value-changed="onListChange"> 
//                             </field-controller>
//                         </template>  
//                     </div>          
//                     <vaadingrid-singleselect id="Incubation2" style="width: 83%;" headerfields="{{sampleIncubation2FieldToDisplay}}" rowcontainer="{{allSamplesStageIncubation2}}"            
//                     selected-object="{{selectedObject}}"></vaadingrid-singleselect>
//                 </div>    
//                 <div>           
//                     <em-demo-a-batches id="batches"></em-demo-a-batches>
//                 </div>                       
//             </div>   
//             `;
//     } 
// }
// customElements.define('em-demo-a-sample-incub-batch', emDemoASampleIncubBatch);