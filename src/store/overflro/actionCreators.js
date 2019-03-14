import * as type from './type'

const actionCreators = {
    setOver(){
      return dispatch => {
        let action= {
          type:type.OVER_BOX
        }
        dispatch( action )
      }
    }
   
}

export default actionCreators