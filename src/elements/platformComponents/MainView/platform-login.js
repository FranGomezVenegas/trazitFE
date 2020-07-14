import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import {store} from '../../../store';
import {appLogin_formFields, appLogin_ribbon, appLogin_authenticationMessage, appLogin_logoOnTop//, userProfileHome        
        } from '../../../config/platform/platform-login/platform-login-settings';
import '../../../config/platform/platform-login/platform-login-style';

import {AuthenticationApi} from '../../../platform-mixins/apis/api-authentication';
import {startLoading, setAppLanguage} from '../Redux/actions/app_actions';

import './../../internalComponents/others/language-selectortwoflags.js';

/**
 * `platform-login` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class PlatformLogin extends AuthenticationApi(connect(store)(PolymerElement)) { //(ToastMethods(FrontendSopUser(ProcedureList(UserSession(AuthenticationApi(connect(store)(PolymerElement))))))) {
    static get properties() {
        return {
            loggedIn: {type: Boolean, observer: 'notLoggedIn', notify: true},
            appLogin_logoOnTop: {type: String, value:appLogin_logoOnTop},
            formFields: {type: Array, notify: true, bubble: true, value: appLogin_formFields},
            loading: {type: Boolean,value: false},
            appLogin_ribbon:{type: Object, value:appLogin_ribbon},
            axiosMessage: {type: String, value:appLogin_authenticationMessage},
            userRoles: Array, 
            selectedLanguage: String, 
        }
    }
    stateChanged(state){
      this.selectedLanguage = state.app.user.appLanguage;
      if (state.app.user.loggedIn==false){
          this.notLoggedIn();
      }
    }               
    notLoggedIn(){
        this.set('formFields.1.read_only', false); // userName
        this.set('formFields.2.read_only', false); // password
        this.set('formFields.4.read_only', true); // roleList          
        return;
    }
    static get template() {
        return html`
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
        `;
    }
    keyPressed(e){      
        if(e.key=="Enter") {
          if (e.target.field.name.toUpperCase()=="USER"){        
            const field=this.shadowRoot.getElementById('password').focus();
            return;
          }
          this.login();
          return;
        }   
    }  
    fieldButtonClicked(e) {        
        if (e.detail.buttonName=="buttonAccess"){                      
          this.login();
        }
    }    
    onListChange(e) {    
      if (e.detail.name=="userRole"){ 
        this.getFinalToken(e.detail.value);}
    }    
    login() { 
        this.loading=true;
        this.userName=this.formFields[1].value;       
        this.password=this.formFields[2].value;
        this.dispatchEvent(new CustomEvent('toast', {
          bubbles: true,        composed: true,
          detail: 'Validating User '+this.formFields[0].value+' ... '
            }));          
        var datas = [];        
        datas.dbUserName=this.formFields[1].value ;    
        datas.dbUserPassword=this.formFields[2].value ;
        datas.callBackFunction=this.authSuccess.bind(this);
        datas.callBackFunctionError=this.authError.bind(this);
        this.ajaxAuthenticate(datas);
        store.dispatch(setAppLanguage(this.selectedLanguage)); 
    }   
    authSuccess(){
        this.loading=false;
    }
    authError(e) {
        this.loading=false;      
        var message=''; 
        switch(this.selectedLanguage){
            case 'es': message=this.axiosMessage.connectedFails.message_es; break; //message=response.data.message_es; break;            
            default: message=this.axiosMessage.connectedFails.message_en; break; //message=response.data.message_en; break;
        }          
        this.set('formFields.1.read_only', false); // userName
        this.set('formFields.2.read_only', false); // password
        this.set('formFields.4.read_only', true); // roleList    
        this.dispatchEvent(new CustomEvent('toast-error', {
            bubbles: true,        
            composed: true,
            detail: message
        }));
    }           
    fillUserRoleList() {      
        if (this.userRoles.length==1){
            this.toastSuccessMessageForSpecificLanguage(this.axiosMessage.connectedSuccess_singleRole, this.selectedLanguage);
        }else{
            this.toastSuccessMessageForSpecificLanguage(this.axiosMessage.connectedSuccess, this.selectedLanguage);            
        }
        const field=this.shadowRoot.getElementById(this.formFields[1].name);
        if (field){field.enable();} 
        const field2=this.shadowRoot.getElementById(this.formFields[2].name);
        if (field2){field2.enable();} 
// #Incident. enable does not work
//const field3=this.shadowRoot.getElementById(this.formFields[4].name);
//if (field3){field3.enable();} 
this.set('formFields.4.read_only', false); // roleList                  
        var i;
        if (this.userRoles.length==1){
          this.getFinalToken(this.userRoles[0]);
          return;
        }  
//console.log('fillUserRoleList');
        var tmpRolesList=[];
        for (i = 0; i < this.userRoles.length; i++) { 
          var newElement=[{"keyName":'', "keyValue_en":'',"keyValue_es":''}];
          newElement.keyName=this.userRoles[i]; 
          newElement.keyValue_en=this.userRoles[i]; 
          newElement.keyValue_es=this.userRoles[i]; 
          tmpRolesList.push(newElement);
        }
        //this.rolesList[i]=tmpRolesList;
        this.set('formFields.4.items', tmpRolesList);
      }

      getFinalToken(userRole) {        
        store.dispatch(startLoading());
        this.ajaxFinalToken({
          userRole:userRole, userName:this.userName //, partialToken:this.partialToken//, personName:this.userInfoId
        });      
      }        
      initAppSession() {  
       // return; 
        const field=this.shadowRoot.getElementById(this.formFields[1].name);
        if (field){field.resetValue();} 
        const field2=this.shadowRoot.getElementById(this.formFields[2].name);
        if (field2){field2.resetValue();} 
        this.dispatchEvent(new CustomEvent('platform-login-loggedwithsuccess', {
            bubbles: true,
            composed: true,
            detail: {}
        }));    
      }
      constructor() {        
        super();
        //return;      
        this.userName="labplanet";   
        this.dbUserPassword="vale";
        this.userRole="edit";
        this.userName="marc";   
        this.dbUserPassword="aulin";
        this.userRole="coordinator";
        this.formFields[1].value=this.userName;
        this.formFields[2].value=this.dbUserPassword;
        this.formFields[3].value=this.userRole;
        this.login();
        return;
    }
}
customElements.define('platform-login', PlatformLogin);