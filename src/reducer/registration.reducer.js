const initialState={
    hospitalName:'',
    phoneNo:'',
    username:'',
    email:'',
    password:'',
    address:'',
    latitude:'12.807970',
    longitude:'77.562400',
    usernameLogin:''
   
}

export function registrationHospital(state=initialState,action){
    console.log("called hospital reducer")
    switch(action.type){
        case 'handlename':return{...state,hospitalName:action.target};
        case 'handleEmail':return{...state,email:action.target};
        case 'handlePhoneNumber':return{...state,phoneNo:action.target};
        case 'handleUserName':return{...state,username:action.target};
        case 'handlePassword':return{...state,password:action.target}
        case 'handleAddress':return{...state,address:action.target}
        case 'handleLogin':return{...state,usernameLogin:action.target}
        
        
        default:return state;
    }
    

}