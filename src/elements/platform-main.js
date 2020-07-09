import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../store';
import '@polymer/polymer/lib/elements/dom-if';
import '@polymer/polymer/lib/elements/dom-repeat';
import {default_language} from '../config/platform/logic/platform-config';
import {main_layout} from '../config/platform/main-layout/two-headers-settings';
import '../config/platform/main-layout/two-headers';
// componentes de terceros
import '@polymer/paper-toast/paper-toast';
import('@polymer/paper-styles/shadow');

// mis internalComponents
import '../elements/internalComponents/form-fields/field-controller';

// mis componentes de App
// import '../elements/platformComponents/MainView/Headers/platform-header.js';
// import '../elements/platformComponents/MainView/LeftPanes/platform-leftpane-fix.js';
// import '../elements/platformComponents/MainView/Centers/platform-center-tabs.js';        

import '../elements/platformComponents/MainView/platform-login';
import '../elements/internalComponents/others/lp-loading';

import '../elements/internalComponents/others/language-selector.js';

/**
 * `labplanet-main` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class LabplanetMain extends connect(store)(PolymerElement) {
    stateChanged(state){
        this.loggedIn=state.app.user.loggedIn;
    }      
    static get properties() {
        return {
            selectedLanguage: {type: String, value: default_language, notify: true},
            layoutSettings:{type: String, value:main_layout}, 
            loggedIn: {type: Boolean, value:false},  
            userName: String,
        }
    }

    static get template() {
        return html`
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
        `;
    }
    loggedSuccesfully() {    
        this.loggedIn=true;
        this.importPlatformComponents();
    }       
    ready() {
        super.ready();
        this.addEventListener('toast-error', (e) => this.toastError(e) );   
        this.addEventListener('toast-message', (e) => this.toastMessage(e) );       
    }    
    toastMessage(e) {
        this.$.toast.show({text: e.detail, duration: 3000});
    }    
    toastError(e) {
        this.$.toasterror.show({text: e.detail, duration: 3000});
    }
     stateChanged(state) {
         this.loggedIn = state.app.user.loggedIn;
    }    
    importPlatformComponents(){
        import('@vaadin/vaadin-icons');
        import('@vaadin/vaadin-button');
        import('@polymer/polymer/lib/elements/dom-repeat');
        import('@polymer/paper-styles/typography');
        import('@polymer/paper-icon-button/paper-icon-button');
        import('@polymer/iron-pages/iron-pages');
        import('@polymer/iron-icons/iron-icons');
        import('@polymer/iron-selector/iron-selector');
        import('@polymer/paper-checkbox/paper-checkbox');

        import('@polymer/paper-tabs/paper-tabs');
        import('@polymer/paper-tabs/paper-tab');
        import('@polymer/paper-icon-button/paper-icon-button');        

        import('@polymer/paper-button/paper-button');
        import('@polymer/paper-input/paper-input');
        import('@polymer/paper-dialog/paper-dialog');
        import('@vaadin/vaadin-checkbox/vaadin-checkbox');
        import('@google-web-components/google-chart/google-chart');
        import('@polymer/paper-spinner/paper-spinner-lite');
        import('@material/mwc-switch/mwc-switch');
        
        import('@vaadin/vaadin-grid');
        import('@vaadin/vaadin-grid/vaadin-grid-column');
        import('@vaadin/vaadin-grid/vaadin-grid-sort-column');
        import('@vaadin/vaadin-grid/vaadin-grid-filter'); 
        import('@vaadin/vaadin-grid/vaadin-grid-filter-column'); 
        import('@vaadin/vaadin-grid/vaadin-grid-column-group');
        import('@vaadin/vaadin-grid/vaadin-grid-tree-toggle');
        import('@vaadin/vaadin-grid/vaadin-grid-sorter');
        import('@vaadin/vaadin-grid/vaadin-grid-selection-column');

        import('../elements/platformComponents/MainView/Headers/platform-header');
        import('../elements/platformComponents/MainView/LeftPanes/platform-leftpane-fix');
        import('../elements/platformComponents/MainView/Centers/platform-center-tabs');        
    }    
}
customElements.define('labplanet-main', LabplanetMain);