define(["../../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../../store.js","../../../../internalComponents/Charts/chart-controller.js","../../03config/Programs/em-demo-a-progtab-home-settings.js","../../../../../platform-mixins/functions/fields-methods.js"],function(_polymerElement,_connectMixin,_store,_chartController,_emDemoAProgtabHomeSettings,_fieldsMethods){"use strict";class EmDemoAProgHome extends(0,_fieldsMethods.FieldsMethods)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)){stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(null!=state.emDemoA){this.selectedProgram=state.emDemoA.selectedProgram}}static get properties(){return{windowDefinition:{type:Object,value:_emDemoAProgtabHomeSettings.windowDefinition},selectedLanguage:{type:String},selectedProgram:{type:Object}}}static get template(){return _polymerElement.html`
        <style include="em-demo-a-progtab-home-style"></style>   
        home 
        <div class="main">
            <p class="tableTitle">{{labelValue(selectedLanguage, windowDefinition.windowTitle)}}  {{selectedProgram.name}}</p>
            <template is="dom-repeat" items="[[windowDefinition.charts]]" as="curchart">                                    
                <chart-controller class="chart" chart-definition="{{curchart}}" data-object="{{selectedProgram}}"></chart-controller>
            </template>
        </div>
        `}}customElements.define("em-demo-a-prog-home",EmDemoAProgHome)});