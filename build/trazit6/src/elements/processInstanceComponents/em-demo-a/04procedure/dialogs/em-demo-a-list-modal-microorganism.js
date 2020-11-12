define([
  "../../../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../../../node_modules/@polymer/paper-button/paper-button.js",
  "../../../../internalComponents/form-fields/field-controller.js",
  "../../../../internalComponents/Dialogs/dialogmodal-buttons.js",
  "../../01moduleFunctionality/frontend-env-monit-sample",
  "../../01moduleFunctionality/api-env-monit",
  "../../03config/config-process.js",
], function (
  _polymerElement,
  _paperButton,
  _fieldController,
  _dialogmodalButtons,
  _frontendEnvMonitSample,
  _apiEnvMonit,
  _configProcess
) {
  "use strict";
  class emDemoAListModalMicroorganism extends (0,
  _apiEnvMonit.EmDemoAapiEnvMonit)(
    (0, _frontendEnvMonitSample.FrontendEnvMonitSample)(
      _polymerElement.PolymerElement
    )
  ) {
    static get properties() {
      return {
        listRows: {
          type: Array,
          value: [
            { code: "LOD", method_name: "LOD Method", method_version: 1 },
          ],
        },
        listHeader: {
          type: Array,
          value: _configProcess.microorganismList_fieldsToDisplay,
        },
        displayFreeText: {
          type: Boolean,
          value: _configProcess.microorganism_allowAddNotOnTheList,
        },
        adhocFormFields: {
          type: Array,
          value: _configProcess.microorganism_allowAddNotOnTheList_formFields,
        },
        schemaPrefix: { type: String, value: _configProcess.schema_name },
        sampleId: { type: Number },
        finalToken: { type: String },
        selectedObject: { type: Object },
        callBackFunctionEnvMonitElem: Object,
      };
    }
    static get template() {
      return _polymerElement.html`  
        <style include="modal-dialogs">
        /* The Modal (background) */
        .modal-content {
            width: 450px;
        } 
        </style>        
        <div class="modal-content bgimg">
            <dialogmodal-buttons display-close-button></dialogmodal-buttons> 
            
            <template is="dom-if" if="{{displayFreeText}}">
                <template is="dom-repeat" items="{{adhocFormFields}}" as="currentfield">       
                    <field-controller on-keydown="keyPressedAdhoc" on-field-button-clicked="actionOnSel" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                </template>             
            </template>
            
            <vaadin-grid id="listmodalmicroorganismgrid" items="{{listRows}}">  
                <vaadin-grid-selection-column  auto-select></vaadin-grid-selection-column>
                <template is="dom-repeat" items="{{listHeader}}" as="fld">        
                    <vaadin-grid-column resizable width="{{fld.width}}" path="{{fld.name}}" header="{{fld.label_en}}"></vaadin-grid-column>
                </template>
            </vaadin-grid>      
        </div>    
        `;
    }
    keyPressedAdhoc(e) {
      var buttonName = "buttonNewAdhocMicroorganism";
      if ("Enter" == e.key) {
        var elem = this.shadowRoot.getElementById(buttonName);
        if (elem) {
          //console.log('keyPressedAdhoc', 'elem', this.adhocFormFields[1]);
          elem.focus();
          var i = 0;
          for (i = 0; i < this.adhocFormFields.length; i++) {
            if (this.adhocFormFields[i].name == buttonName) {
              var mye = {
                detail: {
                  buttonName: this.adhocFormFields[1].name,
                  value: this.adhocFormFields[1].value,
                  buttonDefinition: this.adhocFormFields[1],
                },
              };
              this.addAdhocMicroorganism(mye);
              return;
            }
          }
        }
      }
    }
    actionOnSel(e) {
      //        console.log('actionOnSel');
      if ("buttonNewMicroorganism" == e.detail.buttonName) {
        this.addMicroorganism(e);
      }
      if ("buttonNewAdhocMicroorganism" == e.detail.buttonName) {
        this.addAdhocMicroorganism(e);
      }
    }
    dialogConfirmed() {
      //console.log('clicked', this.$.mygrid.getSelectedRows());
      this.value = "confirmed";
      this.dispatchEvent(
        new CustomEvent("dialog-button-clicked", {
          bubbles: !0,
          composed: !0,
          detail: {
            buttonName: this.name,
            value: this.value,
            dialogState: "confirmed",
            selectedItems: this.$.mygridid.selectedItems,
          },
        })
      );
      this.$.mygridid.selectedItems = [];
    }
    dialogCanceled() {
      //console.log('clicked', this.value);
      this.value = "confirmed";
      this.dispatchEvent(
        new CustomEvent("dialog-button-clicked", {
          bubbles: !0,
          composed: !0,
          detail: {
            buttonName: this.name,
            value: this.value,
            dialogState: "canceled",
          },
        })
      );
    } // openDialog(){
    //     var fldName=this.adhocFormFields[0].name;
    //     var elem=this.shadowRoot.getElementById(fldName);
    //     if (elem){elem.focus();}
    // }
    constructor() {
      super(); //        this.$.mygridid.selectedItems=[];
    }
  }
  customElements.define(
    "em-demo-a-list-modal-microorganism",
    emDemoAListModalMicroorganism
  );
});
