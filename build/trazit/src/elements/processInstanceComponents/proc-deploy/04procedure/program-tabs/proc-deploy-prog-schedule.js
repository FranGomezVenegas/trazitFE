import{PolymerElement,html}from"../../../../../../node_modules/@polymer/polymer/polymer-element.js";import{connect}from"../../../../../../node_modules/pwa-helpers/connect-mixin.js";import{store}from"../../../../../store.js";import"../../../../internalComponents/Grids/vaadingrid-lit-singleselect.js";import{progTabPoints,shifts}from"../../03config/Programs/proc-deploy-progtab-points-settings.js";import"../../03config/Programs/proc-deploy-progtab-points-settings.js";import{FrontendEndpointsEnvMonitForPrograms}from"../../01moduleFunctionality/endpoints-frontend-env-monit.js";import"../../01moduleFunctionality/proc-deploy-webcomponent-env-monit.js";import{FunctionsEnvMonitSamples}from"../../01moduleFunctionality/functions-env-monit-samples.js";import"../dialogs/proc-deploy-simple-modal-dialog.js";//FieldsMethods procDeployapiEnvMonit FrontendEnvMonit
class procDeployProgSchedule extends FunctionsEnvMonitSamples(FrontendEndpointsEnvMonitForPrograms(connect(store)(PolymerElement))){stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(state.procDeploy!=void 0&&state.procDeploy.selectedProgram.name!=void 0){//this.selectedProgram=state.procDeploy.selectedProgram; 
this.activeProductionLots=state.procDeploy.activeProductionLots}}static get properties(){return{tableDefinition:{type:Object,value:progTabPoints},selectedObject:{type:Object,notify:!0},selectedProgram:{type:Object},selectedSamplingPoint:{type:Array},systemShifts:{type:Object,value:shifts},productionLotsList:{type:Array,value:[{keyName:"rutina",keyValue_en:"routine",keyValue_es:"rutina"}]},activeProductionLots:{type:Array,value:[]}}}static get template(){return html`
            <style include="proc-deploy-progtab-points-style"></style>
            <proc-deploy-webcomponent-env-monit id="myElements"></proc-deploy-webcomponent-env-monit>
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
                            on-field-button-clicked="fieldButtonClickedForPrograms" on-field-list-value-changed="onListChange"> 
                            </field-controller>
                        </template>  
                    </template>  
                </div>            
                <vaadingrid-lit-singleselect class="grid" id="procDeploy-samplesampling" headerfields="{{tableDefinition.fieldToDisplay}}" 
                    rowcontainer="{{selectedProgram.sample_points}}" selected-object="{{selectedObject}}"
                    on-selected-object-changed="pointClicked">
                </vaadingrid-lit-singleselect>
                <paper-dialog id="pointCard">
                <proc-deploy-simple-modal-dialog id="productionLotNewDialog" action-name="" display-confirm-button display-cancel-button 
                    form-elements="{{selectedSamplingPoint}}" on-dialog-button-clicked="dialogClosedProductionLotNew"
                    on-field-button-clicked="sampleLogButtonClicked"></proc-deploy-simple-modal-dialog>

<!--                    <card-form form-fields="{{selectedSamplingPoint}}" buttons="{{cardFormButtons}}" 
                    on-field-button-clicked="sampleLogButtonClicked"
                    on-dialog-button-clicked="dialogClosedpointCard"> </card-form> -->
                </paper-dialog>                
            </div>  
        `}// sampleLogButtonClicked(e){
