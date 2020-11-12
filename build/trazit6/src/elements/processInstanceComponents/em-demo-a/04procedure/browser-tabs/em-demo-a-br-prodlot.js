define([
  "../../../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../../../store.js",
  "../../01moduleFunctionality/endpoints-frontend-env-monit-browser.js",
  "../../03config/tablefield_labels.js",
  "../../01moduleFunctionality/em-demo-a-webcomponent-env-monit.js",
  "../../../../../platform-mixins/functions/fields-methods.js",
  "../../03config/Browser/em-demo-a-browser-prodlot-settings.js",
  "../../../../internalComponents/Charts/chart-controller.js",
], function (
  _polymerElement,
  _connectMixin,
  _store,
  _endpointsFrontendEnvMonitBrowser,
  _tablefield_labels,
  _emDemoAWebcomponentEnvMonit,
  _fieldsMethods,
  _emDemoABrowserProdlotSettings,
  _chartController
) {
  "use strict";
  class emDemoABrProdlot extends (0, _tablefield_labels.tableFieldLabel)(
    (0, _endpointsFrontendEnvMonitBrowser.FrontendEndpointsEnvMonitBrowser)(
      (0, _fieldsMethods.FieldsMethods)(
        (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
      )
    )
  ) {
    stateChanged(state) {
      this.selectedLanguage = state.app.user.appLanguage;
      if (null != state.emDemoA) {
        if (state.emDemoA.browserSelectedProdLot) {
          this.selProdLot = state.emDemoA.browserSelectedProdLot; //console.log('this.selProdLot', this.selProdLot);
        }
      }
    }
    static get properties() {
      return {
        windowContent: {
          type: Array,
          notify: !0,
          value: _emDemoABrowserProdlotSettings.windowContent,
        },
        browserProdLotFields: {
          type: Object,
          notify: !0,
          value: _emDemoABrowserProdlotSettings.browserProdLotFields,
        },
        displayChart: Boolean,
        selectedLanguage: String,
        selProdLot: { type: Object, notify: !0 },
        selCharts: { type: Array },
        selProdLotLastNtempReadings: { type: Array },
      };
    }
    static get template() {
      return _polymerElement.html`
        <style include="em-demo-a-browser-prodlot-style"></style> 
        <em-demo-a-webcomponent-env-monit id="myElements"></em-demo-a-webcomponent-env-monit> 
        <div class="mainDiv"> <!--This is the Div 1 in the picture-->        
            <div class="filter" class="buttonGroup">
                <template is="dom-repeat" items="{{windowContent.fields}}" as="currentfield">       
                    <field-controller on-keydown="keyPressed" on-field-button-clicked="RunReport" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                </template>     
                <template is="dom-repeat" items="{{windowContent.buttons}}" as="currentfield">       
                    <field-controller on-keydown="keyPressed" on-field-button-clicked="prodLotFieldButtonClicked" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                </template>     
            </div>       
            <div class="detailMain"> 
                <div id="prodlot" class="detailDataSection"> 
                    <p><h2><b>{{getTableFieldLabel(browserProdLotFields.schemaName, browserProdLotFields.tableName, '*production_lot_info_title', selectedLanguage)}}</h2></p>
                    <template is="dom-repeat" items="[[selProdLot.prodLotFieldsToDisplay]]">  
                        <p><b>{{getTableFieldLabel(browserProdLotFields.schemaName, browserProdLotFields.tableName, item.field_name, selectedLanguage)}}:</b> {{item.field_value}}<p></p>
                    </template>
                </div>            
                <div id="sampleCharts" class="detailDataSection">                 
                    <template is="dom-repeat" items="[[windowContent.charts]]" as="curchart">                                    
                        <chart-controller class="chart" chart-definition="{{curchart}}" data-object="{{selProdLot}}"></chart-controller>
                    </template>
                </div>  
                <p><h2><b>[[selProdLot.sample.length]] {{getTableFieldLabel(browserProdLotFields.schemaName, browserProdLotFields.tableName, '*sample_info_title', selectedLanguage)}}</h2></p>
                <template is="dom-repeat" items="[[selProdLot.sample]]" as="smp">  
                    <template is="dom-if" if="{{smp.sample_id}}" >
                        <div id="sampledata" class="detailDataSection"> 
                        {{smp.sample_id}}
                        <template is="dom-repeat" items="[[selProdLot.sampleFieldsToDisplay]]" as="smpfld">  
                            <p><b>{{getTableFieldLabel(browserProdLotFields.schemaName, browserProdLotFields.tableName, smpfld.field_name, selectedLanguage)}}:</b> {{getFieldValueFromRecord(smp, smpfld.field_name)}}<p></p>                    
                        </template>
                        </div>            
                    </template>
                </template>
            </div> 
        </div>
        `;
    }
    keyPressed(e) {
      if (e.code.includes("Enter")) {
        this.RunReport();
        return;
      }
    }
    RunReport() {
      var data = [];
      data.prodLotName = this.windowContent.fields[0].value; //if (this.windowContent.fields[1].value.length>0){data.startDate=this.windowContent.fields[1].value;}
      //if (this.windowContent.fields[2].value.length>0){data.endDate=this.windowContent.fields[2].value;}
      if (this.browserProdLotFields.prodLotFieldToRetrieve) {
        data.prodLotFieldToRetrieve = this.browserProdLotFields.prodLotFieldToRetrieve;
      }
      if (this.browserProdLotFields.prodLotFieldsToDisplay) {
        data.prodLotFieldsToDisplay = this.browserProdLotFields.prodLotFieldsToDisplay;
      }
      if (this.browserProdLotFields.sampleFieldToRetrieve) {
        data.sampleFieldToRetrieve = this.browserProdLotFields.sampleFieldToRetrieve;
      }
      if (this.browserProdLotFields.sampleFieldsToDisplay) {
        data.sampleFieldsToDisplay = this.browserProdLotFields.sampleFieldsToDisplay;
      }
      if (this.browserProdLotFields.sampleWhereFieldsName) {
        data.sampleWhereFieldsName = this.browserProdLotFields.sampleWhereFieldsName;
      }
      if (this.browserProdLotFields.sampleWhereFieldsValue) {
        data.sampleWhereFieldsValue = this.browserProdLotFields.sampleWhereFieldsValue;
      }
      if (this.browserProdLotFields.sampleGroups) {
        data.sampleGroups = this.browserProdLotFields.sampleGroups;
      }
      this.getBrowserSelectedProdLotData(data);
    }
  }
  customElements.define("em-demo-a-br-prodlot", emDemoABrProdlot);
});
