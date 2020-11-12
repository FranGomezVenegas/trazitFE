define(["exports", "../actions/confirmuser-actions.js"], function (
  _exports,
  _confirmuserActions
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.default = void 0;
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      keys.push.apply(keys, Object.getOwnPropertySymbols(object));
    }
    if (enumerableOnly)
      keys = keys.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1, source; i < arguments.length; i++) {
      source = null != arguments[i] ? arguments[i] : {};
      if (i % 2) {
        ownKeys(source, !0).forEach(function (key) {
          babelHelpers.defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
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
        case _confirmuserActions.OPEN_CONFIRM_USER_DIALOG: //console.log('estoy en el case OPEN_CONFIRM_USER_DIALOG', action);
          return _objectSpread({}, state, {
            confirmUserDialogOpened: !0,
            userConfirmed: !1,
            maximumFailures: state.maximumFailures,
            pwToCheck: "",
            note: "",
            acceptedHandler: action.acceptedHandler,
            canceledHandler: action.canceledHandler,
          });
        case _confirmuserActions.RESET_AND_CLOSE_CONFIRM_USER_DIALOG: //console.log('estoy en el case CLEAN_CONFIRM_USER_DIALOG', action);
          return _objectSpread({}, state, {
            numAttempts: 0,
            confirmUserDialogOpened: !1,
            userConfirmed: !1,
            note: "",
            pwToCheck: "",
            acceptedHandler: null,
          });
        case _confirmuserActions.CLOSE_CONFIRM_USER_DIALOG: //console.log('estoy en el case CLEAN_CONFIRM_USER_DIALOG', action);
          return _objectSpread({}, state, {
            confirmUserDialogOpened: !1,
            userConfirmed: !1,
            acceptedHandler: null,
          });
        case _confirmuserActions.CONFIRM_USER_SUCCESS:
          return _objectSpread({}, state, {
            userConfirmed: !0,
            numConfirmations: state.numConfirmations + 1,
            numAttempts: 0,
            note: action.note,
            pwToCheck: "foooooo segundo!!",
            user: action.usr,
            userPw: action.pw,
          });
        case _confirmuserActions.CONFIRM_USER_FAILURE:
          return _objectSpread({}, state, {
            userConfirmed: !0,
            numAttempts: state.numAttempts + 1,
            text: "foooooo segundo!!",
          });
        default:
          return state;
      }
    };
  var _default = confirmUserReducer;
  _exports.default = _default;
});
