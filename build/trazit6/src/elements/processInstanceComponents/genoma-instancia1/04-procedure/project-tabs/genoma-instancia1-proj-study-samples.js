define(["../../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../../store.js","../../../../internalComponents/Grids/vaadingrid-lit-singleselect.js","../../../../internalComponents/Charts/chart-controller.js","../../03config/Project/genoma-instancia1-projtab-study-samples-settings.js","../../../../../platform-mixins/functions/fields-methods.js","../../01moduleFunctionality/0module-functions-genoma.js","../../01moduleFunctionality/genoma-instancia1-webcomponent-project.js","../../../../internalComponents/Elements/table-with-buttons.js"],function(_polymerElement,_connectMixin,_store,_vaadingridLitSingleselect,_chartController,_genomaInstancia1ProjtabStudySamplesSettings,_fieldsMethods,_moduleFunctionsGenoma,_genomaInstancia1WebcomponentProject,_tableWithButtons){"use strict";class GenomaInstancia1ProjStudySamples extends(0,_fieldsMethods.FieldsMethods)((0,_moduleFunctionsGenoma.ModuleFunctionsGenoma)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement))){stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(null!=state.genomaInstancia1){this.selectedStudy=state.genomaInstancia1.selectedStudy}}static get properties(){return{windowDefinition:{type:Object,value:_genomaInstancia1ProjtabStudySamplesSettings.windowDefinition},selectedLanguage:{type:String},selectedProject:{type:Object},selectedProject2:{type:Object},selectedSample:{type:Object}}}static get template(){return _polymerElement.html`
        <style include="genoma-instancia1-projtab-study-samples-style"></style>            
        <div class="main">
            <table-with-buttons id="samples" element-definition="{{windowDefinition.elementTable1}}"
                modulearea="STUDY_INDIVIDUAL_SAMPLES" table-data="{{selectedStudy.study_individual_sample}}" selected-object="{{selectedSample}}"
            ></table-with-buttons>
            <table-with-buttons modulearea="STUDY_INDIVIDUAL_SAMPLE_VARIABLES" id="samplevariables" element-definition="{{windowDefinition.elementTable2}}"
                 table-data="{{selectedSample.study_variable_values}}" selected-object="{{selectedObject}}"
            ></table-with-buttons>
        </div>


        `}}customElements.define("genoma-instancia1-proj-study-samples",GenomaInstancia1ProjStudySamples)});