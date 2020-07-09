import{PolymerElement,html}from"../../../../../../node_modules/@polymer/polymer/polymer-element.js";import{connect}from"../../../../../../node_modules/pwa-helpers/connect-mixin.js";import{store}from"../../../../../store.js";import"../../../../internalComponents/Charts/chart-controller.js";import{windowDefinition}from"../../03config/Programs/em-demo-a-progtab-home-settings.js";import"../../03config/Programs/em-demo-a-progtab-home-settings.js";import{FieldsMethods}from"../../../../../platform-mixins/functions/fields-methods.js";class EmDemoAProgHome extends FieldsMethods(connect(store)(PolymerElement)){stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(null!=state.emDemoA){this.selectedProgram=state.emDemoA.selectedProgram}}static get properties(){return{windowDefinition:{type:Object,value:windowDefinition},selectedLanguage:{type:String},selectedProgram:{type:Object}}}static get template(){return html`
        <style include="em-demo-a-progtab-home-style"></style>   
        home 
        <div class="main">
            <p class="tableTitle">{{labelValue(selectedLanguage, windowDefinition.windowTitle)}}  {{selectedProgram.name}}</p>
            <template is="dom-repeat" items="[[windowDefinition.charts]]" as="curchart">                                    
                <chart-controller class="chart" chart-definition="{{curchart}}" data-object="{{selectedProgram}}"></chart-controller>
            </template>
        </div>
        `}}customElements.define("em-demo-a-prog-home",EmDemoAProgHome);