//     console.log('sampleLogButtonClicked');
// }
createProductionLotsList(){var i;for(i=0;i<this.activeProductionLots.length;i++){//console.log('createProductionLotsList', 'this.productionLotsList', this.productionLotsList);
var newElement=[{keyName:"",keyValue_en:"",keyValue_es:""}];newElement.keyName=this.activeProductionLots[i].lot_name;newElement.keyValue_en=this.activeProductionLots[i].lot_name;newElement.keyValue_es=this.activeProductionLots[i].lot_name;this.productionLotsList[i+1]=newElement;//{keyName:"M1", :"M1", keyValue_es:"M1"},
}//console.log(this.productionLotsList);     
}pointClicked(e){if(!e.detail){return}//console.log(this.selectedSamplingPoint, 'init');
//console.log('proc-deploy-prog-schedule >> pointClicked', 'this.selectedObject', this.selectedObject, 'this.selectedSamplingPoint', this.selectedSamplingPoint );        
//store.dispatch(setSelectedSamplingPoint(e.detail.card_info));
//console.log(this.selectedSamplingPoint, 'before');    
var selectedSamplingPoint=e.detail,newElement=[{name:"logSample",label_en:"Log Sample",label_es:"Registrar Muestra",type:"button",read_only:!1},{name:"shift",label_en:"Shift",label_es:"Turno",type:"list",dbType:"String",value:"",read_only:!1,items:this.systemShifts},{name:"production_lot",label_en:"Lot",label_es:"Lote",type:"list",dbType:"String",value:"",read_only:!1,items:this.productionLotsList}],i;//var selectedSamplingPointLen=selectedSamplingPoint.length;
//selectedSamplingPointLen=selectedSamplingPointLen++; 
for(i=0;i<selectedSamplingPoint.card_info.length;i++){newElement[i+3]=selectedSamplingPoint.card_info[i]}this.selectedSamplingPoint=newElement;this.$.pointCard.open()}refreshWindow(){}ready(){super.ready()}}customElements.define("proc-deploy-prog-schedule",procDeployProgSchedule);// import '../../../../internalComponents/cards/card-form.js';
// import '@polymer/paper-dialog/paper-dialog';
// //import '../../../../internalComponents/grid-components/vaadingrid-singleselect.js';
// import '../../../../internalComponents/Grids/vaadingrid-lit-singleselect';
// import '../../01moduleFunctionality/env-monit-elements.js';
// import {procDeployapiEnvMonit} from '../../01moduleFunctionality/api-env-monit.js';  
// import {FrontendEnvMonit} from '../../01moduleFunctionality/frontend-env-monit.js';
// import {progCorrectiveActionButtons, progCorrectiveActionTableHeaderFields
//     } from '../../03config/config-process.js';
// //import {setselectedProgramCorrectiveActions} from '../../02Redux/proc-deploy_actions.js';
// import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
//     static get properties() {
//         return {            
//             selectedPointCardForm: {type: Object}, //, value:appLogin_formFields},
//             progProintsCardFormButtons:{type: Object, value: progCorrectiveActionButtons},            
//             selectedObject:{type: Object, notify:true},            
//             programCorrectiveActionTableHeaderFields: {type: Array, value: progCorrectiveActionTableHeaderFields},
//             callBackRefreshWindow: Object,
//             selectedLanguage: String,
//             tableTitle:{type: Object, value:{label_en:'Pending Corrective Actions', label_es:'Acciones Correctivas Pendientes'}},
//         }
//     }
//     static get template() {
//         return html`
//             <style>
//             vaadin-button {
//                 top: 0;
//                 left: 0;
//                 transition: all .15s linear 0s;
//                 position: relative;
//                 display: inline-block;
//                 padding: 15px 25px;
//                 background-color: $yellow;
//                 text-transform: uppercase;
//                 color: $brown;
//                 font-family: arial;
//                 letter-spacing: 1px;
//                 box-shadow: -6px 6px 0 $brown;
//                 text-decoration: none;
//                 &:hover {
//                   top: 3px;
//                   left: -3px;
//                   box-shadow: -3px 3px 0 $brown;
//                   &::after {
//                     top: 1px;
//                     left: -2px;
//                     width: $angle-o;
//                     height: $angle-o;
//                   }
//                   &::before {
//                     bottom: -2px;
//                     right: 1px;
//                     width: $angle-o;
//                     height: $angle-o;
//                   }
//                 } }           
//                 div.parentMap{
//                     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
//                     background-color: blue;
//                 }
//                 .programsList {
//                     display: none;
//                     width: 200px;
//                     height: 100px;
//                     margin: 1em;
//                 }  
//                 .programDefinition {
//                     display: inline-block;
//                     width: 1200px;
//                     height: 300px;
//                     margin: 1em;
//                 }    
//                 .card {
//                     margin: 24px;
//                     padding: 16px;
//                     color: #757575;
//                     border-radius: 5px;
//                     background-color: #fff;
//                     box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
//                 }   
//                 p.tableTitle{
//                     margin-top: 0px;
//                     margin-bottom: 3px;    
//                     color: #4285f4;
//                     font-size:30px;
//                 }        
//             </style>
//             <env-monit-elements id="myElements" refresh-window-method="{{callBackRefreshWindow}}"></env-monit-elements>
//             <div name="Buttons1" class="buttonGroup">
//                 <p class="tableTitle">{{labelValue(selectedLanguage, tableTitle)}}</p>
//                 <template is="dom-repeat" items="{{progProintsCardFormButtons}}" as="currentfield">       
//                     <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
//                     on-field-button-clicked="fieldButtonClicked" on-field-list-value-changed="onListChange"> 
//                     </field-controller>
//                 </template>  
//             </div>            
//             <div style="display:flex">
//                 <vaadingrid-lit-singleselect style="width:100%;" id="mygridid" headerfields="{{programCorrectiveActionTableHeaderFields}}" 
//                     rowcontainer="{{selectedProgramCorrectiveActions}}" selected-object="{{selectedObject}}"
//                     ></vaadingrid-lit-singleselect>
//             </div>
//             <paper-dialog id="pointCard">
//                 <card-form form-fields="{{selectedProgramCorrectiveActions}}" buttons="{{cardFormButtons}}" 
//                 on-field-button-clicked="sampleLogButtonClicked"
//                 on-dialog-button-clicked="dialogClosedpointCard"> </card-form>
//             </paper-dialog>
//         `;
//     }
//     mapClick(e){
//         console.log('mapClick', 'click', this.source);
//         var posicXInit = e.offsetX;
//         var posicYInit = e.offsetY;
//         console.log('posicXInit', posicXInit, 'posicYInit', posicYInit);
//         //this.shadowRoot.getElementById(e.currentTarget.posicIndex+'content').style.zIndex=1000;                       
//     }
//     itemSelected(){console.log('itemSelected xssss');}
// /*    pointClicked(e){
//         //this.selectedPointCardForm=e.currentTarget.cardForm;
//         if (!e.detail.value){return;}
//         //console.log('proc-deploy-prog-corrective-actions >> pointClicked', 'this.selectedObject', this.selectedObject, 'this.selectedProgramCorrectiveActions', this.selectedProgramCorrectiveActions );        
//         store.dispatch(setselectedProgramCorrectiveActions(e.detail.value.card_info));
//         this.$.pointCard.open();
//     }*/
//     // refreshWindow() {
//     //     this.onFinalTokenFilled();
//     // }    
//     // onFinalTokenFilled(){
//     //     this.callBackRefreshWindow = this.refreshWindow.bind(this);
//     //     //console.log('proc-deploy-programs', 'onFinalTokenFilled');
//     //     if (this.selectedProgram.name==null)return;
//     //     this.getSelectedProgramCorrectiveAction({
//     //         finalToken:this.finalToken, schemaPrefix:this.schemaPrefix, programName: this.selectedProgram.name
//     //       });                     
//     // }