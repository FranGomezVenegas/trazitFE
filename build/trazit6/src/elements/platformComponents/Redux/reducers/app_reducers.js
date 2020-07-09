define(["exports","../../../../../node_modules/redux/es/redux.js","../actions/app_actions.js","../actions/session_actions.js"],function(_exports,_redux,_app_actions,_session_actions){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.app=void 0;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){keys.push.apply(keys,Object.getOwnPropertySymbols(object))}if(enumerableOnly)keys=keys.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(source,!0).forEach(function(key){babelHelpers.defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}// //import { ADD_NOTIFICATION } from '../actions/notifications_actions.js';
const InitialUserState={loggedIn:!1,appLanguage:"en",partialToken:"",finalToken:"",personId:"",userName:"",tabsOpenOnLogin:"",appProcedureList:[],userInfo:[],loading:!1};function user(state=InitialUserState,action){switch(action.type){case _app_actions.USER_INFO:return _objectSpread({},state,{userInfo:action});case _app_actions.SET_PARTIAL_TOKEN:return _objectSpread({},state,{partialToken:action.partialToken,personId:action.personId});case _app_actions.DO_LOGIN:return _objectSpread({},state,{loggedIn:!0,loading:!1,userName:action.userName});case _app_actions.SET_USER_TABS_ON_LOGIN:return _objectSpread({},state,{tabsOpenOnLogin:action.tabsOpenOnLogin});case _app_actions.DO_LOGOUT://console.log('DO_LOGOUT', 'action', action);
return{InitialUserState,loggedIn:!1,appLanguage:action.appLanguage};case _app_actions.UPDATE_FINAL_TOKEN://      console.log('UPDATE_FINAL_TOKEN', action);
return _objectSpread({},state,{finalToken:action.token});case _app_actions.SET_APP_LANGUAGE:return _objectSpread({},state,{appLanguage:action.appLanguage});case _app_actions.SET_APP_PROCEDURE_LIST://console.log('SET_APP_PROCEDURE_LIST', action);
return _objectSpread({},state,{appProcedureList:action.procListData});case _app_actions.CHANGE_LOADING:return _objectSpread({},state,{loading:action.loading});default:return state;}}const InitialSessionState={sessionId:0,userRole:"",startDate:""};function session(state=InitialSessionState,action){switch(action.type){case _session_actions.ADD_SESSION:return _objectSpread({},state,{sessionId:action.sessionId,userRole:action.userRole,startDate:action.startDate});default:return state;}}// /*
// const InitialNotificationsState = {
//   sessionId: 0,
//   userRole: ''
// }
// function notifications(state = InitialNotificationsState, action) {
//   switch(action.type) {
//     case ADD_SESSION:
//       return {
//         ...state,
//         sessionId: 1,
//         userRole: 'userRole'
//       } 
//     default:
//       return state;      
//   }
// }
// */
// /*
// * Reducer para la navegación
// */
// function navigation(state = '', action) {
//   switch(action.type) {
//     case UPDATE_PAGE:
//       return {
//         ...state,
//         page: action.page
//       }
//     default:
//       return state
//   }
// } 
const app=(0,_redux.combineReducers)({user,session//,
//   navigation ' Esto es del routing anterior.
});_exports.app=app});