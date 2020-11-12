import { LitElement, html, css } from "lit-element";
import { store } from "../../../../store";
import { connect } from "pwa-helpers/connect-mixin.js";
import { appProcedureListFake } from "../03config/fakejson";
import "../../../internalComponents/form-fields/field-controller";
import "./components/procedures-list";
import "@alenaksu/json-viewer";
import { getProceduresList } from "../02Redux/procedures_actions";
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
