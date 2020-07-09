define(["../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../node_modules/pwa-helpers/connect-mixin.js","../../../store.js","../../../config/platform/platform-login/platform-login-settings.js","../../../config/platform/platform-login/platform-login-style.js","../../../platform-mixins/apis/api-authentication.js","../Redux/actions/app_actions.js","../../internalComponents/others/language-selectortwoflags.js"],function(_polymerElement,_connectMixin,_store,_platformLoginSettings,_platformLoginStyle,_apiAuthentication,_app_actions,_languageSelectortwoflags){"use strict";/**
 * `platform-login` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */class PlatformLogin extends(0,_apiAuthentication.AuthenticationApi)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)){//(ToastMethods(FrontendSopUser(ProcedureList(UserSession(AuthenticationApi(connect(store)(PolymerElement))))))) {
static get properties(){return{loggedIn:{type:Boolean,observer:"notLoggedIn",notify:!0},appLogin_logoOnTop:{type:String,value:_platformLoginSettings.appLogin_logoOnTop},formFields:{type:Array,notify:!0,bubble:!0,value:_platformLoginSettings.appLogin_formFields},loading:{type:Boolean,value:!1},appLogin_ribbon:{type:Object,value:_platformLoginSettings.appLogin_ribbon},axiosMessage:{type:String,value:_platformLoginSettings.appLogin_authenticationMessage},userRoles:Array,selectedLanguage:String}}stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(!1==state.app.user.loggedIn){this.notLoggedIn()}}notLoggedIn(){this.set("formFields.1.read_only",!1);// userName
this.set("formFields.2.read_only",!1);// password
this.set("formFields.4.read_only",!0);// roleList          
return}static get template(){return _polymerElement.html`
        <style include="platform-login-style"></style>
        <div class="login">
            <img src="[[appLogin_logoOnTop.url]]" class="appLoginLogoOnTop"> 
          <div class="appLoginForm" >
            <language-selectortwoflags></language-selectortwoflags>
            <ribbon-element field="{{appLoginRibbonField.0}}"></ribbon-element>
          
            <paper-spinner-lite alt="Authenticating user and password" width="6px" active="[[loading]]"></paper-spinner-lite>
            <form id="form">
              <template is="dom-repeat" items="{{formFields}}" as="currentfield">       
                <field-controller on-keydown="keyPressed" on-field-button-clicked="fieldButtonClicked" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
              </template>       
            </form>
        `}keyPressed(e){if("Enter"==e.key){if("USER"==e.target.field.name.toUpperCase()){const field=this.shadowRoot.getElementById("password").focus();return}this.login();return}}fieldButtonClicked(e){if("buttonAccess"==e.detail.buttonName){this.login()}}onListChange(e){if("userRole"==e.detail.name){this.getFinalToken(e.detail.value)}}login(){this.loading=!0;this.userName=this.formFields[1].value;this.password=this.formFields[2].value;this.dispatchEvent(new CustomEvent("toast",{bubbles:!0,composed:!0,detail:"Validating User "+this.formFields[0].value+" ... "}));var datas=[];datas.dbUserName=this.formFields[1].value;datas.dbUserPassword=this.formFields[2].value;datas.callBackFunction=this.authSuccess.bind(this);datas.callBackFunctionError=this.authError.bind(this);this.ajaxAuthenticate(datas);_store.store.dispatch((0,_app_actions.setAppLanguage)(this.selectedLanguage))}authSuccess(){this.loading=!1}authError(e){this.loading=!1;var message="";switch(this.selectedLanguage){case"es":message=this.axiosMessage.connectedFails.message_es;break;//message=response.data.message_es; break;            
default:message=this.axiosMessage.connectedFails.message_en;break;//message=response.data.message_en; break;
}this.set("formFields.1.read_only",!1);// userName
this.set("formFields.2.read_only",!1);// password
this.set("formFields.4.read_only",!0);// roleList    
this.dispatchEvent(new CustomEvent("toast-error",{bubbles:!0,composed:!0,detail:message}))}fillUserRoleList(){if(1==this.userRoles.length){this.toastSuccessMessageForSpecificLanguage(this.axiosMessage.connectedSuccess_singleRole,this.selectedLanguage)}else{this.toastSuccessMessageForSpecificLanguage(this.axiosMessage.connectedSuccess,this.selectedLanguage)}const field=this.shadowRoot.getElementById(this.formFields[1].name);if(field){field.enable()}const field2=this.shadowRoot.getElementById(this.formFields[2].name);if(field2){field2.enable()}// #Incident. enable does not work
//const field3=this.shadowRoot.getElementById(this.formFields[4].name);
//if (field3){field3.enable();} 
this.set("formFields.4.read_only",!1);// roleList                  
var i;if(1==this.userRoles.length){this.getFinalToken(this.userRoles[0]);return}//console.log('fillUserRoleList');
var tmpRolesList=[];for(i=0;i<this.userRoles.length;i++){var newElement=[{keyName:"",keyValue_en:"",keyValue_es:""}];newElement.keyName=this.userRoles[i];newElement.keyValue_en=this.userRoles[i];newElement.keyValue_es=this.userRoles[i];tmpRolesList.push(newElement)}//this.rolesList[i]=tmpRolesList;
this.set("formFields.4.items",tmpRolesList)}getFinalToken(userRole){_store.store.dispatch((0,_app_actions.startLoading)());this.ajaxFinalToken({userRole:userRole,userName:this.userName//, partialToken:this.partialToken//, personName:this.userInfoId
})}initAppSession(){// return; 
const field=this.shadowRoot.getElementById(this.formFields[1].name);if(field){field.resetValue()}const field2=this.shadowRoot.getElementById(this.formFields[2].name);if(field2){field2.resetValue()}this.dispatchEvent(new CustomEvent("platform-login-loggedwithsuccess",{bubbles:!0,composed:!0,detail:{}}))}constructor(){super();return;this.userName="labplanet";this.dbUserPassword="vale";this.userName="marc";this.dbUserPassword="aulin";this.userRole="coordinator";this.formFields[1].value=this.userName;this.formFields[2].value=this.dbUserPassword;this.formFields[3].value=this.userRole;this.login();return}}customElements.define("platform-login",PlatformLogin)});