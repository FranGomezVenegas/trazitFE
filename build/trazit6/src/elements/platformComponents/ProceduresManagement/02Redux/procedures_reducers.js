define(["exports","./procedures_actions.js"],function(_exports,_procedures_actions){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.default=void 0;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){keys.push.apply(keys,Object.getOwnPropertySymbols(object))}if(enumerableOnly)keys=keys.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(source,!0).forEach(function(key){babelHelpers.defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}const INITIAL_STATE={procedures:[],selectedProcedureName:"",selectedProcedure:[]},EmDemoAReducer=(state=INITIAL_STATE,action)=>{switch(action.type){case _procedures_actions.GET_PROCEDURES_LIST://    console.log('procedures_reducers.GET_PROCEDURES_LIST', action);
return _objectSpread({},state,{procedures:action.DATA});case _procedures_actions.SET_SELECTED_PROCEDURE://    console.log('procedures_reducers.SET_SELECTED_PROCEDURE', action);
return _objectSpread({},state,{selectedProcedureName:action.DATA.name,selectedProcedure:action.DATA});default:return state;}};var _default=EmDemoAReducer;_exports.default=_default});