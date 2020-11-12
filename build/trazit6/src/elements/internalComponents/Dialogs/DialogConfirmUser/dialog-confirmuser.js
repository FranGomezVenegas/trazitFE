define([
  "../../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../../node_modules/@polymer/paper-button/paper-button.js",
  "../../../../../node_modules/@polymer/polymer/lib/elements/dom-if.js",
  "../../../../store.js",
  "../../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../../platform-mixins/apis/api-authentication.js",
  "../../form-fields/field-controller.js",
  "../close-dialog-on-esc-pressed-mixin.js",
  "../../../platformComponents/Redux/actions/confirmuser-actions.js",
  "../dialogmodal-buttons-settings.js",
  "./dialog-confirmuser-settings.js",
  "./dialog-confirmuser-style.js",
  "../../../../platform-mixins/functions/fields-methods.js",
  "../dialogmodal-buttons.js",
], function (
  _polymerElement,
  _paperButton,
  _domIf,
  _store,
  _connectMixin,
  _apiAuthentication,
  _fieldController,
  _closeDialogOnEscPressedMixin,
  _confirmuserActions,
  _dialogmodalButtonsSettings,
  _dialogConfirmuserSettings,
  _dialogConfirmuserStyle,
  _fieldsMethods,
  _dialogmodalButtons
) {
  "use strict";
  let acceptedHandler = null,
    canceledHandler = null,
    numConfirmations = null;
  class ConfirmUserDialog extends (0, _fieldsMethods.FieldsMethods)(
    (0, _closeDialogOnEscPressedMixin.CloseOnEscPressed)(
      (0, _apiAuthentication.AuthenticationApi)(
        (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
      )
    )
  ) {
    static get properties() {
      return {
        dialogButtons: {
          type: Array,
          value: _dialogmodalButtonsSettings.dialog_buttons,
        },
        opened: { type: Boolean },
        maximumFailures: Number,
        numAttempts: { type: Number, observer: "changeAttemptsPhrase" },
        attemptsPhrase: String,
        classModal: { type: String, computed: "changeClass(opened)" },
        formFields: {
          type: Array,
          notify: !0,
          bubble: !0,
          value: _dialogConfirmuserSettings.platformConfirmUser_formFields,
        },
        validationNotCorrectMessage: {
          type: Object,
          value:
            _dialogConfirmuserSettings.platformConfirmUser_notCorrectMessage,
        },
        selectedLanguage: { type: String },
        platformConfirmUser_windowTitle: {
          type: Object,
          value: _dialogConfirmuserSettings.platformConfirmUser_windowTitle,
        },
      };
    }
    changeAttemptsPhrase() {
      if ("en" == this.selectedLanguage) {
        this.attemptsPhrase =
          "*** Attempts:" + this.numAttempts + " of " + this.maximumFailures;
      }
      if ("en" == this.selectedLanguage) {
        this.attemptsPhrase =
          "*** Intentos:" + this.numAttempts + " de " + this.maximumFailures;
      }
      return;
    }
    changeClass(opened) {
      if (opened) {
        return "";
      }
      return "closed";
    }
    static get template() {
      return _polymerElement.html`
    <style include="dialog-confirmuser-style"></style>      
      <div class$="{{classModal}}">
        <div class="confirmUserDialogModalMain">        </div>
        <div class="confirmUserDialogModalDialog" >
        {{labelValue(selectedLanguage, platformConfirmUser_windowTitle)}}

          <template is="dom-repeat" items="{{formFields}}" as="currentfield">       
            <field-controller on-keydown="keyPressed" on-field-button-clicked="fieldButtonClicked" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
          </template>          
          <div>
            <dialogmodal-buttons 
              display-cancel-button 							display-confirm-button 								
              on-dialog-cancelbutton-clicked="dialogCanceled" on-dialog-confirmedbutton-clicked="dialogConfirmed"> </dialogmodal-buttons>             
            <p>{{attemptsPhrase}}</p>
          </div> 
        </div>
      </div>
    `;
    }
    close() {
      this.dialogCanceled();
    }
    keyPressed(e) {
      if (e.code.includes("Enter")) {
        this.dialogConfirmed();
        return;
      } // if(e.code == "Escape") {
      //   this.dialogCanceled();
      //   return;
      // }
    }
    confirmUserFailure() {
      console.log(
        "esignFailure",
        this.numAttempts + 1,
        this.maximumFailures - 1
      );
      if (this.numAttempts + 1 <= this.maximumFailures - 1) {
        _store.store.dispatch((0, _confirmuserActions.confirmUserFailure)());
        return;
      }
      var message = "";
      switch (this.selectedLanguage) {
        case "es":
          message = this.validationNotCorrectMessage.attempts_consumed
            .message_es;
          break; //message=response.data.message_es; break;
        default:
          message = this.validationNotCorrectMessage.attempts_consumed
            .message_en;
          break; //message=response.data.message_en; break;
      }
      this.dispatchEvent(
        new CustomEvent("toast-error", {
          bubbles: !0,
          composed: !0,
          detail: message,
        })
      );
      if (canceledHandler) {
        canceledHandler();
      }
      _store.store.dispatch(
        (0, _confirmuserActions.resetAndCloseConfirmUserDialog)()
      );
      return;
    }
    confirmUserCorrect() {
      if (acceptedHandler) {
        _store.store.dispatch(
          (0, _confirmuserActions.confirmUserSuccess)(
            this.formFields[2].value,
            this.formFields[0].value,
            this.formFields[1].value
          )
        );
        acceptedHandler();
      }
      _store.store.dispatch((0, _confirmuserActions.closeConfirmUserDialog)());
    }
    dialogConfirmed() {
      var paramsUrl =
          "userToCheck=" +
          this.formFields[0].value +
          "&passwordToCheck=" +
          this.formFields[1].value,
        datas = [];
      datas.paramsUrl = paramsUrl;
      datas.userToCheck = this.formFields[0].value;
      datas.passwordToCheck = this.formFields[1].value;
      datas.callBackFunction = this.confirmUserCorrect.bind(this);
      datas.callBackFunctionError = this.confirmUserFailure.bind(this);
      this.ajaxTokenValidateUserCredentials(datas);
    }
    dialogCanceled() {
      var message = "";
      switch (this.selectedLanguage) {
        case "es":
          message = this.validationNotCorrectMessage.dialog_cancelled
            .message_es;
          break; //message=response.data.message_es; break;
        default:
          message = this.validationNotCorrectMessage.dialog_cancelled
            .message_en;
          break; //message=response.data.message_en; break;
      }
      this.dispatchEvent(
        new CustomEvent("toast-error", {
          bubbles: !0,
          composed: !0,
          detail: message,
        })
      );
      if (canceledHandler) {
        canceledHandler();
      }
      _store.store.dispatch((0, _confirmuserActions.closeConfirmUserDialog)());
    }
    stateChanged(state) {
      this.selectedLanguage = state.app.user.appLanguage;
      this.opened = state.confirmUserDialog.confirmUserDialogOpened;
      acceptedHandler = state.confirmUserDialog.acceptedHandler;
      canceledHandler = state.confirmUserDialog.canceledHandler;
      numConfirmations = state.confirmUserDialog.numConfirmations;
      this.maximumFailures = state.confirmUserDialog.maximumFailures;
      this.numAttempts = state.confirmUserDialog.numAttempts;
    }
  }
  customElements.define("confirmuser-dialog", ConfirmUserDialog);
});
