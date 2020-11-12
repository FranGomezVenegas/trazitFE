define([
  "../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../store.js",
  "../../../../node_modules/@vaadin/vaadin-text-field/vaadin-text-field.js",
  "../../../../node_modules/@vaadin/vaadin-text-field/vaadin-password-field.js",
  "../../../platform-mixins/functions/fields-methods.js",
], function (
  _polymerElement,
  _connectMixin,
  _store,
  _vaadinTextField,
  _vaadinPasswordField,
  _fieldsMethods
) {
  "use strict";
  class FieldText extends (0, _fieldsMethods.FieldsMethods)(
    (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
  ) {
    static get properties() {
      return {
        field: { type: Object, observer: "fieldChange", notify: !0 },
        type: { type: String, notify: !0 },
        value: { type: String, notify: !0 },
        fieldClass: String,
        iAm: {
          type: Object,
          value: function () {
            return { button: !1, checkBox: !1 };
          },
        },
      };
    }
    stateChanged(state) {
      this.selectedLanguage = state.app.user.appLanguage;
    }
    textClass(langApp) {
      if ("en" == langApp) {
        this.fieldClass = "x-field.myCustomFieldRed";
        return;
      }
      this.fieldClass = "x-field.myCustomFieldBlue";
      return;
    }
    textType() {
      if ("false" == this.field.password) return !0;
      return !1;
    }
    textTypePassword() {
      return "true" == this.field.password;
    }
    textTypeConfidential() {
      return "confidential" == this.field.password;
    }
    fieldChange(newField) {
      switch (newField.showDisplayPasswordType) {
        case "Button":
          this.set("iAm.button", !0);
          break;
        case "CheckBox":
          this.set("iAm.checkBox", !0);
          break;
      }
    }
    static get template() {
      return _polymerElement.html`    
    <style>
      paper-input {
        color: #0085ffe6;
      }
      .required {
        color: #ffff;
      }
      .btn {
          position: absolute;
          font-family: 'FontAwesome';
          top: 0;
          left: 10px;
          content: "\f005";
      }
      .input {
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 16px;
          box-sizing: border-box;
          color: Red;
      }    
      .x-field.myCustomFieldRed input {
          color: Red;
      }
      .x-field.myCustomFieldBlue input {
          color: Blue;
      }      
      inputBlue {
        color: Blue;}
           
    </style>
    <template  is="dom-if" if="{{textType()}}">  
      <paper-input class="inputBlue" type="{{field.type}}" id="{{field.name}}" name="{{field.name}}" readonly="{{field.read_only}}" required label="{{labelValue(selectedLanguage, field)}}" value="{{value}}" auto-validate="{{field.required}}" ></paper-input>
    </template>
    <template  is="dom-if" if="{{textTypePassword()}}">  
      <vaadin-password-field id="{{field.name}}" name="{{field.name}}" readonly="{{field.read_only}}" label="{{labelValue(selectedLanguage, field)}}" value="{{value}}">value="{{value}}"</vaadin-password-field>
    </template>
    <template  is="dom-if" if="{{textTypeConfidential()}}">  
      <paper-input type="{{type}}" id="{{field.name}}" name="{{field.name}}" readonly label="{{labelValue(selectedLanguage, field)}}" value="{{confidentialMaskValue(selectedLanguage)}}" required="{{field.required}}" auto-validate tip="You are not authorized to see this information"></paper-input>
    </template>    
    `;
    }
  }
  customElements.define("field-text", FieldText);
});
