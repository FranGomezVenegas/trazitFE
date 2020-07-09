import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store';

import {center_layout} from '../../../../config/platform/main-layout/two-headers-settings';
import '../../../../config/platform/main-layout/two-headers';
import {setCurrentTab, closeTab } from '../../Redux/actions/tabs_actions';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
import {TabsMethods} from '../../../../platform-mixins/platform-functions/tabs-functions';
import '../../../../platform-mixins/platform-functions/platform-elements';
import './platform-center-tabs-settings';
import './platform-center-tabs-style';
import '../../../internalComponents/others/store-consola';
import '../../../internalComponents/others/language-selectortwoflags';
import '../Components/Notifications/notifications-pane';
import '../Components/ProceduresList/procedures-list-pane.js';
import '../Components/SOP/sop-icon-and-badge';
/**
 * `platform-center-tabs` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class PlatformCenterTabs extends TabsMethods(FieldsMethods(connect(store)(PolymerElement))) {
    static get properties() {
        return {
            selectedLanguage: String,
            tabs: Array,
            layoutSettings:{type: String, value: center_layout},
            currentTab: Array,
            tabIndex: Number,
        }
    }
    static get template() {
        return html`
        <style include="platform-center-tabs-style"></style>
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

                    <em-demo-b-home tab-index="{{tabIndex}}" name="em-demo-b-home"></em-demo-b-home>  

                    <genoma-instancia1-home tab-index="{{tabIndex}}" name="genoma-instancia1-home"></genoma-instancia1-home>      
                    <genoma-instancia1-project tab-index="{{tabIndex}}" name="genoma-instancia1-project"></genoma-instancia1-project>           
                </iron-pages>
            </template>        
        `;
    }
    stateChanged(state) {
        this.selectedLanguage=state.app.user.appLanguage;
        this.tabs = state.tabs.tabs;
        this.currentTab = state.tabs.currentTab;  
        //console.log('tabs', this.tabs,'currentTab', this.currentTab);      
    } 
    closeTab(e){
        //console.log('platform-center-tabs', 'closeTab', this.currentTab);
        store.dispatch(closeTab(this.currentTab));        
    }
    tabSelected(e){
        //console.log('platform-center-tabs', 'tabSelected', e.currentTarget);
        store.dispatch(setCurrentTab(e.currentTarget.name));  
        return;
    }
}

customElements.define('platform-center-tabs', PlatformCenterTabs);