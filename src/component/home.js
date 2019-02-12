
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 
import Login from './login'
import DonorLogin from './userLogin'
import DonorSignup from './signup/donorSignUp'

 
class Home extends Component {
 
  render(){   
    return (
      <MuiThemeProvider>
      <DonorLogin/>
        <DonorSignup/>
        <Login />
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