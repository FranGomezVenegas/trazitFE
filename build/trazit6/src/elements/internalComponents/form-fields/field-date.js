define([
  "../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../store.js",
  "../../../../node_modules/@material/mwc-formfield/mwc-formfield.js",
  "../../../platform-mixins/functions/fields-methods.js",
], function (
  _polymerElement,
  _connectMixin,
  _store,
  _mwcFormfield,
  _fieldsMethods
) {
  "use strict";
  class FieldDate extends (0, _fieldsMethods.FieldsMethods)(
    (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
  ) {
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
      return _polymerElement.html`    
    <mwc-formfield aligned="" label="{{labelValue(selectedLanguage, field)}}" >
      <input type="date" value="{{value::input}}">
    </mwc-formfield>
    `;
    }
  }
  customElements.define("field-date", FieldDate);
});
