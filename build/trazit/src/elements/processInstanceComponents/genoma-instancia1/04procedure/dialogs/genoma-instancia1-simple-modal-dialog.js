import{PolymerElement,html}from"../../../../../../node_modules/@polymer/polymer/polymer-element.js";import"../../../../../../node_modules/@polymer/paper-button/paper-button.js";import"./genoma-instancia1-dialogmodal-buttons.js";import"../../03config/Dialogs/genoma-instancia1-dialogmodal-settings.js";import{ModuleFunctionsGenoma}from"../../01moduleFunctionality/0module-functions-genoma.js";/**
 * `genoma-instancia1-simple-modal-dialog` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */class GenomaInstancia1SimpleModalDialog extends ModuleFunctionsGenoma(PolymerElement){static get properties(){return{displayCancelButton:{type:Boolean,notify:!0},displayConfirmButton:{type:Boolean,notify:!0},displayCloseButton:{type:Boolean,notify:!0},formElements:{type:Array},listRows:Array,listHeader:Array,simpleModalSelectedObject:{type:Object,notify:!0},focusInField:{type:String},selectedObject:{type:Object},selectedStudy:{type:Object},callBackFunction:{type:Object},callBackFunctionError:{type:Object},allowMultiSelect:{type:Boolean}}}static get template(){return html`        
        <style include="genoma-instancia1-dialogmodal-style"></style>       
        <div class="modal-content bgimg">
        
            <genoma-instancia1-dialogmodal-buttons display-close-button={{displayCloseButton}} display-cancel-button={{displayCancelButton}} display-confirm-button={{displayConfirmButton}}
                on-dialog-closebutton-clicked="dialogClosed" on-dialog-cancelbutton-clicked="dialogCanceled" on-dialog-confirmbutton-clicked="dialogConfirmed"
            ></genoma-instancia1-dialogmodal-buttons> 
            <template is="dom-repeat" items="{{formElements}}" as="currentfield">       
                <field-controller on-keydown="keyPressed" callBack-function="[[callBackFunction]]" callBack-function-error="[[callBackFunctionError]]" on-keydown="microorgKeyPressedAdhoc" on-field-button-clicked="microorgActionOnSel" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
            </template>    
            <vaadingrid-lit-singleselect id="simplemodaldialoggrid" headerfields="{{listHeader}}" allow-multi-select="{{allowMultiSelect}}"
                rowcontainer="{{listRows}}" selected-object="{{simpleModalSelectedObject}}" selected-items="{{simpleModalSelectedItems}}">
            </vaadingrid-lit-singleselect>
        </div>      
        `}resetValue(){return;if(!this.formElements){return}if(!this.formElements[0]){return}if(!this.formElements[0].name){return}var elemName=this.formElements[0].name;//if (!this.formElements || !this.formElements[0] || !this.formElements[0].name){return;}
console.log("resetValue","elemName",elemName);var field=this.shadowRoot.getElementById(elemName);if(field){field.resetValue()}}//     setFocusInField(){
// console.log('setFocusInfield', this.focusInField);
//         var elem=this.shadowRoot.getElementById(this.focusInField);  
//         elem.focus();
//     }
keyPressed(e){//console.log('key pressed');
if("Enter"==e.key){this.dialogConfirmed();return}}dialogConfirmed(){//console.log('dialogConfirmed', this.value);
this.value="confirmed";this.dispatchEvent(new CustomEvent("dialog-button-clicked",{bubbles:!0,composed:!0,detail:{buttonName:this.name,value:this.value,dialogState:"confirmed",formElements:this.formElements,selectedItems:this.$.simplemodaldialoggrid.selectedObject}}));//this.resetValue; 
}dialogCanceled(){//console.log('dialogCanceled', this.value);
this.value="confirmed";this.dispatchEvent(new CustomEvent("dialog-button-clicked",{bubbles:!0,composed:!0,detail:{buttonName:this.name,value:this.value,dialogState:"canceled"}}));//this.resetValue;    
}dialogClosed(){//console.log('dialogCanceled', this.value);
this.value="confirmed";this.dispatchEvent(new CustomEvent("dialog-button-clicked",{bubbles:!0,composed:!0,detail:{buttonName:this.name,value:this.value,dialogState:"closed"}}));//this.resetValue;    
}}customElements.define("genoma-instancia1-simple-modal-dialog",GenomaInstancia1SimpleModalDialog);