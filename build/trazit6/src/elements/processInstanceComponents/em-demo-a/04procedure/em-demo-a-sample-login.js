define([
  "../../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../../store.js",
  "./program-elements/em-demo-a-program-selector.js",
  "./program-tabs/em-demo-a-prog-configcalendar.js",
  "../03config/em-demo-a-sample-login-settings.js",
  "../../../../platform-mixins/functions/fields-methods.js",
], function (
  _polymerElement,
  _connectMixin,
  _store,
  _emDemoAProgramSelector,
  _emDemoAProgConfigcalendar,
  _emDemoASampleLoginSettings,
  _fieldsMethods
) {
  "use strict";
  class emDemoASampleLogin extends (0, _fieldsMethods.FieldsMethods)(
    (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
  ) {
    static get properties() {
      return {
        selectedProgram: { type: Object, notify: !0 },
        programs: { type: Object },
        tabsDefinition: {
          type: Object,
          value: _emDemoASampleLoginSettings.tabsDefinition,
        },
      };
    }
    static get template() {
      return _polymerElement.html`
            <style include="em-demo-a-sample-login-style"></style>
            <vaadin-button on-click="loadData"><iron-icon icon="refresh"></iron-icon></vaadin-button>
            <em-demo-a-program-selector id="program_selector" programs="{{programs}}" selected-program="{{selectedProgram}}"></em-demo-a-program-selector>            
            <em-demo-a-prog-points-map id="em-demo-a-sampling-points-map" selected-program="{{selectedProgram}}"> </em-demo-a-prog-points-map>
            <em-demo-a-prog-configcalendar selected-program="{{selectedProgram}}" display-calendar="{{tabsDefinition.configCalendar.displayCalendar}}" display-table="{{tabsDefinition.configCalendar.displayTable}}" id="em-demo-a-configcalendar" selected-program="{{selectedProgram}}"> </em-demo-a-prog-configcalendar>            
        `;
    } //     ready(){
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
  }
  customElements.define("em-demo-a-sample-login", emDemoASampleLogin);
});
