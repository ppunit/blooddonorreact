function postUserdata(username,name,number,email,address,latitude,longitude){
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
    return fetch(`http://localhost:4000/api/hospital/login`, {
   method: 'post',
   headers: {'Content-Type':'application/json'},
   body: JSON.stringify({
    "hid": username,
   })   
   })
}
function addNewbloodReq(hid,pid,pname,bloodgroup,doctorname){
return fetch(`http://localhost:4000/api/hospital/patient`, {
   method: 'post',
   headers: {'Content-Type':'application/json',
   'hid':hid
   },
   body: JSON.stringify({
    'patientid': pid,
    'name':pname,
    'bloodgroup' : bloodgroup,
    'doctorname':doctorname
   })   
   })
}

export default {postUserdata,loginUser,addNewbloodReq}