import{ALL_ACTIVE_PROJECTS,SELECTED_PROJECT,SELECTED_STUDY}from"./genoma-instancia1_actions.js";const INITIAL_STATE={activeProjects:[],selectedProject:[],selectedStudy:[]// , browserSelectedSample:[]
// , browserSelectedIncubator:[]
// , browserSelectedBatch:[]
// , browserSelectedProdLot:[]
// , kpis:[]
// , sampleStatsCounterByStage:[]
// , sampleStatsLastNresults:[]
},Genoma1Reducer=(state=INITIAL_STATE,action)=>{//console.log('genoma-1_reducers.SAVE_DATA_IN_STORE', action);
switch(action.type){case ALL_ACTIVE_PROJECTS:return{...state,activeProjects:action.DATA};case SELECTED_PROJECT:return{...state,selectedProject:action.DATA//            setSelectedProject_genoma_instancia1         
};case SELECTED_STUDY:return{...state,selectedStudy:action.DATA//            setSelectedProject_genoma_instancia1         
};default:return state;}};export default Genoma1Reducer;