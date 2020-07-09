import{PolymerElement,html}from"../../../../node_modules/@polymer/polymer/polymer-element.js";import{connect}from"../../../../node_modules/pwa-helpers/connect-mixin.js";import{store}from"../../../store.js";import{default_language}from"../../../config/platform/logic/platform-config.js";import{setAppLanguage}from"../../platformComponents/Redux/actions/app_actions.js";/**
 * `language-selectortwoflags` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */class languageSelectortwoflags extends connect(store)(PolymerElement){static get properties(){return{selectedLanguage:{type:String,value:default_language,observer:"setDefaultLanguage"}}}static get template(){return html`
        <style>
            paper-icon-button{
                width: 2.6vw;
                height: 2.6vw;     
            }
            paper-icon-button.flag{
                --iron-icon-width: 100%;
                --iron-icon-height: 50%;       
            }
            </style>             
        <paper-icon-button class="flag" id="spanish" on-click="pressed" 
            src="https://banner2.kisspng.com/20180320/hde/kisspng-flag-of-spain-flag-of-the-united-states-national-f-spain-flags-icon-png-5ab0b60cb326e6.1242812115215303807338.jpg" 
            value="es" alt="Castellano" title="Castellano"></paper-icon-button>
        
        <mwc-formfield id="switch" label="" name="langSwitch" >
            <mwc-switch id="appLanguageSelector" checked on-click="switchLanguage"></mwc-switch>
        </mwc-formfield>    
        
        <paper-icon-button class="flag" id="english" on-click="pressed" 
            src="http://www.johnsonmackenzie.ltd.uk/wp-content/uploads/2015/01/united_kingdom_640.png" 
            value="en" alt="English" title="English"></paper-icon-button>
        `}pressed(e){e.stopPropagation();var newLanguage=e.target.getAttribute("value");if(this.selectedLanguage==newLanguage){return}this.getCheckerValue();this.selectedLanguage=newLanguage;store.dispatch(setAppLanguage(newLanguage))}switchLanguage(){if("en"==this.selectedLanguage){this.selectedLanguage="es";store.dispatch(setAppLanguage(this.selectedLanguage));return}this.selectedLanguage="en";this.getCheckerValue();store.dispatch(setAppLanguage(this.selectedLanguage))}setDefaultLanguage(){store.dispatch(setAppLanguage(this.selectedLanguage));this.getCheckerValue()}getCheckerValue(){if("es"==this.selectedLanguage){this.$.appLanguageSelector.checked=!1;return}this.$.appLanguageSelector.checked=!0}}customElements.define("language-selectortwoflags",languageSelectortwoflags);