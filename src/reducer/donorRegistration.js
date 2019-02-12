const initialState={
    firstName:'',
    lastName:'',
    userphoneNo:'',
    bloodGroup:'',
    userEmail:'',
    userPassword:'',
    userAddress:'',
    userLatitude:'12.807970',
    userLongitude:'77.562400',
    userLoginEmail:'',
    userLoginPassword:''
   
}

 export function donorRegistration(state=initialState,action){
    console.log("called donor reducer")
    switch(action.type){
        case 'onSubmitFirstName':return{...state,firstName:action.target};
        case 'onSubmitLastName':return{...state,lastName:action.target};
        case 'onSubmitEmail':return{...state,userEmail:action.target};
        case 'onSubmitPhoneNumber':return{...state,userphoneNo:action.target};
        case 'onSubmitBloodGroup':return{...state,bloodGroup:action.target};
        case 'onSubmitPassword':return{...state,userPassword:action.target}
        case 'onSubmitAddress':return{...state,userAddress:action.target}
        case 'onSubmitLogin':return{...state,userLoginEmail:action.target}
        case 'onSubmitLoginPassword':return{...state,userLoginPassword:action.target}
        
        
        default:return state;
    }
    

}

