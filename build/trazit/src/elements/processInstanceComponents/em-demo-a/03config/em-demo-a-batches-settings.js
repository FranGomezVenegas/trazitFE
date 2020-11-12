// export const programHome_sampleSummaryGaugeOptions={"width": 400, "height": 120, "redFrom": 90, "redTo": 100, "yellowFrom":75,
//                                                     "yellowTo": 90, "minorTicks": 5};
// export const programHome_sampleSummaryPieOptions={"title": "Samples Progress"};
export const incubActiveBatches={fieldToDisplay:[{name:"name",label_en:"Name",label_es:"Nombre",sort:!0,filter:!1,width:"30%"},{name:"incubation_incubator",label_en:"Incubator",label_es:"Incubadora",sort:!1,filter:!0,width:"30%"},{name:"NUM_SAMPLES",label_en:"Num Samples",label_es:"N\xBA Muestras",sort:!1,filter:!0,width:"20%"},{name:"incubation_start",label_en:"Start Date",label_es:"Fecha Inicio",sort:!1,filter:!0,width:"30%"},{name:"type",label_en:"Type",label_es:"Tipo",sort:!1,filter:!0,width:"30%"}],displayRefreshButton:!0,autorefreshWindow:!1,tableTitle:{display:!0,label:{label_en:"Active Batches",label_es:"Tandas en activo"}},displayButtons:!0,buttons:[{name:"EM_BATCH_INCUB_CREATE",label_en:"New Batch",label_es:"Crear Tanda",type:"button",icon_name:"icons:assignment-return",requires_selected_object:!1,read_only:!1},{name:"EM_BATCH_INCUB_REMOVE",label_en:"Delete Batch",label_es:"Borrar Tanda",type:"button",icon_name:"icons:assignment-return",requires_selected_object:!0,read_only:!1},{name:"EM_BATCH_ASSIGN_INCUB",label_en:"Assign Incubator",label_es:"Asignar incubadora",type:"button",icon_name:"icons:assignment-return",read_only:!1},{name:"EM_BATCH_INCUB_START",label_en:"Start Incubation",label_es:"Empezar incubaci\xF3n",type:"button",icon_name:"icons:assignment-return",read_only:!1},{name:"EM_BATCH_INCUB_END",label_en:"End Incubation",label_es:"Terminar incubaci\xF3n",type:"button",icon_name:"icons:assignment-return",read_only:!1}]};export const selectedBatchEmpty={label_en:"No Batch selected",label_es:"Seleccione una tanda",icon_name:"vaadin:chevron-circle-up"};export const sampleIncubation_incubBatch_newBatchFormFields=[{name:"migroorganism_freetext",label_en:"New",label_es:"Nuevo",type:"text",password:"false",value:"",read_only:!1}];const documentContainerEmDemoABatchesStyle=document.createElement("em-demo-a-batches-style");documentContainerEmDemoABatchesStyle.setAttribute("style","display: none;");documentContainerEmDemoABatchesStyle.innerHTML=`
  <dom-module id="em-demo-a-batches-style">
    <template>
    <style>
    vaadingrid-lit-singleselect {
      width:55%;
    }
    p.tableTitle{
      margin-top: 0px;
      margin-bottom: 3px;
      color: #44cbe6;
      font-size:30px;
    }         
    div.main{
      //display:flex;
      width:95%;
    }         
    div.buttonGroup {
      display: flex
    } 
    div.batchContent{
      display:flex;
      flex-wrap: wrap;
      justify-content: space-between;
    } 
    div.cardMySops{      
      flex-basis: 10%;
      height: 5vh;
      width: auto;
      font-size:3vh;
    }    
    @media (min-width:900px){
      div.batchContent{
        flex-wrap: wrap;
        display:flex;
        justify-content: space-between;
      }
    }
    </style>
    </template>
  </dom-module>`;document.head.appendChild(documentContainerEmDemoABatchesStyle);