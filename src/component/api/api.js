function postUserdata(username,name,number,email,address,latitude,longitude){
    console.log(username,name,number,email)
return fetch(`http://localhost:4000/api/hospital`, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }, 
    body: JSON.stringify({
        hid:username,
        name:name,
        contact:number,
        email:email,
        location:{
            "latitude":latitude,
            "longitude":longitude,
            "address":address,
            "city":''
          }
    }),
    method: 'POST'
})
}
function loginUser(username){
    console.log(username)
    return fetch(`http://localhost:4000/api/hospital/login`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        body: JSON.stringify({
            hid:username,
            
        }),
        method: 'POST'
    })
}

export default {postUserdata,loginUser}