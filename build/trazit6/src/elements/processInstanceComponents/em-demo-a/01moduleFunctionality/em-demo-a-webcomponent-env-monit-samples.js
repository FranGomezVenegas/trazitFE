define(["../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../store.js","./functions-env-monit-samples.js","../04-procedure/dialogs/em-demo-a-simple-modal-dialog.js","../04-procedure/dialogs/em-demo-a-list-modal-sample-audit.js","../04-procedure/dialogs/em-demo-a-list-modal-enterresults.js","../03config/Dialogs/em-demo-a-dialogmodal-settings.js"],function(_polymerElement,_connectMixin,_store,_functionsEnvMonitSamples,_emDemoASimpleModalDialog,_emDemoAListModalSampleAudit,_emDemoAListModalEnterresults,_emDemoADialogmodalSettings){"use strict";//import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
// import {NeonAnimationRunnerBehavior} from '@polymer/neon-animation/neon-animation-runner-behavior.js';
// import '@polymer/neon-animation/animations/scale-down-animation.js';
// import '@polymer/neon-animation/animations/scale-up-animation.js';
// import '@polymer/neon-animation/animations/fade-out-animation.js';
//import '../../../internalComponents/Dialogs/DialogSimple/simple-modal-dialog.js'
/* `em-demo-a-webcomponent-env-monit-samples` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */ //mixinBehaviors([NeonAnimationRunnerBehavior],
class EmDemoAWebcomponentEnvMonitSamples extends(0,_functionsEnvMonitSamples.FunctionsEnvMonitSamples)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)){static get properties(){return{selectedObject:{type:Object},selectedItems:{type:Array},callBackFunction:{type:Object},callBackFunctionError:{type:Object},buttonDefinition:{type:Object},fieldsDialogAddComment:{type:Array,notify:!0,bubble:!0,value:_emDemoADialogmodalSettings.dialogAddComment},microorgListHeader:{type:Array,value:_emDemoADialogmodalSettings.dialogMicroorgListTableHeader},microorgListRows:{type:Array},dialogMicroorgListAdhocMicroorg:{type:Array,value:_emDemoADialogmodalSettings.dialogMicroorgListAdhocMicroorg}}}stateChanged(state){if(null!=state.emDemoA){this.microorgListRows=state.emDemoA.microorganismList}}static get template(){return _polymerElement.html`
        <style>
            paper-dialog{
                top:100px; left:80px; height:0px; width:0px; z-index: 98;  position: fixed;  
                /* height: 100vh; */
                width: 100vw;
                -webkit-transition: opacity 0.3s ease-in;
            }
        </style>
        <!-- focus-in-field="{{fieldsDialogAddComment.0.name}}" --> <!-- on-opened-changed="AddCommentOpenedChangedListener">-->
        
        <paper-dialog class="roundbox boxshadow" id="addComment" >
            <em-demo-a-simple-modal-dialog id="addCommentDialog" action-name="" display-confirm-button display-cancel-button form-elements="{{fieldsDialogAddComment}}" 
            on-dialog-button-clicked="dialogClosedAddComment"> </em-demo-a-simple-modal-dialog>
        </paper-dialog>

        <!-- modal entry-animation="scale-up-animation" exit-animation="fade-out-animation" -->
        <paper-dialog  class="roundbox boxshadow" id="sampleAudit" >
          <em-demo-a-list-modal-sample-audit id="sampleAuditDialog" 
            sample-id={{selectedObject.sample_id}}></em-demo-a-list-modal-sample-audit>
        </paper-dialog>
        
        <paper-dialog class="roundbox boxshadow" id="enterResults">
          <em-demo-a-list-modal-enterresults id="enterResultsDialog" 
            sample-id={{selectedObject.sample_id}}></em-demo-a-list-modal-enterresults>
        </paper-dialog> <!--on-opened-changed="addSampleMicroorgOpenedChangedListener"-->
        
        <paper-dialog class="roundbox boxshadow" id="addSampleMicroorg" >
            <em-demo-a-simple-modal-dialog id="addSampleMicroorgDialog" display-close-button allow-multi-select
                list-header="[[microorgListHeader]]" list-rows="{{microorgListRows}}"  form-elements="{{dialogMicroorgListAdhocMicroorg}}"           
                callBack-function="[[callBackFunction]]" callBack-function-error="[[callBackFunctionError]]" call-back-refresh-window="{{refreshWindow}}"
                selected-object="{{selectedObject}}" selected-items="{{selectedItems}}"
                sample-id={{selectedObject.sample_id}} on-dialog-button-clicked="dialogClosedaddSampleMicroorg"></em-demo-a-simple-modal-dialog>
        </paper-dialog>
        `}addSampleMicroorgOpenedChangedListener(){const elem=this.shadowRoot.getElementById("addSampleMicroorgDialog"),grid=elem.shadowRoot.getElementById("simplemodaldialoggrid");console.log("addSampleMicroorgOpenedChangedListener",grid.selectedItems);grid.resetTableSelection();//        grid.clearCache();
console.log("addSampleMicroorgOpenedChangedListener",grid.selectedItems);//this.selectedItems=[];
}AddCommentOpenedChangedListener(e){const modalwindow=this.shadowRoot.getElementById("addCommentDialog");if(modalwindow){if(modalwindow.resetValue){modalwindow.resetValue();//modalwindow.setFocusInField();
}}}productionLotNewOpenedChangedListener(){const modalwindow=this.shadowRoot.getElementById("addCommentDialog");if(modalwindow){if(modalwindow.resetValue){modalwindow.resetValue();//modalwindow.setFocusInField();
}}}openDialog(dialogName,actionName){var elem=this.shadowRoot.getElementById(dialogName);if("addComment"==dialogName){elem.actionName=actionName;this.AddCommentOpenedChangedListener()}if("addSampleMicroorg"==dialogName){this.addSampleMicroorgOpenedChangedListener()}if("sampleAudit"==dialogName||"enterResults"==dialogName){var elemDialog=this.shadowRoot.getElementById(dialogName+"Dialog");elemDialog.loadData()}elem.open()}closeDialog(dialogName){var elem=this.shadowRoot.getElementById(dialogName);elem.close()}/**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */constructor(){super()}/**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */ready(){super.ready()}}customElements.define("em-demo-a-webcomponent-env-monit-samples",EmDemoAWebcomponentEnvMonitSamples)});