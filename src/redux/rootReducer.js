import { combineReducers } from 'redux'
import customer from './reducer/reducer'

export const rootReducer = combineReducers({
    customer,
})