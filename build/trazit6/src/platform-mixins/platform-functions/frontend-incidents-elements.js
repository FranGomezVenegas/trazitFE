define([
  "require",
  "../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../store.js",
  "../../../node_modules/@polymer/paper-dialog/paper-dialog.js",
  "../../elements/internalComponents/Dialogs/DialogEsign/dialog-esign.js",
  "../../elements/internalComponents/Dialogs/DialogConfirmUser/dialog-confirmuser.js",
  "../apis/api-incidents.js",
  "../apis/api-authentication.js",
  "../../elements/internalComponents/Dialogs/DialogSimple/simple-modal-dialog.js",
  "../../elements/platformComponents/Redux/actions/esign-actions.js",
  "../../elements/platformComponents/Redux/actions/confirmuser-actions.js",
  "./frontend-incidents.js",
], function (
  _require,
  _polymerElement,
  _connectMixin,
  _store,
  _paperDialog,
  _dialogEsign,
  _dialogConfirmuser,
  _apiIncidents,
  _apiAuthentication,
  _simpleModalDialog,
  _esignActions,
  _confirmuserActions,
  _frontendIncidents
) {
  "use strict";
  _require = babelHelpers.interopRequireWildcard(_require);
  class FrontendIncidentsElements extends (0,
  _frontendIncidents.FrontendIncidents)(
    (0, _apiIncidents.ApiIncidents)(
      (0, _apiAuthentication.AuthenticationApi)(
        (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
      )
    )
  ) {
    static get properties() {
      return {
        callBackFunctionIncidentElem: Object,
        backEndData: Object,
        actionName: String,
        buttonName: String,
        givenSampleAnalysisToDisplay: { type: String }, //, value: sampleResults_sampleAnalysisListToDisplay},
        givenSampleAnalysisEnterResultToDisplay: String,
        cocUsersListFieldToDisplay: String,
        cocSampleHistoryFieldToDisplay: String,
        currTabConfirmUserRequired: Boolean,
        currTabEsignRequired: Boolean,
        confirmIncidentFormFieldsForId: {
          type: Array,
          notify: !0,
          bubble: !0,
          value: [
            {
              name: "incident_id",
              label_en: "Incident Id",
              label_es: "Id de Incidencia",
              type: "text",
              password: "false",
              read_only: !1,
              value: "",
            },
            {
              name: "Comment",
              label_en: "Add Comment",
              label_es: "A\xF1ade comentario",
              type: "text-area",
              password: "false",
              read_only: !1,
              value: "",
            },
          ],
        },
        confirmIncidentFormFieldsForNote: {
          type: Array,
          notify: !0,
          bubble: !0,
          value: [
            {
              name: "Comment",
              label_en: "Add Comment",
              label_es: "A\xF1ade comentario",
              type: "text-area",
              password: "false",
              read_only: !1,
              value: "",
            },
          ],
        },
        selectedIncident: { type: Object },
        incidentDialogFormFields: { type: Array }, //, value:sampleIncubation_incubBatch_newBatchFormFields},
        //validationNotCorrectMessage: {type: Object, value: appConfirmUserOrEsign_notCorrectMessage}, Borrado por refactoring
        selectedLanguage: { type: String },
      };
    }
    static get template() {
      return _polymerElement.html`
        <style>
        paper-dialog{
            top:100px; height:0px; width:0px;
        }
        </style>
        <esign-dialog></esign-dialog>
        <confirmuser-dialog></confirmuser-dialog>

        <paper-dialog id="incidentActionBrowser">        
            <simple-modal-dialog style="width:410px;" dialog form-fields="{{incidentDialogFormFields}}" 
            display-cancel-button display-confirm-button
            on-dialog-button-clicked="dialogClosedincidentActionBrowser" action-name="{{actionName}}"> </simple-modal-dialog>
        </paper-dialog>   
        `;
    }
    stateChanged(state) {
      this.selectedLanguage = state.app.user.appLanguage;
      if (null != state.emDemoA) {
        this.forResultsSamples = state.emDemoA.forResultsSamples;
        this.analysisList = state.emDemoA.analysisList;
        this.givenSampleAnalysisList = state.emDemoA.givenSampleAnalysisList;
        this.givenSampleAnalysisResultEntryList =
          state.emDemoA.givenSampleAnalysisResultEntryList;
        this.cocSampleHistory = state.emDemoA.cocSampleHistory;
        this.cocUsersList = state.emDemoA.cocUsersList;
        this.activeIncubatorsList = state.emDemoA.allIncubators;
        if (null != state.emDemoA.selectedIncubator) {
          this.incubatorName = state.emDemoA.selectedIncubator.name;
        }
        if (null != state.emDemoA.selectedIncident) {
          this.selectedIncident = state.emDemoA.selectedIncident;
        }
      }
      this.currTabEsignRequired = state.tabs.currTabEsignRequired;
      this.currTabConfirmUserRequired = state.tabs.currTabConfirmUserRequired;
    }
    actionTrigger(buttonName, backEndData, buttonDefinition) {
      this.buttonName = buttonName;
      this.backEndData = backEndData; //console.log('frontend-incidents-elements >> actionTrigger >> backEndData', backEndData, 'this.backEndData', this.backEndData, 'buttonDefinition', buttonDefinition);
      //if (this.currTabEsignRequired){
      if (buttonDefinition && buttonDefinition.esign_required) {
        _store.store.dispatch(
          (0, _esignActions.openEsignDialog)(
            this.actionTriggerNext.bind(this),
            this.actionTriggerAbort.bind(this)
          )
        );
        return;
      } //if (this.currTabConfirmUserRequired){
      if (buttonDefinition && buttonDefinition.confirmuser_required) {
        _store.store.dispatch(
          (0, _confirmuserActions.openConfirmUserDialog)(
            this.actionTriggerNext.bind(this),
            this.actionTriggerAbort.bind(this)
          )
        );
        return;
      }
      this.actionTriggerNext();
    }
    actionTriggerAbort() {
      this.loading = !1;
    }
    actionTriggerNext() {
      var buttonName = this.buttonName,
        backEndData = this.backEndData,
        datas = [];
      if (null != this.backEndData.selectedObject) {
        datas.id = this.backEndData.id;
        datas.selectedObject = this.backEndData;
      }
      var actionName = buttonName.toUpperCase();
      this.actionName = actionName;
      datas.actionName = buttonName.toUpperCase(); //        console.log('frontend-incidents-elements >> actionTriggerNext >> backEndData', backEndData, 'this.backEndData', this.backEndData, 'buttonName', buttonName);
      switch (buttonName.toUpperCase()) {
        case "CORRECTIVE_ACTION_COMPLETE":
          this.backEndData = backEndData;
          this.programActionTriggerAPI(
            this.schemaPrefix,
            buttonName,
            datas,
            datas.tabInfo,
            datas.callBackFunction
          );
          break;
        case "NEW_INCIDENT":
          var datas = [];
          datas.paramUrl = "";
          datas.paramsUrl = "actionName=" + actionName;
          datas.paramsUrl =
            datas.paramsUrl + "&incidentTitle=" + backEndData.incidentTitle;
          datas.paramsUrl =
            datas.paramsUrl + "&incidentDetail=" + backEndData.incidentDetail;
          this.incidentsEndPoint(datas);
          return;
        case "CONFIRM_INCIDENT":
        case "ADD_NOTE_INCIDENT":
        case "CLOSE_INCIDENT": //            console.log(buttonName.toUpperCase()+' clicked');
          this.incidentDialogFormFields = this.confirmIncidentFormFieldsForNote;
          new Promise((res, rej) =>
            _require.default(
              [
                "../../elements/internalComponents/Dialogs/DialogSimple/simple-modal-dialog.js",
              ],
              res,
              rej
            )
          );
          this.$.incidentActionBrowser.open();
          break;
        case "REOPEN_INCIDENT": //            console.log(buttonName.toUpperCase()+' clicked');
          this.incidentDialogFormFields = this.confirmIncidentFormFieldsForId;
          new Promise((res, rej) =>
            _require.default(
              [
                "../../elements/internalComponents/Dialogs/DialogSimple/simple-modal-dialog.js",
              ],
              res,
              rej
            )
          );
          this.$.incidentActionBrowser.open();
          break;
        default:
          console.log(
            "Action " +
              buttonName.toUpperCase() +
              " not recognized in frontend-incidents-elements >> actionTriggerNext"
          );
          break;
      }
      return;
    }
    dialogClosedincidentActionBrowser(e) {
      console.log(
        "dialogClosedincidentActionBrowser triggered",
        e.detail,
        e.detail.value
      );
      if ("confirmed" == e.detail.dialogState) {
        var datas = [];
        datas.paramUrl = "";
        datas.paramsUrl = "actionName=" + e.target.actionName;
        if ("REOPEN_INCIDENT" == e.target.actionName.toUpperCase()) {
          datas.paramsUrl =
            datas.paramsUrl +
            "&incidentId=" +
            this.incidentDialogFormFields[0].value;
          datas.paramsUrl =
            datas.paramsUrl + "&note=" + this.incidentDialogFormFields[1].value;
        } else {
          datas.paramsUrl =
            datas.paramsUrl + "&incidentId=" + this.selectedIncident.id;
          datas.paramsUrl =
            datas.paramsUrl + "&note=" + this.incidentDialogFormFields[0].value;
        } //console.log('dialogClosedincidentActionBrowser', 'before binding functions');
        if (this.callBackRefreshWindow != void 0) {
          datas.callBackFunction = this.callBackRefreshWindow.bind(this);
        }
        if (this.callBackFunctionIncidentElem != void 0) {
          datas.callBackFunction = this.callBackFunctionIncidentElem.bind(this);
        }
        this.incidentsEndPoint(datas);
      }
      this.$.incidentActionBrowser.close();
      return;
    }
  }
  customElements.define(
    "frontend-incidents-elements",
    FrontendIncidentsElements
  );
});
