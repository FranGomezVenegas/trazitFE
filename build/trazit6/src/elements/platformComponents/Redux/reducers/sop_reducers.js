define(["exports", "../actions/sop_actions.js"], function (
  _exports,
  _sop_actions
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
      userName: "",
      userAllSop: [],
      userPendingSop: [],
      procedureSops: [],
    },
    sopReducer = (state = INITIAL_STATE, action) => {
      switch (action.type) {
        case _sop_actions.USER_ALL_SOP: //        console.log('sopReducer >> ', action.type, action);
          return _objectSpread({}, state, { userAllSop: action.DATA });
        case _sop_actions.USER_PENDING_SOP: //console.log('process-us_reducers.sampleTemplates', action);
          return _objectSpread({}, state, { userPendingSop: action.DATA });
        case _sop_actions.PROCEDURE_SOPS: //console.log('process-us_reducers.sampleTemplates', action);
          return _objectSpread({}, state, { procedureSops: action.DATA });
        default:
          return state;
      }
    };
  var _default = sopReducer;
  _exports.default = _default;
});
