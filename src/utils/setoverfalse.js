import actionCreators from '../store/overflro/actionCreators'

import { connect } from 'react-redux'

import { bindActionCreators} from 'redux'




const setOveroer = (UIComponent) => {
  return connect(
    state => state.overflor,
    dispatch => {
      return bindActionCreators(actionCreators,dispatch)
    }
  )(UIComponent)
}


export default setOveroer




