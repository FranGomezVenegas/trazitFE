import {
  PolymerElement,
  html,
} from "../../../../node_modules/@polymer/polymer/polymer-element.js";
import { connect } from "../../../../node_modules/pwa-helpers/connect-mixin.js";
import { store } from "../../../store.js";
import { FieldsMethods } from "../../../platform-mixins/functions/fields-methods.js";
import "../../../config/platform/main-layout/two-headers-form-fields-style.js";
class FieldTitle extends FieldsMethods(connect(store)(PolymerElement)) {
  static get properties() {
    return { field: { type: Object, notify: !0 }, selectedLanguage: String };
  }
  stateChanged(state) {
    this.selectedLanguage = state.app.user.appLanguage;
  }
  static get template() {
    return html`
      <style include="form-fields-style"></style>
      <h2 class="formFieldTitle">
        {{labelValue(selectedLanguage, field)}}
        <h2></h2>
      </h2>
    `;
  }
}
customElements.define("field-title", FieldTitle);
