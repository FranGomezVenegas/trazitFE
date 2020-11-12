define(["../../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../../store.js","../../../../internalComponents/Grids/vaadingrid-lit-singleselect.js","../../03config/Programs/em-demo-a-progtab-correctiveactions-settings.js","../../01moduleFunctionality/endpoints-frontend-env-monit.js","../../01moduleFunctionality/em-demo-a-webcomponent-env-monit.js","../../01moduleFunctionality/functions-env-monit.js"],function(_polymerElement,_connectMixin,_store,_vaadingridLitSingleselect,_emDemoAProgtabCorrectiveactionsSettings,_endpointsFrontendEnvMonit,_emDemoAWebcomponentEnvMonit,_functionsEnvMonit){"use strict";//FieldsMethods EmDemoAapiEnvMonit FrontendEnvMonit
class EmDemoAProgCorrectiveActions extends(0,_functionsEnvMonit.FunctionsEnvMonit)((0,_endpointsFrontendEnvMonit.FrontendEndpointsEnvMonitForInvestigation)((0,_endpointsFrontendEnvMonit.FrontendEndpointsEnvMonitForPrograms)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)))){stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(state.emDemoA!=void 0&&state.emDemoA.selectedProgram.name!=void 0){this.selectedProgram=state.emDemoA.selectedProgram;this.selectedProgramCorrectiveActions=state.emDemoA.selectedProgramCorrectiveActions}}static get properties(){return{tableDefinition:{type:Object,value:_emDemoAProgtabCorrectiveactionsSettings.progTabCorrectiveActions},selectedObject:{type:Object,notify:!0},selectedProgram:{type:Object},selectedProgramCorrectiveActions:{type:Object}}}static get template(){return _polymerElement.html`
            <style include="em-demo-a-progtab-correctiveactions-style"></style>
            <em-demo-a-webcomponent-env-monit id="myelements"></em-demo-a-webcomponent-env-monit>
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
                            on-field-button-clicked="fieldButtonClickedForInvestigations" on-field-list-value-changed="onListChange"> 
                            </field-controller>
                        </template>  
                    </template>  
                </div>            
                <vaadingrid-lit-singleselect class="grid" id="emdemoa-samplesampling" headerfields="{{tableDefinition.fieldToDisplay}}" 
                    rowcontainer="{{selectedProgramCorrectiveActions}}" selected-object="{{selectedObject}}">
                </vaadingrid-lit-singleselect>
            </div>  
        `}refreshWindow(){this.getSelectedProgramCorrectiveActions()}getSelectedProgramCorrectiveActions(){this.callBackRefreshWindow=this.refreshWindow.bind(this);if(this.selectedProgram){this.getSelectedProgramCorrectiveAction({programName:this.selectedProgram.name})}this.getOpenInvestigationsList({programName:""})}ready(){super.ready();this.getSelectedProgramCorrectiveActions()}}customElements.define("em-demo-a-prog-corrective-actions",EmDemoAProgCorrectiveActions);// import '../../../../internalComponents/cards/card-form.js';
// import '@polymer/paper-dialog/paper-dialog';
// //import '../../../../internalComponents/grid-components/vaadingrid-singleselect.js';
// import '../../../../internalComponents/Grids/vaadingrid-lit-singleselect';
// import '../../01moduleFunctionality/env-monit-elements.js';
// import {EmDemoAapiEnvMonit} from '../../01moduleFunctionality/api-env-monit.js';  
// import {FrontendEnvMonit} from '../../01moduleFunctionality/frontend-env-monit.js';
// import {progCorrectiveActionButtons, progCorrectiveActionTableHeaderFields
//     } from '../../03config/config-process.js';
// //import {setselectedProgramCorrectiveActions} from '../../02Redux/em-demo-a_actions.js';
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
//         //console.log('em-demo-a-prog-corrective-actions >> pointClicked', 'this.selectedObject', this.selectedObject, 'this.selectedProgramCorrectiveActions', this.selectedProgramCorrectiveActions );        
//         store.dispatch(setselectedProgramCorrectiveActions(e.detail.value.card_info));
//         this.$.pointCard.open();
//     }*/
//     // refreshWindow() {
//     //     this.onFinalTokenFilled();
//     // }    
//     // onFinalTokenFilled(){
//     //     this.callBackRefreshWindow = this.refreshWindow.bind(this);
//     //     //console.log('em-demo-a-programs', 'onFinalTokenFilled');
//     //     if (this.selectedProgram.name==null)return;
//     //     this.getSelectedProgramCorrectiveAction({
//     //         finalToken:this.finalToken, schemaPrefix:this.schemaPrefix, programName: this.selectedProgram.name
//     //       });                     
//     // }     
});