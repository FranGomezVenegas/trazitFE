define(["../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../store.js","./functions-env-monit.js","../04procedure/dialogs/em-demo-a-simple-modal-dialog.js","../03config/Dialogs/em-demo-a-dialogmodal-settings.js"],function(_polymerElement,_connectMixin,_store,_functionsEnvMonit,_emDemoASimpleModalDialog,_emDemoADialogmodalSettings){"use strict";//import '../../../internalComponents/Dialogs/DialogSimple/simple-modal-dialog.js'
//import '../04procedure/dialogs/em-demo-a-list-modal-sample-audit.js'
//import '../04procedure/dialogs/em-demo-a-list-modal-enterresults';
/* `em-demo-a-webcomponent-env-monit` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */class EmDemoAWebcomponentEnvMonit extends(0,_functionsEnvMonit.FunctionsEnvMonit)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)){static get properties(){return{selectedObject:{type:Object},callBackFunction:{type:Object},callBackFunctionError:{type:Object},buttonDefinition:{type:Object},//fieldsDialogAddComment:{type: Array, notify: true, bubble: true, value: dialogAddComment},
dialogProductionLotNew:{type:Array,notify:!0,bubble:!0,value:_emDemoADialogmodalSettings.dialogProductionLotNew},dialogProductionLotActivate:{type:Array,notify:!0,bubble:!0,value:_emDemoADialogmodalSettings.dialogProductionLotActivate},dialogincubBatchNew:{type:Array,notify:!0,bubble:!0,value:_emDemoADialogmodalSettings.dialogincubBatchNew},dialogincubAddTmpReading:{type:Array,notify:!0,bubble:!0,value:_emDemoADialogmodalSettings.dialogincubAddTmpReading},activeIncubatorsListHeader:{type:Array,value:_emDemoADialogmodalSettings.dialogIncubatorsListTableHeader},activeIncubatorsListRows:{type:Array},openInvestigationsListHeader:{type:Array,value:_emDemoADialogmodalSettings.dialogInvestigationsListTableHeader},openInvestigationsListRows:{type:Array},dialogInvestDecision:{type:Array,notify:!0,bubble:!0,value:_emDemoADialogmodalSettings.dialogInvestDecision}}}stateChanged(state){if(null!=state.emDemoA){this.activeIncubatorsListRows=state.emDemoA.allIncubators;this.openInvestigationsListRows=state.emDemoA.openInvestigations}}static get template(){return _polymerElement.html`
        <!-- <style>
        //     paper-dialog{
        //         top:100px; left:80px; height:0px; width:0px; z-index: 100;  position: fixed;  
        //         /* height: 100vh; */
        //         width: 100vw;
        //         -webkit-transition: opacity 0.3s ease-in;
        //     }
        // </style> -->
        <!-- focus-in-field="{{fieldsDialogAddComment.0.name}}" -->


        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="productionLotNew" on-opened-changed="productionLotNewOpenedChangedListener">
            <em-demo-a-simple-modal-dialog id="productionLotNewDialog" action-name="" display-confirm-button display-cancel-button 
                form-elements="{{dialogProductionLotNew}}" on-dialog-button-clicked="dialogClosedProductionLotNew"></em-demo-a-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="productionLotActivate" on-opened-changed="productionLotActivateOpenedChangedListener">
            <em-demo-a-simple-modal-dialog id="productionLotActivateDialog" action-name="" display-confirm-button display-cancel-button 
                form-elements="{{dialogProductionLotActivate}}" on-dialog-button-clicked="dialogClosedProductionLotActivate"></em-demo-a-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="incubBatchNew" on-opened-changed="incubBatchNewOpenedChangedListener">
            <em-demo-a-simple-modal-dialog id="incubBatchNewDialog" action-name="" display-confirm-button display-cancel-button 
                form-elements="{{dialogincubBatchNew}}" on-dialog-button-clicked="dialogClosedincubBatchNew"></em-demo-a-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="incubBatchAssignIncubator" on-opened-changed="incubBatchAssignIncubatorOpenedChangedListener">
            <em-demo-a-simple-modal-dialog id="incubBatchAssignIncubatorDialog" action-name="" display-confirm-button display-cancel-button 
                list-header="[[activeIncubatorsListHeader]]" list-rows="{{activeIncubatorsListRows}}"            
                on-dialog-button-clicked="dialogClosedincubBatchAssignIncubator"></em-demo-a-simple-modal-dialog>
        </paper-dialog>
        
        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="incubatorAddTempReading" on-opened-changed="incubatorAddTempReadingOpenedChangedListener">
            <em-demo-a-simple-modal-dialog id="incubatorAddTempReadingDialog" action-name="" display-confirm-button display-cancel-button 
                form-elements="{{dialogincubAddTmpReading}}"          
                on-dialog-button-clicked="dialogClosedIncubatorAddTempReading"></em-demo-a-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="investigationAddObject" on-opened-changed="incubBatchAssignIncubatorOpenedChangedListener">
            <em-demo-a-simple-modal-dialog id="investigationAddObjectDialog" action-name="" display-confirm-button display-cancel-button 
                list-header="[[openInvestigationsListHeader]]" list-rows="{{openInvestigationsListRows}}"            
                on-dialog-button-clicked="dialogClosedInvestigationAddObject"></em-demo-a-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="investigationDecision" >
            <em-demo-a-simple-modal-dialog id="investigationDecisionDialog" action-name="" 
                display-confirm-button display-cancel-button form-elements="{{dialogInvestDecision}}"            
                on-dialog-button-clicked="dialogClosedInvestigationDecision"></em-demo-a-simple-modal-dialog>
        </paper-dialog>

        `}// AddCommentOpenedChangedListener(){
//     const modalwindow=this.shadowRoot.getElementById('addCommentDialog');
//     if (modalwindow && modalwindow.parentElement.opened){
//         if (modalwindow.resetValue){
//             modalwindow.resetValue();
//             //modalwindow.setFocusInField();
//         }
//     }
// }
incubatorAddTempReadingOpenedChangedListener(){}incubBatchAssignIncubatorOpenedChangedListener(){}incubBatchNewOpenedChangedListener(){const modalwindow=this.shadowRoot.getElementById("incubBatchNewDialog");if(modalwindow&&modalwindow.parentElement.opened){if(modalwindow.resetValue){modalwindow.resetValue();//modalwindow.setFocusInField();
}}}productionLotActivateOpenedChangedListener(){const modalwindow=this.shadowRoot.getElementById("productionLotActivateDialog");if(modalwindow&&modalwindow.parentElement.opened){if(modalwindow.resetValue){modalwindow.resetValue();//modalwindow.setFocusInField();
}}}productionLotNewOpenedChangedListener(){//console.log('productionLotNewOpenedChangedListener');        
const modalwindow=this.shadowRoot.getElementById("productionLotNewDialog");if(modalwindow&&modalwindow.parentElement.opened){if(modalwindow.resetValue){modalwindow.resetValue();//modalwindow.setFocusInField();
}}}openDialog(dialogName,actionName){if("investigationNew"==dialogName){console.log("openDialog >> investigationNew");this.investigationNewNoDialog(this.buttonDefinition);return}var elem=this.shadowRoot.getElementById(dialogName);// if (dialogName=="addComment"){
//     elem.actionName=actionName;
// }
// if (dialogName=="sampleAudit" || dialogName=="enterResults"){
//     var elemDialog=this.shadowRoot.getElementById(dialogName+"Dialog");
//     elemDialog.loadData();
// }
elem.open()}closeDialog(dialogName){console.log("closeDialog");var elem=this.shadowRoot.getElementById(dialogName);elem.close()}/**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */constructor(){super()}/**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */ready(){super.ready()}}customElements.define("em-demo-a-webcomponent-env-monit",EmDemoAWebcomponentEnvMonit)});