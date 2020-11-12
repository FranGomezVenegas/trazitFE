define([
  "exports",
  "../node_modules/pwa-helpers/lazy-reducer-enhancer.js",
  "./elements/platformComponents/Redux/reducers/app_reducers.js",
  "../node_modules/redux/es/redux.js",
  "../node_modules/redux-thunk/es/index.js",
  "./elements/platformComponents/Redux/reducers/tabs_reducers.js",
  "./elements/platformComponents/Redux/reducers/sop_reducers.js",
  "./elements/platformComponents/Redux/reducers/notifications_reducers.js",
  "./elements/platformComponents/Redux/reducers/esign-reducers.js",
  "./elements/platformComponents/Redux/reducers/confirmuser-reducers.js",
  "./elements/platformComponents/Redux/reducers/incidents_reducers.js",
  "./elements/platformComponents/Redux/reducers/videotutorials_reducers.js",
  "./elements/platformComponents/ProceduresManagement/02Redux/procedures_reducers.js",
  "./elements/processInstanceComponents/em-demo-a/02Redux/em-demo-a_reducers.js",
  "./elements/processInstanceComponents/genoma-instancia1/02Redux/genoma-instancia1_reducers.js",
  "./elements/processInstanceComponents/proc-deploy/02Redux/proc-deploy_reducers.js",
], function (
  _exports,
  _lazyReducerEnhancer,
  _app_reducers,
  _redux,
  _index,
  _tabs_reducers,
  _sop_reducers,
  _notifications_reducers,
  _esignReducers,
  _confirmuserReducers,
  _incidents_reducers,
  _videotutorials_reducers,
  _procedures_reducers,
  _emDemoA_reducers,
  _genomaInstancia1_reducers,
  _procDeploy_reducers
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.store = void 0;
  _index = babelHelpers.interopRequireDefault(_index);
  _tabs_reducers = babelHelpers.interopRequireDefault(_tabs_reducers);
  _sop_reducers = babelHelpers.interopRequireDefault(_sop_reducers);
  _notifications_reducers = babelHelpers.interopRequireDefault(
    _notifications_reducers
  );
  _esignReducers = babelHelpers.interopRequireDefault(_esignReducers);
  _confirmuserReducers = babelHelpers.interopRequireDefault(
    _confirmuserReducers
  );
  _incidents_reducers = babelHelpers.interopRequireDefault(_incidents_reducers);
  _videotutorials_reducers = babelHelpers.interopRequireDefault(
    _videotutorials_reducers
  );
  _procedures_reducers = babelHelpers.interopRequireDefault(
    _procedures_reducers
  );
  _emDemoA_reducers = babelHelpers.interopRequireDefault(_emDemoA_reducers);
  _genomaInstancia1_reducers = babelHelpers.interopRequireDefault(
    _genomaInstancia1_reducers
  );
  _procDeploy_reducers = babelHelpers.interopRequireDefault(
    _procDeploy_reducers
  ); // Sets up a Chrome extension for time travel debugging.
  // See https://github.com/zalmoxisus/redux-devtools-extension for more information.
  const devCompose =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose,
    store = (0, _redux.createStore)(
      (state) => state,
      devCompose(
        (0, _lazyReducerEnhancer.lazyReducerEnhancer)(_redux.combineReducers),
        (0, _redux.applyMiddleware)(_index.default)
      )
    );
  _exports.store = store; // Redux de la plataforma. Inicio
  store.addReducers({ app: _app_reducers.app });
  store.addReducers({ tabs: _tabs_reducers.default });
  store.addReducers({ SOPS: _sop_reducers.default });
  store.addReducers({ notifications: _notifications_reducers.default });
  store.addReducers({ esignDialog: _esignReducers.default });
  store.addReducers({ confirmUserDialog: _confirmuserReducers.default });
  store.addReducers({ incidents: _incidents_reducers.default });
  store.addReducers({ videoTutorials: _videotutorials_reducers.default });
  store.addReducers({ sateliteProcedures: _procedures_reducers.default }); // Redux de la plataforma. Fin
  // Redux de procesos de la instancia. Inicio
  store.addReducers({ emDemoA: _emDemoA_reducers.default });
  store.addReducers({ genomaInstancia1: _genomaInstancia1_reducers.default });
  store.addReducers({ procDeploy: _procDeploy_reducers.default });
});
