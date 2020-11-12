define(["../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../store.js","./platform-header-settings.js","../../../../config/platform/main-layout/plaftorm-config.js","../../Redux/actions/app_actions.js","../../Redux/actions/notifications_actions.js","../../Redux/actions/tabs_actions.js","./platform-header-style.js"],function(_polymerElement,_connectMixin,_store,_platformHeaderSettings,_plaftormConfig,_app_actions,_notifications_actions,_tabs_actions,_platformHeaderStyle){"use strict";class PlatformHeader extends(0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement){static get properties(){return{//selectedLanguage: String,
platformHeaderFields:{type:Object,value:_platformHeaderSettings.platformHeaderFields},platformHeader_personFieldsName:{type:Object,value:_platformHeaderSettings.platformHeader_personFieldsName},appLogOut_logOutMessage:{type:Object,value:_plaftormConfig.appLogOut_logOutMessage}}}static get template(){return _polymerElement.html`
            <style include="platform-header-style"></style>
        <div class="wapper">
            <template is="dom-if" if="[[platformHeaderFields.ribbonDisplay]]"> 
                <ribbon-element field="[[platformHeaderFields.ribbonField]]"></ribbon-element>
            </template>
        
            <template is="dom-if" if="[[platformHeaderFields.fieldsLeftDisplay]]">
                <div class="platformHeaderLeftArea"> 
                    <template is="dom-repeat" items="{{platformHeaderFields.fieldsLeft}}" as="currentfield">                
                        <field-controller  field="{{currentfield}}"></field-controller>
                    </template>
                </div> 
            </template> 
           
            <template is="dom-if" if="[[platformHeaderFields.fieldsCenterDisplay]]">
                <div class="platformHeaderCenterArea" id="sessionInfo">
                    <template is="dom-repeat" id="fcenter" items="{{platformHeaderFields.fieldsCenter}}" as="currentfield">
                        <field-controller style="color: #4285f4;" field="{{currentfield}}"></field-controller>
                    </template>                            
                </div>       
            </template>
            <template is="dom-if" if="[[platformHeaderFields.fieldsRightDisplay]]">            
                <div class="platformHeaderRightArea">
                    <template is="dom-repeat" items="{{platformHeaderFields.fieldsRight}}" as="currentfield">
                        <field-controller field="{{currentfield}}" on-field-button-clicked="doLogout" on-avatar-item-clicked="platformHeaderRightClicked"></field-controller>
                    </template>                            
                </div>
            </template>  
        </div>
        `}platformHeaderRightClicked(e){if(e.detail.avatarDefinition.tab){_store.store.dispatch((0,_tabs_actions.addSystemTab)(e.detail.avatarDefinition.tab));_store.store.dispatch((0,_tabs_actions.setCurrentTab)(e.detail.avatarDefinition.tab))}else{this.doLogout()}return}doLogout(){var message="";switch(this.selectedLanguage){case"es":message=this.appLogOut_logOutMessage.closedSession.message_es;break;//message=response.data.message_es; break;            
default:message=this.appLogOut_logOutMessage.closedSession.message_en;break;//message=response.data.message_en; break;
}this.authenticated=!0;this.dispatchEvent(new CustomEvent("toast-message",{bubbles:!0,composed:!0,detail:message//'User valid, please select your role to proceed'
}));_store.store.dispatch((0,_app_actions.doLogout)(this.selectedLanguage));_store.store.dispatch((0,_tabs_actions.doLogoutTab)());_store.store.dispatch((0,_notifications_actions.doLogoutNotification)())}getHeaderInfo(user,session){if(user.userInfo&&user.userInfo.data&&user.userInfo.data.first_name){this.platformHeaderFields.fieldsCenter[0].label_es="Hola "+user.userInfo.data.first_name+" "+user.userInfo.data.last_name+" ("+session.userRole+") ";this.platformHeaderFields.fieldsCenter[0].label_en="Hello "+user.userInfo.data.first_name+" "+user.userInfo.data.last_name+" ("+session.userRole+") "}if(session){this.platformHeaderFields.fieldsCenter[1].label_es="SESI\xD3N Id: "+session.sessionId+" Fecha: "+session.startDate;this.platformHeaderFields.fieldsCenter[1].label_en="SESSION Id: "+session.sessionId+" Date: "+session.startDate}//var elem=this.shadowRoot.getElementById("fcenter");
//if (elem){elem.refresh();} 
//console.log(store.getState());
//console.log('getHeaderInfo', 'user', user, 'session', session, this.platformHeaderFields);
}stateChanged(state){if(state.app.user){var user=state.app.user}if(state.app.session){var session=state.app.session}if(user&&session){this.getHeaderInfo(user,session)}this.selectedLanguage=state.app.user.appLanguage}}customElements.define("platform-header",PlatformHeader)});