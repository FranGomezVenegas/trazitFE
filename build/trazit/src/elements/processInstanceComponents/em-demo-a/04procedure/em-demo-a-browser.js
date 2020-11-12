import{PolymerElement,html}from"../../../../../node_modules/@polymer/polymer/polymer-element.js";import{connect}from"../../../../../node_modules/pwa-helpers/connect-mixin.js";import{store}from"../../../../store.js";import"../../../../../node_modules/@polymer/paper-tabs/paper-tabs.js";import"../../../../../node_modules/@polymer/paper-tabs/paper-tab.js";import"../../../../../node_modules/@polymer/iron-pages/iron-pages.js";import{FieldsMethods}from"../../../../platform-mixins/functions/fields-methods.js";import{FunctionsEnvMonit}from"../01moduleFunctionality/functions-env-monit.js";import{em_browser_tabs,browserHome_defaultTab}from"../03config/Browser/em-demo-a-browser-settings.js";import"../03config/Browser/em-demo-a-browser-settings.js";import"./browser-tabs/em-demo-a-br-sample.js";import"./browser-tabs/em-demo-a-br-incubator.js";import"./browser-tabs/em-demo-a-br-batch.js";import"./browser-tabs/em-demo-a-br-prodlot.js";import"./browser-tabs/em-demo-a-datamining.js";class emDemoABrowser extends FieldsMethods(FunctionsEnvMonit(connect(store)(PolymerElement))){stateChanged(state){this.selectedLanguage=state.app.user.appLanguage}static get properties(){return{thisTabName:{type:String,value:"em-demo-a-browser"},tabs:{type:Object,value:em_browser_tabs},currentTab:[],currentSubTab:{type:String,value:browserHome_defaultTab},selectedLanguage:String}}static get template(){return html`
        <style include="em-demo-a-browser-style"></style>
        <!--        <div class="wrapper">
            <div id="program_definition" class="programTabs">        -->
                <paper-tabs selected="{{currentSubTab}}" attr-for-selected="name" noink scrollable>
                    <template is="dom-repeat" items="[[tabs]]" as="tab">                
                        <paper-tab class="tabItem"  esign-required="[[tab.esign_required]]" 
                            confirmuser-required="[[tab.confirmUser_required]]" 
                             name="[[tab.name]]" tab-name="[[tab.tabName]]"
                            tab-index="{{index}}">{{tabLabelValue(selectedLanguage, tab)}} 
                        </paper-tab>                
                    </template>
                </paper-tabs>
                <iron-pages selected="[[currentSubTab]]" attr-for-selected="name">                
                    <em-demo-a-br-sample name="sample"> </em-demo-a-br-sample>  
                    <em-demo-a-br-incubator name="incubator"> </em-demo-a-br-incubator>  
                    <em-demo-a-br-batch name="batch"> </em-demo-a-br-batch>  
                    <em-demo-a-br-prodlot name="prodlot"> </em-demo-a-br-prodlot>  
                    <em-demo-a-datamining name="datamining"> </em-demo-a-datamining>  
                </iron-pages>
<!--            </div>  -->
        </div> 
        `}tabSelected(e){var curTab=[];curTab.tabName=e.currentTarget.name;curTab.name=e.currentTarget.name;// Las funcionalidad de esign y/o confirmar usuario no funciona para subpestañas aún, por eso envian falso.
curTab.currTabEsignRequired=!1;curTab.currTabConfirmUserRequired=!1;this.currentTab=curTab;return}}customElements.define("em-demo-a-browser",emDemoABrowser);