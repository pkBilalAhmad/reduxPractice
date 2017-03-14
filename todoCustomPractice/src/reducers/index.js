
import { combineReducers } from 'redux';
import Names from './names'
import ActiveUser from './activeUser'


const allReducers = combineReducers({
    userList: Names,
    activeUser: ActiveUser
})
export default allReducers