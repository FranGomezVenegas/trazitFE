define([
  "../../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../../store.js",
  "../../../../platform-mixins/functions/fields-methods.js",
  "../../../internalComponents/Grids/vaadingrid-lit-singleselect.js",
  "../01moduleFunctionality/em-demo-a-webcomponent-env-monit-samples.js",
  "../01moduleFunctionality/functions-env-monit-samples.js",
  "../01moduleFunctionality/endpoints-frontend-env-monit-samples.js",
  "../03config/em-demo-a-person-sampling-settings.js",
], function (
  _polymerElement,
  _connectMixin,
  _store,
  _fieldsMethods,
  _vaadingridLitSingleselect,
  _emDemoAWebcomponentEnvMonitSamples,
  _functionsEnvMonitSamples,
  _endpointsFrontendEnvMonitSamples,
  _emDemoAPersonSamplingSettings
) {
  "use strict"; // import '../../../internalComponents/grid-components/vaadingrid-singleselectrunaction.js'; borrado por refactoring
  //import '../01moduleFunctionality/env-monit-elements-sample.js';
  //import {FrontendEnvMonitSample} from '../01moduleFunctionality/frontend-env-monit-sample.js';
  //import '../01moduleFunctionality/env-monit-elements.js';
  //import {FrontendEnvMonit} from '../01moduleFunctionality/frontend-env-monit.js';
  //import {EmDemoAapiEnvMonit} from '../01moduleFunctionality/api-env-monit.js';
  //'../03config/config-process.js';
  //FrontendEnvMonitSample
  class emDemoASampleSampling extends (0, _fieldsMethods.FieldsMethods)(
    (0, _endpointsFrontendEnvMonitSamples.FrontendEndpointsEnvMonitSamples)(
      (0, _functionsEnvMonitSamples.FunctionsEnvMonitSamples)(
        (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
      )
    )
  ) {
    static get properties() {
      return {
        tableDefinition: {
          type: Object,
          value: _emDemoAPersonSamplingSettings.personSampling,
        },
        samplesStagesReduxVariables: {
          type: String,
          value: _endpointsFrontendEnvMonitSamples.samplesStagesReduxVariables,
        },
        allPersonSamplesStageSampling: { type: Array, notify: !0 },
        selectedObject: Object,
        callBackRefreshWindow: Object,
        selectedLanguage: { type: String },
      };
    }
    stateChanged(state) {
      this.selectedLanguage = state.app.user.appLanguage;
      if (null != state.emDemoA) {
        this.allPersonSamplesStageSampling =
          state.emDemoA.allPersonSamplesStageSampling;
      }
    }
    static get template() {
      return _polymerElement.html`            
            <style include="em-demo-a-person-sampling-style"></style> 
            <em-demo-a-webcomponent-env-monit-samples id="myElementsSample"></em-demo-a-webcomponent-env-monit-samples>            <div class="main">
                <template is="dom-if" if="[[tableDefinition.tableTitle.display]]"> 
                    <p class="tableTitle">{{labelValue(selectedLanguage, tableDefinition.tableTitle.label)}}</p>
                </template>  
                <div name="tableDefinitionButtons" class="buttonGroup">
                    <template is="dom-if" if="[[tableDefinition.displayRefreshButton]]"> 
                        <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
                    </template>  
                    <template is="dom-if" if="[[tableDefinition.displayButtons]]"> 
                        <template is="dom-repeat" items="{{tableDefinition.buttons}}" as="currentfield">       
                            <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                            on-field-button-clicked="fieldButtonClickedForSamples" on-field-list-value-changed="onListChange"> 
                            </field-controller>
                        </template>  
                    </template>  
                </div>            
                <vaadingrid-lit-singleselect id="emdemoa-samplesampling" headerfields="{{tableDefinition.sampleFieldToDisplay}}" 
                    rowcontainer="{{allPersonSamplesStageSampling}}" selected-object="{{selectedObject}}">
                </vaadingrid-lit-singleselect>
            </div>  
        `;
    }
    refreshWindow() {
      this.loadSamplingTable();
    }
    loadSamplingTable() {
      this.callBackRefreshWindow = this.refreshWindow.bind(this);
      this.getAllSamplesStageSampling(
        this.tableDefinition,
        this.samplesStagesReduxVariables.PERSON_SAMPLING
      );
    }
    ready() {
      super.ready();
      this.loadSamplingTable();
    }
  }
  customElements.define("em-demo-a-person-sampling", emDemoASampleSampling); // import {LitElement, html} from 'lit-element';
  // import { connect } from 'pwa-helpers/connect-mixin';
  // import { store } from '../../../../store.js';
  // import './em-demo-a-sample-sampling-settings';
  // import '../../../internalComponents/form-fields/field-controller';
  // // import '../../../internalComponents/grid-components/vaadingrid-singleselectrunaction.js'; borrado por refactoring
  // import '../../../internalComponents/Grids/vaadingrid-lit-singleselect';
  // import '../01moduleFunctionality/env-monit-elements-sample.js';
  // import {FrontendEnvMonitSample} from '../01moduleFunctionality/frontend-env-monit-sample.js';
  // import {EmDemoAapiEnvMonit} from '../01moduleFunctionality/api-env-monit.js';
  // import {sampleSampling} from './em-demo-a-sample-sampling-settings'; //'../03config/config-process.js';
  // import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
  // /**
  //  * `em-demo-a-sample-sampling` Description
  //  *
  //  * @customElement
  //  * @polymer
  //  * @demo
  //  *
  //  */
  // class emDemoASampleSampling extends FieldsMethods(EmDemoAapiEnvMonit(FrontendEnvMonitSample(connect(store)(LitElement)))) {
  //     stateChanged(state) {
  //         if (state.emDemoA!=null){
  //             this.allSamplesStageSampling= state.emDemoA.allSamplesStageSampling;}
  //     }
  //     static get properties() {
  //         return {
  //             tableDefinition: {type: Object}, //, value:sampleSampling},
  //             allSamplesStageSampling: {type: Array, notify:true},
  //             selectedObject: {type: Object},
  //             callBackRefreshWindow: {type: Object},
  //         }
  //     }
  //     /**
  //      * Instance of the element is created/upgraded. Use: initializing state,
  //      * set up event listeners, create shadow dom.
  //      * @constructor
  //      */
  //     constructor() {
  //         super();
  //         this.tableDefinition=sampleSampling;
  //     }
  //     // static get styles() {
  //     //     return [
  //     //         super.styles,
  //     //         css``,
  //     //     ];
  //     // }
  //     /**
  //      * Implement to describe the element's DOM using lit-html.
  //      * Use the element current props to return a lit-html template result
  //      * to render into the element.
  //      */
  //     render() {
  //         return html`
  //             <env-monit-elements-sample id="myElementsSample" refresh-window-method="{{callBackRefreshWindow}}"></env-monit-elements-sample>
  //             <div name="tableDefinitionButtons" class="buttonGroup">
  //                 ${this.tableDefinition.displayRefreshButton ?
  //                     html`<vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>`
  //                 :html``}
  //                 ${this.tableDefinition.displayButtons ?
  //                     html`
  //                         ${this.tableDefinition.buttons.map(item => html`
  //                             <field-controller id="${item.name}"  field="${item}"
  //                                 @field-button-clicked="fieldButtonClicked" @field-list-value-changed="onListChange">
  //                             </field-controller>
  //                         `)}
  //                     `
  //                 :html``}
  //             </div>
  //             <vaadingrid-lit-singleselect headerfields="${this.tableDefinition.sampleFieldToDisplay.map}"
  //                 rowcontainer="${this.allSamplesStageSampling}" selected-object="${this.selectedObject}">
  //             </vaadingrid-lit-singleselect>
  //         `;
  //     }
  //     refreshWindow() {
  //         this.loadSamplingTable();
  //     }
  //     loadSamplingTable(){
  //         this.callBackRefreshWindow = this.refreshWindow.bind(this);
  //         this.getAllSamplesStageSampling({
  //              actionName:'SAMPLES_BY_STAGE'
  //             ,sampleFieldToRetrieve:this.tableDefinition.sampleFieldToRetrieve
  //             , samplesWhereFieldsName: this.tableDefinition.samplesWhereFieldsName
  //             , samplesWhereFieldsValue: this.tableDefinition.samplesWhereFieldsValue
  //             ,samplesSortFieldsName:this.tableDefinition.sampleFieldToSort
  //           });
  //     }
  //     ready() {
  //         super.ready();
  //         this.loadSamplingTable();
  //     }
  // }
  // customElements.define('em-demo-a-sample-sampling', emDemoASampleSampling);
});
