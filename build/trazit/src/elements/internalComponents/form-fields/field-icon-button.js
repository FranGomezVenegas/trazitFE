import {
  PolymerElement,
  html,
} from "../../../../node_modules/@polymer/polymer/polymer-element.js";
import { connect } from "../../../../node_modules/pwa-helpers/connect-mixin.js";
import { store } from "../../../store.js";
import { FieldsMethods } from "../../../platform-mixins/functions/fields-methods.js";
import "../../../../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import "../../../../node_modules/@polymer/iron-icons/iron-icons.js";
class FieldIconButton extends FieldsMethods(connect(store)(PolymerElement)) {
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
      <style>
        paper-icon-button {
          height: 4vmax;
          width: 4vmax;
        }
      </style>
      <paper-icon-button
        style="{{styleDefinition()}}"
        icon="{{field.icon_name}}"
        title="{{labelValue(selectedLanguage, field)}}"
        on-click="clicked"
        disabled="{{field.read_only}}"
        value="{{field.name}}"
      ></paper-icon-button>
    `;
  }
  styleDefinition() {
    if (this.field.read_only) {
      return "color:var(--lumo-disabled-text-color); ";
    }
    return !this.field.icon_color
      ? "color:cornflowerblue;"
      : "color:" + this.field.icon_color + "; ";
  }
  clicked() {
    var proc = [];
    if (this.procedure) {
      proc = this.procedure;
      var procLabelEn = "";
      if (this.procedure.label_en) {
        procLabelEn = this.procedure.label_en;
      }
    }
    var fieldLabelEn = "";
    if (this.field.label_en) {
      fieldLabelEn = this.field.label_en;
    }
    this.dispatchEvent(
      new CustomEvent("field-button-clicked", {
        bubbles: !0,
        composed: !0,
        detail: {
          buttonName: this.field.name,
          value: this.value,
          buttonDefinition: this.field,
          procEvent: this.field,
          procedure: proc,
          tabName_en: procLabelEn + "-" + fieldLabelEn,
        },
      })
    );
  }
}
customElements.define("field-icon-button", FieldIconButton);
