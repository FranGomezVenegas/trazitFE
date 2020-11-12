define([
  "../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../store.js",
  "../../elements/internalComponents/Dialogs/DialogEsign/dialog-esign.js",
  "../../elements/internalComponents/Dialogs/DialogConfirmUser/dialog-confirmuser.js",
  "../../elements/platformComponents/Redux/actions/esign-actions.js",
  "../../elements/platformComponents/Redux/actions/confirmuser-actions.js",
  "../apis/api-authentication.js",
  "../apis/api-platform.js",
], function (
  _polymerElement,
  _connectMixin,
  _store,
  _dialogEsign,
  _dialogConfirmuser,
  _esignActions,
  _confirmuserActions,
  _apiAuthentication,
  _apiPlatform
) {
  "use strict";
  class PlatformElements extends (0, _apiPlatform.ApiPlatform)(
    (0, _apiAuthentication.AuthenticationApi)(
      (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
    )
  ) {
    stateChanged(state) {
      this.finalToken = state.app.user.finalToken;
      this.currTabEsignRequired = state.tabs.currTabEsignRequired;
      this.currTabConfirmUserRequired = state.tabs.currTabConfirmUserRequired;
      this.selectedLanguage = state.app.user.appLanguage;
    }
    static get properties() {
      return {
        finalToken: String,
        currTabConfirmUserRequired: Boolean,
        currTabEsignRequired: Boolean,
        selectedLanguage: { type: String },
      };
    }
    static get template() {
      return _polymerElement.html`
            <esign-dialog></esign-dialog>
            <confirmuser-dialog></confirmuser-dialog>                        
        `;
    }
    appActionTrigger(buttonName, backEndData, buttonDefinition) {
      this.buttonName = buttonName;
      this.backEndData = backEndData;
      if (buttonDefinition && buttonDefinition.esign_required) {
        _store.store.dispatch(
          (0, _esignActions.openEsignDialog)(
            this.appActionTriggerNext.bind(this),
            this.appActionTriggerAbort.bind(this)
          )
        );
        return;
      }
      if (buttonDefinition && buttonDefinition.confirmuser_required) {
        _store.store.dispatch(
          (0, _confirmuserActions.openConfirmUserDialog)(
            this.appActionTriggerNext.bind(this),
            this.appActionTriggerAbort.bind(this)
          )
        );
        return;
      }
      this.appActionTriggerNext();
    }
    appActionTriggerAbort() {
      this.loading = !1;
    }
    appActionTriggerNext() {
      var buttonName = this.buttonName,
        backEndData = this.backEndData,
        datas = [];
      datas.finalToken = this.finalToken;
      var actionName = buttonName.toUpperCase();
      switch (buttonName.toUpperCase()) {
        case "USER_CHANGE_PSWD":
          datas.newPassword = backEndData.newPassword;
          this.appActionTriggerAPI(
            null,
            this.finalToken,
            actionName,
            datas,
            datas.tabInfo,
            this.callBackFunctionEnvMonitElem
          );
          break;
        case "USER_CHANGE_ESIGN":
          datas.newEsign = backEndData.newEsign;
          this.appActionTriggerAPI(
            null,
            this.finalToken,
            actionName,
            datas,
            datas.tabInfo,
            this.callBackFunctionEnvMonitElem
          );
          break;
        case "SET_DEFAULT_TABS_ON_LOGIN":
          datas.tabsString = backEndData.tabsString;
          this.appActionTriggerAPI(
            null,
            this.finalToken,
            actionName,
            datas,
            datas.tabInfo,
            this.callBackFunctionEnvMonitElem
          );
          break;
        default:
          console.log(
            "Action " +
              buttonName +
              " is not declared in env-monit-elements.sample.js >> appActionTriggerNext"
          );
          break;
      }
      return;
    }
  }
  customElements.define("platform-elements", PlatformElements);
});
