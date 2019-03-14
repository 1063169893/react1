import { combineReducers } from 'redux'


import home from './home/reducer'
import overflor from './overflro/reducer'

const reducer = combineReducers({
  home,
  overflor
})

export default reducer