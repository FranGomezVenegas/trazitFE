import {
  PolymerElement,
  html,
} from "../../../../../../node_modules/@polymer/polymer/polymer-element.js";
import { connect } from "../../../../../../node_modules/pwa-helpers/connect-mixin.js";
import { store } from "../../../../../store.js";
import { FieldsMethods } from "../../../../../platform-mixins/functions/fields-methods.js"; // import '../../../internalComponents/grid-components/vaadingrid-singleselectrunaction.js'; borrado por refactoring
import "../../../../internalComponents/Grids/vaadingrid-lit-singleselect.js";
import { FrontendEndpointsEnvMonitForInvestigation } from "../../01moduleFunctionality/endpoints-frontend-env-monit.js";
import { FunctionsEnvMonit } from "../../01moduleFunctionality/functions-env-monit.js";
import "../../01moduleFunctionality/em-demo-a-webcomponent-env-monit-samples.js";
import "../../03config/ResultDeviation/em-demo-a-pending-decision-settings.js";
import { pendingDecisionWindowDefinition } from "../../03config/ResultDeviation/em-demo-a-pending-decision-settings.js"; //'../03config/config-process.js';
class emDemoAPendingDecision extends FieldsMethods(
  FunctionsEnvMonit(
    FrontendEndpointsEnvMonitForInvestigation(connect(store)(PolymerElement))
  )
) {
  stateChanged(state) {
    this.selectedLanguage = state.app.user.appLanguage;
    if (state.emDemoA != void 0) {
      this.investigationResultsPendingDecision =
        state.emDemoA.investigationResultsPendingDecision;
    }
  }
  static get properties() {
    return {
      tableDefinition: { type: Object, value: pendingDecisionWindowDefinition },
      selectedObject: { type: Object, notify: !0 },
      investigationResultsPendingDecision: { type: Object },
    };
  }
  static get template() {
    return html`
      <style include="em-demo-a-pending-decision-style"></style>
      <em-demo-a-webcomponent-env-monit
        id="myelements"
      ></em-demo-a-webcomponent-env-monit>
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
                on-field-button-clicked="fieldButtonClickedForInvestigations"
                on-field-list-value-changed="onListChange"
              >
              </field-controller>
            </template>
          </template>
        </div>
        <vaadingrid-lit-singleselect
          class="grid"
          id="emdemoa-pendingdecision"
          headerfields="{{tableDefinition.fieldToDisplay}}"
          rowcontainer="{{investigationResultsPendingDecision}}"
          selected-object="{{selectedObject}}"
        >
        </vaadingrid-lit-singleselect>
      </div>
    `;
  }
  refreshWindow() {
    this.investigationResultsPendingDecision();
  }
  investigationResultsPendingDecision() {
    this.callBackRefreshWindow = this.refreshWindow.bind(this);
    this.getInvestigationResultsPendingDecision({});
  }
  ready() {
    super.ready();
    this.investigationResultsPendingDecision();
  }
}
customElements.define("em-demo-a-pending-decision", emDemoAPendingDecision);
