
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Api from '../api/api'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { 
  TextField,
  RaisedButton,
  Dialog,
 
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


      Api.postUserdata(this.props.username,this.props.hospitalName,this.props.phoneNo,this.props.email,this.props.address,this.props.latitude,this.props.longitude)
      .then(response => response.json())
      .then(data=>{
          console.log(data)
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
  
    this.props.dispatch({type:'handlename',target:e.target.value})
    console.log(this.props.hospitalName)

  }
  handleEmail(e){
    
    this.props.dispatch({type:'handleEmail',target:e.target.value})

  }
  handlePhoneNumber(e){

    this.props.dispatch({type:'handlePhoneNumber',target:e.target.value})


  }
  handleUserName(e){
this.props.dispatch({type:'handleUserName',target:e.target.value})
  }
  handlePassword(e){
this.props.dispatch({type:'handlePassword',target:e.target.value})


  }
  handleAddress=(e)=>{

    this.props.dispatch({type:'handleAddress',target:e.target.value})
    

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
                  value={this.props.hospitalName}
                  fullWidth={true}
                  onChange={this.handleName.bind(this)}
                /><br />
               
                <TextField
                  floatingLabelText="Phone Number"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  fullWidth={true}
                  value={this.props.phoneNo}
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
                      value={this.props.username}
                      onChange={this.handleUserName.bind(this)}
                    /><br /> 
                    <TextField
                      floatingLabelText="Email"
                      floatingLabelStyle={styles.floatingLabelStyle}
                      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                      underlineFocusStyle={styles.underlineStyle}
                      fullWidth={true}
                      value={this.props.email}
                      onChange={this.handleEmail.bind(this)}
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
                value={this.props.address}
                onChange={this.handleAddress.bind(this)}
              />
      default:
        return 'Your default steper';
    }
  }
 
  render(){
    console.log(this.props)
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
          title="Sign Up To Webjustify "
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
              <a
                href="https://www.webjustify.com"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
                style={styles.loginLink}
              >
                SignUp
              </a>
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
    hospitalName:state.registrationHospital.hospitalName,
    phoneNo:state.registrationHospital.phoneNo,
    username:state.registrationHospital.username,
    email:state.registrationHospital.email,
    password:state.registrationHospital.password,
    address:state.registrationHospital.address,
    latitude:state.registrationHospital.latitude,
    longitude:state.registrationHospital.longitude
  };
}
export default connect(mapStateToProps)(SignUp);