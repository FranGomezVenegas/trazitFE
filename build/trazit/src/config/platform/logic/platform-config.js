export const default_language="es";export const isTabOpenableWhenNotSopCertifiedConst=!1;export function isTabOpenableWhenNotSopCertified(procedureData){//console.log('isTabOpenableWhenNotSopCertified');
if(procedureData==void 0){return!1}var windowOpenableWhenNotSopCertified=procedureData.windowOpenableWhenNotSopCertifiedUserSopCertification;if(windowOpenableWhenNotSopCertified==void 0){return!1}if("ENABLE"==windowOpenableWhenNotSopCertified.toUpperCase()||"YES"==windowOpenableWhenNotSopCertified.toUpperCase()){return!0}return!1}