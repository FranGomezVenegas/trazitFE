define(["exports","./genoma-instancia1_actions.js"],function(_exports,_genomaInstancia1_actions){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.default=void 0;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){keys.push.apply(keys,Object.getOwnPropertySymbols(object))}if(enumerableOnly)keys=keys.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(source,!0).forEach(function(key){babelHelpers.defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}const INITIAL_STATE={activeProjects:[],selectedProject:[],selectedStudy:[]// , browserSelectedSample:[]
// , browserSelectedIncubator:[]
// , browserSelectedBatch:[]
// , browserSelectedProdLot:[]
// , kpis:[]
// , sampleStatsCounterByStage:[]
// , sampleStatsLastNresults:[]
},Genoma1Reducer=(state=INITIAL_STATE,action)=>{//console.log('genoma-1_reducers.SAVE_DATA_IN_STORE', action);
switch(action.type){case _genomaInstancia1_actions.ALL_ACTIVE_PROJECTS:return _objectSpread({},state,{activeProjects:action.DATA});case _genomaInstancia1_actions.SELECTED_PROJECT:return _objectSpread({},state,{selectedProject:action.DATA//            setSelectedProject_genoma_instancia1         
});case _genomaInstancia1_actions.SELECTED_STUDY:return _objectSpread({},state,{selectedStudy:action.DATA//            setSelectedProject_genoma_instancia1         
});default:return state;}};var _default=Genoma1Reducer;_exports.default=_default});