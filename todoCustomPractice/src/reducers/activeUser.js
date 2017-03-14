function ActiveUser(state = null, action){
    switch(action.type){
        case "SELECT_USER":
        return action.user
        break;
        default :        
    }
    return state;
}
export default ActiveUser