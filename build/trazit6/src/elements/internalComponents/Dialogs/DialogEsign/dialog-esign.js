define([
  "../../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../../node_modules/@polymer/paper-button/paper-button.js",
  "../../../../../node_modules/@polymer/polymer/lib/elements/dom-if.js",
  "../../../../store.js",
  "../../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../../platform-mixins/apis/api-authentication.js",
  "../close-dialog-on-esc-pressed-mixin.js",
  "../../../platformComponents/Redux/actions/esign-actions.js",
  "./dialog-esign-style.js",
  "../dialogmodal-buttons-settings.js",
  "./dialog-esign-settings.js",
  "../../../../platform-mixins/functions/fields-methods.js",
  "../dialogmodal-buttons.js",
], function (
  _polymerElement,
  _paperButton,
  _domIf,
  _store,
  _connectMixin,
  _apiAuthentication,
  _closeDialogOnEscPressedMixin,
  _esignActions,
  _dialogEsignStyle,
  _dialogmodalButtonsSettings,
  _dialogEsignSettings,
  _fieldsMethods,
  _dialogmodalButtons
) {
  "use strict";
  let acceptedHandler = null,
    canceledHandler = null;
  class EsignDialog extends (0, _fieldsMethods.FieldsMethods)(
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
        }, //finalToken: String,
        opened: { type: Boolean },
        maximumFailures: Number,
        numAttempts: { type: Number, observer: "changeAttemptsPhrase" },
        attemptsPhrase: String,
        classModal: { type: String, computed: "changeClass(opened)" }, //formFields: {type: Array, notify: true, bubble: true, value: platformsign_formFields},
        validationNotCorrectMessage: {
          type: Object,
          value: _dialogEsignSettings.platformEsign_notCorrectMessage,
        },
        selectedLanguage: { type: String },
        platformEsign_windowTitle: {
          type: Object,
          value: _dialogEsignSettings.platformEsign_windowTitle,
        },
      };
    }
    changeAttemptsPhrase() {
      if ("en" == this.selectedLanguage) {
        this.attemptsPhrase =
          "*** Attempts:" + this.numAttempts + " of " + this.maximumFailures;
      }
      if ("es" == this.selectedLanguage) {
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
     <style include="dialog-esign-style"></style> 
      
      <div class$="{{classModal}}">
        <div class="esignDialogModalMain">     </div>
        <div class="esignDialogModalDialog">   
          <p> {{labelValue(selectedLanguage, platformEsign_windowTitle)}} </p>    
          <input type="password" id="esign" value="" on-keydown="keyPressed">
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
    keyPressed(e) {
      if (e.code.includes("Enter")) {
        this.dialogConfirmed();
        return;
      }
      if ("Escape" == e.code) {
        this.dialogCanceled();
        return;
      }
    }
    esignFailure() {
      //console.log('esignFailure', this.numAttempts+1 , this.maximumFailures-1);
      if (this.numAttempts + 1 <= this.maximumFailures - 1) {
        _store.store.dispatch((0, _esignActions.esignFailure)());
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
      _store.store.dispatch((0, _esignActions.resetAndCloseEsignDialog)());
      return;
    }
    esignCorrect() {
      if (acceptedHandler) {
        var data = [];
        data.phrase = this.$.esign.value;
        _store.store.dispatch((0, _esignActions.esignSuccess)(data));
        acceptedHandler();
        _store.store.dispatch((0, _esignActions.closeEsignDialog)());
      }
    }
    dialogConfirmed() {
      //var paramsUrl='finalToken='+this.finalToken+'&esignPhraseToCheck='+this.$.esign.value;
      var paramsUrl = "esignPhraseToCheck=" + this.$.esign.value,
        datas = []; //datas.finalToken=this.finalToken;
      datas.esignPhraseToCheck = this.$.esign.value;
      datas.paramsUrl = paramsUrl;
      datas.callBackFunction = this.esignCorrect.bind(this);
      datas.callBackFunctionError = this.esignFailure.bind(this); //        console.log('process-us-sample-reception >> itemSelected >> this.SampleAPI', paramsUrl, datas);
      this.ajaxTokenValidateEsignPhrase(datas);
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
      _store.store.dispatch((0, _esignActions.closeEsignDialog)());
    }
    stateChanged(state) {
      //    console.log('esign-dialog.js >> stateChanged >> opened=', state.esignDialog);
      this.selectedLanguage = state.app.user.appLanguage;
      this.opened = state.esignDialog.esignDialogOpened;
      if (this.opened) {
        this.$.esign.focus();
      }
      acceptedHandler = state.esignDialog.acceptedHandler;
      canceledHandler = state.esignDialog.canceledHandler;
      this.maximumFailures = state.esignDialog.maximumFailures;
      this.numAttempts = state.esignDialog.numAttempts; //this.finalToken = state.app.user.finalToken;
      this.$.esign.value = "";
    }
    constructor() {
      super();
    }
  }
  customElements.define("esign-dialog", EsignDialog);
});
