define([
  "../../../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../../../node_modules/@polymer/paper-button/paper-button.js",
  "../../03config/css/Theme01/modal-dialogs-small.js",
  "./em-demo-a-dialogmodal-buttons",
], function (
  _polymerElement,
  _paperButton,
  _modalDialogsSmall,
  _emDemoADialogmodalButtons
) {
  "use strict"; //import './../../../../../config/styles/div-style.js';
  //'../../../../internalComponents/dialogs/modalwindow-buttons.js';
  /**
   * `simple-modal-dialog` Description
   *
   * @customElement
   * @polymer
   * @demo
   *
   */ class emDemoASimpleModalDialogold extends _polymerElement.PolymerElement {
    static get properties() {
      return {
        displayCancelButton: { type: Boolean, value: !0, notify: !0 },
        displayConfirmButton: { type: Boolean, value: !0, notify: !0 },
        displayCloseButton: { type: Boolean, value: !1, notify: !0 },
      };
    }
    static get template() {
      return _polymerElement.html`
<!--        <style include="modal-dialogs-small"></style> -->
        
        <div class="modal-content bgimg">
        <dialogmodal-buttons display-cancel-button="[[displayCancelButton]]" display-confirm-button="[[displayConfirmButton]]" display-close-button="[[displayCloseButton]]"> </dialogmodal-buttons>
        <template is="dom-repeat" items="{{dialogElements}}" as="currentfield">       
            <field-controller on-keydown="keyPressed" on-field-button-clicked="fieldButtonClicked" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
        </template>      
        <!-- <paper-button name="cancel" dialog-dismiss on-click="dialogCanceled">{{labelValue(selectedLanguage, cancelButton)}}</paper-button>
        <paper-button name="confirm" dialog-confirm autofocus on-click="dialogConfirmed">{{labelValue(selectedLanguage, confirmButton)}}</paper-button> -->
      </div>
      
        `;
    }
    keyPressed(e) {
      //console.log('key pressed');
      if ("Enter" == e.key) {
        this.dialogConfirmed();
        return;
      }
    }
    dialogConfirmed() {
      //console.log('clicked', this.value);
      this.value = "confirmed";
      this.dispatchEvent(
        new CustomEvent("dialog-button-clicked", {
          bubbles: !0,
          composed: !0,
          detail: {
            buttonName: this.name,
            value: this.value,
            dialogState: "confirmed",
          },
        })
      );
      this.resetValue();
    }
    dialogCanceled() {
      //console.log('clicked', this.value);
      this.value = "confirmed";
      this.dispatchEvent(
        new CustomEvent("dialog-button-clicked", {
          bubbles: !0,
          composed: !0,
          detail: {
            buttonName: this.name,
            value: this.value,
            dialogState: "canceled",
          },
        })
      );
      this.resetValue();
    }
    resetValue() {
      if (!this.dialogElements[0]) {
        return;
      }
      const field = this.shadowRoot.getElementById(this.dialogElements[0].name);
      if (field) {
        field.resetValue();
      }
    }
  }
  customElements.define(
    "em-demo-a-simple-modal-dialogold",
    emDemoASimpleModalDialogold
  );
});
