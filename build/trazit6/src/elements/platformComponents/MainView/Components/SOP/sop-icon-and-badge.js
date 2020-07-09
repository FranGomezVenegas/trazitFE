define(["../../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../../store.js","./sop-icon-and-badge-settings.js","../../../Tabs/tabs-settings.js","./sop-icon-and-badge-style.js","../../../../../../node_modules/@polymer/paper-badge/paper-badge.js","../../../Redux/actions/tabs_actions.js"],function(_polymerElement,_connectMixin,_store,_sopIconAndBadgeSettings,_tabsSettings,_sopIconAndBadgeStyle,_paperBadge,_tabs_actions){"use strict";/**
 * `sop-icon-and-badge` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */class SopIconAndBadge extends(0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement){static get properties(){return{iconName:{type:String,value:_sopIconAndBadgeSettings.sopPaneIconAndBadge_icons.iconGreen},showPendingSOP:Boolean,sopPaneIconAndBadge_icons:{type:Object,value:_sopIconAndBadgeSettings.sopPaneIconAndBadge_icons}}}static get template(){return _polymerElement.html`      
        <style include="sop-icon-and-badge-style"></style>         
        <div class="mainDiv">    
            <img class="imageSOP" src="{{iconName}}">
            <template is="dom-if" if="{{showPendingSOP}}">
                <paper-badge for="btn" id="pendingSop" class="pendingSop" on-click="pendingSOPClicked" label="{{contPendingUserSOPs}}"></paper-badge>
            </template>
            <paper-badge for="btn2" id="allUserSop" class="allUserSop"  on-click="AllUserSOPClicked" label="{{contAllUserSOPs}}"></paper-badge>
        </div>        
        `}stateChanged(state){if(!state.SOPS.userAllSop){this.contAllUserSOPs=0}else{if(0==state.SOPS.userAllSop.length){this.contAllUserSOPs=0}else{if(!state.SOPS.userAllSop[0].my_sops){this.contAllUserSOPs=0}else{this.contAllUserSOPs=state.SOPS.userAllSop[0].my_sops.length}}}if(state.SOPS.userPendingSop==void 0){this.contPendingUserSOPs=0;this.showPendingSOP=!1;this.iconName=this.sopPaneIconAndBadge_icons.iconGreen;return}if(0==state.SOPS.userPendingSop.length){this.contPendingUserSOPs=0;this.showPendingSOP=!1;this.iconName=this.sopPaneIconAndBadge_icons.iconGreen}else{var pendingUserSOPs=0,i;for(i=0;i<state.SOPS.userPendingSop.length;i++){var pendingProcedureSOPs=pendingUserSOPs+state.SOPS.userPendingSop[i].pending_sops.length;pendingUserSOPs=pendingUserSOPs+pendingProcedureSOPs}this.contPendingUserSOPs=pendingUserSOPs;//state.SOPS.userPendingSop[0].pending_sops.length; 
this.showPendingSOP=!0;this.iconName=this.sopPaneIconAndBadge_icons.iconRed}}pendingSOPClicked(){_store.store.dispatch((0,_tabs_actions.addSystemTab)(_tabsSettings.SOP_pendingSOPTab));_store.store.dispatch((0,_tabs_actions.setCurrentTab)(_tabsSettings.SOP_pendingSOPTab))}AllUserSOPClicked(){_store.store.dispatch((0,_tabs_actions.addSystemTab)(_tabsSettings.SOP_userMySOPTab));_store.store.dispatch((0,_tabs_actions.setCurrentTab)(_tabsSettings.SOP_userMySOPTab))}}customElements.define("sop-icon-and-badge",SopIconAndBadge)});