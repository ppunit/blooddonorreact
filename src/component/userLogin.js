
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Api from './api/api'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { 
  TextField,
  RaisedButton,
  Dialog,

  } from 'material-ui';
 
import styles from './Style'
 
class Login extends Component {
 
  state = {
    open: false,
    checked: false,
    

  };
  handleUsername(e){
  
    this.props.dispatch({type:'onSubmitLogin',target:e.target.value})

  }
//   handleOnSubmit(){
//     Api.donorLogin(this.props.username)
//     .then(response => response.json())
//       .then(data=>{
//           console.log(data)
//       })
//       .catch(err=>console.log(err))


//   }
 
  handleOpen = () => {
    this.setState({open: true});
  };
 
  handleClose = () => {
    this.setState({open: false});
    Api.donorLogin(this.props.email,this.props.password)
    .then(response => response.json())
      .then(data=>{
          console.log(data)
      })
      .catch(err=>console.log(err))
  };
  handlePassword(e){
      this.props.dispatch({type:'onSubmitLoginPassword',target:e.target.value})
  }
 
  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }
 
  render(){
      console.log("login")
    const actions = [
      
      <RaisedButton
        label="Cancel"
        onClick={this.handleClose}
        secondary={true}
        style={styles.buttonStyle}
      />,
      <RaisedButton
        label="Submit"
        onClick={this.handleClose}
       
        secondary={true}
        style={styles.buttonStyle}
      />,
    ];
 
    return (
      <MuiThemeProvider>
        <RaisedButton 
          label="Login" 
          onClick={this.handleOpen} 
          secondary={true}
          style={styles.buttonStyle} 
        />      
        <Dialog
          title="Sign In To Blood Donor"
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
          value={this.props.email}
          onChange={this.handleUsername.bind(this)}
          
        /><br />
        <TextField
          type="password"
          floatingLabelText="Password"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineFocusStyle={styles.underlineStyle}
          fullWidth={true}
          value={this.props.password}
          onChange={this.handlePassword.bind(this)}
        /><br />
       
        
        </Dialog>
      </MuiThemeProvider>
    )
  }
}
function mapStateToProps(state){
  return {
email:state.donorRegistration.userLoginEmail,
    password:state.donorRegistration.userLoginPassword
  };
}
export default connect(mapStateToProps)(Login);