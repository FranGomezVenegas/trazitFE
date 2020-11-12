import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import { connect } from "pwa-helpers/connect-mixin";
import { store } from "../../../../../store.js";
import { FieldsMethods } from "../../../../../platform-mixins/functions/fields-methods";
// import '../../../internalComponents/grid-components/vaadingrid-singleselectrunaction.js'; borrado por refactoring
import "../../../../internalComponents/Grids/vaadingrid-lit-singleselect";

import { FrontendEndpointsEnvMonitForInvestigation } from "../../01moduleFunctionality/endpoints-frontend-env-monit";
import { FunctionsEnvMonit } from "../../01moduleFunctionality/functions-env-monit";
import "../../01moduleFunctionality/em-demo-a-webcomponent-env-monit-samples";

import "../../03config/ResultDeviation/em-demo-a-pending-decision-settings";
import { pendingDecisionWindowDefinition } from "../../03config/ResultDeviation/em-demo-a-pending-decision-settings"; //'../03config/config-process.js';

class emDemoAPendingDecision extends FieldsMethods(
  FunctionsEnvMonit(
    FrontendEndpointsEnvMonitForInvestigation(connect(store)(PolymerElement))
  )
) {
  stateChanged(state) {
    this.selectedLanguage = state.app.user.appLanguage;
    if (state.emDemoA != undefined) {
      this.investigationResultsPendingDecision =
        state.emDemoA.investigationResultsPendingDecision;
    }
  }
  static get properties() {
    return {
      tableDefinition: { type: Object, value: pendingDecisionWindowDefinition },
      selectedObject: { type: Object, notify: true },
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
