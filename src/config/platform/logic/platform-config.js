export const default_language="es";

export const isTabOpenableWhenNotSopCertifiedConst=false;

export function isTabOpenableWhenNotSopCertified(procedureData) {
    //console.log('isTabOpenableWhenNotSopCertified');
    if (procedureData==undefined){return false;}
    var windowOpenableWhenNotSopCertified=procedureData.windowOpenableWhenNotSopCertifiedUserSopCertification;
    if (windowOpenableWhenNotSopCertified==undefined){return false;}
    if ((windowOpenableWhenNotSopCertified.toUpperCase()=="ENABLE") || (windowOpenableWhenNotSopCertified.toUpperCase()=="YES") ){return true;}
    return false;
}