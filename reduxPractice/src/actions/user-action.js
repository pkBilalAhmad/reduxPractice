const userAction = (user)=>{
    console.log(user.name,user.age)
    return {
        type : "USER_SELECTED",
        payload : user
    }
}

export default userAction;