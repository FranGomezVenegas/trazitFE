import{PolymerElement,html}from"../../../../../../node_modules/@polymer/polymer/polymer-element.js";import{connect}from"../../../../../../node_modules/pwa-helpers/connect-mixin.js";import{store}from"../../../../../store.js";import"../../../../../../node_modules/@polymer/iron-selector/iron-selector.js";import"../../../../../../node_modules/@polymer/iron-collapse/iron-collapse.js";import{proceduresListPaneTitle,tabNotOpenableByCertification}from"./procedures-list-pane-settings.js";import"./procedures-list-pane-style.js";import{isTabOpenableWhenNotSopCertified}from"../../../../../config/platform/logic/platform-config.js";import{addTab,setCurrentTab}from"../../../Redux/actions/tabs_actions.js";import{FieldsMethods}from"../../../../../platform-mixins/functions/fields-methods.js";import{ToastMethods}from"../../../../../platform-mixins/functions/toast-methods.js";class ProceduresListPane extends ToastMethods(FieldsMethods(connect(store)(PolymerElement))){static get properties(){return{procedureList:{type:Object,notify:!0},horizontal:{type:Boolean},opened:{type:Boolean,value:!0,reflectToAttribute:!0},noAnimation:{type:Boolean},selectedLanguage:{type:String},paneTitle:{type:Object,value:proceduresListPaneTitle},tabNotOpenableByCertification:{type:Object,value:tabNotOpenableByCertification},titleValue:String,titleIcon:String,fieldTitlePendingSOP:{type:Object,value:{label_en:"You have pending SOPs",label_es:"Tienes PNTs pendientes"}}}}stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;this.getText();if(this.selectedLanguage!=state.app.user.appLanguage){this.selectedLanguage=state.app.user.appLanguage}if(this.procedureList!=state.app.user.appProcedureList){this.procedureList=state.app.user.appProcedureList}}toggle(){this.$.collapse.toggle();this.getText()}getText(){if(this.opened){this.titleValue=this.labelValue(this.selectedLanguage,this.paneTitle.open);this.titleIcon=this.paneTitle.open.icon_name;return}this.titleValue=this.labelValue(this.selectedLanguage,this.paneTitle.closed);this.titleIcon=this.paneTitle.closed.icon_name}static get template(){return html`      
        <style include="procedures-list-pane-style"></style>
        <div id="title" class="title">
            <iron-icon icon="[[titleIcon]]" on-click="toggle"></iron-icon>
            <vaadin-button id="triggerProcedures" on-click="toggle" aria-expanded\$="[[opened]]" aria-controls="collapse">[[titleValue]]</vaadin-button>
        </div>   
        <iron-collapse id="collapse" hidden="{{!opened}}" opened="{{opened}}" horizontal="[[horizontal]]" no-animation="[[noAnimation]]" tabindex="0">            
            <template is="dom-repeat" items="{{procedureList.procedures}}" as="currprocedure">   
                <div class="title">
                    <template is="dom-repeat"  items="{{currprocedure.icons_up}}" as="currentfield">                    
                        <field-controller style="padding-top: 0px; padding-bottom: 0px;" id="{{currentfield.name}}" on-field-button-clicked="crearTab" tab-index="{{index}}" field="{{currentfield}}" procedure="{{currprocedure}}"></field-controller>            
                    </template>            
                </div>         
                <template is="dom-repeat"  items="{{currprocedure.definition}}" as="currentfield">                    
                    <field-controller title="{{fieldTitlePendingSOP}}" style="padding-top: 0px; padding-bottom: 0px;" id="{{currentfield.name}}" on-field-tree-list-clicked="crearTab" tab-index="{{index}}" field="{{currentfield}}" procedure="{{currprocedure}}"></field-controller>            
                </template>            
                <div class="title">
                    <template is="dom-repeat"  items="{{currprocedure.icons_down}}" as="currentfield">                    
                        <field-controller style="padding-top: 0px; padding-bottom: 0px;" id="{{currentfield.name}}" on-field-button-clicked="crearTab" tab-index="{{index}}" field="{{currentfield}}" procedure="{{currprocedure}}"></field-controller>            
                    </template>            
                </div>         
            </template> 
        </iron-collapse>   
        `}crearTab(e){if(!isTabOpenableWhenNotSopCertified){if(null==e.detail.procEvent.sops_passed||!1==e.detail.procEvent.sops_passed){this.toastSuccessMessage(this.tabNotOpenableByCertification);return}}var esignRequired=!1;if(!e.detail.procEvent.esign_required){esignRequired=!1}else{esignRequired=e.detail.procEvent.esign_required}var confirmUserRequired=!1;if(!e.detail.procEvent.confirm_required){confirmUserRequired=!1}else{confirmUserRequired=e.detail.procEvent.confirm_required}e.stopPropagation();store.dispatch(addTab({lp_frontend_page_name:e.detail.procEvent.lp_frontend_page_name,tabName:e.detail.procedure.name+"-"+e.detail.procEvent.lp_frontend_page_name,tabLabel_en:e.detail.procedure.label_en+"-"+e.detail.procEvent.label_en,tabLabel_es:e.detail.procedure.label_es+"-"+e.detail.procEvent.label_es,sop_list:e.detail.procEvent.sops.sop_list,sops:e.detail.procEvent.sops,sops_passed:e.detail.procEvent.sops_passed,procedure:e.detail.procedure,tabEsignRequired:esignRequired,tabConfirmUserRequired:confirmUserRequired}));var curTab=[];curTab.tabName=e.detail.procedure.name+"-"+e.detail.procEvent.lp_frontend_page_name;curTab.sops=e.detail.procEvent.sops,curTab.currTabEsignRequired=esignRequired;curTab.currTabConfirmUserRequired=confirmUserRequired;store.dispatch(setCurrentTab(curTab))}}customElements.define("procedures-list-pane",ProceduresListPane);