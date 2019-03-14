import state from './state'
import * as type from './type'


const reducer = (previousState=state,action)=>{
    let new_state={...previousState}

    switch(action.type){
        case type.HOME_LRFT_DATA:
            new_state.left=action.payload
        break;
        case type.LIST_PAGE1_DATA:
            new_state.page1=action.payload
        break;
        case type.LIST_PAGE2_DATA:
        new_state.page2=action.payload
        break;
        case type.LIST_PAGE3_DATA:
        new_state.page3=action.payload
        break;
        default:
 
        break;
    }

    return new_state
}



  
  export default reducer