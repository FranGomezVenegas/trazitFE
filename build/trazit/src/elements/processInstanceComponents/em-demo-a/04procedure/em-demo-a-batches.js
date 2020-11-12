import {
  PolymerElement,
  html,
} from "../../../../../node_modules/@polymer/polymer/polymer-element.js";
import { connect } from "../../../../../node_modules/pwa-helpers/connect-mixin.js";
import { store } from "../../../../store.js";
import { FieldsMethods } from "../../../../platform-mixins/functions/fields-methods.js"; // import '../../../internalComponents/grid-components/vaadingrid-singleselectrunaction.js'; borrado por refactoring
import "../../../internalComponents/Grids/vaadingrid-lit-singleselect.js"; //import '../01moduleFunctionality/env-monit-elements.js';
//import {FrontendEnvMonit} from '../01moduleFunctionality/frontend-env-monit.js';
//import '../01moduleFunctionality/env-monit-elements.js';
//import {FrontendEnvMonit} from '../01moduleFunctionality/frontend-env-monit.js';
//import {EmDemoAapiEnvMonit} from '../01moduleFunctionality/api-env-monit.js';
import { FrontendEndpointsEnvMonitForBatches } from "../01moduleFunctionality/endpoints-frontend-env-monit.js";
import "../03config/em-demo-a-batches-settings.js";
import { FunctionsEnvMonit } from "../01moduleFunctionality/functions-env-monit.js";
import "../01moduleFunctionality/em-demo-a-webcomponent-env-monit.js";
import { setSelectedBatch } from "../02Redux/em-demo-a_actions.js";
import {
  incubActiveBatches,
  selectedBatchEmpty,
} from "../03config/em-demo-a-batches-settings.js"; //'../03config/config-process.js';
//FrontendEnvMonit
class emDemoABatches extends FieldsMethods(
  FunctionsEnvMonit(
    FrontendEndpointsEnvMonitForBatches(connect(store)(PolymerElement))
  )
) {
  static get properties() {
    return {
      tableDefinition: { type: Object, value: incubActiveBatches },
      selectedBatchEmpty: { type: Object, value: selectedBatchEmpty },
      allActiveBatches: { type: Array, notify: !0 },
      selectedObject: Object,
      callBackRefreshWindow: Object,
      selectedLanguage: { type: String },
    };
  }
  stateChanged(state) {
    if (null != state.emDemoA) {
      this.allActiveBatches = state.emDemoA.allActiveBatches;
    }
    this.selectedLanguage = state.app.user.appLanguage;
  }
  static get template() {
    return html`            
            <style include="em-demo-a-batches-style"></style> 
            <em-demo-a-webcomponent-env-monit id="myelements"></em-demo-a-webcomponent-env-monit>
            <env-monit-elements id="myElements" refresh-window-method="{{callBackRefreshWindow}}"></env-monit-elements>  
            <div class="main">
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
                            on-field-button-clicked="fieldButtonClickedForIncubBatch" on-field-list-value-changed="onListChange"> 
                            </field-controller>
                        </template>  
                    </template>  
                </div>            
                <vaadingrid-lit-singleselect id="emdemoa-samplesampling" headerfields="{{tableDefinition.fieldToDisplay}}" 
                    rowcontainer="{{allActiveBatches}}" selected-object="{{selectedBatch}}" on-selected-object-changed="batchSelected">
                </vaadingrid-lit-singleselect>
            </div>
            <div>
                <template is="dom-if" if="{{!selectedBatch.name}}">
                    <p style="color:blue;">{{labelValue(selectedLanguage, selectedBatchEmpty)}}</p>
                </template> 
                <template is="dom-if" if="{{selectedBatch.name}}">
                    <p style="color:blue;"><b>{{selectedBatchLabel(selectedBatch)}}</p>                
                    <div class="batchContent">
                        <template is="dom-repeat" items="{{selectedBatch.SAMPLES_ARRAY}}" as="currentbcontent"> 
                            <div class="batchContent cardMySops"> 
                                {{currentbcontent.sample_id}} Incubation {{currentbcontent.incubation_moment}}
                            </div>
                        </template>
                    </div>
                </template>
            </div>            
        `;
  }
  selectedBatchLabel(selectedBatch) {
    var selIncub = selectedBatch.incubation_incubator;
    if ("" == selIncub) {
      if ("es" == this.selectedLanguage)
        selIncub = "Por favor selecciona incubadora!";
      else selIncub = "Please select incubator!";
    }
    if ("es" == this.selectedLanguage) {
      return (
        "La tanda seleccionada es: " +
        selectedBatch.name +
        ". Incubadora: " +
        selIncub +
        ". N\xFAm. Muestras: " +
        selectedBatch.NUM_SAMPLES
      );
    }
    return (
      "The selected batch is: " +
      selectedBatch.name +
      ". Incubator: " +
      selIncub +
      ". #Samples: " +
      selectedBatch.NUM_SAMPLES
    );
  }
  batchSelected(e) {
    //console.log('batchSelected', e.detail);
    if (!e.detail) {
      var noBatch = [];
      store.dispatch(setSelectedBatch(noBatch));
      return;
    } //console.log('batchSelected', 'e.detail.value', e.detail.value);
    this.selectedBatch = e.detail;
    this.selectedObject = this.selectedBatch;
    store.dispatch(setSelectedBatch(e.detail));
    return;
  }
  refreshWindow() {
    this.loadSamplingTable();
  }
  loadSamplingTable() {
    this.callBackRefreshWindow = this.refreshWindow.bind(this);
    this.getActiveBatches();
    this.getAllIncubators();
  }
  ready() {
    super.ready();
    this.loadSamplingTable();
  }
}
customElements.define("em-demo-a-batches", emDemoABatches); // import {PolymerElement, html} from '@polymer/polymer/polymer-element';
// import { connect } from 'pwa-helpers/connect-mixin';
// import { store } from '../../../../store.js';
// import {FrontendEnvMonit} from '../01moduleFunctionality/frontend-env-monit.js';
// import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
// import '../01moduleFunctionality/env-monit-elements.js';
// import {setSelectedIncubator, setSelectedBatch} from '../02Redux/em-demo-a_actions';
// import './shared-styles.js';
// import './../../../../config/styles/cards-style';
// //import '../../internalComponents/pdf-browser-viewer';
// import {schema_name, sampleIncubation_incubBatch_activeBatchFieldToDisplay, sampleIncubation_incubBatch_activeBatchButtons, selectedBatchEmpty
// } from '../03config/config-process.js';
// class emDemoABatches extends FieldsMethods(FrontendEnvMonit(connect(store)(PolymerElement))) {
//     stateChanged(state) {
//         this.finalToken = state.app.user.finalToken;
//         this.schemaPrefix=schema_name;
//         if (state.emDemoA!=null){
//             this.selectedProgram=state.emDemoA.selectedProgram;
//             this.allIncubators= state.emDemoA.allIncubators;
//             //this.createIncubatorsList();
//             this.activeBatchesList=state.emDemoA.allActiveBatches;
// //console.log('emDemoABatches', 'stateChanged');
// //            if ( (this.selectedBatch.name!=state.emDemoA.selectedBatch.name) || (this.selectedBatch.NUM_SAMPLES!=state.emDemoA.selectedBatch.NUM_SAMPLES)) {
//             //if ( (this.selectedBatch) && (state.emDemoA.selectedBatch) && (this.selectedBatch!=state.emDemoA.selectedBatch) ) {
//                     this.selectedBatch=state.emDemoA.selectedBatch;
//                 //this.selectBatchWhenActiveBatchChanges();
//             //}
//         }
//         this.selectedLanguage = state.app.user.appLanguage;
//         this.schemaPrefix=schema_name;
//     }
//     static get properties() {
//         return {
//             callBackRefreshWindow: Object,
//             finalToken: String,
//             schemaPrefix: {type: String, observer:'onFinalTokenFilled'},
//             selectedLanguage: String,
//             allIncubators: {type: Array},
//             incubationListElement: {type: Array, value:[{
//                 "name": "shift",
//                 "label_en": "Shift", "label_es": "Turno",
//                 "type": "list",
//                 "dbType": "String",
//                 "value": "Admin",
//                 "read_only": false,
//                 "items" : this.allIncubators
//               }]},
//             activeBatchesList: {type: Array, observer:'selectBatchWhenActiveBatchChanges'},
//             activeBatchesFieldToDisplay: {type: Array,value: sampleIncubation_incubBatch_activeBatchFieldToDisplay},
//             activeBatchesButtons: {type: Array, value: sampleIncubation_incubBatch_activeBatchButtons},
//             selectedBatch: {type: Object},
//             selectedBatchEmpty: {type: Object, value:selectedBatchEmpty},
//             tableTitle:{type: Object, value:{label_en:'Active Batches', label_es:'Tandas Activas'}},
//         }
//     }
//     static get template() {
//         return html`
//         <style include="cards-style"></style>
//         <style include="shared-styles">
//         :host {
//             display: block;
//             padding: 10px;
//         }
//         .buttonGroup {
//             /* display: flex */
//         }
//         vaadingrid-singleselect.incubgrid {
//             width:500px;
//         }
//         p.tableTitle{
//             margin-top: 0px;
//             margin-bottom: 3px;
//             color: #4285f4;
//             font-size:30px;
//         }
//         </style>
//         <div style="width: 622px; display: block;">
//             <p class="tableTitle">{{labelValue(selectedLanguage, tableTitle)}}</p>
//             <env-monit-elements id="myElements" refresh-window-method="{{callBackRefreshWindow}}"></env-monit-elements>
//             <vaadin-button on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
//             <div name="batches-list" class="buttonGroup" style="width: 222px; display: inline-flex;">
//                 <template is="dom-repeat" items="{{activeBatchesButtons}}" as="currentfield">
//                     <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
//                     on-field-button-clicked="fieldButtonClicked" on-field-list-value-changed="onListChange">
//                     </field-controller>
//                 </template>
//             </div>
//             <div name="batches-list" class="buttonGroup" style="width: 622px; display: inline-flex;">
//                 <vaadingrid-singleselect id="incubbatches" class="incubgrid" on-selected-object-changed="batchSelected" headerfields="{{activeBatchesFieldToDisplay}}" rowcontainer="{{activeBatchesList}}"
//                 selected-object="{{selectedObject}}"></vaadingrid-activeBatchesBingleselect>
//             </div>
//         </div>
//         <div>
//             <template is="dom-if" if="{{!selectedBatch.name}}">
//                 <p style="color:blue;">{{labelValue(selectedLanguage, selectedBatchEmpty)}}</p>
//             </template>
//             <template is="dom-if" if="{{selectedBatch.name}}">
//                 <p style="color:blue;"><b>{{selectedBatchLabel(selectedBatch)}}</p>
//                 <template is="dom-repeat" items="{{selectedBatch.SAMPLES_ARRAY}}" as="currentfield">
//                     <div class="cardMySops">
//                         {{currentfield.sample_id}} Incubation {{currentfield.incubation_moment}}
//                     </div>
//                 </template>
//             </template>
//         </div>
//         `;
//     }
//     selectedBatchLabel(selectedBatch){
//         var selIncub=selectedBatch.incubation_incubator;
//         if (selIncub==""){
//             if (this.selectedLanguage=="es") selIncub="Por favor selecciona incubadora!";
//             else selIncub="Please select incubator!";
//         }
//         if (this.selectedLanguage=="es"){
//             return "La tanda seleccionada es: " +selectedBatch.name + ". Incubadora: "+selIncub+". Núm. Muestras: "+selectedBatch.NUM_SAMPLES;}
//         return "The selected batch is: " +selectedBatch.name+ ". Incubator: "+selIncub+ ". #Samples: "+selectedBatch.NUM_SAMPLES;
//     }
//     refreshWindow() {
//         //console.log('refreshWindow');
//         this.onFinalTokenFilled();
//         //this.$.mygridid.clearCache();
//     }
//     selectBatchWhenActiveBatchChanges(){
//         console.log('selectBatchWhenActiveBatchChanges', 'this.selectedBatch', this.selectedBatch);
//         //store.dispatch(setSelectedIncubator(this.selectedBatch));
//         // var currentBatch=this.selectedBatch;
//         if (this.selectedBatch){
//             var i, len;
//             for (i = 0, len = this.activeBatchesList.length; i < len; i++) {
//                 if (this.activeBatchesList[i].name==this.selectedBatch.name){
//                     var mye={detail:{value:this.activeBatchesList[i]}};
//                     this.batchSelected(mye);
//                     return;
//                 }
//             }
//         }
//     }
//     selectedIncubator(e){
//         //console.log('selectedIncubator');
//         var data=[];
//         //data.name='INC_1';
//         store.dispatch(setSelectedIncubator(data));
//     }
//     batchSelected(e) {
//         console.log('batchSelected', e);
//         if (!e.detail.value){
//             var noBatch=[];
//             store.dispatch(setSelectedBatch(noBatch));
//             return;
//         }
//         //console.log('batchSelected', 'e.detail.value', e.detail.value);
//         this.selectedBatch=e.detail.value;
//         store.dispatch(setSelectedBatch(e.detail.value));
//         return;
//     }
//     onFinalTokenFilled(){
//         //this.callBackRefreshWindow = this.refreshWindow.bind(this);
//         //console.log('em-demo-a-batches >> calling getActiveBatches within onFinalTokenFilled');
//         this.getActiveBatches({
//             finalToken:this.finalToken, schemaPrefix:this.schemaPrefix
//         });
//         //var mye={detail:{value:''}};
//         //this.batchSelected(mye);
// /*        if (this.selectedBatch){
//             var selBatchName=this.selectedBatch.name;
//             if (selBatchName){
//                 var i;
//                 for (i = 0; i < this.activeBatchesList.length; i++) {
//                     if (selBatchName==this.activeBatchesList[i].name){
//                         store.dispatch(setSelectedBatch(this.activeBatchesList[i]));
//                         return;
//                     }
//                 }
//             }
//         }
// */
//     }
// }
// customElements.define('em-demo-a-batches', emDemoABatches);
