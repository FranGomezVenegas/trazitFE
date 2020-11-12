define([
  "../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../store.js",
  "./dialogmodal-buttons-settings.js",
  "../../../platform-mixins/functions/fields-methods.js",
], function (
  _polymerElement,
  _connectMixin,
  _store,
  _dialogmodalButtonsSettings,
  _fieldsMethods
) {
  "use strict";
  /**
   * `dialogmodal-buttons` Description
   *
   * @customElement
   * @polymer
   * @demo
   *
   */ class DialogmodalButtons extends (0, _fieldsMethods.FieldsMethods)(
    (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
  ) {
    static get properties() {
      return {
        displayCancelButton: { type: Boolean, value: !1, notify: !0 },
        displayConfirmButton: { type: Boolean, value: !1, notify: !0 },
        displayCloseButton: { type: Boolean, value: !1, notify: !0 },
        cancelDialogButton: {
          type: String,
          value: _dialogmodalButtonsSettings.cancelDialogButton,
        },
        confirmDialogButton: {
          type: String,
          value: _dialogmodalButtonsSettings.confirmDialogButton,
        },
        closeDialogButton: {
          type: String,
          value: _dialogmodalButtonsSettings.closeDialogButton,
        },
        selectedLanguage: { type: String },
        value: { type: Object },
      };
    }
    stateChanged(state) {
      this.selectedLanguage = state.app.user.appLanguage;
    }
    static get template() {
      return _polymerElement.html`
        <template is="dom-if" if="[[displayCloseButton]]">
            <paper-button name="close" dialog-confirm autofocus on-click="clickedClose">{{labelValue(selectedLanguage, closeDialogButton)}}</paper-button>
        </template>
        <template is="dom-if" if="{{displayCancelButton}}">
            <paper-button name="cancel" dialog-dismiss on-click="clickedCancel">{{labelValue(selectedLanguage, cancelDialogButton)}}</paper-button>
        </template>
        <template is="dom-if" if="[[displayConfirmButton]]">
            <paper-button name="confirm" dialog-confirm autofocus on-click="clickedConfirm">{{labelValue(selectedLanguage, confirmDialogButton)}}</paper-button>
        </template>
        `;
    }
    clickedCancel() {
      //console.log('clickedCancel');
      this.dispatchEvent(
        new CustomEvent("dialog-cancelbutton-clicked", {
          bubbles: !0,
          composed: !0,
          detail: {
            buttonName: this.cancelDialogButton.name,
            value: this.value,
            buttonDefinition: this.cancelDialogButton,
          },
        })
      );
    }
    clickedClose() {
      //console.log('clickedClose');
      this.dispatchEvent(
        new CustomEvent("dialog-closebutton-clicked", {
          bubbles: !0,
          composed: !0,
          detail: {
            buttonName: this.closeDialogButton.name,
            value: this.value,
            buttonDefinition: this.closeDialogButton,
          },
        })
      );
    }
    clickedConfirm() {
      console.log("clickedConfirm");
      this.dispatchEvent(
        new CustomEvent("dialog-confirmbutton-clicked", {
          bubbles: !0,
          composed: !0,
          detail: {
            buttonName: this.confirmDialogButton.name,
            value: this.value,
            buttonDefinition: this.confirmDialogButton,
          },
        })
      );
    }
  }
  customElements.define("dialogmodal-buttons", DialogmodalButtons);
});
