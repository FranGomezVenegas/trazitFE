define(["exports"],function(_exports){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.iconsMethods=void 0;const iconsMethods=superClass=>class extends superClass{getIconPath(field,item){field.icon_name="icons:next-week";console.log("getIconPath","field",field);return field;if(!item){console.log("getIconPath with no item. Fld=",field);return}if("spec_eval"==field.name){return this.resultSpecEval(field,item)}return""}resultSpecEval(field,item){console.log("resultSpecEval","item",item,"field",field);return"../03config/icons/result/spec_eval/"+field.spec_eval+"gif";//if (field.spec_eval=="OUT_SPEC_MAX"){}
}};_exports.iconsMethods=iconsMethods});