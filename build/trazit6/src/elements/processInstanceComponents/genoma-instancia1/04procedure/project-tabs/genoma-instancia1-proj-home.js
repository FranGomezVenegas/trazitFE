define([
  "../../../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../../../store.js",
  "../../03config/Project/genoma-instancia1-projtab-home-settings.js",
  "../../../../../../node_modules/@alenaksu/json-viewer/build/index.js",
  "../../../../../platform-mixins/functions/fields-methods.js",
  "../../01moduleFunctionality/0module-functions-genoma.js",
], function (
  _polymerElement,
  _connectMixin,
  _store,
  _genomaInstancia1ProjtabHomeSettings,
  _index,
  _fieldsMethods,
  _moduleFunctionsGenoma
) {
  "use strict"; //import '../../../../internalComponents/Elements/table-with-buttons';
  class GenomaInstancia1ProjHome extends (0, _fieldsMethods.FieldsMethods)(
    (0, _moduleFunctionsGenoma.ModuleFunctionsGenoma)(
      (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
    )
  ) {
    stateChanged(state) {
      this.selectedLanguage = state.app.user.appLanguage;
      if (null != state.genomaInstancia1) {
        this.selectedProject = state.genomaInstancia1.selectedProject;
      }
      console.log("proj-home", this.selectedProject);
    }
    static get properties() {
      return {
        windowDefinition: {
          type: Object,
          value: _genomaInstancia1ProjtabHomeSettings.windowDefinition,
        },
        selectedLanguage: { type: String },
        selectedProject: { type: Object },
        selectedObject: { type: Object },
      };
    }
    static get template() {
      return _polymerElement.html`
        <style include="genoma-instancia1-projtab-home-style"></style>    
        <div class="main">
            <div name="elementDefinitionButtons" class="buttonGroup">
                <template is="dom-if" if="[[windowDefinition.displayRefreshButton]]"> 
                    <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
                </template>  
                <template is="dom-if" if="[[windowDefinition.displayButtons]]"> 
                    <template is="dom-repeat" items="{{windowDefinition.buttons}}" as="currentfield">       
                        <field-controller modulearea="STUDIES" id="{{currentfield.name}}"  field="{{currentfield}}"  selected-object="{{selectedProject}}"
                            on-field-button-clicked="fieldButtonClickedForProjects" on-field-list-value-changed="onListChange">
                        </field-controller>
                    </template>
                </template>
            </div>
        </div>
        <json-viewer data="{{selectedProject}}"></json-viewer> 
        `;
    }
  }
  customElements.define(
    "genoma-instancia1-proj-home",
    GenomaInstancia1ProjHome
  );
});
