
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Api from './api/api'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { 
  TextField,
  RaisedButton,
  Dialog,
  Checkbox 
  } from 'material-ui';
 
import styles from './Style'
import api from './api/api';
 
class Login extends Component {
 
  state = {
    open: false,
    checked: false,
    username:'',

  };
  handleUsername(e){
    this.setState({
      username:e.target.value
    })

  }
  // handleOnSubmit(){
  //   Api.loginUser(this.state.username)
  //   .then(response => response.json())
  //     .then(data=>{
  //         console.log(data)
  //     })
  //     .catch(err=>console.log(err))


  // }
 
  handleOpen = () => {
    this.setState({open: true});
  };
 
  handleClose = () => {
    this.setState({open: false});
    Api.loginUser(this.state.username)
    .then(response => response.json())
      .then(data=>{
          console.log(data)
      })
      .catch(err=>console.log(err))
  };
 
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
          value={this.state.username}
          onChange={this.handleUsername.bind(this)}
          
        /><br />
        {/* <TextField
          type="password"
          floatingLabelText="Password"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineFocusStyle={styles.underlineStyle}
          fullWidth={true}
        /><br /> */}
       
        
        </Dialog>
      </MuiThemeProvider>
    )
  }
}
function mapStateToProps(state){
  return {
    count: state.counterReducer,
  };
}
export default connect(mapStateToProps)(Login);