define([
  "exports",
  "../../../../config/platform/logic/api-config.js",
  "../../../../store.js",
  "../../../../platform-mixins/apis/api-settings.js",
  "../../../platformComponents/Redux/actions/notifications_actions.js",
  "../../../../platform-mixins/platform-functions/notification-obj.js",
  "../../../platformComponents/Redux/actions/esign-actions.js",
  "../../../platformComponents/Redux/actions/confirmuser-actions.js",
  "../03config/config-process.js",
  "../../../../platform-mixins/store/token-mixin.js",
  "../../../../platform-mixins/store/user-confirmation-mixin.js",
  "../../../../platform-mixins/functions/toast-methods.js",
  "./0module-actions-available.js",
], function (
  _exports,
  _apiConfig,
  _store,
  _apiSettings,
  _notifications_actions,
  _notificationObj,
  _esignActions,
  _confirmuserActions,
  _configProcess,
  _tokenMixin,
  _userConfirmationMixin,
  _toastMethods,
  _moduleActionsAvailable
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.EndpointsActionsEnvMonitModule = void 0; //incubationMode
  /**
   * @mixinFunction
   * @polymer
   */ const EndpointsActionsEnvMonitModule = (superClass) =>
    class extends (0, _userConfirmationMixin.userConfirmationMixin)(
      (0, _moduleActionsAvailable.EnvMonitModuleDefinition)(
        (0, _apiSettings.ApiSettings)(
          (0, _toastMethods.ToastMethods)(
            (0, _tokenMixin.tokenMixin)(superClass)
          )
        )
      )
    ) {
      moduleActionTrigger(buttonDefinition, backEndData, moduleAreaName) {
        var moduleArea = this.getFunctionalArea(moduleAreaName);
        if (moduleArea == void 0) {
          this.toastErrorMessage(this.moduleAreaNotRecognized(moduleAreaName));
          console.log("module area not recognized");
          return;
        } //    console.log('moduleActionTrigger', 'buttonDefinition', buttonDefinition, 'backEndData', backEndData);
        if (buttonDefinition && buttonDefinition.esign_required) {
          _store.store.dispatch(
            (0, _esignActions.openEsignDialog)(
              this.moduleActionTriggerNext.bind(
                this,
                buttonDefinition,
                backEndData,
                moduleArea
              ),
              this.moduleActionTriggerAbort.bind(this)
            )
          );
          return;
        }
        if (buttonDefinition && buttonDefinition.confirmuser_required) {
          _store.store.dispatch(
            (0, _confirmuserActions.openConfirmUserDialog)(
              this.moduleActionTriggerNext.bind(
                this,
                buttonDefinition,
                backEndData,
                moduleArea
              ),
              this.moduleActionTriggerAbort.bind(this)
            )
          );
          return;
        }
        this.moduleActionTriggerNext(buttonDefinition, backEndData, moduleArea);
      }
      moduleActionTriggerAbort() {
        this.loading = !1;
      }
      moduleActionTriggerNext(buttonDefinition, backEndData, moduleArea) {
        //    console.log('moduleActionTriggerNext', 'buttonDefinition', buttonDefinition, 'backEndData', backEndData);
        var buttonName = buttonDefinition.name,
          datas = [],
          areaActions = [];
        if ("SAMPLES" == moduleArea.name) {
          var areaActions = this.sampleActions();
        }
        if ("PROGRAMS" == moduleArea.name) {
          var areaActions = this.programActions();
        }
        if ("PRODUCTION_LOTS" == moduleArea.name) {
          var areaActions = this.productionLotsActions();
        }
        if ("INCUB_BATCH" == moduleArea.name) {
          var areaActions = this.batchActions();
        }
        if ("INCUBATOR" == moduleArea.name) {
          var areaActions = this.incubatorActions();
        }
        if ("INVESTIGATION" == moduleArea.name) {
          var areaActions = this.investigationActions();
        }
        if ("SAVED_QUERIES" == moduleArea.name) {
          var areaActions = this.savedQueriesActions();
        }
        if (areaActions == void 0) {
          this.toastErrorMessage(this.moduleAreaNotRecognized(moduleArea.name));
          console.log("moduleActionTriggerNext", "areaActions undefined");
          return;
        }
        var actionDefinition = areaActions.find(function (tab) {
          return tab.actionName.toUpperCase() == buttonName.toUpperCase();
        });
        if (!actionDefinition) {
          this.toastErrorMessage(
            this.actionNameNotRecognized(
              buttonName.toUpperCase(),
              moduleArea.name
            )
          );
          return;
        }
        if (actionDefinition.dialogInfo.requiresDialog) {
          var elem = this.shadowRoot.getElementById(
            actionDefinition.dialogInfo.webComponentName
          );
          if (!elem) {
            if ((actionDefinition.dialogInfo.webComponentName = "myelements")) {
              elem = this.shadowRoot.getElementById("myelements");
            }
          }
          if (elem) {
            elem.buttonDefinition = buttonDefinition;
            elem.selectedObject = backEndData.selectedObject;
            elem.callBackFunction = backEndData.callBackFunction;
            elem.callBackFunctionError = backEndData.callBackFunctionError;
            elem.openDialog(
              actionDefinition.dialogInfo.dialogName,
              actionDefinition.dialogInfo.dialogArgument
            );
          }
          return;
        }
        if (
          actionDefinition.functionInfo &&
          actionDefinition.functionInfo.requiresTriggerFunction
        ) {
          this.moduleActionRequiresTriggerFunction(
            buttonName,
            buttonDefinition,
            backEndData.selectedObject,
            moduleArea,
            actionDefinition,
            backEndData.callBackFunction,
            backEndData.callBackFunctionError,
            this.refreshWindowMethod
          );
          return;
        }
        this.moduleActionTriggerAPI(
          buttonName,
          buttonDefinition,
          backEndData.selectedObject,
          moduleArea,
          actionDefinition,
          backEndData.callBackFunction,
          backEndData.callBackFunctionError,
          this.refreshWindowMethod
        );
        return;
      }
      buildParamsUrlForAction(actionName, actionDefinition, selectedRow) {
        var message_en = "Unhandled exception",
          message_es = "Excepci\xF3n no controlada",
          paramsUrl = "",
          result = [];
        result.diagnostic = !1;
        if (actionDefinition == void 0) {
          message_en = "Action " + actionName + " not declared.";
          message_es = "Acci\xF3n " + actionName + "no declarada.";
          return result;
        }
        var i = 0;
        for (i = 0; i < actionDefinition.apiParams.length; i++) {
          if (
            actionDefinition.apiParams[i].paramName != void 0 &&
            selectedRow[actionDefinition.apiParams[i].dataArrName]
          ) {
            paramsUrl =
              paramsUrl +
              "&" +
              actionDefinition.apiParams[i].paramName +
              "=" +
              selectedRow[actionDefinition.apiParams[i].dataArrName];
          } else {
            if (actionDefinition.apiParams[i].defaultValue != void 0) {
              paramsUrl =
                paramsUrl +
                "&" +
                actionDefinition.apiParams[i].paramName +
                "=" +
                actionDefinition.apiParams[i].defaultValue;
            } else {
              if (
                actionDefinition.apiParams[i].isMandatory == void 0 ||
                !0 == actionDefinition.apiParams[i].isMandatory
              ) {
                message_en =
                  "Not found value for the param " +
                  actionDefinition.apiParams[i].paramName +
                  " which is mandatory for the action " +
                  actionName;
                message_es =
                  "No encontrado valor para el par\xE1metro " +
                  actionDefinition.apiParams[i].paramName +
                  " que es declarado como obligatorio para la acci\xF3n " +
                  actionName;
                result.message_en = message_en;
                result.message_es = message_es;
                console.log(
                  "buildParamsUrlForAction, missing mandatory values:",
                  result.message_en,
                  "actionDefinition.apiParams",
                  actionDefinition.apiParams,
                  selectedRow,
                  selectedRow
                );
                return result;
              }
            }
          } //message_es=actionDefinition.apiParams[0].paramName+selectedRow[actionDefinition.apiParams[0].dataArrName];
        }
        result.diagnostic = !0;
        result.message_en = message_en;
        result.message_es = message_es;
        result.paramsUrl = paramsUrl;
        return result;
      }
      moduleActionTriggerAPI(
        actionName,
        button,
        selectedRow,
        moduleArea,
        actionDefinition,
        callBackFunction,
        callBackFunctionError,
        refreshFunction
      ) {
        console.log("moduleActionTriggerAPI", "selectedRow", selectedRow);
        var paramsUrlObj = this.buildParamsUrlForAction(
          actionName,
          actionDefinition,
          selectedRow
        );
        if (!1 == paramsUrlObj.diagnostic) {
          var msgErr = [];
          msgErr.message_en =
            "Error building the call to the API for the action " +
            actionName +
            ". Error: " +
            paramsUrlObj.message_en;
          msgErr.message_es =
            "Error al crear la llamada a la API para la acci\xF3n " +
            actionName +
            ". Error: " +
            paramsUrlObj.message_es;
          this.toastErrorMessage(msgErr);
          return;
        }
        actionName = actionName.toUpperCase();
        var paramsUrl = paramsUrlObj.paramsUrl;
        this.internalCallbackFunction = callBackFunction;
        if (selectedRow.eSignToVerify) {
          paramsUrl = paramsUrl + "&eSignToCheck=" + selectedRow.eSignToVerify;
        }
        paramsUrl = "actionName=" + actionName + paramsUrl;
        var datas = [];
        datas.actionName = actionName;
        datas.paramsUrl = paramsUrl;
        if (callBackFunction) {
          datas.callBackFunction = callBackFunction.bind(this);
        } //console.log('api-env-monit.js >> SampleAPIControllerAPI >> Before calling sampleAPIEndpointCall the datas contains: ', datas);
        this.sampleAPIEndpointCall(
          datas,
          button,
          moduleArea,
          callBackFunction,
          callBackFunctionError,
          refreshFunction
        );
      }
      sampleAPIEndpointCall(
        data,
        button,
        moduleArea,
        callBackFunction,
        callBackFunctionError,
        refreshFunction
      ) {
        var endpoints_returningError = this.endpoints_returningError(),
          apiUrl =
            _apiConfig.backendUrl +
            moduleArea.apiUrlForActions +
            "?" +
            data.paramsUrl;
        apiUrl =
          apiUrl +
          "&finalToken=" +
          this.getFinalToken() +
          "&schemaPrefix=" +
          _configProcess.schema_name; //console.log('process-us>api-sample>sampleAPIEndpointCall', data.schemaPrefix, data.actionName, apiUrl, data.paramsUrl);
        if (button && button.esign_required) {
          var ePhrase = this.getEsignPhrase();
          apiUrl = apiUrl + "&esignPhraseToCheck=" + ePhrase;
        }
        if (button && button.confirmuser_required) {
          var userPhrase = this.getUserPhrase(),
            userPwPhrase = this.getUserPwPhrase();
          apiUrl = apiUrl + "&userToCheck=" + userPhrase;
          apiUrl = apiUrl + "&passwordToCheck=" + userPwPhrase;
        }
        axios
          .get(apiUrl)
          .then((response) => {
            console.log(
              "em-demo-a > api-env-monit.js > sampleAPIEndpointCall",
              "response.data",
              response.data
            );
            var notifObj = (0, _notificationObj.diagnosticToNotification)(
              response.data,
              data
            );
            _store.store.dispatch(
              (0, _notifications_actions.addNotification)(notifObj)
            );
            if (200 == response.status) {
              //console.log('callBackFunction');
              this.toastSuccessMessage(response.data);
              if (callBackFunction) {
                callBackFunction();
              }
              if (refreshFunction) {
                refreshFunction();
              }
              return;
            }
            this.toastErrorMessage(response.data);
            if (callBackFunctionError) {
              callBackFunctionError();
            }
            if (refreshFunction) {
              refreshFunction();
            }
            return;
          })
          .catch(function (error) {
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_error,
              error
            );
            console.log(error.message);
            if (data.callBackFunctionError) {
              data.callBackFunctionError();
            }
          })
          .then(function () {});
      }
      moduleActionRequiresTriggerFunction(
        buttonName,
        buttonDefinition,
        selectedObject,
        moduleArea,
        actionDefinition,
        callBackFunction,
        callBackFunctionError,
        refreshWindowMethod
      ) {
        this.REDUX_GET_INCUBBATCH(
          buttonName,
          buttonDefinition,
          selectedObject,
          moduleArea,
          actionDefinition,
          callBackFunction,
          callBackFunctionError,
          refreshWindowMethod
        );
      }
      REDUX_GET_INCUBBATCH(
        buttonName,
        buttonDefinition,
        selectedObject,
        moduleArea,
        actionDefinition,
        callBackFunction,
        callBackFunctionError,
        refreshWindowMethod
      ) {
        var state = _store.store.getState(),
          selectedBatch = state.emDemoA.selectedBatch;
        selectedObject.batchName = selectedBatch.name;
        selectedObject.batchtemplateId = selectedBatch.incub_batch_config_id;
        selectedObject.batchtemplateVersion =
          selectedBatch.incub_batch_config_version;
        this.moduleActionTriggerAPI(
          buttonName,
          buttonDefinition,
          selectedObject,
          moduleArea,
          actionDefinition,
          callBackFunction,
          callBackFunctionError,
          refreshWindowMethod
        );
      }
    };
  _exports.EndpointsActionsEnvMonitModule = EndpointsActionsEnvMonitModule;
});
