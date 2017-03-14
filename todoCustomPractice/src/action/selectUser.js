export default function(user){
    console.log(user.name)
    return {
        type : "SELECT_USER",
        user
    }
}