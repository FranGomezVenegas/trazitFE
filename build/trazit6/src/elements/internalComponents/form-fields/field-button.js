define([
  "../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../store.js",
  "../../../platform-mixins/functions/fields-methods.js",
], function (_polymerElement, _connectMixin, _store, _fieldsMethods) {
  "use strict";
  class FieldButton extends (0, _fieldsMethods.FieldsMethods)(
    (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
  ) {
    static get properties() {
      return {
        field: { type: Object, notify: !0 },
        value: { type: String, notify: !0 },
        selectedLanguage: String,
      };
    }
    stateChanged(state) {
      this.selectedLanguage = state.app.user.appLanguage;
    }
    static get template() {
      return _polymerElement.html`    
    <vaadin-button on-click="clicked"  value="{{field.name}}" disabled="{{field.read_only}}">
      {{labelValue(selectedLanguage, field)}}
    </vaadin-button>
    `;
    }
    clicked() {
      this.dispatchEvent(
        new CustomEvent("field-button-clicked", {
          bubbles: !0,
          composed: !0,
          detail: {
            buttonName: this.field.name,
            value: this.value,
            buttonDefinition: this.field,
          },
        })
      );
    }
  }
  customElements.define("field-button", FieldButton);
});
