define([
  "exports",
  "../actions/esign-actions.js",
  "../../../../../node_modules/@google-web-components/google-chart/loader.js",
], function (_exports, _esignActions, _loader) {
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
      esignDialogOpened: !1,
      esignConfirmed: !1,
      acceptedHandler: null,
      canceledHandler: null,
      numAttempts: 0,
      maximumFailures: 3,
      sgn: "",
      text: "sdsdsds",
    },
    esignReducer = (state = INITIAL_STATE, action) => {
      //console.log('esign-reducers >> esignReducer >> action=', action);
      switch (action.type) {
        case _esignActions.OPEN_ESIGN_DIALOG: //console.log('estoy en el case OPEN_ESIGN_DIALOG', action);
          return _objectSpread({}, state, {
            esignDialogOpened: !0,
            esignConfirmed: !1, //numAttempts: 0,
            maximumFailures: state.maximumFailures,
            acceptedHandler: action.acceptedHandler,
            canceledHandler: action.canceledHandler,
          });
        case _esignActions.CLOSE_ESIGN_DIALOG: //console.log('estoy en el case CLOSE_ESIGN_DIALOG', action);
          return _objectSpread({}, state, {
            esignDialogOpened: !1,
            esignConfirmed: !1,
            acceptedHandler: null,
          });
        case _esignActions.RESET_AND_CLOSE_ESIGN_DIALOG: //console.log('estoy en el case CLEAN_CONFIRM_USER_DIALOG', action);
          return _objectSpread({}, state, {
            numAttempts: 0,
            esignDialogOpened: !1,
            esignConfirmed: !1,
            acceptedHandler: null,
          });
        case _esignActions.ESIGN_SUCCESS:
          return _objectSpread({}, state, {
            esignConfirmed: !0,
            numAttempts: 0,
            sgn: action.phrase,
            text: "foooooo segundo!!",
          });
        case _esignActions.ESIGN_FAILURE:
          return _objectSpread({}, state, {
            esignConfirmed: !0,
            numAttempts: state.numAttempts + 1,
            text: "foooooo segundo!!",
          });
        default:
          return state;
      }
    };
  var _default = esignReducer;
  _exports.default = _default;
});
