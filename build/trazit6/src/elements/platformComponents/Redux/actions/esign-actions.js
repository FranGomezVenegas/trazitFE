define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.esignFailure = _exports.esignSuccess = _exports.resetAndCloseEsignDialog = _exports.closeEsignDialog = _exports.openEsignDialog = _exports.RESET_AND_CLOSE_ESIGN_DIALOG = _exports.ESIGN_FAILURE = _exports.ESIGN_SUCCESS = _exports.CLOSE_ESIGN_DIALOG = _exports.OPEN_ESIGN_DIALOG = void 0;
  const OPEN_ESIGN_DIALOG = "OPEN_ESIGN_DIALOG";
  _exports.OPEN_ESIGN_DIALOG = OPEN_ESIGN_DIALOG;
  const CLOSE_ESIGN_DIALOG = "CLOSE_ESIGN_DIALOG";
  _exports.CLOSE_ESIGN_DIALOG = CLOSE_ESIGN_DIALOG;
  const ESIGN_SUCCESS = "ESIGN_SUCCESS";
  _exports.ESIGN_SUCCESS = ESIGN_SUCCESS;
  const ESIGN_FAILURE = "ESIGN_FAILURE";
  _exports.ESIGN_FAILURE = ESIGN_FAILURE;
  const RESET_AND_CLOSE_ESIGN_DIALOG = "RESET_AND_CLOSE_ESIGN_DIALOG";
  _exports.RESET_AND_CLOSE_ESIGN_DIALOG = RESET_AND_CLOSE_ESIGN_DIALOG;
  const openEsignDialog = (acceptedHandler, canceledHandler) => {
    //console.log('esign-actions >> openEsignDialog');
    return {
      type: OPEN_ESIGN_DIALOG,
      acceptedHandler: acceptedHandler,
      canceledHandler: canceledHandler,
    };
  };
  _exports.openEsignDialog = openEsignDialog;
  const closeEsignDialog = (handler) => {
    return { type: CLOSE_ESIGN_DIALOG };
  };
  _exports.closeEsignDialog = closeEsignDialog;
  const resetAndCloseEsignDialog = (handler) => {
    return { type: RESET_AND_CLOSE_ESIGN_DIALOG };
  };
  _exports.resetAndCloseEsignDialog = resetAndCloseEsignDialog;
  const esignSuccess = (data) => {
    return { type: ESIGN_SUCCESS, phrase: data.phrase };
  };
  _exports.esignSuccess = esignSuccess;
  const esignFailure = () => {
    return { type: ESIGN_FAILURE };
  };
  _exports.esignFailure = esignFailure;
});
