
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Api from './api/api'
import '../App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DisplayHospitalDetails from './hospital/DisplayPatientDetails' 
import { 
  TextField,
  RaisedButton,
  Dialog
  } from 'material-ui';
 
import styles from './Style'
import SignUp from './signup/signup';


 
class Login extends Component {
 
  state = {
    open: false,
    checked: false,
    username:'',
    hospitalDetails: '',
    isLogin:false

  };
  handleUsername(e){
    this.setState({
      username:e.target.value
    })

  }
  handleOnSubmit(){
    Api.loginUser(this.state.username)
    .then(response => response.json())
      .then(data=>{
          console.log(data)
           this.setState({open: false});
      })
      .catch(err=>console.log(err))


  }
 
  handleOpen = () => {
    this.setState({open: true});
  };
 
  handleClose = () => {
    this.setState({open: false});
    
  };
 
  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }
 
  render(){
     const actions = [
      
      <RaisedButton
        label="Cancel"
        onClick={this.handleClose}
        secondary={true}
        style={styles.buttonStyle}
      />,
      <RaisedButton
        label="Submit"
        onClick={this.handleOnSubmit}
       
        secondary={true}
        style={styles.buttonStyle}
      />,
    ];

    return (
      <div>
      {this.state.isLogin?<DisplayHospitalDetails patientDetails={this.state.patientDetails}/>:
      <span className="login-button">
      
      <MuiThemeProvider>
        <RaisedButton 
          label="Login" 
          onClick={this.handleOpen} 
          secondary={true}
          style={styles.buttonStyle} 
        />      
        <Dialog
          title="Sign In To Hospital"
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={styles.customContentStyle}
        >
        <TextField
          floatingLabelText="Username or Email"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineFocusStyle={styles.underlineStyle}
          fullWidth={true}
          value={this.state.username}
          onChange={this.handleUsername.bind(this)}
          
        />
        
        </Dialog>
        
      </MuiThemeProvider>
      <SignUp />
      </span>}
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    count: state.counterReducer,
  };
}
export default connect(mapStateToProps)(Login);