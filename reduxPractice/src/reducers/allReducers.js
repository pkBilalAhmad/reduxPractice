import {combineReducers} from 'redux'
import list from './list'
import activeUser from './activeUser'

 const allReducers = combineReducers({
    list : list,
    activeUser : activeUser 
})

export default allReducers;