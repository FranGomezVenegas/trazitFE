import {
  PolymerElement,
  html,
} from "../../../../../node_modules/@polymer/polymer/polymer-element.js";
import { connect } from "../../../../../node_modules/pwa-helpers/connect-mixin.js";
import { store } from "../../../../store.js"; // import '../../../internalComponents/grid-components/vaadingrid-singleselectrunaction.js'; borrado por refactoring
import "../../../internalComponents/Grids/vaadingrid-lit-singleselect.js";
import { FieldsMethods } from "../../../../platform-mixins/functions/fields-methods.js";
import "../03config/proc-deploy-sample-reviewtestingfq-settings.js";
import { windowSettings } from "../03config/proc-deploy-sample-reviewtestingfq-settings.js"; //'../03config/config-process.js';
import {
  FrontendEndpointsEnvMonitSamples,
  samplesStagesReduxVariables,
} from "../01moduleFunctionality/endpoints-frontend-env-monit-samples.js";
import { FunctionsEnvMonitSamples } from "../01moduleFunctionality/functions-env-monit-samples.js";
import "../01moduleFunctionality/proc-deploy-webcomponent-env-monit-samples.js"; //import '../01moduleFunctionality/env-monit-elements-sample.js';
//import {FrontendEnvMonitSample} from '../01moduleFunctionality/frontend-env-monit-sample.js';
//FrontendEnvMonitSample
class procDeploySampleReviewtestingfq extends FieldsMethods(
  FunctionsEnvMonitSamples(
    FrontendEndpointsEnvMonitSamples(connect(store)(PolymerElement))
  )
) {
  static get properties() {
    return {
      tableDefinition: { type: Object, value: windowSettings },
      samplesAnalysisPendingRevisionFQ: { type: Array, notify: !0 },
      selectedObject: Object,
      callBackRefreshWindow: Object,
      selectedLanguage: { type: String },
      samplesStagesReduxVariables: {
        type: String,
        value: samplesStagesReduxVariables,
      },
    };
  }
  stateChanged(state) {
    this.selectedLanguage = state.app.user.appLanguage;
    if (null != state.procDeploy) {
      this.samplesAnalysisPendingRevisionFQ =
        state.procDeploy.samplesAnalysisPendingRevisionFQ;
    }
  }
  static get template() {
    return html`
      <style include="proc-deploy-sample-reviewtestingfq-style"></style>
      <proc-deploy-webcomponent-env-monit-samples
        id="myElementsSample"
        testing-group="FQ"
      ></proc-deploy-webcomponent-env-monit-samples>
      <div class="main">
        <template is="dom-if" if="[[tableDefinition.tableTitle.display]]">
          <p class="tableTitle">
            {{labelValue(selectedLanguage, tableDefinition.tableTitle.label)}}
          </p>
        </template>
        <div name="tableDefinitionButtons" class="buttonGroup">
          <template is="dom-if" if="[[tableDefinition.displayRefreshButton]]">
            <vaadin-button id="refreshButton" on-click="refreshWindow"
              ><iron-icon icon="refresh"></iron-icon
            ></vaadin-button>
          </template>
          <template is="dom-if" if="[[tableDefinition.displayButtons]]">
            <template
              is="dom-repeat"
              items="{{tableDefinition.buttons}}"
              as="currentfield"
            >
              <field-controller
                id="{{currentfield.name}}"
                field="{{currentfield}}"
                on-field-button-clicked="fieldButtonClickedForSamples"
                on-field-list-value-changed="onListChange"
              >
              </field-controller>
            </template>
          </template>
        </div>
        <vaadingrid-lit-singleselect
          class="grid"
          id="ProcDeploy-samplesampling"
          headerfields="{{tableDefinition.sampleFieldToDisplay}}"
          rowcontainer="{{samplesAnalysisPendingRevisionFQ}}"
          selected-object="{{selectedObject}}"
        >
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
      this.samplesStagesReduxVariables.SAMPLEANALYSIS_PENDINGREVISION_FQ
    );
  }
  ready() {
    super.ready();
    this.loadSamplingTable();
  }
}
customElements.define(
  "proc-deploy-sample-reviewtestingfq",
  procDeploySampleReviewtestingfq
); // import {LitElement, html} from 'lit-element';
// import { connect } from 'pwa-helpers/connect-mixin';
// import { store } from '../../../../store.js';
// import './proc-deploy-sample-reviewtestingfq-settings';
// import '../../../internalComponents/form-fields/field-controller';
// // import '../../../internalComponents/grid-components/vaadingrid-singleselectrunaction.js'; borrado por refactoring
// import '../../../internalComponents/Grids/vaadingrid-lit-singleselect';
// import '../01moduleFunctionality/env-monit-elements-sample.js';
// import {FrontendEnvMonitSample} from '../01moduleFunctionality/frontend-env-monit-sample.js';
// import {ProcDeployapiEnvMonit} from '../01moduleFunctionality/api-env-monit.js';
// import {sampleSampling} from './proc-deploy-sample-reviewtestingfq-settings'; //'../03config/config-process.js';
// import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
// /**
//  * `proc-deploy-sample-reviewtestingfq` Description
//  *
//  * @customElement
//  * @polymer
//  * @demo
//  *
//  */
// class procDeploySampleReviewtestingfq extends FieldsMethods(ProcDeployapiEnvMonit(FrontendEnvMonitSample(connect(store)(LitElement)))) {
//     stateChanged(state) {
//         if (state.procDeploy!=null){
//             this.samplesAnalysisPendingRevisionFQ= state.procDeploy.samplesAnalysisPendingRevisionFQ;}
//     }
//     static get properties() {
//         return {
//             tableDefinition: {type: Object}, //, value:sampleSampling},
//             samplesAnalysisPendingRevisionFQ: {type: Array, notify:true},
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
//                 rowcontainer="${this.samplesAnalysisPendingRevisionFQ}" selected-object="${this.selectedObject}">
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
// customElements.define('proc-deploy-sample-reviewtestingfq', procDeploySampleReviewtestingfq);
