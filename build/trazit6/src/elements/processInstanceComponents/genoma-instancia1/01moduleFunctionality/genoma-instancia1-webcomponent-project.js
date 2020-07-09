define(["../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../store.js","./0module-functions-genoma.js","../03config/Project/genoma-instancia1-projectmainview-settings.js","../04-procedure/dialogs/genoma-instancia1-simple-modal-dialog.js","../04-procedure/dialogs/genoma-instancia1-enter-variable-value-dialog.js","../03config/Dialogs/genoma-instancia1-dialogmodal-settings.js"],function(_polymerElement,_connectMixin,_store,_moduleFunctionsGenoma,_genomaInstancia1ProjectmainviewSettings,_genomaInstancia1SimpleModalDialog,_genomaInstancia1EnterVariableValueDialog,_genomaInstancia1DialogmodalSettings){"use strict";//, elementTableIndividual, elementTableSample, elementTableSampleVariable
//import '../../../internalComponents/Dialogs/DialogSimple/simple-modal-dialog.js'
//import '../04-procedure/dialogs/genoma-instancia1-list-modal-sample-audit.js'
//import '../04-procedure/dialogs/genoma-instancia1-list-modal-enterresults';
/* `genoma-instancia1-webcomponent-project` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */class GenomaInstancia1WebcomponentProject extends(0,_moduleFunctionsGenoma.ModuleFunctionsGenoma)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)){static get properties(){return{selectedObject:{type:Object},selectedStudy:{type:Object},selectedStudyName:{type:String},selectedStudyFamily:{type:Object},selectedStudyIndividual:{type:Object},callBackFunction:{type:Object},callBackFunctionError:{type:Object},buttonDefinition:{type:Object},//fieldsDialogAddComment:{type: Array, notify: true, bubble: true, value: dialogAddComment},
dialogStudyNew:{type:Array,notify:!0,bubble:!0,value:_genomaInstancia1DialogmodalSettings.dialogStudyNew},dialogStudyUpdate:{type:Array,notify:!0,bubble:!0,value:_genomaInstancia1DialogmodalSettings.dialogStudyUpdate},dialogStudyIndividualNew:{type:Array,notify:!0,bubble:!0,value:_genomaInstancia1DialogmodalSettings.dialogStudyIndividualNew},dialogStudyIndividualUpdate:{type:Array,notify:!0,bubble:!0,value:_genomaInstancia1DialogmodalSettings.dialogStudyIndividualUpdate},dialogStudyFamilyNew:{type:Array,notify:!0,bubble:!0,value:_genomaInstancia1DialogmodalSettings.dialogStudyFamilyNew},dialogStudyFamilyUpdate:{type:Array,notify:!0,bubble:!0,value:_genomaInstancia1DialogmodalSettings.dialogStudyFamilyUpdate},dialogStudySamplesSetNew:{type:Array,notify:!0,bubble:!0,value:_genomaInstancia1DialogmodalSettings.dialogStudySamplesSetNew},dialogStudySamplesSetUpdate:{type:Array,notify:!0,bubble:!0,value:_genomaInstancia1DialogmodalSettings.dialogStudySamplesSetUpdate},activeIncubatorsListRows:{type:Array},dialogStudyFamilyList:{type:Array,notify:!0,bubble:!0,value:_genomaInstancia1ProjectmainviewSettings.elementTableFamily},dialogStudyIndividualList:{type:Array,notify:!0,bubble:!0,value:_genomaInstancia1ProjectmainviewSettings.elementTableIndividual}}}stateChanged(state){if(null!=state.genomaInstancia1){this.selectedStudy=state.genomaInstancia1.selectedStudy;//console.log('genoma-instancia1-webcomponent-project, selectedStudy',this.selectedStudy);
this.selectedStudyName=this.selectedStudy.name;this.selectedStudyFamily=this.selectedStudy.study_family;this.selectedStudyIndividual=this.selectedStudy.study_individual}}static get template(){return _polymerElement.html`
        <!-- <style>
        //     paper-dialog{
        //         top:100px; left:80px; height:0px; width:0px; z-index: 100;  position: fixed;  
        //         /* height: 100vh; */
        //         width: 100vw;
        //         -webkit-transition: opacity 0.3s ease-in;
        //     }
        // </style> -->
        <!-- focus-in-field="{{fieldsDialogAddComment.0.name}}" -->


        <paper-dialog class="roundbox boxshadow" id="createNewStudy" on-opened-changed="studyNewOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="createNewStudyDialog" action-name="" display-confirm-button display-cancel-button 
            selected-study-name="{{selectedStudyName}}" selected-object="{{selectedObject}}" form-elements="{{dialogStudyNew}}" on-dialog-button-clicked="dialogClosedStudyNew"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog class="roundbox boxshadow" id="updateStudy" on-opened-changed="studyNewOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="updateStudyDialog" action-name="" display-confirm-button display-cancel-button 
             selected-study-name="{{selectedStudyName}}" selected-object="{{selectedObject}}" form-elements="{{dialogStudyUpdate}}" on-dialog-button-clicked="dialogClosedStudyUpdate"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog class="roundbox boxshadow" id="createNewStudyIndividual" on-opened-changed="studyNewOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="createNewStudyIndividualDialog" action-name="" display-confirm-button display-cancel-button 
            selected-study-name="{{selectedStudyName}}" selected-object="{{selectedObject}}" form-elements="{{dialogStudyIndividualNew}}" on-dialog-button-clicked="dialogClosedStudyIndividualNew"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog class="roundbox boxshadow" id="updateStudyIndividual" on-opened-changed="studyNewOpenedChangedListener">
        {{selectedObject.study}} aaa
            <genoma-instancia1-simple-modal-dialog id="updateStudyIndividualDialog" action-name="" display-confirm-button display-cancel-button 
            selected-study-name="{{selectedStudyName}}" selected-object="{{selectedObject}}" form-elements="{{dialogStudyIndividualUpdate}}" on-dialog-button-clicked="dialogClosedStudyIndividualUpdate"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog class="roundbox boxshadow" id="createNewStudyFamily" on-opened-changed="studyNewOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="createNewStudyFamilyDialog" action-name="" display-confirm-button display-cancel-button 
                selected-study-name="{{selectedStudyName}}" selected-object="{{selectedObject}}" form-elements="{{dialogStudyFamilyNew}}" on-dialog-button-clicked="dialogClosedStudyFamilyNew"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog class="roundbox boxshadow" id="updateStudyFamily" on-opened-changed="studyNewOpenedChangedListener">
        {{selectedObject.study}} aaa
            <genoma-instancia1-simple-modal-dialog id="updateStudyFamilyDialog" action-name="" display-confirm-button display-cancel-button 
            selected-study-name="{{selectedStudyName}}" selected-object="{{selectedObject}}" form-elements="{{dialogStudyFamilyUpdate}}" on-dialog-button-clicked="dialogClosedStudyFamilyUpdate"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog class="roundbox boxshadow" id="createNewStudySamplesSet" on-opened-changed="studyNewOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="createNewStudySamplesSetDialog" action-name="" display-confirm-button display-cancel-button 
                selected-study-name="{{selectedStudyName}}" selected-object="{{selectedObject}}" form-elements="{{dialogStudySamplesSetNew}}" on-dialog-button-clicked="dialogClosedStudySamplesSetNew"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog class="roundbox boxshadow" id="updateStudySamplesSet" on-opened-changed="studyNewOpenedChangedListener">
        {{selectedObject.study}} aaa
            <genoma-instancia1-simple-modal-dialog id="updateStudySamplesSetDialog" action-name="" display-confirm-button display-cancel-button 
            selected-study-name="{{selectedStudyName}}" selected-object="{{selectedObject}}" form-elements="{{dialogStudySamplesSetUpdate}}" on-dialog-button-clicked="dialogClosedStudySamplesSetUpdate"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog class="roundbox boxshadow" id="updateProject" on-opened-changed="productionLotNewOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="updateProjectDialog" action-name="" display-confirm-button display-cancel-button 
                selected-study-name="{{selectedStudyName}}" form-elements="{{dialogProductionLotNew}}" on-dialog-button-clicked="dialogClosedProductionLotNew"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog class="roundbox boxshadow" id="enterVariableValue" on-opened-changed="enterVariableValueOpenedChangedListener">
            <genoma-instancia1-enter-variable-value-dialog id="enterVariableValueDialog" action-name="" display-confirm-button display-cancel-button 
                selected-study-name="{{selectedStudyName}}"  selected-object="{{selectedObject}}" form-elements="{{dialogStudyNew}}" on-dialog-button-clicked="dialogClosedEnterVariableValue"></genoma-instancia1-enter-variable-value-dialog>
        </paper-dialog>

        <paper-dialog class="roundbox boxshadow" id="familyList" on-opened-changed="familyListOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="familyListDialog" action-name="" display-confirm-button display-cancel-button 
                selected-object="{{selectedObject}}" selected-study-name="{{selectedStudyName}}" on-dialog-button-clicked="dialogClosedFamilyList"
                list-rows="{{selectedStudyFamily}}" list-header="{{dialogStudyFamilyList.tableHdrFlds}}"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog class="roundbox boxshadow" id="individualList" on-opened-changed="individualListOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="individualListDialog" action-name="" display-confirm-button display-cancel-button 
                selected-object="{{selectedObject}}" selected-study-name="{{selectedStudyName}}" on-dialog-button-clicked="dialogClosedIndividualList"
                list-rows="{{selectedStudyIndividual}}" list-header="{{dialogStudyIndividualList.tableHdrFlds}}"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>
        `}individualListOpenedChangedListener(){}familyListOpenedChangedListener(){}enterVariableValueOpenedChangedListener(){this.$.enterVariableValueDialog.openListElement()}// AddCommentOpenedChangedListener(){
//     const modalwindow=this.shadowRoot.getElementById('addCommentDialog');
//     if (modalwindow){
//         if (modalwindow.resetValue){
//             modalwindow.resetValue();
//             //modalwindow.setFocusInField();
//         }
//     }
// }
studyNewOpenedChangedListener(){}incubBatchNewOpenedChangedListener(){const modalwindow=this.shadowRoot.getElementById("incubBatchNewDialog");if(modalwindow){if(modalwindow.resetValue){modalwindow.resetValue();//modalwindow.setFocusInField();
}}}productionLotActivateOpenedChangedListener(){const modalwindow=this.shadowRoot.getElementById("productionLotActivateDialog");if(modalwindow){if(modalwindow.resetValue){modalwindow.resetValue();//modalwindow.setFocusInField();
}}}productionLotNewOpenedChangedListener(){const modalwindow=this.shadowRoot.getElementById("productionLotNewDialog");if(modalwindow){if(modalwindow.resetValue){modalwindow.resetValue();//modalwindow.setFocusInField();
}}}openDialog(dialogName,actionName){console.log("openDialog fired");if("STUDY_FAMILY_ADD_INDIVIDUAL"==dialogName){if(this.selectedObject.individual_id!=void 0){dialogName="familyList"}else{dialogName="individualList"}}var elem=this.shadowRoot.getElementById(dialogName);// if (dialogName=="addComment"){
//     elem.actionName=actionName;
// }
// if (dialogName=="sampleAudit" || dialogName=="enterResults"){
//     var elemDialog=this.shadowRoot.getElementById(dialogName+"Dialog");
//     elemDialog.loadData();
// }
elem.open()}closeDialog(dialogName){var elem=this.shadowRoot.getElementById(dialogName);elem.close()}/**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */constructor(){super()}/**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */ready(){super.ready();this.selectedObject=this.selectedProject}}customElements.define("genoma-instancia1-webcomponent-project",GenomaInstancia1WebcomponentProject)});