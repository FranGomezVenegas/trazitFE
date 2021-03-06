import{PolymerElement,html}from"../../../../../node_modules/@polymer/polymer/polymer-element.js";import{connect}from"../../../../../node_modules/pwa-helpers/connect-mixin.js";import{store}from"../../../../store.js";import"./program-elements/em-demo-a-program-selector.js";import"./program-tabs/em-demo-a-prog-configcalendar.js";import"../03config/em-demo-a-sample-login-settings.js";import{tabsDefinition}from"../03config/em-demo-a-sample-login-settings.js";import{FieldsMethods}from"../../../../platform-mixins/functions/fields-methods.js";class emDemoASampleLogin extends FieldsMethods(connect(store)(PolymerElement)){static get properties(){return{selectedProgram:{type:Object,notify:!0},programs:{type:Object},tabsDefinition:{type:Object,value:tabsDefinition}}}static get template(){return html`
            <style include="em-demo-a-sample-login-style"></style>
            <vaadin-button on-click="loadData"><iron-icon icon="refresh"></iron-icon></vaadin-button>
            <em-demo-a-program-selector id="program_selector" programs="{{programs}}" selected-program="{{selectedProgram}}"></em-demo-a-program-selector>            
            <em-demo-a-prog-points-map id="em-demo-a-sampling-points-map" selected-program="{{selectedProgram}}"> </em-demo-a-prog-points-map>
            <em-demo-a-prog-configcalendar selected-program="{{selectedProgram}}" display-calendar="{{tabsDefinition.configCalendar.displayCalendar}}" display-table="{{tabsDefinition.configCalendar.displayTable}}" id="em-demo-a-configcalendar" selected-program="{{selectedProgram}}"> </em-demo-a-prog-configcalendar>            
        `}//     ready(){   
//         //console.log('ready fire');     
//         super.ready();
//         //this.loadData();
//     }    
//     loadData(){
//         if ( (!this.appOpenTabs) || (!this.thisTabName) ){return;}
//         if (isTabOpn(this.appOpenTabs, this.thisTabName)){
//             this.getActivePrograms();
//             this.getActiveProductionLotsList({
//                 finalToken:this.finalToken, schemaPrefix:this.schemaPrefix, actionName:'GET_ACTIVE_PRODUCTION_LOTS'
//             });               
//         }
//     }   
//     getActivePrograms(){
//         this.getPrograms({
//             finalToken:this.finalToken, schemaPrefix:this.schemaPrefix, actionName:'GET_PROGRAMS'
//         });  
//     }
}customElements.define("em-demo-a-sample-login",emDemoASampleLogin);