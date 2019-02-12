
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 
import Login from './login'
import DonorLogin from './userLogin'
import DonorSignup from './signup/donorSignUp'
import SignUp from './signup/signup';
 
class Home extends Component {
 
  render(){   
    return (
      <MuiThemeProvider>
        <DonorLogin/>
        <DonorSignup/>
        <Login />
        <SignUp />
      </MuiThemeProvider>
    )
  }
}
function mapStateToProps(state){
  return {
    count: state.counterReducer,
  };
}
export default connect(mapStateToProps)(Home);