define(["../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../node_modules/pwa-helpers/connect-mixin.js","../../../store.js","../../../platform-mixins/functions/fields-methods.js","../../../../node_modules/@polymer/paper-icon-button/paper-icon-button.js","../../../../node_modules/@polymer/iron-icons/iron-icons.js"],function(_polymerElement,_connectMixin,_store,_fieldsMethods,_paperIconButton,_ironIcons){"use strict";class FieldIconButton extends(0,_fieldsMethods.FieldsMethods)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)){static get properties(){return{field:{type:Object,notify:!0},value:{type:String,notify:!0},selectedLanguage:String}}stateChanged(state){this.selectedLanguage=state.app.user.appLanguage}static get template(){return _polymerElement.html`  
    <style>
      paper-icon-button{
        height:6vw;
        width:6vw;
      }
    </style>
    <paper-icon-button style="{{styleDefinition()}}" icon="{{field.icon_name}}" title="{{labelValue(selectedLanguage, field)}}"
      on-click="clicked"  disabled="{{field.read_only}}" value="{{field.name}}" ></paper-icon-button>
    `}styleDefinition(){if(this.field.read_only){return"color:var(--lumo-disabled-text-color); "}return!this.field.icon_color?"color:cornflowerblue;":"color:"+this.field.icon_color+"; "}clicked(){var proc=[];if(this.procedure){proc=this.procedure;var procLabelEn="";if(this.procedure.label_en){procLabelEn=this.procedure.label_en}}var fieldLabelEn="";if(this.field.label_en){fieldLabelEn=this.field.label_en}this.dispatchEvent(new CustomEvent("field-button-clicked",{bubbles:!0,composed:!0,detail:{buttonName:this.field.name,value:this.value,buttonDefinition:this.field,procEvent:this.field,procedure:proc,tabName_en:procLabelEn+"-"+fieldLabelEn}}))}}customElements.define("field-icon-button",FieldIconButton)});