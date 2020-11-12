import {
  LitElement,
  css,
  html,
} from "../../node_modules/lit-element/lit-element.js";
import { connect } from "../../node_modules/pwa-helpers/connect-mixin.js";
import { store } from "../store.js";
import "../../node_modules/@polymer/polymer/lib/elements/dom-if.js";
import "../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
import { default_language } from "../config/platform/logic/platform-config.js";
import { main_layout } from "../config/platform/main-layout/two-headers-settings.js";
import { appMainLayoutTwoHeadersStyle } from "../config/platform/main-layout/two-headers.js"; // componentes de terceros
import "../../node_modules/@polymer/paper-toast/paper-toast.js";
import("../../node_modules/@polymer/paper-styles/shadow.js"); // mis internalComponents
import "./internalComponents/form-fields/field-controller.js"; // mis componentes de App
//  import '../elements/platformComponents/MainView/Headers/platform-header.js';
//  import '../elements/platformComponents/MainView/LeftPanes/platform-leftpane-fix.js';
//  import '../elements/platformComponents/MainView/Centers/platform-center-tabs.js';
import "./platformComponents/MainView/platform-login.js";
import "./internalComponents/others/lp-loading.js";
import "./internalComponents/others/language-selector.js";
/**
 * `labplanet-main` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */ class LabplanetMain extends connect(store)(LitElement) {
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
    this.selectedLanguage = default_language;
    this.layoutSettings = main_layout;
  }
  /**
   * Implement to describe the element's DOM using lit-html.
   * Use the element current props to return a lit-html template result
   * to render into the element.
   */ static get styles() {
    return [
      // super.styles,
      appMainLayoutTwoHeadersStyle,
      css``,
    ];
  }
  render() {
    return html`
      <!-- <link rel="stylesheet" href="../../config/platform/main-layout/two-headers"> -->
      ${!this.loggedIn
        ? html`<platform-login
            id="platf_login"
            @platform-login-loggedwithsuccess="${this.loggedSuccesfully}"
          ></platform-login>`
        : html`<div id="wrapper">
              ${this.layoutSettings.display_headertwo
                ? html`
                                            
                    <div class="split top bckimgtop"></div>
                                               <platform-headertwo
                      id="platf-headertwo"
                    ></platform-headertwo
                    > 
                  `
                : ``}
              ${this.layoutSettings.display_header
                ? html`
                                            
                    <div class="split top bckimgtop"></div>
                                               <platform-header
                      id="platf-header"
                    ></platform-header
                    > 
                  `
                : ``}
              ${this.layoutSettings.display_left_pane
                ? html`s
                        <div id="wrapper_inner">
                        <div class="split left bckimgleft">     
                            <platform-leftpane-fix></platform-leftpane-fix>             
                        </div->
                        </div>
                    `
                : ``}
              ${this.layoutSettings.display_center
                ? html`
                                            
                    <div class="split right">
                                              <platform-center-tabs
                        class="center-tab"
                      ></platform-center-tabs
                      >                              
                    </div>
                             
                  `
                : ``}
                              
            </div>
                       `}
                  <lp-loading></lp-loading>             <paper-toast
        id="toast"
      ></paper-toast>
                  <paper-toast id="toasterror"></paper-toast>      
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
    import("./platformComponents/MainView/Headers/platform-header.js");
    import("./platformComponents/MainView/Headers/platform-headertwo.js");
    import("./platformComponents/MainView/LeftPanes/platform-leftpane-fix.js");
    import("./platformComponents/MainView/Centers/platform-center-tabs.js");
    import("../../node_modules/@vaadin/vaadin-icons/vaadin-icons.js"); //         import('@vaadin/vaadin-button');
    //                import('@polymer/polymer/lib/elements/dom-repeat');
    // //        import('@polymer/paper-styles/typography');
    //         import('@polymer/paper-icon-button/paper-icon-button');
    import("../../node_modules/@polymer/iron-pages/iron-pages.js");
    import("../../node_modules/@polymer/iron-icons/iron-icons.js");
    import("../../node_modules/@polymer/iron-selector/iron-selector.js"); //         import('@polymer/paper-checkbox/paper-checkbox');
    import("../../node_modules/@polymer/paper-tabs/paper-tabs.js");
    import("../../node_modules/@polymer/paper-tabs/paper-tab.js");
    import(
      "../../node_modules/@polymer/paper-icon-button/paper-icon-button.js"
    ); //         import('@polymer/paper-button/paper-button');
    //         import('@polymer/paper-input/paper-input');
    import("../../node_modules/@polymer/paper-dialog/paper-dialog.js"); // import('@vaadin/vaadin-checkbox/vaadin-checkbox');
    import(
      "../../node_modules/@google-web-components/google-chart/google-chart.js"
    );
    import("../../node_modules/@polymer/paper-spinner/paper-spinner-lite.js"); //         import('@material/mwc-switch/mwc-switch');
  }
}
customElements.define("labplanet-main", LabplanetMain);
