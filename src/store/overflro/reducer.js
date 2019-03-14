import state from './state'
import * as type from './type'
const reducer = (previousState=state,action)=>{
    let new_state={...previousState}

    switch(action.type){
        case type.OVER_BOX:
            new_state.flow=!new_state.flow
        break;
        default:
        break;
    }
    return new_state
}
export default reducer