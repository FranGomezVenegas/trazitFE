define([
  "../../../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../../../store.js",
  "../../../../../platform-mixins/apis/api-authentication.js",
  "./user-profile-settings.js",
  "../../../../../platform-mixins/apis/api-platform.js",
  "../../../../../platform-mixins/platform-functions/platform-elements.js",
  "../../../../../platform-mixins/platform-functions/tabs-functions.js",
], function (
  _polymerElement,
  _connectMixin,
  _store,
  _apiAuthentication,
  _userProfileSettings,
  _apiPlatform,
  _platformElements,
  _tabsFunctions
) {
  "use strict";
  /**
   * `user-profile` Description
   *
   * @customElement
   * @polymer
   * @demo
   *
   */ class UserProfile extends (0, _tabsFunctions.TabsMethods)(
    (0, _apiPlatform.ApiPlatform)(
      (0, _apiAuthentication.AuthenticationApi)(
        (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
      )
    )
  ) {
    stateChanged(state) {
      //console.log('user-Profile.js >> stateChanged >> this.userInfo', this.userInfo);
      this.userInfo = state.app.user;
      this.tabsOpen = state.tabs.tabs;
    }
    static get properties() {
      return {
        userInfo: { type: Object },
        tabsOpen: { type: Object },
        changeUserPasswordForm: {
          type: Array,
          value: _userProfileSettings.changeUserPasswordForm,
        },
        changeUserEsignForm: {
          type: Array,
          value: _userProfileSettings.changeUserEsignForm,
        },
        saveOpenTabsForm: {
          type: Array,
          value: _userProfileSettings.saveOpenTabsForm,
        },
      };
    }
    static get template() {
      return _polymerElement.html`
        <!-- <style include="cards-style"></style> -->
        <platform-elements id="platformelements"></platform-elements>
        <div id="topBar">
            <div id="central"> 
                <p>{{userInfo.userDB}} </p>
                <div class="card">
                    <div id="changePw" style="display:flex;">
                    <template is="dom-repeat" items="{{changeUserPasswordForm}}" as="currentfield">       
                        <field-controller on-keydown="keyPressedChangePassword" on-field-button-clicked="changePassword" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                    </template>       
                    </div>
                    <div id="changeEsign" style="display:flex;">
                    <template is="dom-repeat" items="{{changeUserEsignForm}}" as="currentfield">       
                        <field-controller on-keydown="keyPressedChangeEsign" on-field-button-clicked="changeEsign" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                    </template>                                
                    </div>
                    <div id="changeEsign" style="display:flex;">
                    <template is="dom-repeat" items="{{saveOpenTabsForm}}" as="currentfield">       
                        <field-controller on-keydown="keyPressed" on-field-button-clicked="saveDefaultTabsOnLogin" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                    </template>                                
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    keyPressedChangePassword(e) {
      //console.log('key pressed');
      if ("Enter" == e.key) {
        this.changePassword();
        return;
      }
    }
    keyPressedChangeEsign(e) {
      //console.log('key pressed');
      if ("Enter" == e.key) {
        this.changeEsign();
        return;
      }
    }
    changePassword(e) {
      var selectedRow = [];
      selectedRow.newPassword =
        _userProfileSettings.changeUserPasswordForm[0].value;
      this.$.platformelements.appActionTrigger(
        _userProfileSettings.changeUserPasswordForm[1].name,
        selectedRow,
        _userProfileSettings.changeUserPasswordForm[1]
      );
    }
    changeEsign(e) {
      var selectedRow = [];
      selectedRow.newEsign = _userProfileSettings.changeUserEsignForm[0].value;
      this.$.platformelements.appActionTrigger(
        _userProfileSettings.changeUserEsignForm[1].name,
        selectedRow,
        _userProfileSettings.changeUserEsignForm[1]
      );
    }
  }
  customElements.define("user-profile", UserProfile);
});
