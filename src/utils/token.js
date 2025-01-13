
function hundleToken(){
    let token = localStorage.getItem('token')
    const keyAndToken = ["authToken", token ]
    return keyAndToken
}



export default hundleToken
