define([
  "../../../../../node_modules/lit-element/lit-element.js",
  "../../../../store.js",
  "../../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../03config/fakejson.js",
  "../../../internalComponents/form-fields/field-controller.js",
  "./components/procedures-list.js",
  "../../../../../node_modules/@alenaksu/json-viewer/build/index.js",
  "../02Redux/procedures_actions.js",
], function (
  _litElement,
  _store,
  _connectMixin,
  _fakejson,
  _fieldController,
  _proceduresList,
  _index,
  _procedures_actions
) {
  "use strict";
  class ProcedureManagement extends (0, _connectMixin.connect)(_store.store)(
    _litElement.LitElement
  ) {
    static get styles() {
      return _litElement.css`
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
      this.apiProceduresList = _fakejson.appProcedureListFake;
      _store.store.dispatch(
        (0, _procedures_actions.getProceduresList)(
          _fakejson.appProcedureListFake[0].items
        )
      );
    }
    render() {
      return _litElement.html`
    <div>
      <procedures-list></procedures-list>
      
       <json-viewer .data="${this.selectedProcedureDefinition.definition}"></json-viewer> 

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
});
