import {
  PolymerElement,
  html,
} from "../../../../node_modules/@polymer/polymer/polymer-element.js";
import { connect } from "../../../../node_modules/pwa-helpers/connect-mixin.js";
import { store } from "../../../store.js";
import "../../../../node_modules/@material/mwc-formfield/mwc-formfield.js";
import { FieldsMethods } from "../../../platform-mixins/functions/fields-methods.js";
class FieldDate extends FieldsMethods(connect(store)(PolymerElement)) {
  static get properties() {
    return {
      field: { type: Object, notify: !0 },
      value: { type: Date, value: !1, notify: !0 },
    };
  }
  stateChanged(state) {
    this.selectedLanguage = state.app.user.appLanguage;
  }
  static get template() {
    return html`
      <mwc-formfield aligned="" label="{{labelValue(selectedLanguage, field)}}">
        <input type="date" value="{{value::input}}" />
      </mwc-formfield>
    `;
  }
}
customElements.define("field-date", FieldDate);
