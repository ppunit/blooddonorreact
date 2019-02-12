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

function postDonordata(bloodGroup,password,firstName,lastName,number,email,address,latitude,longitude){
    console.log(bloodGroup,number,email,firstName,lastName,address,latitude,longitude)
return fetch(`http://localhost:4000/api/donor`, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }, 
    body: JSON.stringify({
        bloodGroup:bloodGroup,
        firstname:firstName,
        lastname:lastName,
        contact:number,
        password:password,
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

function donorLogin(email,password){
    console.log(email)
    return fetch(`http://localhost:4000/api/donor/login`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        body: JSON.stringify({
            email:email,
            password:password
            
        }),
        method: 'POST'
    })
}

export default {postUserdata,loginUser,postDonordata,donorLogin}