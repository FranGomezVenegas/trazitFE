define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.confirmUserFailure = _exports.confirmUserSuccess = _exports.closeConfirmUserDialog = _exports.resetAndCloseConfirmUserDialog = _exports.openConfirmUserDialog = _exports.RESET_AND_CLOSE_CONFIRM_USER_DIALOG = _exports.CONFIRM_USER_FAILURE = _exports.CONFIRM_USER_SUCCESS = _exports.CLOSE_CONFIRM_USER_DIALOG = _exports.OPEN_CONFIRM_USER_DIALOG = void 0;
  const OPEN_CONFIRM_USER_DIALOG = "OPEN_CONFIRM_USER_DIALOG";
  _exports.OPEN_CONFIRM_USER_DIALOG = OPEN_CONFIRM_USER_DIALOG;
  const CLOSE_CONFIRM_USER_DIALOG = "CLOSE_CONFIRM_USER_DIALOG";
  _exports.CLOSE_CONFIRM_USER_DIALOG = CLOSE_CONFIRM_USER_DIALOG;
  const CONFIRM_USER_SUCCESS = "CONFIRM_USER_SUCCESS";
  _exports.CONFIRM_USER_SUCCESS = CONFIRM_USER_SUCCESS;
  const CONFIRM_USER_FAILURE = "CONFIRM_USER_FAILURE";
  _exports.CONFIRM_USER_FAILURE = CONFIRM_USER_FAILURE;
  const RESET_AND_CLOSE_CONFIRM_USER_DIALOG =
    "RESET_AND_CLOSE_CONFIRM_USER_DIALOG";
  _exports.RESET_AND_CLOSE_CONFIRM_USER_DIALOG = RESET_AND_CLOSE_CONFIRM_USER_DIALOG;
  const openConfirmUserDialog = (acceptedHandler, canceledHandler) => {
    return { type: OPEN_CONFIRM_USER_DIALOG, acceptedHandler, canceledHandler };
  };
  _exports.openConfirmUserDialog = openConfirmUserDialog;
  const resetAndCloseConfirmUserDialog = (handler) => {
    return { type: RESET_AND_CLOSE_CONFIRM_USER_DIALOG };
  };
  _exports.resetAndCloseConfirmUserDialog = resetAndCloseConfirmUserDialog;
  const closeConfirmUserDialog = (handler) => {
    return { type: CLOSE_CONFIRM_USER_DIALOG };
  };
  _exports.closeConfirmUserDialog = closeConfirmUserDialog;
  const confirmUserSuccess = (note, usr, pw) => {
    return { type: CONFIRM_USER_SUCCESS, note: note, usr: usr, pw: pw };
  };
  _exports.confirmUserSuccess = confirmUserSuccess;
  const confirmUserFailure = () => {
    return { type: CONFIRM_USER_FAILURE };
  };
  _exports.confirmUserFailure = confirmUserFailure;
});
