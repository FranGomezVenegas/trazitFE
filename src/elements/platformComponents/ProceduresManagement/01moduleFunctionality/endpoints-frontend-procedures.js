import {backendUrl, frontEndProcedureDefinition} from '../../../../config/platform/logic/api-config';
import {store} from '../../../../store';
import {ApiSettings} from '../../../../platform-mixins/apis/api-settings';
import {tokenMixin} from '../../../../platform-mixins/store/token-mixin';
import {ToastMethods} from '../../../../platform-mixins/functions/toast-methods';
import { setSelectedProcedure as setSelectedProcedure} from '../02Redux/procedures_actions';

export const FrontendEndpointsProcedures = (superClass) => class extends (ApiSettings(ToastMethods(tokenMixin(superClass)))) {
    getProcedureDefinition(data) {
        var apiUrl=backendUrl+frontEndProcedureDefinition; 
        console.log('getProcedureDefinition', apiUrl, data);
        if (!this.getFinalToken()){return;}
        axios.get(apiUrl, {        
            params: {
                'actionName':'ALL_PROCEDURE_DEFINITION', 'schemaPrefix':String(data.procedureName).replace(/_/g, "-"),
                'finalToken':this.getFinalToken(), 
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(setSelectedProcedure(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
        })
        .catch(function (error) {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }
}
  