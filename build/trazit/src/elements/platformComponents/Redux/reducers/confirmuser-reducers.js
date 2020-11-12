import {
  OPEN_CONFIRM_USER_DIALOG,
  RESET_AND_CLOSE_CONFIRM_USER_DIALOG,
  CLOSE_CONFIRM_USER_DIALOG,
  CONFIRM_USER_SUCCESS,
  CONFIRM_USER_FAILURE,
} from "../actions/confirmuser-actions.js";
const INITIAL_STATE = {
    confirmUserDialogOpened: !1,
    acceptedHandler: null,
    canceledHandler: null,
    userConfirmed: !1,
    numConfirmations: 0,
    numAttempts: 0,
    maximumFailures: 3,
    pwToCheck: "",
    note: "",
    user: "",
    userPw: "",
  },
  confirmUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case OPEN_CONFIRM_USER_DIALOG: //console.log('estoy en el case OPEN_CONFIRM_USER_DIALOG', action);
        return {
          ...state,
          confirmUserDialogOpened: !0,
          userConfirmed: !1,
          maximumFailures: state.maximumFailures,
          pwToCheck: "",
          note: "",
          acceptedHandler: action.acceptedHandler,
          canceledHandler: action.canceledHandler,
        };
      case RESET_AND_CLOSE_CONFIRM_USER_DIALOG: //console.log('estoy en el case CLEAN_CONFIRM_USER_DIALOG', action);
        return {
          ...state,
          numAttempts: 0,
          confirmUserDialogOpened: !1,
          userConfirmed: !1,
          note: "",
          pwToCheck: "",
          acceptedHandler: null,
        };
      case CLOSE_CONFIRM_USER_DIALOG: //console.log('estoy en el case CLEAN_CONFIRM_USER_DIALOG', action);
        return {
          ...state,
          confirmUserDialogOpened: !1,
          userConfirmed: !1,
          acceptedHandler: null,
        };
      case CONFIRM_USER_SUCCESS:
        return {
          ...state,
          userConfirmed: !0,
          numConfirmations: state.numConfirmations + 1,
          numAttempts: 0,
          note: action.note,
          pwToCheck: "foooooo segundo!!",
          user: action.usr,
          userPw: action.pw,
        };
      case CONFIRM_USER_FAILURE:
        return {
          ...state,
          userConfirmed: !0,
          numAttempts: state.numAttempts + 1,
          text: "foooooo segundo!!",
        };
      default:
        return state;
    }
  };
export default confirmUserReducer;
