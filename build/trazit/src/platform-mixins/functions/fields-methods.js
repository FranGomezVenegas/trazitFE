/**
 * @mixinFunction
 * @polymer
 */export const FieldsMethods=superClass=>class extends superClass{todayYYYYMMDD(){var d=new Date,month=""+(d.getMonth()+1),day=""+d.getDate(),year=d.getFullYear();if(2>month.length)month="0"+month;if(2>day.length)day="0"+day;return[year,month,day].join("-")}fieldValue(langApp,field,fieldName){console.log("field-methods.js","fieldValue"," langApp="+langApp," field=",field," fieldName=",fieldName);if(!langApp||!field){//console.log("methods.js", "labelValue with no langApp or field recognized", 'field=', field, 'langApp=', langApp ); 
return""}if("en"==langApp){if(field.label_en){return field[fieldName+"_en"]}if(field.message_en){return field.message_en}console.log("methods.js","labelValue with no label_en recognized","field=",field,"langApp=",langApp);return""}if("es"==langApp){if(field.label_es){return field[fieldName+"_es"]}if(field.message_es){return field.message_es}console.log("methods.js","labelValue with no label_es recognized","field=",field,"langApp=",langApp);return""}return field.label_en}labelValue(langApp,field){//console.log("field-methods.js", "labelValue", "langApp="+langApp, 'field=', field);
if(!langApp||!field){//console.log("methods.js", "labelValue with no langApp or field recognized", 'field=', field, 'langApp=', langApp ); 
return""}if("en"==langApp){if(field.label_en){return field.label_en}if(field.message_en){return field.message_en}console.log("methods.js","labelValue with no label_en recognized","field=",field,"langApp=",langApp);return""}if("es"==langApp){if(field.label_es){return field.label_es}if(field.message_es){return field.message_es}console.log("methods.js","labelValue with no label_es recognized","field=",field,"langApp=",langApp);return""}return field.label_en}tabLabelValue(langApp,field){//        console.log("methods.js", "labelValue", "langApp="+langApp, field);
if(!langApp||!field){//console.log("methods.js", "labelValue with no langApp or field recognized", 'field=', field, 'langApp=', langApp ); 
return""}if("en"==langApp){if(!field.tabLabel_en){//console.log("methods.js", "labelValue with no label_en recognized", 'field=', field, 'langApp=', langApp ); 
return field.name}return field.tabLabel_en}if("es"==langApp){if(!field.tabLabel_es){//console.log("methods.js", "labelValue with no label_es recognized", 'field=', field, 'langApp=', langApp ); 
return field.name}return field.tabLabel_es}return field.tabLabel_en}labelListValue(langApp,item){//console.log("_labelListValue", langApp, valEng, valSp);
if("en"==langApp)return item.keyValue_en;if("es"==langApp)return item.keyValue_es;return this.field.keyValue_en}confidentialMaskValue(langApp){var formValue_confidentialMaskDefault="*******",formValue_confidentialMask_en="*CONFIDENTIAL*",formValue_confidentialMask_es="*CONFIDENCIAL*";//        console.log('confidentialMaskValue', langApp);
if("en"==langApp)return formValue_confidentialMask_en;//'$CONFIDENTIAL$';    
if("es"==langApp)return formValue_confidentialMask_es;//'$CONFIDENCIAL$';
return formValue_confidentialMaskDefault;//'********';    
}resetValue(){this.field.value="";this.value=""}focus(){this.shadowRoot.getElementById(this.field.name).focus()}enable(){//console.log('field-methods.enable');
this.shadowRoot.getElementById(this.field.name).removeAttribute("disabled");//this.shadowRoot.getElementById(this.field.name).read_only=false;
//this.shadowRoot.getElementById(this.field.name).enable=true;
//this.shadowRoot.getElementById(this.field.name).disabled=false;
}disable(){this.shadowRoot.getElementById(this.field.name).removeAttribute("enabled");this.shadowRoot.getElementById(this.field.name).disabled=!0}};