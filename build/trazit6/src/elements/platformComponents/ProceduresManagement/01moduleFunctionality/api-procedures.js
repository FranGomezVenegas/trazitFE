define([
  "exports",
  "../../../../store.js",
  "../../../app/Redux/actions/notifications_actions",
  "../../../app/app-functions/notification-obj",
], function (_exports, _store, _notifications_actions, _notificationObj) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.ApiProcedures = void 0; //import {incubationMode} from '../03config/config-process';
  /**
   * @mixinFunction
   * @polymer
   */ const ApiProcedures = (superClass) =>
    class extends superClass {
      procedureActionTriggerAPI(
        schemaPrefix,
        finalToken,
        actionName,
        selectedRow,
        tabInfo,
        callBackFunction2
      ) {
        this.procedureActionControllerAPI(
          schemaPrefix,
          finalToken,
          actionName,
          selectedRow,
          tabInfo,
          callBackFunction2
        );
      }
      procedureActionControllerAPI(
        schemaPrefix,
        finalToken,
        actionName,
        selectedRow,
        tabInfo,
        callBackFunction2
      ) {
        //console.log('procedureActionControllerAPI', 'selectedRow', selectedRow);
        this.internalCallbackFunction = callBackFunction2;
        var selectedSample = selectedRow.sample_id,
          selectedObjectLevel = "SAMPLE";
        if (
          null == selectedSample &&
          "LOGSAMPLE" != actionName &&
          "EM_BATCH_INCUB_START" != actionName &&
          "EM_BATCH_INCUB_END" != actionName
        ) {
          dispatchEvent(
            new CustomEvent("toasterror", {
              bubbles: !0,
              composed: !0,
              detail: "Please select one object first ",
            })
          );
          return;
        }
        actionName = actionName.toUpperCase();
        var paramsUrl = "";
        switch (actionName) {
          case "LOGSAMPLE":
            paramsUrl = paramsUrl + "&programName=" + selectedRow.programName;
            paramsUrl = paramsUrl + "&locationName=" + selectedRow.locationName;
            paramsUrl =
              paramsUrl + "&sampleTemplate=" + selectedRow.sampleTemplate;
            paramsUrl =
              paramsUrl +
              "&sampleTemplateVersion=" +
              selectedRow.sampleTemplateVersion;
            paramsUrl = paramsUrl + "&fieldName=" + selectedRow.fieldName;
            paramsUrl = paramsUrl + "&fieldValue=" + selectedRow.fieldValue;
            paramsUrl =
              paramsUrl + "&numSamplesToLog=" + selectedRow.numSamplesToLog;
            break;
          case "REVIEWRESULT":
            paramsUrl = paramsUrl + "&objectId=" + selectedSample;
            paramsUrl = paramsUrl + "&objectLevel=" + selectedObjectLevel;
            break;
          case "UNREVIEWRESULT":
            paramsUrl = paramsUrl + "&objectId=" + selectedSample;
            paramsUrl = paramsUrl + "&objectLevel=" + selectedObjectLevel;
            break;
          case "CANCELRESULT":
            paramsUrl = paramsUrl + "&objectId=" + selectedSample;
            paramsUrl = paramsUrl + "&objectLevel=" + selectedObjectLevel;
            break;
          case "UNCANCELRESULT":
            paramsUrl = paramsUrl + "&objectId=" + selectedSample;
            paramsUrl = paramsUrl + "&objectLevel=" + selectedObjectLevel;
            break;
          case "CANCELRESULT":
            paramsUrl = paramsUrl + "&objectId=" + selectedSample;
            paramsUrl = paramsUrl + "&objectLevel=" + "TEST";
            break;
          case "UNCANCELRESULT":
            paramsUrl = paramsUrl + "&objectId=" + selectedSample;
            paramsUrl = paramsUrl + "&objectLevel=" + "TEST";
            break;
          case "SAMPLINGCOMMENTADD":
            paramsUrl = paramsUrl + "&sampleId=" + selectedSample;
            paramsUrl =
              paramsUrl + "&sampleComment=" + selectedRow.sample_comment;
            break;
          case "SAMPLINGCOMMENTREMOVE":
            paramsUrl = paramsUrl + "&sampleId=" + selectedSample;
            break;
          case "CHANGESAMPLINGDATE":
            paramsUrl = paramsUrl + "&sampleId=" + selectedSample;
            paramsUrl = paramsUrl + "&newDate=" + selectedRow.newDate;
            break;
          case "SETSAMPLINGDATE":
          case "INCUBATIONSTART":
          case "INCUBATIONEND":
          case "INCUBATION2START":
          case "INCUBATION2END":
            paramsUrl = paramsUrl + "&sampleId=" + selectedSample;
            paramsUrl =
              paramsUrl + "&incubatorName=" + selectedRow.incubatorName;
            break;
          case "COC_STARTCHANGE":
            paramsUrl = paramsUrl + "&sampleId=" + selectedSample;
            paramsUrl =
              paramsUrl + "&custodianCandidate=" + selectedRow.person_name;
            break;
          case "COC_CONFIRMCHANGE":
            paramsUrl = paramsUrl + "&sampleId=" + selectedSample;
            paramsUrl =
              paramsUrl +
              "&confirmChangeComment=" +
              selectedRow.confirmChangeComment;
            break;
          case "COC_ABORTCHANGE":
            paramsUrl = paramsUrl + "&sampleId=" + selectedSample;
            paramsUrl =
              paramsUrl +
              "&cancelChangeComment=" +
              selectedRow.cancelChangeComment;
            break;
          case "SAMPLEANALYSISADD":
            paramsUrl = paramsUrl + "&sampleId=" + selectedSample;
            paramsUrl = paramsUrl + "&fieldName=" + selectedRow.fieldName;
            paramsUrl = paramsUrl + "&fieldValue=" + selectedRow.fieldValue;
            break;
          case "SAMPLESTAGE_MOVETONEXT":
            paramsUrl = paramsUrl + "&sampleId=" + selectedSample;
            if (null == !selectedRow.current_stage) {
              paramsUrl =
                paramsUrl + "&sampleStage=" + selectedRow.currentStage;
            }
            break;
          case "SAMPLESTAGE_MOVETOPREVIOUS":
            paramsUrl = paramsUrl + "&sampleId=" + selectedSample;
            if (null == !selectedRow.current_stage) {
              paramsUrl =
                paramsUrl + "&sampleStage=" + selectedRow.current_stage;
            }
            break;
          case "ADD_SAMPLE_MICROORGANISM":
            paramsUrl = paramsUrl + "&sampleId=" + selectedSample;
            paramsUrl =
              paramsUrl + "&microorganismName=" + selectedRow.microorganismName;
            break;
          case "SAMPLEAUDIT_SET_AUDIT_ID_REVIEWED":
            paramsUrl = paramsUrl + "&auditId=" + selectedRow.audit_id;
            break;
          case "EM_BATCH_INCUB_ADD_SMP":
          case "EM_BATCH_INCUB_REMOVE_SMP": //console.log('EM_BATCH_INCUB_REMOVE_SMP ', 'selectedRow.selectedBatch', selectedRow.selectedBatch);
            if (
              0 == selectedRow.selectedBatch.length ||
              "" == selectedRow.selectedBatch.name
            ) {
              var errorMessageBatchNotSelected = {
                  message_en: "Select Batch",
                  message_es: "Seleccione tanda",
                  diagnostic: "LABPLANET_FALSE",
                  is_error: !0,
                  reñatedObjects: [],
                  category: "API-ENV-MONIT",
                },
                notifObj = (0, _notificationObj.diagnosticToNotification)(
                  errorMessageBatchNotSelected,
                  void 0
                ); //response.data, data);
              console.log(
                "process-us>api-sample>procedureBackEndCallAPI.addNotification",
                "notifObj",
                notifObj
              );
              _store.store.dispatch(
                (0, _notifications_actions.addNotification)(notifObj)
              );
              dispatchEvent(
                new CustomEvent("toastmessage", {
                  bubbles: !0,
                  composed: !0,
                  detail: "Seleccione tanda.",
                })
              );
              return;
            }
            paramsUrl = paramsUrl + "&sampleId=" + selectedSample;
            paramsUrl =
              paramsUrl + "&batchName=" + selectedRow.selectedBatch.name;
            paramsUrl =
              paramsUrl +
              "&batchTemplateId=" +
              selectedRow.selectedBatch.incub_batch_config_id;
            paramsUrl =
              paramsUrl +
              "&batchTemplateVersion=" +
              selectedRow.selectedBatch.incub_batch_config_version;
            break;
          default:
            console.log("Action " + actionName + " not declared.");
            dispatchEvent(
              new CustomEvent("toast-error", {
                bubbles: !0,
                composed: !0,
                detail:
                  "action " + actionName + " not declared on this window.",
              })
            );
            return;
        }
        if (selectedRow.eSignToVerify) {
          paramsUrl = paramsUrl + "&eSignToCheck=" + selectedRow.eSignToVerify;
        }
        paramsUrl =
          "actionName=" +
          actionName +
          "&finalToken=" +
          finalToken +
          "&schemaPrefix=" +
          schemaPrefix +
          paramsUrl;
        var datas = [];
        datas.schemaPrefix = schemaPrefix;
        datas.actionName = actionName;
        datas.paramsUrl = paramsUrl;
        if (callBackFunction2) {
          datas.callBackFunction = callBackFunction2.bind(this);
        }
        console.log(
          "api-env-monit.js >> SampleAPIControllerAPI >> Before calling procedureBackEndCallAPI the datas contains: ",
          datas
        );
        this.procedureBackEndCallAPI(datas);
      }
      procedureBackEndCallAPI(data) {
        var apiUrl = backendUrl + ApiEnvMonitSampleUrl + "?" + data.paramsUrl; //console.log('process-us>api-sample>procedureBackEndCallAPI', data.schemaPrefix, data.actionName, apiUrl, data.paramsUrl);
        axios
          .get(apiUrl)
          .then((response) => {
            console.log(
              "em-demo-a > api-env-monit.js > procedureBackEndCallAPI",
              "response.data",
              response.data
            );
            var state = _store.store.getState(),
              language = state.app.user.appLanguage,
              message = "";
            switch (language) {
              case "es":
                message = response.data.message_es;
                break;
              default:
                message = response.data.message_en;
                break;
            }
            var notifObj = (0, _notificationObj.diagnosticToNotification)(
              response.data,
              data
            );
            _store.store.dispatch(
              (0, _notifications_actions.addNotification)(notifObj)
            );
            if ("LABPLANET_TRUE" == response.data.diagnostic) {
              this.dispatchEvent(
                new CustomEvent("toast-message", {
                  bubbles: !0,
                  composed: !0,
                  detail: message, //response.data.error_value_es //ApiMessage.errorMessage(response.data)
                })
              );
            } else {
              this.dispatchEvent(
                new CustomEvent("toast-error", {
                  bubbles: !0,
                  composed: !0,
                  detail: message, //response.data.error_value_es //ApiMessage.errorMessage(response.data)
                })
              );
            }
            if (200 == response.status) {
              //console.log('callBackFunction');
              if (this.callBackFunctionEnvMonitElem) {
                this.callBackFunctionEnvMonitElem();
              }
              if (data.callBackFunction) {
                data.callBackFunction();
              }
              return;
            }
            if (data.callBackFunctionError) {
              data.callBackFunctionError();
            }
          })
          .catch(function (error) {
            console.log(error.message);
            if (data.callBackFunctionError) {
              data.callBackFunctionError();
            } // store.dispatch(addNotification({
            //     notificationName: data.schemaPrefix+'.'+data.actionName,
            //     label_en: error.message,
            //     label_es: error.message,
            //     diagnoses: 'ERROR'
            // }));
          })
          .then(function () {});
      }
      myCallBackFunctionTrigger() {
        if (internalCallBackFunction) {
          this.internalCallBackFunction();
        }
      }
    };
  _exports.ApiProcedures = ApiProcedures;
});
