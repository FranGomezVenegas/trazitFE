define([
  "require",
  "../../node_modules/lit-element/lit-element.js",
  "../../node_modules/pwa-helpers/connect-mixin.js",
  "../store.js",
  "../../node_modules/@polymer/polymer/lib/elements/dom-if.js",
  "../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js",
  "../config/platform/logic/platform-config.js",
  "../config/platform/main-layout/two-headers-settings.js",
  "../config/platform/main-layout/two-headers.js",
  "../../node_modules/@polymer/paper-toast/paper-toast.js",
  "./internalComponents/form-fields/field-controller.js",
  "./platformComponents/MainView/platform-login.js",
  "./internalComponents/others/lp-loading.js",
  "./internalComponents/others/language-selector.js",
], function (
  _require,
  _litElement,
  _connectMixin,
  _store,
  _domIf,
  _domRepeat,
  _platformConfig,
  _twoHeadersSettings,
  _twoHeaders,
  _paperToast,
  _fieldController,
  _platformLogin,
  _lpLoading,
  _languageSelector
) {
  "use strict";
  _require = babelHelpers.interopRequireWildcard(_require); // componentes de terceros
  new Promise((res, rej) =>
    _require.default(
      ["../../node_modules/@polymer/paper-styles/shadow.js"],
      res,
      rej
    )
  ); // mis internalComponents
  /**
   * `labplanet-main` Description
   *
   * @customElement
   * @polymer
   * @demo
   *
   */ class LabplanetMain extends (0, _connectMixin.connect)(_store.store)(
    _litElement.LitElement
  ) {
    static get properties() {
      return {
        selectedLanguage: { type: String, notify: !0 },
        layoutSettings: { type: String },
        loggedIn: { type: Boolean },
        userName: String,
      };
    }
    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */ constructor() {
      super();
      this.loggedIn = !0;
      this.selectedLanguage = _platformConfig.default_language;
      this.layoutSettings = _twoHeadersSettings.main_layout;
    }
    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */ static get styles() {
      return [
        // super.styles,
        _twoHeaders.appMainLayoutTwoHeadersStyle,
        _litElement.css` 
          `,
      ];
    }
    render() {
      return _litElement.html` 
            <!-- <link rel="stylesheet" href="../../config/platform/main-layout/two-headers"> -->
            ${
              !this.loggedIn
                ? _litElement.html`<platform-login id="platf_login" @platform-login-loggedwithsuccess="${this.loggedSuccesfully}"></platform-login>`
                : _litElement.html`<div id="wrapper">
                    ${
                      this.layoutSettings.display_headertwo
                        ? _litElement.html` 
                        <div class="split top bckimgtop"></div>  
                        <platform-headertwo id="platf-headertwo"></platform-headertwo> 
                    `
                        : ``
                    }            
                    ${
                      this.layoutSettings.display_header
                        ? _litElement.html` 
                        <div class="split top bckimgtop"></div>  
                        <platform-header id="platf-header"></platform-header> 
                    `
                        : ``
                    }
                    ${
                      this.layoutSettings.display_left_pane
                        ? _litElement.html`s
                        <div id="wrapper_inner">
                        <div class="split left bckimgleft">     
                            <platform-leftpane-fix></platform-leftpane-fix>             
                        </div->
                        </div>
                    `
                        : ``
                    }
                    ${
                      this.layoutSettings.display_center
                        ? _litElement.html`
                        <div class="split right">
                        <platform-center-tabs class="center-tab"></platform-center-tabs>     
                        </div>         
                    `
                        : ``
                    } 
                </div> 
                    
            `
            }
                        

                        <lp-loading></lp-loading>
            <paper-toast id="toast"></paper-toast>
            <paper-toast id="toasterror"></paper-toast>      
        `;
    }
    loggedSuccesfully() {
      this.loggedIn = !0;
      this.importPlatformComponents();
    }
    ready() {
      super.ready();
      this.addEventListener("toast-error", (e) => this.toastError(e));
      this.addEventListener("toast-message", (e) => this.toastMessage(e));
    }
    toastMessage(e) {
      this.$.toast.show({ text: e.detail, duration: 3e3 });
    }
    toastError(e) {
      this.$.toasterror.show({ text: e.detail, duration: 3e3 });
    }
    stateChanged(state) {
      this.loggedIn = state.app.user.loggedIn;
    }
    importPlatformComponents() {
      new Promise((res, rej) =>
        _require.default(
          ["./platformComponents/MainView/Headers/platform-header.js"],
          res,
          rej
        )
      );
      new Promise((res, rej) =>
        _require.default(
          ["./platformComponents/MainView/Headers/platform-headertwo.js"],
          res,
          rej
        )
      );
      new Promise((res, rej) =>
        _require.default(
          ["./platformComponents/MainView/LeftPanes/platform-leftpane-fix.js"],
          res,
          rej
        )
      );
      new Promise((res, rej) =>
        _require.default(
          ["./platformComponents/MainView/Centers/platform-center-tabs.js"],
          res,
          rej
        )
      );
      new Promise((res, rej) =>
        _require.default(
          ["../../node_modules/@vaadin/vaadin-icons/vaadin-icons.js"],
          res,
          rej
        )
      ); //         import('@vaadin/vaadin-button');
      //                import('@polymer/polymer/lib/elements/dom-repeat');
      // //        import('@polymer/paper-styles/typography');
      //         import('@polymer/paper-icon-button/paper-icon-button');
      new Promise((res, rej) =>
        _require.default(
          ["../../node_modules/@polymer/iron-pages/iron-pages.js"],
          res,
          rej
        )
      );
      new Promise((res, rej) =>
        _require.default(
          ["../../node_modules/@polymer/iron-icons/iron-icons.js"],
          res,
          rej
        )
      );
      new Promise((res, rej) =>
        _require.default(
          ["../../node_modules/@polymer/iron-selector/iron-selector.js"],
          res,
          rej
        )
      ); //         import('@polymer/paper-checkbox/paper-checkbox');
      new Promise((res, rej) =>
        _require.default(
          ["../../node_modules/@polymer/paper-tabs/paper-tabs.js"],
          res,
          rej
        )
      );
      new Promise((res, rej) =>
        _require.default(
          ["../../node_modules/@polymer/paper-tabs/paper-tab.js"],
          res,
          rej
        )
      );
      new Promise((res, rej) =>
        _require.default(
          [
            "../../node_modules/@polymer/paper-icon-button/paper-icon-button.js",
          ],
          res,
          rej
        )
      ); //         import('@polymer/paper-button/paper-button');
      //         import('@polymer/paper-input/paper-input');
      new Promise((res, rej) =>
        _require.default(
          ["../../node_modules/@polymer/paper-dialog/paper-dialog.js"],
          res,
          rej
        )
      ); // import('@vaadin/vaadin-checkbox/vaadin-checkbox');
      new Promise((res, rej) =>
        _require.default(
          [
            "../../node_modules/@google-web-components/google-chart/google-chart.js",
          ],
          res,
          rej
        )
      );
      new Promise((res, rej) =>
        _require.default(
          ["../../node_modules/@polymer/paper-spinner/paper-spinner-lite.js"],
          res,
          rej
        )
      ); //         import('@material/mwc-switch/mwc-switch');
    }
  }
  customElements.define("labplanet-main", LabplanetMain);
});
