
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Api from '../api/api'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { 
  TextField,
  Dialog,
 RaisedButton
} from 'material-ui';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
 
import styles from './Style'
 
class SignUp extends Component {
 
  state = {
    open: false,
    checked: false,
    finished: false,
    stepIndex: 0,
    hospitalName:'',
    phoneNo:'',
    username:'',
    email:'',
    password:'',
    address:'',
    latitude:'12.807970',
    longitude:'77.562400'
  };
 
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
  postUserData(){


      Api.postUserdata(this.state.username,this.state.hospitalName,this.state.phoneNo,this.state.email,this.state.address,this.state.latitude,this.state.longitude)
      .then(response => response.json())
      .then(data=>{
          console.log(data)
          this.setState({open: false});
      })
      .catch(err=>console.log(err))
  }
 
  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex === 2) {
      this.setState({stepIndex: 0, finished: false});
      this.postUserData()
    }
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };
 
  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };
  handleName(e){
    this.setState({
        hospitalName:e.target.value

    })

  }
  handleEmail(e){
      this.setState({
          email:e.target.value

      })
  }
  handlePhoneNumber(e){
    this.setState({
        phoneNo:e.target.value

    })

  }
  handleUserName(e){
    this.setState({
username:e.target.value
    })

  }
  handlePassword(e){
    this.setState({
password:e.target.value
    })

  }
  handleAddress=(e)=>{
    this.setState({
        address:e.target.value

    })

  }
 
  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <div>
                <TextField
                  floatingLabelText="Hospital Name"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  value={this.state.hospitalName}
                  fullWidth={true}
                  onChange={this.handleName.bind(this)}
                /><br />
               
                <TextField
                  floatingLabelText="Phone Number"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  fullWidth={true}
                  value={this.state.phoneNo}
                  onChange={this.handlePhoneNumber.bind(this)}
                />
            </div>;
      case 1:
        return <div>
           < TextField
                      floatingLabelText="Username"
                      floatingLabelStyle={styles.floatingLabelStyle}
                      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                      underlineFocusStyle={styles.underlineStyle}
                      fullWidth={true}
                      value={this.state.username}
                      onChange={this.handleUserName.bind(this)}
                    /><br /> 
                    <TextField
                      floatingLabelText="Email"
                      floatingLabelStyle={styles.floatingLabelStyle}
                      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                      underlineFocusStyle={styles.underlineStyle}
                      fullWidth={true}
                      value={this.state.email}
                      onChange={this.handleEmail.bind(this)}
                    /><br />  
                    <TextField
                      type="password"
                      floatingLabelText="Password"
                      floatingLabelStyle={styles.floatingLabelStyle}
                      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                      underlineFocusStyle={styles.underlineStyle}
                      fullWidth={true}
                      value={this.state.password}
                      onChange={this.handlePassword.bind(this)}
                    /><br />
              </div>;
      case 2:
        return <TextField
                floatingLabelText="Address"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                underlineFocusStyle={styles.underlineStyle}
                multiLine={true}
                rows={2}
                fullWidth={true}
                value={this.state.address}
                onChange={this.handleAddress.bind(this)}
              />
      default:
        return 'Your default steper';
    }
  }
 
  render(){
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};
    const actions = [      
      <RaisedButton
        label="Back"
        disabled={stepIndex === 0}
        onClick={this.handlePrev}
        primary={true}
        style={{marginRight: 12}}
      />,
      <RaisedButton
        label={stepIndex === 2 ? 'Submit' : 'Next'}
        value={stepIndex === 2 ? 'Submit' : 'Next'}
        secondary={true}
        onClick={this.handleNext}
      />,
      <RaisedButton
        label="Cancel"
        onClick={this.handleClose}
        secondary={true}
        style={styles.buttonStyle}
      />
    ];
 
    return (
      <MuiThemeProvider>
        <RaisedButton 
          label="Sign Up" 
          onClick={this.handleOpen} 
          secondary={true}
          style={styles.buttonStyle} 
        />              
        <Dialog
          title="Hospital Registration "
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={styles.customContentStyle}
        >
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>
              Basic Info
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              Set Login Info
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              Address Info
            </StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <div>I don't have account 
              
            </div>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
            </div>
          )}
        </div>
        
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
export default connect(mapStateToProps)(SignUp);