define(["require","../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/pwa-helpers/connect-mixin.js","../store.js","../../node_modules/@polymer/polymer/lib/elements/dom-if.js","../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js","../config/platform/logic/platform-config.js","../config/platform/main-layout/two-headers-settings.js","../config/platform/main-layout/two-headers.js","../../node_modules/@polymer/paper-toast/paper-toast.js","./internalComponents/form-fields/field-controller.js","./platformComponents/MainView/platform-login.js","./internalComponents/others/lp-loading.js","./internalComponents/others/language-selector.js"],function(_require,_polymerElement,_connectMixin,_store,_domIf,_domRepeat,_platformConfig,_twoHeadersSettings,_twoHeaders,_paperToast,_fieldController,_platformLogin,_lpLoading,_languageSelector){"use strict";_require=babelHelpers.interopRequireWildcard(_require);// componentes de terceros
new Promise((res,rej)=>_require.default(["../../node_modules/@polymer/paper-styles/shadow.js"],res,rej));// mis internalComponents
/**
 * `labplanet-main` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */class LabplanetMain extends(0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement){stateChanged(state){this.loggedIn=state.app.user.loggedIn}static get properties(){return{selectedLanguage:{type:String,value:_platformConfig.default_language,notify:!0},layoutSettings:{type:String,value:_twoHeadersSettings.main_layout},loggedIn:{type:Boolean,value:!1},userName:String}}static get template(){return _polymerElement.html`
            <style include="two-headers"></style>
            <template is="dom-if" if="[[!loggedIn]]">                 
                <platform-login id="platf_login" on-platform-login-loggedwithsuccess="loggedSuccesfully"></platform-login>
<!--                <platform-login selected-language="{{selectedLanguage}}" page-name="login"> </platform-login> -->
            </template>
            <template is="dom-if" if="[[loggedIn]]">
                <div id="wrapper">
                    <template is="dom-if" if="[[layoutSettings.display_header]]">  
                        <div class="split top bckimgtop"></div>  
                        <platform-header id="platf-header"></platform-header> 
                    </template>
                    <template is="dom-if" if="[[layoutSettings.display_left_pane]]">  
                        <div id="wrapper_inner">
                        <div class="split left bckimgleft">     
                            <platform-leftpane-fix></platform-leftpane-fix>             
                        </div->
                        </div>
                    </template>
                    <template is="dom-if" if="[[layoutSettings.display_center]]">  
                        <div class="split right">
                        <platform-center-tabs class="center-tab"></platform-center-tabs>     
                        </div>         
                    </template> 
                </div>         
            </template> 
            <lp-loading></lp-loading>
            <paper-toast id="toast"></paper-toast>
            <paper-toast id="toasterror"></paper-toast>      
        `}loggedSuccesfully(){this.loggedIn=!0;this.importPlatformComponents()}ready(){super.ready();this.addEventListener("toast-error",e=>this.toastError(e));this.addEventListener("toast-message",e=>this.toastMessage(e))}toastMessage(e){this.$.toast.show({text:e.detail,duration:3e3})}toastError(e){this.$.toasterror.show({text:e.detail,duration:3e3})}stateChanged(state){this.loggedIn=state.app.user.loggedIn}importPlatformComponents(){new Promise((res,rej)=>_require.default(["../../node_modules/@vaadin/vaadin-icons/vaadin-icons.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@vaadin/vaadin-button/vaadin-button.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@polymer/paper-styles/typography.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@polymer/paper-icon-button/paper-icon-button.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@polymer/iron-pages/iron-pages.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@polymer/iron-icons/iron-icons.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@polymer/iron-selector/iron-selector.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@polymer/paper-checkbox/paper-checkbox.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@polymer/paper-tabs/paper-tabs.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@polymer/paper-tabs/paper-tab.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@polymer/paper-icon-button/paper-icon-button.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@polymer/paper-button/paper-button.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@polymer/paper-input/paper-input.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@polymer/paper-dialog/paper-dialog.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@vaadin/vaadin-checkbox/vaadin-checkbox.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@google-web-components/google-chart/google-chart.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@polymer/paper-spinner/paper-spinner-lite.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@material/mwc-switch/mwc-switch.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@vaadin/vaadin-grid/vaadin-grid.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@vaadin/vaadin-grid/vaadin-grid-column.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@vaadin/vaadin-grid/vaadin-grid-sort-column.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@vaadin/vaadin-grid/vaadin-grid-filter.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@vaadin/vaadin-grid/vaadin-grid-filter-column.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@vaadin/vaadin-grid/vaadin-grid-column-group.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@vaadin/vaadin-grid/vaadin-grid-tree-toggle.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@vaadin/vaadin-grid/vaadin-grid-sorter.js"],res,rej));new Promise((res,rej)=>_require.default(["../../node_modules/@vaadin/vaadin-grid/vaadin-grid-selection-column.js"],res,rej));new Promise((res,rej)=>_require.default(["./platformComponents/MainView/Headers/platform-header.js"],res,rej));new Promise((res,rej)=>_require.default(["./platformComponents/MainView/LeftPanes/platform-leftpane-fix.js"],res,rej));new Promise((res,rej)=>_require.default(["./platformComponents/MainView/Centers/platform-center-tabs.js"],res,rej))}}customElements.define("labplanet-main",LabplanetMain)});