import{PolymerElement,html}from"../../../../node_modules/@polymer/polymer/polymer-element.js";import{connect}from"../../../../node_modules/pwa-helpers/connect-mixin.js";import{store}from"../../../store.js";import{appLogin_formFields,appLogin_ribbon,appLogin_authenticationMessage,appLogin_logoOnTop//, userProfileHome        
}from"../../../config/platform/platform-login/platform-login-settings.js";import"../../../config/platform/platform-login/platform-login-style.js";import{AuthenticationApi}from"../../../platform-mixins/apis/api-authentication.js";import{startLoading,setAppLanguage}from"../Redux/actions/app_actions.js";//import './../../internalComponents/others/language-selectortwoflags.js';
import"../../internalComponents/others/language-selector.js";import("../../../../node_modules/@polymer/paper-dialog/paper-dialog.js");//import '@thuoe/mp4-video-player';
import"../../internalComponents/Dialogs/DialogVideoPlayer/dialog-videoplayer.js";/**
 * `platform-login` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */class PlatformLogin extends AuthenticationApi(connect(store)(PolymerElement)){//(ToastMethods(FrontendSopUser(ProcedureList(UserSession(AuthenticationApi(connect(store)(PolymerElement))))))) {
static get properties(){return{loggedIn:{type:Boolean,observer:"notLoggedIn",notify:!0},appLogin_logoOnTop:{type:String,value:appLogin_logoOnTop},formFields:{type:Array,notify:!0,bubble:!0,value:appLogin_formFields},loading:{type:Boolean,value:!1},appLogin_ribbon:{type:Object,value:appLogin_ribbon},axiosMessage:{type:String,value:appLogin_authenticationMessage},userRoles:Array,selectedLanguage:String,rolesList:{type:Array,value:[]},//videoUrl:{type: String, value:'http://51.75.202.142:8888/myvideos/LP.mp4'},
videoToc:{type:Array,value:[{id:1,label_en:"chapter 1",label_es:"tema 1",src:"http://51.75.202.142:8888/myvideos/LP.mp4"},{id:2,label_en:"Chapter 2",label_es:"tema 2",src:"http://51.75.202.142:8888/myvideos/LP.mp4"}]}}}stateChanged(state){//console.log('soy platform-login y hago stateChanged');
this.selectedLanguage=state.app.user.appLanguage;if(!1==state.app.user.loggedIn){this.notLoggedIn()}}notLoggedIn(){this.set("formFields.1.read_only",!1);// userName
this.set("formFields.2.read_only",!1);// password
this.set("formFields.4.read_only",!0);// roleList          
return}openVideoWindow(){//alert('ooooopening');
//      this.$.videowindowdialog.open();
var elem=this.shadowRoot.getElementById("videowindowdialog");if(elem){elem.open()}//      this.$.videoPlayerDiv.style.visibility=visible;
}VideoWindowVisibility(status){return"visibility:"+status+";"}// closeVideoWindow(){
//   var elem=this.shadowRoot.getElementById("videowindowdialog");
//   if (elem){elem.close();}
//   var elem2=this.shadowRoot.getElementById("videoplayer");
//   if (elem2){elem2.stop();}
// }
static get template(){return html`
        <style include="platform-login-style"></style>
        <style>
        // div {
        //   display: inline-flex;
        //   width: 200px;
        //   height: 200px;
        //   justify-content: center;
        //   align-items: center;
        //   background-color: #e9a9c7;
        //   color: #39464e;
        //   cursor: pointer;
        // }
        
        // @media print {
        //   body.print-element *:not(.print) {
        //     display: none;
        //   }
        // }
        </style>
        <div class="login">
          <div class="appLoginForm" >
            <img src="[[appLogin_logoOnTop.url]]" class="appLoginLogoOnTop"> 
            <div id="language-selector">
              <!-- <language-selectortwoflags></language-selectortwoflags> -->
              <language-selector></language-selector>
            </div>
            <ribbon-element field="{{appLoginRibbonField.0}}"></ribbon-element>
          
            <paper-spinner-lite alt="Authenticating user and password"  width="6px" active="[[loading]]"></paper-spinner-lite>
            <form id="form">
              <template is="dom-repeat" items="{{formFields}}" as="currentfield">       
                <field-controller on-keydown="keyPressed" on-field-button-clicked="fieldButtonClicked" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
              </template>       
            </form>
<!--            <input type="button" on-click="openVideoWindow">video</input>
            <vaadin-button id="triggerSOP" on-click="openVideoWindow" </vaadin-button> -->
          </div>
<!--          <div on-click="{{print_this(this)}}">Print 1</div>
          <div>Print 2</div> -->
          <paper-dialog always-on-top no-cancel-on-outside-click top="4px" id="videowindowdialog" >    
            <dialog-videoplayer index-content="{{videoToc}}" selected-language="{{selectedLanguage}}"></dialog-videoplayer>
          </paper-dialog>          

        `}printme(e){console.log("printme",e)}print_this(elem){document.body.classList.add("print-element");elem.classList.add("print");window.print();document.body.classList.remove("print-element");elem.classList.remove("print")}keyPressed(e){if("Enter"==e.key){if("USER"==e.target.field.name.toUpperCase()){const field=this.shadowRoot.getElementById("password").focus();return}this.login();return}}fieldButtonClicked(e){if("buttonAccess"==e.detail.buttonName){this.login()}if("video"==e.detail.buttonName){this.openVideoWindow()}}onListChange(e){if("userRole"==e.detail.name){this.getFinalToken(e.detail.value)}}login(){this.loading=!0;this.userName=this.formFields[1].value;this.password=this.formFields[2].value;this.dispatchEvent(new CustomEvent("toast",{bubbles:!0,composed:!0,detail:"Validating User "+this.formFields[0].value+" ... "}));var datas=[];datas.dbUserName=this.formFields[1].value;datas.dbUserPassword=this.formFields[2].value;datas.callBackFunction=this.authSuccess.bind(this);datas.callBackFunctionError=this.authError.bind(this);this.ajaxAuthenticate(datas);store.dispatch(setAppLanguage(this.selectedLanguage))}authSuccess(){this.loading=!1}authError(e){this.loading=!1;var message="";switch(this.selectedLanguage){case"es":message=this.axiosMessage.connectedFails.message_es;break;//message=response.data.message_es; break;            
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
this.set("formFields.4.items",tmpRolesList)}getFinalToken(userRole){store.dispatch(startLoading());this.ajaxFinalToken({userRole:userRole,userName:this.userName//, partialToken:this.partialToken//, personName:this.userInfoId
})}initAppSession(){// return; 
const field=this.shadowRoot.getElementById(this.formFields[1].name);if(field){field.resetValue()}const field2=this.shadowRoot.getElementById(this.formFields[2].name);if(field2){field2.resetValue()}this.dispatchEvent(new CustomEvent("platform-login-loggedwithsuccess",{bubbles:!0,composed:!0,detail:{}}))}constructor(){super();//return;
this.userName="labplanet";this.dbUserPassword="vale";this.userRole="edit";this.userName="marc";this.dbUserPassword="aulin";this.userRole="coordinator";// this.userName="wiamag"; //"marc";   
// this.dbUserPassword="lola"; //"aulin";
// this.userRole="defensa"; //"coordinator";
this.formFields[1].value=this.userName;this.formFields[2].value=this.dbUserPassword;this.formFields[3].value=this.userRole;this.login();return}}customElements.define("platform-login",PlatformLogin);