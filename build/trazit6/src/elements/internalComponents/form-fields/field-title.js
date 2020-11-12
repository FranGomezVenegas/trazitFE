define([
  "../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../store.js",
  "../../../platform-mixins/functions/fields-methods.js",
  "../../../config/platform/main-layout/two-headers-form-fields-style.js",
], function (
  _polymerElement,
  _connectMixin,
  _store,
  _fieldsMethods,
  _twoHeadersFormFieldsStyle
) {
  "use strict";
  class FieldTitle extends (0, _fieldsMethods.FieldsMethods)(
    (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
  ) {
    static get properties() {
      return { field: { type: Object, notify: !0 }, selectedLanguage: String };
    }
    stateChanged(state) {
      this.selectedLanguage = state.app.user.appLanguage;
    }
    static get template() {
      return _polymerElement.html`    
      <style include="form-fields-style"></style>
      <h2 class="formFieldTitle">{{labelValue(selectedLanguage, field)}}<h2>    
    `;
    }
  }
  customElements.define("field-title", FieldTitle);
});
