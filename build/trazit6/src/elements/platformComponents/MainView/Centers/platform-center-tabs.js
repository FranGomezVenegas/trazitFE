define(["../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../store.js","../../../../config/platform/main-layout/two-headers-settings.js","../../../../config/platform/main-layout/two-headers.js","../../Redux/actions/tabs_actions.js","../../../../platform-mixins/functions/fields-methods.js","../../../../platform-mixins/platform-functions/tabs-functions.js","../../../../platform-mixins/platform-functions/platform-elements.js","./platform-center-tabs-settings.js","./platform-center-tabs-style.js","../../../internalComponents/others/store-consola.js","../../../internalComponents/others/language-selectortwoflags.js","../Components/Notifications/notifications-pane.js","../Components/ProceduresList/procedures-list-pane.js","../Components/SOP/sop-icon-and-badge.js","../../../../../node_modules/@thuoe/mp4-video-player/mp4-video-player.js"],function(_polymerElement,_connectMixin,_store,_twoHeadersSettings,_twoHeaders,_tabs_actions,_fieldsMethods,_tabsFunctions,_platformElements,_platformCenterTabsSettings,_platformCenterTabsStyle,_storeConsola,_languageSelectortwoflags,_notificationsPane,_proceduresListPane,_sopIconAndBadge,_mp4VideoPlayer){"use strict";/**
 * `platform-center-tabs` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */class PlatformCenterTabs extends(0,_tabsFunctions.TabsMethods)((0,_fieldsMethods.FieldsMethods)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement))){static get properties(){return{selectedLanguage:String,tabs:Array,layoutSettings:{type:String,value:_twoHeadersSettings.center_layout},currentTab:Array,tabIndex:Number,videoUrl:{type:String,value:"http://51.75.202.142:8888/myvideos/LP.mp4"}}}static get template(){return _polymerElement.html`
        <style include="platform-center-tabs-style"></style>
        <style>
        mp4-video-player {
                width: 80%;
                height: 80%;
                background: rgba(0, 0, 0, 0.12);
            }
        </style>
<!--            <paper-dialog always-on-top no-cancel-on-outside-click  id="videowindowdialog" >    
            <div style="display:flex" style="width:50%; height:50%;">
                <div style="display:block; padding-right:10px;" >
                <nav>
                <ul>Plataforma
                <li>Cabecera</li>
                <li>Pestañas</li>
                </ul>
                </nav>            
                </div> 
                <mp4-video-player src="{{videoUrl}}" ></mp4-video-player>  <!-- auto-play -->       
            </div>
        </paper-dialog>  
-->
        <platform-elements id="platformelements"></platform-elements>
            <template is="dom-if" if="[[layoutSettings.display_second_header]]">
                <div class="secondHeader">
                    <sop-icon-and-badge></sop-icon-and-badge>
                    <procedures-list-pane></procedures-list-pane>   
                    <notifications-pane></notifications-pane>            
                    <language-selector></language-selector>
                    <store-consola></store-consola>
                </div> 
            </template> 
            <template is="dom-if" if="[[layoutSettings.display_tabs]]">  
                <paper-tabs class="platformCenterTabs" selected="{{currentTab}}" attr-for-selected="name" noink scrollable>            
                    <paper-tab class="platformCenterTabsTabItem"  on-click="saveDefaultTabsOnLogin" name="[[tab.tabName]]" 
                        esign-required="false" confirmuser-required="false"
                        tab-index="{{index}}">
                    <br>
                    <paper-icon-button icon="save" icon-tab-index="[[index]]" icon-tab-name="[[tab.tabName]]" on-click="saveDefaultTabsOnLogin"></paper-icon-button>
                    </paper-tab>                

                    </paper-icon-button>
                    <template is="dom-repeat" items="[[tabs]]" as="tab">                                                               
                        <paper-tab class="platformCenterTabsTabItem"  esign-required="[[tab.esign_required]]" 
                            confirmuser-required="[[tab.confirmUser_required]]" on-click="tabSelected" name="[[tab.tabName]]" 
                            tab-index="{{index}}">{{tabLabelValue(selectedLanguage, tab)}}
                            <br>
                            <paper-icon-button icon="clear" icon-tab-index="[[index]]" icon-tab-name="[[tab.tabName]]" on-click="closeTab"></paper-icon-button>
                        </paper-tab>                
                    </template>            
                </paper-tabs>
                <iron-pages selected="[[currentTab.tabName]]" attr-for-selected="name" hide-immediately>
                    <my-sops tab-index="{{tabIndex}}" name="sop-allMySops"> </my-sops>
                    <my-pending-sops tab-index="{{tabIndex}}" name="sop-myPendingSops"> </my-pending-sops>
                    <user-profile tab-index="{{tabIndex}}" name="user-profile"> </user-profile>
                    <incident-management tab-index="{{tabIndex}}" name="incident-management"> </incident-management>
                    <procedure-management tab-index="{{tabIndex}}" name="procedure-management"> </procedure-management>
                    <videotutorial-tab tab-index="{{tabIndex}}" name="videotutorial-tab"> </videotutorial-tab>

                    <process-us-home tab-index="{{tabIndex}}" name="process-us-home"></process-us-home>            
                    <process-us-sample-login tab-index="{{tabIndex}}" name="process-us-sample-login"></process-us-sample-login>
                    <process-us-sample-reception tab-index="{{tabIndex}}" name="process-us-sample-reception"></process-us-sample-reception> 
                    <process-us-sample-results tab-index="{{tabIndex}}" name="process-us-sample-results"></process-us-sample-results>
                    <process-us-sample-revision tab-index="{{tabIndex}}" name="process-us-sample-revision"></process-us-sample-revision>
                    <process-us-sample-custodian tab-index="{{tabIndex}}" name="process-us-sample-custodian"></process-us-sample-custodian>
                    
                    <pr-eu-home tab-index="{{tabIndex}}" name="pr-eu-home"></pr-eu-home>            
                    <pr-eu-sample-login tab-index="{{tabIndex}}" name="pr-eu-sample-login"></pr-eu-sample-login>
                    <pr-eu-sample-reception tab-index="{{tabIndex}}" name="pr-eu-sample-reception"></pr-eu-sample-reception> 
                    <pr-eu-sample-results tab-index="{{tabIndex}}" name="pr-eu-sample-results"></pr-eu-sample-results>
                    <pr-eu-sample-revision tab-index="{{tabIndex}}" name="pr-eu-sample-revision"></pr-eu-sample-revision>
                    <pr-eu-sample-custodian tab-index="{{tabIndex}}" name="pr-eu-sample-custodian"></pr-eu-sample-custodian>

                    <em-demo-a-home tab-index="{{tabIndex}}" name="em-demo-a-home"></em-demo-a-home>            
                    <em-demo-a-programs tab-index="{{tabIndex}}" name="em-demo-a-programs"></em-demo-a-programs> 
                    <em-demo-a-sample-login tab-index="{{tabIndex}}" name="em-demo-a-sample-login"></em-demo-a-sample-login>   
                    <em-demo-a-sample-reception tab-index="{{tabIndex}}" name="em-demo-a-sample-reception"></em-demo-a-sample-reception>   
                    <em-demo-a-sample-results tab-index="{{tabIndex}}" name="em-demo-a-sample-results"></em-demo-a-sample-results>   
                    <em-demo-a-results-calendar tab-index="{{tabIndex}}" name="em-demo-a-results-calendar"></em-demo-a-results-calendar>           
                    <em-demo-a-sample-revision tab-index="{{tabIndex}}" name="em-demo-a-sample-revision"></em-demo-a-sample-revision>
                    <em-demo-a-sample-custodian tab-index="{{tabIndex}}" name="em-demo-a-sample-custodian"></em-demo-a-sample-custodian>
                    <em-demo-a-sample-sampling tab-index="{{tabIndex}}" name="em-demo-a-sample-sampling"></em-demo-a-sample-sampling>
                    <em-demo-a-sample-incubation tab-index="{{tabIndex}}" name="em-demo-a-sample-incubation"></em-demo-a-sample-incubation>
                    <em-demo-a-sample-incub-incubator tab-index="{{tabIndex}}" name="em-demo-a-sample-incub-incubator"></em-demo-a-sample-incub-incubator>
                    <em-demo-a-sample-incub-batch tab-index="{{tabIndex}}" name="em-demo-a-sample-incub-batch"></em-demo-a-sample-incub-batch>
                    <em-demo-a-sample-plate-reading tab-index="{{tabIndex}}" name="em-demo-a-sample-plate-reading"></em-demo-a-sample-plate-reading>
                    <em-demo-a-sample-microorganism tab-index="{{tabIndex}}" id="em-demo-a-sample-microorganism" name="em-demo-a-sample-microorganism"></em-demo-a-sample-microorganism>
                    <em-demo-a-production-lot tab-index="{{tabIndex}}" name="em-demo-a-production-lot"></em-demo-a-production-lot>
                    <em-demo-a-person-sampling tab-index="{{tabIndex}}" name="em-demo-a-person-sampling"></em-demo-a-person-sampling>
                    <em-demo-a-person-plate-reading tab-index="{{tabIndex}}" name="em-demo-a-person-plate-reading"></em-demo-a-person-plate-reading>
                    <em-demo-a-person-microorganism tab-index="{{tabIndex}}" name="em-demo-a-person-microorganism"></em-demo-a-person-microorganism>
                    <em-demo-a-sample-browser tab-index="{{tabIndex}}" name="em-demo-a-sample-browser"></em-demo-a-sample-browser>
                    <em-demo-a-browser tab-index="{{tabIndex}}" name="em-demo-a-browser"></em-demo-a-browser>
                    <em-demo-a-result-deviation tab-index="{{tabIndex}}" name="em-demo-a-result-deviation"></em-demo-a-result-deviation>           

                    <em-demo-b-home tab-index="{{tabIndex}}" name="em-demo-b-home"></em-demo-b-home>  

                    <genoma-instancia1-home tab-index="{{tabIndex}}" name="genoma-instancia1-home"></genoma-instancia1-home>      
                    <genoma-instancia1-project tab-index="{{tabIndex}}" name="genoma-instancia1-project"></genoma-instancia1-project>           

                    <proc-deploy-home tab-index="{{tabIndex}}" name="proc-deploy-home"></proc-deploy-home>  
                    <proc-deploy-sample-fq tab-index="{{tabIndex}}" name="proc-deploy-sample-fq"></proc-deploy-sample-fq>  
                    <proc-deploy-sample-mb tab-index="{{tabIndex}}" name="proc-deploy-sample-mb"></proc-deploy-sample-mb>  
                    <proc-deploy-sample-reviewsampletestinggroupfq tab-index="{{tabIndex}}" name="proc-deploy-sample-reviewsampletestinggroupfq"></proc-deploy-sample-reviewsampletestinggroupfq>  
                    <proc-deploy-sample-reviewsampletestinggroupmb tab-index="{{tabIndex}}" name="proc-deploy-sample-reviewsampletestinggroupmb"></proc-deploy-sample-reviewsampletestinggroupmb>  
                    
                    <proc-deploy-sample-reviewtestingfq tab-index="{{tabIndex}}" name="proc-deploy-sample-reviewtestingfq"></proc-deploy-sample-reviewtestingfq>  
                    <proc-deploy-sample-reviewtestingmb tab-index="{{tabIndex}}" name="proc-deploy-sample-reviewtestingmb"></proc-deploy-sample-reviewtestingmb>  
                    <proc-deploy-sample-reviewsample tab-index="{{tabIndex}}" name="proc-deploy-sample-reviewsample"></proc-deploy-sample-reviewsample>  
                    <proc-deploy-programs tab-index="{{tabIndex}}" name="proc-deploy-programs"></proc-deploy-programs>  

                </iron-pages>
            </template>        
        `}stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;this.tabs=state.tabs.tabs;this.currentTab=state.tabs.currentTab;//console.log('tabs', this.tabs,'currentTab', this.currentTab);      
}closeTab(e){//console.log('platform-center-tabs', 'closeTab', this.currentTab);
_store.store.dispatch((0,_tabs_actions.closeTab)(this.currentTab))}tabSelected(e){//console.log('platform-center-tabs', 'tabSelected', e.currentTarget);
_store.store.dispatch((0,_tabs_actions.setCurrentTab)(e.currentTarget.name));return}ready(){super.ready();var elem=this.shadowRoot.getElementById("videowindowdialog");if(elem){elem.open()}//this.$.videowindowdialog.open();    
}}customElements.define("platform-center-tabs",PlatformCenterTabs)});