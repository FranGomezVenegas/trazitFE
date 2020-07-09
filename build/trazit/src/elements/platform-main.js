import{PolymerElement,html}from"../../node_modules/@polymer/polymer/polymer-element.js";import{connect}from"../../node_modules/pwa-helpers/connect-mixin.js";import{store}from"../store.js";import"../../node_modules/@polymer/polymer/lib/elements/dom-if.js";import"../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js";import{default_language}from"../config/platform/logic/platform-config.js";import{main_layout}from"../config/platform/main-layout/two-headers-settings.js";import"../config/platform/main-layout/two-headers.js";// componentes de terceros
import"../../node_modules/@polymer/paper-toast/paper-toast.js";import("../../node_modules/@polymer/paper-styles/shadow.js");// mis internalComponents
import"./internalComponents/form-fields/field-controller.js";// mis componentes de App
// import '../elements/platformComponents/MainView/Headers/platform-header.js';
// import '../elements/platformComponents/MainView/LeftPanes/platform-leftpane-fix.js';
// import '../elements/platformComponents/MainView/Centers/platform-center-tabs.js';        
import"./platformComponents/MainView/platform-login.js";import"./internalComponents/others/lp-loading.js";import"./internalComponents/others/language-selector.js";/**
 * `labplanet-main` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */class LabplanetMain extends connect(store)(PolymerElement){stateChanged(state){this.loggedIn=state.app.user.loggedIn}static get properties(){return{selectedLanguage:{type:String,value:default_language,notify:!0},layoutSettings:{type:String,value:main_layout},loggedIn:{type:Boolean,value:!1},userName:String}}static get template(){return html`
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
        `}loggedSuccesfully(){this.loggedIn=!0;this.importPlatformComponents()}ready(){super.ready();this.addEventListener("toast-error",e=>this.toastError(e));this.addEventListener("toast-message",e=>this.toastMessage(e))}toastMessage(e){this.$.toast.show({text:e.detail,duration:3e3})}toastError(e){this.$.toasterror.show({text:e.detail,duration:3e3})}stateChanged(state){this.loggedIn=state.app.user.loggedIn}importPlatformComponents(){import("../../node_modules/@vaadin/vaadin-icons/vaadin-icons.js");import("../../node_modules/@vaadin/vaadin-button/vaadin-button.js");import("../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js");import("../../node_modules/@polymer/paper-styles/typography.js");import("../../node_modules/@polymer/paper-icon-button/paper-icon-button.js");import("../../node_modules/@polymer/iron-pages/iron-pages.js");import("../../node_modules/@polymer/iron-icons/iron-icons.js");import("../../node_modules/@polymer/iron-selector/iron-selector.js");import("../../node_modules/@polymer/paper-checkbox/paper-checkbox.js");import("../../node_modules/@polymer/paper-tabs/paper-tabs.js");import("../../node_modules/@polymer/paper-tabs/paper-tab.js");import("../../node_modules/@polymer/paper-icon-button/paper-icon-button.js");import("../../node_modules/@polymer/paper-button/paper-button.js");import("../../node_modules/@polymer/paper-input/paper-input.js");import("../../node_modules/@polymer/paper-dialog/paper-dialog.js");import("../../node_modules/@vaadin/vaadin-checkbox/vaadin-checkbox.js");import("../../node_modules/@google-web-components/google-chart/google-chart.js");import("../../node_modules/@polymer/paper-spinner/paper-spinner-lite.js");import("../../node_modules/@material/mwc-switch/mwc-switch.js");import("../../node_modules/@vaadin/vaadin-grid/vaadin-grid.js");import("../../node_modules/@vaadin/vaadin-grid/vaadin-grid-column.js");import("../../node_modules/@vaadin/vaadin-grid/vaadin-grid-sort-column.js");import("../../node_modules/@vaadin/vaadin-grid/vaadin-grid-filter.js");import("../../node_modules/@vaadin/vaadin-grid/vaadin-grid-filter-column.js");import("../../node_modules/@vaadin/vaadin-grid/vaadin-grid-column-group.js");import("../../node_modules/@vaadin/vaadin-grid/vaadin-grid-tree-toggle.js");import("../../node_modules/@vaadin/vaadin-grid/vaadin-grid-sorter.js");import("../../node_modules/@vaadin/vaadin-grid/vaadin-grid-selection-column.js");import("./platformComponents/MainView/Headers/platform-header.js");import("./platformComponents/MainView/LeftPanes/platform-leftpane-fix.js");import("./platformComponents/MainView/Centers/platform-center-tabs.js")}}customElements.define("labplanet-main",LabplanetMain);