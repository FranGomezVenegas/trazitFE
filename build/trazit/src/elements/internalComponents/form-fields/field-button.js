import {
  PolymerElement,
  html,
} from "../../../../node_modules/@polymer/polymer/polymer-element.js";
import { connect } from "../../../../node_modules/pwa-helpers/connect-mixin.js";
import { store } from "../../../store.js";
import { FieldsMethods } from "../../../platform-mixins/functions/fields-methods.js";
class FieldButton extends FieldsMethods(connect(store)(PolymerElement)) {
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
    return html`
      <vaadin-button
        on-click="clicked"
        value="{{field.name}}"
        disabled="{{field.read_only}}"
      >
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
