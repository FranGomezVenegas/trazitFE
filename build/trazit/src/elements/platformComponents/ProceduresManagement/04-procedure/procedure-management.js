import {
  LitElement,
  html,
  css,
} from "../../../../../node_modules/lit-element/lit-element.js";
import { store } from "../../../../store.js";
import { connect } from "../../../../../node_modules/pwa-helpers/connect-mixin.js";
import { appProcedureListFake } from "../03config/fakejson.js";
import "../../../internalComponents/form-fields/field-controller.js";
import "./components/procedures-list.js";
import "../../../../../node_modules/@alenaksu/json-viewer/build/index.js";
import { getProceduresList } from "../02Redux/procedures_actions.js";
class ProcedureManagement extends connect(store)(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }
  static get properties() {
    return {
      apiProceduresList: { type: Array },
      selectedProcedureDefinition: {
        type: Object,
        value: { name: "demo", items: [{ id: 1 }, { id: 2 }] },
      },
    };
  }
  firstUpdated() {}
  constructor() {
    super();
    this.apiProceduresList = appProcedureListFake;
    store.dispatch(getProceduresList(appProcedureListFake[0].items));
  }
  render() {
    return html`
      <div>
        <procedures-list></procedures-list>

        <json-viewer
          .data="${this.selectedProcedureDefinition.definition}"
        ></json-viewer>
      </div>
    `;
  }
  stateChanged(state) {
    if (state.sateliteProcedures.selectedProcedure) {
      this.selectedProcedureDefinition =
        state.sateliteProcedures.selectedProcedure;
    }
    console.log(
      "this.selectedProcedureDefinition",
      this.selectedProcedureDefinition
    );
  }
}
customElements.define("procedure-management", ProcedureManagement);
