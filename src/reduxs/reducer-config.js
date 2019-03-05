import { combineReducers } from 'redux'
import listReducer from './lists/lists.reducer'

const rootReducer = combineReducers({
  lists: listReducer,
})

export default rootReducer
