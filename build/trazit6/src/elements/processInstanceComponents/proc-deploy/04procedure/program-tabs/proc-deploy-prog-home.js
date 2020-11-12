define(["../../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../../store.js","../../../../internalComponents/Charts/chart-controller.js","../../03config/Programs/proc-deploy-progtab-home-settings.js","../../../../../platform-mixins/functions/fields-methods.js"],function(_polymerElement,_connectMixin,_store,_chartController,_procDeployProgtabHomeSettings,_fieldsMethods){"use strict";// import '@polymer/paper-tabs/paper-tabs';
// import '@polymer/paper-tabs/paper-tab';
// import '@polymer/iron-pages/iron-pages';
class procDeployProgHome extends(0,_fieldsMethods.FieldsMethods)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)){stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(null!=state.procDeploy){this.selectedProgram=state.procDeploy.selectedProgram}}static get properties(){return{windowDefinition:{type:Object,value:_procDeployProgtabHomeSettings.windowDefinition},selectedLanguage:{type:String},selectedProgram:{type:Object},homeTabSubTabs:{type:Object,value:_procDeployProgtabHomeSettings.em_home_tab_subTabs},currentSubTab:{type:String,value:_procDeployProgtabHomeSettings.programHome_defaultTab},hometab_area:{type:Object,value:_procDeployProgtabHomeSettings.hometab_area}}}static get template(){return _polymerElement.html`
        <style include="proc-deploy-progtab-home-style"></style>   
        <div id="program_definition" class="programTabs">           
            <paper-tabs selected="{{currentSubTab}}" attr-for-selected="name" noink scrollable>
                <template is="dom-repeat" items="[[homeTabSubTabs]]" as="tab">                
                    <paper-tab class="tabItem"  esign-required="[[tab.esign_required]]" 
                        confirmuser-required="[[tab.confirmUser_required]]" 
                        on-click="tabSelected" name="[[tab.tabName]]" tab-name="[[tab.tabName]]"
                        tab-index="{{index}}">{{tabLabelValue(selectedLanguage, tab)}} 
                    </paper-tab>                
                </template>
            </paper-tabs>
            <iron-pages selected="[[currentSubTab]]" attr-for-selected="id">    
            {{id}}          
                <div class="main" id="hometab_home">
                    <p class="tableTitle">{{labelValue(selectedLanguage, windowDefinition.windowTitle)}}  {{selectedProgram.name}}</p>
                    <template is="dom-repeat" items="[[windowDefinition.charts]]" as="curchart">                                    
                        <chart-controller class="chart" chart-definition="{{curchart}}" data-object="{{selectedProgram}}"></chart-controller>
                    </template>
                </div>  
                <div class="main" id="hometab_area">
                    <p class="tableTitle">{{labelValue(selectedLanguage, hometab_area.windowTitle)}}  {{selectedProgram.name}}</p>
                    <template is="dom-repeat" items="[[hometab_area.charts]]" as="curchart">                                    
                        <chart-controller class="chart" chart-definition="{{curchart}}" data-object="{{selectedProgram}}"></chart-controller>
                    </template>
                </div>  
            </iron-pages> 
        </div>



        `}}customElements.define("proc-deploy-prog-home",procDeployProgHome)});