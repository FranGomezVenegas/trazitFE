define([
  "../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../store.js",
  "../../../config/platform/main-layout/two-headers-form-fields-style.js",
  "../../../platform-mixins/functions/fields-methods.js",
], function (
  _polymerElement,
  _connectMixin,
  _store,
  _twoHeadersFormFieldsStyle,
  _fieldsMethods
) {
  "use strict";
  class FieldAvatar extends (0, _fieldsMethods.FieldsMethods)(
    (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
  ) {
    static get properties() {
      return {
        field: { type: Object, notify: !0 },
        value: { type: String, notify: !0 },
        selectedLanguage: String,
      };
    }
    static get template() {
      return _polymerElement.html`            
            <style include="form-fields-style">
              button {
                background: transparent;
                border: none !important;
                font-size:0;
              }
            </style>
            <!-- <vaadin-button on-click="clicked"  class="button" value="{{field.name}}"> -->
              <img class="formFieldAvatar"  on-click="clicked" src="{{field.source}}" aligned="center"  height="50" width="50"> 
              <template is="dom-if" if="[[field.display_label]]"> 
                <a on-click="clicked"  value="{{field.name}}" disabled="{{field.read_only}}">
                  {{labelValue(selectedLanguage, field)}}
                </a>              
              </template>
              <!-- </vaadin-button> -->
        `;
    }
    stateChanged(state) {
      this.selectedLanguage = state.app.user.appLanguage;
    }
    clicked() {
      this.dispatchEvent(
        new CustomEvent("avatar-item-clicked", {
          bubbles: !0,
          composed: !0,
          detail: {
            avatarName: this.field.name,
            value: this.value,
            avatarDefinition: this.field,
          },
        })
      );
    }
  }
  customElements.define("field-avatar", FieldAvatar);
});
