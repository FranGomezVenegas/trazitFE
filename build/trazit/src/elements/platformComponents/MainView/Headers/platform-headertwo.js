import{LitElement,html,css}from"../../../../../node_modules/lit-element/lit-element.js";import{connect}from"../../../../../node_modules/pwa-helpers/connect-mixin.js";import{store}from"../../../../store.js";import{SOP_pendingSOPTab,SOP_userMySOPTab}from"../../Tabs/tabs-settings.js";import{TabsMethods}from"../../../../platform-mixins/platform-functions/tabs-functions.js";import{FieldsMethods}from"../../../../platform-mixins/functions/fields-methods.js";import{notificationsPaneTitle}from"../Components/Notifications/notifications-pane-settings.js";import{isTabOpenableWhenNotSopCertified}from"../../../../config/platform/logic/platform-config.js";//import {addTab,setCurrentTab} from '../../Redux/actions/tabs_actions';
//import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
//import {ToastMethods} from '../../../../platform-mixins/functions/toast-methods';
import{platformHeadertwoStyle}from"./platform-headertwo-settings.js";import{platformHeaderFields}from"./platform-headertwo-settings.js";import"../Components/SOP/sop-icon-and-badge.js";import"../../../internalComponents/others/store-consola.js";import"../../../internalComponents/others/language-selectortwoflags.js";import"../Components/Notifications/notifications-pane.js";import"../Components/ProceduresList/procedures-list-pane.js";import{appLogOut_logOutMessage}from"../../../../config/platform/main-layout/plaftorm-config.js";import{doLogout,setAppLanguage}from"../../Redux/actions/app_actions.js";import{doLogoutNotification}from"../../Redux/actions/notifications_actions.js";import{addSystemTab,setCurrentTab,addTab,doLogoutTab}from"../../Redux/actions/tabs_actions.js";/**
 * `platform-headertwo` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */class PlatformHeadertwo extends FieldsMethods(TabsMethods(connect(store)(LitElement))){stateChanged(state){if(state.app.user){var user=state.app.user}if(state.app.session){var session=state.app.session}if(user&&session){this.getHeaderInfo(user,session)}this.selectedLanguage=state.app.user.appLanguage;if(null!=state.notifications){this.numNotifications=state.notifications.totalNotifications;this.notifications=state.notifications.notifications;if(0<this.numNotifications){this.notificationPaneIsEmpty=!1}}if(null!=state.app.user.appProcedureList){this.procedureList=state.app.user.appProcedureList;//console.log('procedureList', this.procedureList);
}if(!state.SOPS.userAllSop){this.contAllUserSOPs=0}else{if(0==state.SOPS.userAllSop.length){this.contAllUserSOPs=0}else{if(!state.SOPS.userAllSop[0].my_sops){this.contAllUserSOPs=0}else{this.contAllUserSOPs=state.SOPS.userAllSop[0].my_sops.length}}}if(state.SOPS.userPendingSop==void 0){this.contPendingUserSOPs=0;this.showPendingSOP=!1;this.iconName=this.sopPaneIconAndBadge_icons.iconGreen;return}if(0==state.SOPS.userPendingSop.length){this.contPendingUserSOPs=0;this.showPendingSOP=!1;//this.iconName=this.sopPaneIconAndBadge_icons.iconGreen;
}else{var pendingUserSOPs=0,i;for(i=0;i<state.SOPS.userPendingSop.length;i++){var pendingProcedureSOPs=pendingUserSOPs+state.SOPS.userPendingSop[i].pending_sops.length;pendingUserSOPs=pendingUserSOPs+pendingProcedureSOPs}this.contPendingUserSOPs=pendingUserSOPs;//state.SOPS.userPendingSop[0].pending_sops.length; 
this.showPendingSOP=!0;//this.iconName=this.sopPaneIconAndBadge_icons.iconRed;
}if(state.app.user){var user=state.app.user}if(state.app.session){var session=state.app.session}if(user&&session){this.getHeaderInfo(user,session)}}/**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */constructor(){super();this.platformHeaderFields=platformHeaderFields;this.personalOption=platformHeaderFields.personalOption;this.selectedLanguage="";this.notificationPaneIsEmpty=!0;this.paneTitle=notificationsPaneTitle;this.procedureList=[];this.appLogOut_logOutMessage=appLogOut_logOutMessage;//console.log('platformHeaderFields', this.platformHeaderFields);
}static get styles(){return[// super.styles,
platformHeadertwoStyle,css` 
            a.textRed {
              color:red;
              text-size:1.8vh;
          }
          a.textNormal{
              color:red;
              text-size:1.8vh;
          }
          a.textBlue {
              color:blue;
              text-size:1.8vh;
          }                
          a.textGrey {
              color:grey;
              text-size:1.8vh;
          }                  
            `]}/**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */render(){return html`
    <div class="main">  
      <div class="left">
        <div class="logo">
            <img class="formFieldLogoCircle" src="./images/header/trazit-removebg.png">
        </div> 
        <div class="logo">
        <!-- <img class="formFieldLogoCircle" src="./images/header/trazit-removebg.png"> -->
          ${this.platformHeaderFields.fieldsCenter.map(item=>html`<p class="sessioninfo"><b>
          ${this.labelValue(this.selectedLanguage,item)}
          <!-- <field-controller .field="${item}" @field-button-clicked="${this.doLogout}" 
          @avatar-item-clicked="${this.platformHeaderRightClicked}"></field-controller> -->
          </b></p>`)}
        </div>
      </div>
      <div class="center">
        <nav>        
        <ul>
        ${this.platformHeaderFields.proceduresOption.display?html`              
          <li class="circle"><a> ${this.tabLabelValue(this.selectedLanguage,this.platformHeaderFields.proceduresOption.tab)}</a>
          <ul>
          ${this.procedureList.procedures?html`
            ${this.procedureList.procedures.map(item=>html`
            ${0<item.definition.length?html`
            <li><a>
              ${this.labelValue(this.selectedLanguage,item)} <span class="fa fa-plus"></span>  </a>                                    
              <ul>
              ${item.icons_up!=void 0?html`
                ${item.icons_up.map(iconup=>html`<li><a .procedure="${item}" .procevent="${iconup}" @click="${this.procedureTab}"> <!--(item, iconup)-->
                <!-- <field-controller style="padding-top: 0px; padding-bottom: 0px;" id="${iconup.name}" @field-button-clicked="${this.crearTab}" tab-index="${item.index}" .field="${iconup}" .procedure="${item}"></field-controller> -->                           
                <!-- ${this.labelValue(this.selectedLanguage,iconup)}                        -->
                <paper-icon-button style="${this.iconStyleDefinition}" icon="${iconup.icon_name}" title="${this.labelValue(this.selectedLanguage,iconup)}"
                disabled="${iconup.read_only}" value="${iconup.name}" ></paper-icon-button>               
                </a></li>`)}
              `:``}

              ${item.definition!=void 0?html`
                ${item.definition.map(item2=>html`<li><a .procedure="${item}" .procevent="${item2}" @click="${this.procedureTab}"> <!--(item, item2)-->
                  ${this.labelValue(this.selectedLanguage,item2)}  
  <!--                <field-controller title="${this.fieldTitlePendingSOP}" style="padding-top: 0px; padding-bottom: 0px;" id="${item2.name}" @field-tree-list-clicked="${this.crearTab}" tab-index="${item.index}" .field="${item2}" procedure="${item}"></field-controller>            -->
                </a></li>`)}
              `:``}

              ${item.icons_down!=void 0?html`
                ${item.icons_down.map(item2=>html`<li><a .procedure="${item}" .procevent="${item2}" @click="${this.procedureTab}"> <!--(item, item2)-->
                <!-- ${this.labelValue(this.selectedLanguage,item2)}                        -->
                <paper-icon-button style="${this.iconStyleDefinition}" icon="${icons_down.icon_name}" title="${this.labelValue(this.selectedLanguage,icons_down)}"
                disabled="${icons_down.read_only}" value="${icons_down.name}" ></paper-icon-button>               
                </a></li>`)}
              `:``}
              </ul>
            `:``} 
            </li>`)}
          </ul>
          </li>
          `:``} 
        `:``}  
        
        ${this.platformHeaderFields.notificationsOption.display?html`              
          <li class="circle"><a>${this.tabLabelValue(this.selectedLanguage,this.platformHeaderFields.notificationsOption.tab)} ${this.numNotifications}</a>
          <ul>
          ${this.notificationPaneIsEmpty?html`
            <li><a>${this.labelValue(this.selectedLanguage,this.paneTitle.empty)}</a></li>
          `:html`
            ${this.notifications.map(item=>html`<li><a 
                class="${this.textColor(item[1])}"> ${this.notifText(item[1])}                
            </a></li>`)}
          `}  
          </ul>
          </li>
        `:``}  
        
        ${this.platformHeaderFields.sopOption.display?html`
          <li class="circle">
            <a @click="${this.AllUserSOPClicked}">${this.tabLabelValue(this.selectedLanguage,this.platformHeaderFields.sopOption.tab)}</a>
            ${0<this.contPendingUserSOPs?html`   
              <a style="color:red;" title="${this.tabLabelValue(this.selectedLanguage,SOP_pendingSOPTab)}" @click="${this.pendingSOPClicked}" >${this.contPendingUserSOPs}</a>
            `:``}            
            <a title="${this.tabLabelValue(this.selectedLanguage,SOP_userMySOPTab)}"  @click="${this.AllUserSOPClicked}" >${this.contAllUserSOPs}</a>
            <input type="checkbox" id="btn-1">
            <ul> 
              ${this.platformHeaderFields.sopOption.options.map(item=>html`<li><a>
                <!-- <field-controller .field="${item}" @field-button-clicked="${this.doLogout}" 
                @avatar-item-clicked="${this.platformHeaderRightClicked}"></field-controller> -->
              </a></li>`)}
            </ul>
          </li>
        `:``}    
        
        
        ${this.platformHeaderFields.personalOption.display?html`
          <li class="circle">
            <a href="#">${this.tabLabelValue(this.selectedLanguage,this.platformHeaderFields.personalOption.tab)}</a>
            <ul> 
              ${this.platformHeaderFields.personalOption.options.map(item=>html`<li><a .field="${item}" @click="${this.platformHeaderRightClicked}">
              ${"avatar"==item.type?html`
                <img class="formFieldAvatar"  src="${item.source}" aligned="center"  height="30vh" width="30vw"> 
                ${this.labelValue(this.selectedLanguage,item)} 
              `:`
                ${this.labelValue(this.selectedLanguage,item)} 
<!--                    <field-controller .field="${item}" @field-button-clicked="${this.doLogout}" 
                    @avatar-item-clicked="${this.platformHeaderRightClicked}"></field-controller> -->
              `} 
              </a></li>`)}
            </ul>
          </li>
        `:``}      
        </ul>
        </nav>
        </div>
        <div class="right">  
          <language-selector></language-selector>
          <store-consola></store-consola>
        </div>
      </div>
        `}iconStyleDefinition(e){console.log("iconStyleDefinition",e);if(e.read_only){return"color:var(--lumo-disabled-text-color); "}return!e.icon_color?"color:cornflowerblue;":"color:"+e.icon_color+"; "}getHeaderInfo(user,session){if(user.userInfo&&user.userInfo.data&&user.userInfo.data.first_name){this.platformHeaderFields.fieldsCenter[0].label_es="Hola "+user.userInfo.data.first_name+" "+user.userInfo.data.last_name+" ("+session.userRole+") ";this.platformHeaderFields.fieldsCenter[0].label_en="Hello "+user.userInfo.data.first_name+" "+user.userInfo.data.last_name+" ("+session.userRole+") "}if(session){this.platformHeaderFields.fieldsCenter[1].label_es="SESI\xD3N Id: "+session.sessionId+" Fecha: "+session.startDate;this.platformHeaderFields.fieldsCenter[1].label_en="SESSION Id: "+session.sessionId+" Date: "+session.startDate}//var elem=this.shadowRoot.getElementById("fcenter");
//if (elem){elem.refresh();} 
//console.log(store.getState());
//console.log('getHeaderInfo', 'user', user, 'session', session, this.platformHeaderFields);
}pendingSOPClicked(){store.dispatch(addSystemTab(SOP_pendingSOPTab));store.dispatch(setCurrentTab(SOP_pendingSOPTab))}AllUserSOPClicked(){store.dispatch(addSystemTab(SOP_userMySOPTab));store.dispatch(setCurrentTab(SOP_userMySOPTab))}notifText(notif){//console.log('notifText', notif);
return notif.category+" : "+this.labelValue(this.selectedLanguage,notif);//${item[1].category} : ${this.labelValue(this.selectedLanguage, item[1])}
}textColor(notif){//console.log('textColor', notif);
if(notif==void 0){return"textNormal"}if(notif.is_error==void 0){switch(notif.category){case"CORRECT":return"textBlue";case"ERROR":return"textRed";case"LABPLANET_TRUE":return"textBlue";case"false":return"textBlue";case"LABPLANET_FALSE":return"textRed";case"LABPLANET_FALSE":return"textRed";default:return"textNormal";}}else{if(notif.is_error){return"textRed"}else{return"textBlue"}}}crearTab(e){if(!isTabOpenableWhenNotSopCertified(e.detail.procedure)){console.log("isTabOpenableWhenNotSopCertified",isTabOpenableWhenNotSopCertified());if(null==e.detail.procEvent.sops_passed||!1==e.detail.procEvent.sops_passed){this.toastSuccessMessage(this.tabNotOpenableByCertification);return}}var esignRequired=!1;if(!e.detail.procEvent.esign_required){esignRequired=!1}else{esignRequired=e.detail.procEvent.esign_required}var confirmUserRequired=!1;if(!e.detail.procEvent.confirm_required){confirmUserRequired=!1}else{confirmUserRequired=e.detail.procEvent.confirm_required}e.stopPropagation();store.dispatch(addTab({lp_frontend_page_name:e.detail.procEvent.lp_frontend_page_name,tabName:e.detail.procedure.name+"-"+e.detail.procEvent.lp_frontend_page_name,tabLabel_en:e.detail.procedure.label_en+"-"+e.detail.procEvent.label_en,tabLabel_es:e.detail.procedure.label_es+"-"+e.detail.procEvent.label_es,sop_list:e.detail.procEvent.sops.sop_list,sops:e.detail.procEvent.sops,sops_passed:e.detail.procEvent.sops_passed,procedure:e.detail.procedure,tabEsignRequired:esignRequired,tabConfirmUserRequired:confirmUserRequired}));var curTab=[];curTab.tabName=e.detail.procedure.name+"-"+e.detail.procEvent.lp_frontend_page_name;curTab.sops=e.detail.procEvent.sops,curTab.currTabEsignRequired=esignRequired;curTab.currTabConfirmUserRequired=confirmUserRequired;store.dispatch(setCurrentTab(curTab))}procedureTab(e){var procedure=e.currentTarget.procedure,procEvent=e.currentTarget.procevent;if(!isTabOpenableWhenNotSopCertified(procedure)){console.log("isTabOpenableWhenNotSopCertified",isTabOpenableWhenNotSopCertified());if(null==procEvent.sops_passed||!1==procEvent.sops_passed){this.toastSuccessMessage(this.tabNotOpenableByCertification);return}}// attributes[1]
var esignRequired=!1;if(!procEvent.esign_required){esignRequired=!1}else{esignRequired=procEvent.esign_required}var confirmUserRequired=!1;if(!procEvent.confirm_required){confirmUserRequired=!1}else{confirmUserRequired=procEvent.confirm_required}//e.stopPropagation();
store.dispatch(addTab({lp_frontend_page_name:procEvent.lp_frontend_page_name,tabName:procedure.name+"-"+procEvent.lp_frontend_page_name,tabLabel_en:procedure.label_en+"-"+procEvent.label_en,tabLabel_es:procedure.label_es+"-"+procEvent.label_es,sop_list:procEvent.sops.sop_list,sops:procEvent.sops,sops_passed:procEvent.sops_passed,procedure:procedure,tabEsignRequired:esignRequired,tabConfirmUserRequired:confirmUserRequired}));var curTab=[];curTab.tabName=procedure.name+"-"+procEvent.lp_frontend_page_name;curTab.sops=procEvent.sops,curTab.currTabEsignRequired=esignRequired;curTab.currTabConfirmUserRequired=confirmUserRequired;store.dispatch(setCurrentTab(curTab))}_sortNotifications(a,b){//console.log(a[0], b[0]);
if(a[0]===b[0])return 0;return a[0]<b[0]?1:-1}doLogout(){var message="";switch(this.selectedLanguage){case"es":message=this.appLogOut_logOutMessage.closedSession.message_es;break;//message=response.data.message_es; break;            
default:message=this.appLogOut_logOutMessage.closedSession.message_en;break;//message=response.data.message_en; break;
}this.authenticated=!0;this.dispatchEvent(new CustomEvent("toast-message",{bubbles:!0,composed:!0,detail:message//'User valid, please select your role to proceed'
}));store.dispatch(doLogout(this.selectedLanguage));store.dispatch(doLogoutTab());store.dispatch(doLogoutNotification())}getHeaderInfo(user,session){if(user.userInfo&&user.userInfo.data&&user.userInfo.data.first_name){this.platformHeaderFields.fieldsCenter[0].label_es="Hola "+user.userInfo.data.first_name+" "+user.userInfo.data.last_name+" ("+session.userRole+") ";this.platformHeaderFields.fieldsCenter[0].label_en="Hello "+user.userInfo.data.first_name+" "+user.userInfo.data.last_name+" ("+session.userRole+") "}if(session){this.platformHeaderFields.fieldsCenter[1].label_es="SESI\xD3N Id: "+session.sessionId+" Fecha: "+session.startDate;this.platformHeaderFields.fieldsCenter[1].label_en="SESSION Id: "+session.sessionId+" Date: "+session.startDate}//var elem=this.shadowRoot.getElementById("fcenter");
//if (elem){elem.refresh();} 
//console.log(store.getState());
//console.log('getHeaderInfo', 'user', user, 'session', session, this.platformHeaderFields);
}platformHeaderRightClicked(e){var menuItem=e.currentTarget.field;if(menuItem.tab){store.dispatch(addSystemTab(menuItem.tab));store.dispatch(setCurrentTab(menuItem.tab))}else{this.doLogout()}return}doLogout(){var message="";switch(this.selectedLanguage){case"es":message=this.appLogOut_logOutMessage.closedSession.message_es;break;//message=response.data.message_es; break;            
default:message=this.appLogOut_logOutMessage.closedSession.message_en;break;//message=response.data.message_en; break;
}this.authenticated=!0;this.dispatchEvent(new CustomEvent("toast-message",{bubbles:!0,composed:!0,detail:message//'User valid, please select your role to proceed'
}));store.dispatch(doLogout(this.selectedLanguage));store.dispatch(doLogoutTab());store.dispatch(doLogoutNotification())}static get properties(){return{platformHeaderFields:{type:Array},selectedLanguage:{type:String},appLogOut_logOutMessage:{type:Array},notificationPaneIsEmpty:{type:Boolean},numNotifications:{type:Number},notifications:{type:Array},paneTitle:{type:Object},procedureList:{type:Array}}}}customElements.define("platform-headertwo",PlatformHeadertwo);