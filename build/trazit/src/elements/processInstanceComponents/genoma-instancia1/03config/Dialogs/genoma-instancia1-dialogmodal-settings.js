export const dialogAddComment=[{name:"Comment",label_en:"Add Comment",label_es:"A\xF1ade comentario",type:"text",password:"false",read_only:!1,value:""}];export const dialogEnterVariableValueText=[{name:"VariableValueText",label_en:"Add Comment",label_es:"A\xF1ade comentario",type:"text",password:"false",read_only:!1,value:""}];export const dialogEnterVariableValueInteger=[{name:"VariableValueInteger",label_en:"How Many Samples To Log?",label_es:"\xBFCu\xE1ntas?",type:"integer",value:1,minValue:0,maxValue:1e4,read_only:!1,password:"false"}];export const dialogStudyNew=[{name:"stydy_field_new",label_en:"New Study Name",label_es:"Nombre para nuevo Estudio",type:"text",password:"false",value:"",read_only:!1},{name:"description",label_en:"Description",label_es:"Descripci\xF3n",type:"text",password:"false",value:"",read_only:!1},{name:"active",label_en:"Active",label_es:"Activo",type:"boolean",password:"false",value:!0,read_only:!1}];export const dialogStudyUpdate=[{name:"stydy_field_new",label_en:"New Study Name",label_es:"Nombre para nuevo Estudio",type:"text",password:"false",value:"",read_only:!0},{name:"description",label_en:"Description",label_es:"Descripci\xF3n",type:"text",password:"false",value:"",read_only:!1}];export const dialogStudyIndividualNew=[{name:"stydy_field_new",label_en:"New Study Individual Name",label_es:"Nombre para nuevo Individuo",type:"text",password:"false",value:"",read_only:!1},{name:"description",label_en:"Description",label_es:"Descripci\xF3n",type:"text",password:"false",value:"",read_only:!1},{name:"active",label_en:"Active",label_es:"Activo",type:"boolean",password:"false",value:!0,read_only:!1}];export const dialogStudyIndividualUpdate=[{name:"stydy_field_new",label_en:"Study Individual Name",label_es:"Nombro Individuo",type:"text",password:"false",value:"",read_only:!0},{name:"description",label_en:"Description",label_es:"Descripci\xF3n",type:"text",password:"false",value:"",read_only:!1}];export const dialogStudyFamilyNew=[{name:"stydy_field_new",label_en:"New Study Family Name",label_es:"Nombre para nueva Familia",type:"text",password:"false",value:"",read_only:!1},{name:"description",label_en:"Description",label_es:"Descripci\xF3n",type:"text",password:"false",value:"",read_only:!1},{name:"active",label_en:"Active",label_es:"Activo",type:"boolean",password:"false",value:!0,read_only:!1}];export const dialogStudyFamilyUpdate=[{name:"stydy_field_new",label_en:"Study Family Name",label_es:"Nombre Familia",type:"text",password:"false",value:"",read_only:!0},{name:"description",label_en:"Description",label_es:"Descripci\xF3n",type:"text",password:"false",value:"",read_only:!1}];export const dialogStudySamplesSetNew=[{name:"stydy_field_new",label_en:"New Study Samples Set Name",label_es:"Nombre para nueva Agrupaci\xF3n Muestras",type:"text",password:"false",value:"",read_only:!1},{name:"description",label_en:"Description",label_es:"Descripci\xF3n",type:"text",password:"false",value:"",read_only:!1},{name:"active",label_en:"Active",label_es:"Activo",type:"boolean",password:"false",value:!0,read_only:!1}];export const dialogStudySamplesSetUpdate=[{name:"stydy_field_new",label_en:"Study Samples Set Name",label_es:"Nombre Agrupaci\xF3n Muestras",type:"text",password:"false",value:"",read_only:!0},{name:"description",label_en:"Description",label_es:"Descripci\xF3n",type:"text",password:"false",value:"",read_only:!1}];export const dialog_buttons=[{name:"closeDialog",label_en:"Close Dialog",label_es:"Cerrar Ventana",type:"icon-button",icon_name:"icons:restore-page",icon_color:"aqua",esign_required:!1,read_only:!1}];export const cancelDialogButton={name:"CANCEL_DIALOG_BUTTON",label_en:"Cancel",label_es:"Cancelar",type:"button",icon_name:"icons:next-week",read_only:!1};export const confirmDialogButton={name:"ACCEPT_DIALOG_BUTTON",label_en:"Accept",label_es:"Aceptar",type:"button",icon_name:"icons:next-week",read_only:!1};export const closeDialogButton={name:"CLOSE_DIALOG_BUTTON",label_en:"Close",label_es:"Cerrar",type:"button",icon_name:"icons:next-week",read_only:!1};const documentContainerGenomaInstancia1DialogModalStyle=document.createElement("genoma-instancia1-dialogmodal-style");documentContainerGenomaInstancia1DialogModalStyle.setAttribute("style","display: none;");documentContainerGenomaInstancia1DialogModalStyle.innerHTML=`
  <dom-module id="genoma-instancia1-dialogmodal-style">
    <template>
    <style>
    /* Modal Content */
    div.modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        -moz-box-shadow: 3px 3px 5px #535353;
        -webkit-box-shadow: 3px 3px 5px #535353;       
        box-shadow: 3px 3px 5px #535353;
        -moz-border-radius: 6px 6px 6px 6px;
        -webkit-border-radius: 6px;  
        border-radius: 6px 6px 6px 6px;                
    }        
    /* The Close Button */

    div.modal-content.bgimg {
        background-image: url('./images/hexagon-white-blue-light.jpg');   
        width: 420px;       
    }          

    </style>
    </template>
  </dom-module>`;document.head.appendChild(documentContainerGenomaInstancia1DialogModalStyle);