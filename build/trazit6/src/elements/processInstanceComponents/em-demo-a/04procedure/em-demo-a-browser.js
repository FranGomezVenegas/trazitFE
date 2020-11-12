define([
  "../../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../../store.js",
  "../../../../../node_modules/@polymer/paper-tabs/paper-tabs.js",
  "../../../../../node_modules/@polymer/paper-tabs/paper-tab.js",
  "../../../../../node_modules/@polymer/iron-pages/iron-pages.js",
  "../../../../platform-mixins/functions/fields-methods.js",
  "../01moduleFunctionality/functions-env-monit.js",
  "../03config/Browser/em-demo-a-browser-settings.js",
  "./browser-tabs/em-demo-a-br-sample.js",
  "./browser-tabs/em-demo-a-br-incubator.js",
  "./browser-tabs/em-demo-a-br-batch.js",
  "./browser-tabs/em-demo-a-br-prodlot.js",
  "./browser-tabs/em-demo-a-datamining.js",
], function (
  _polymerElement,
  _connectMixin,
  _store,
  _paperTabs,
  _paperTab,
  _ironPages,
  _fieldsMethods,
  _functionsEnvMonit,
  _emDemoABrowserSettings,
  _emDemoABrSample,
  _emDemoABrIncubator,
  _emDemoABrBatch,
  _emDemoABrProdlot,
  _emDemoADatamining
) {
  "use strict";
  class emDemoABrowser extends (0, _fieldsMethods.FieldsMethods)(
    (0, _functionsEnvMonit.FunctionsEnvMonit)(
      (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
    )
  ) {
    stateChanged(state) {
      this.selectedLanguage = state.app.user.appLanguage;
    }
    static get properties() {
      return {
        thisTabName: { type: String, value: "em-demo-a-browser" },
        tabs: { type: Object, value: _emDemoABrowserSettings.em_browser_tabs },
        currentTab: [],
        currentSubTab: {
          type: String,
          value: _emDemoABrowserSettings.browserHome_defaultTab,
        },
        selectedLanguage: String,
      };
    }
    static get template() {
      return _polymerElement.html`
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
        `;
    }
    tabSelected(e) {
      var curTab = [];
      curTab.tabName = e.currentTarget.name;
      curTab.name = e.currentTarget.name; // Las funcionalidad de esign y/o confirmar usuario no funciona para subpestañas aún, por eso envian falso.
      curTab.currTabEsignRequired = !1;
      curTab.currTabConfirmUserRequired = !1;
      this.currentTab = curTab;
      return;
    }
  }
  customElements.define("em-demo-a-browser", emDemoABrowser);
});
