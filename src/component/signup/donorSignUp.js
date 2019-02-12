
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
 
  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex === 2) {
      this.setState({stepIndex: 0, finished: false});
      this.postDonorData()
      
    }
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };
  postDonorData(){
  Api.postDonordata(this.props.bloodGroup,this.props.userPassword,this.props.firstName,this.props.lastName,this.props.userphoneNo,this.props.userEmail,this.props.userAddress,this.props.userLatitude,this.props.userLongitude)
    .then(response => response.json())
    .then(data=>{
        console.log(data)
        this.setState({open: false});
    })
    .catch(err=>console.log(err))
}
 
  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  handleName(e){
    this.props.dispatch({type:'onSubmitFirstName',target:e.target.value})
    console.log(this.props.donorName)
 
  }
  handleLastName(e){
  
    this.props.dispatch({type:'onSubmitLastName',target:e.target.value})

  }
  handleEmail(e){
    
    this.props.dispatch({type:'onSubmitEmail',target:e.target.value})

  }
  handlePhoneNumber(e){

    this.props.dispatch({type:'onSubmitPhoneNumber',target:e.target.value})


  }
  handleBloodGroup(e){
this.props.dispatch({type:'onSubmitBloodGroup',target:e.target.value})
  }
  handlePassword(e){
this.props.dispatch({type:'onSubmitPassword',target:e.target.value})


  }
  handleAddress=(e)=>{

    this.props.dispatch({type:'onSubmitAddress',target:e.target.value})
    

  }
 
  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <div>
                <TextField
                  floatingLabelText=" Name"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  value={this.props.firstName}
                  fullWidth={true}
                  
                  onChange={this.handleName.bind(this)}
                /><br />
                <TextField
                  floatingLabelText="Last Name"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  fullWidth={true}
                  value={this.props.lastName}
                  onChange={this.handleLastName.bind(this)}
                /><br />
                <TextField
                  floatingLabelText="Phone Number"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  fullWidth={true}
                  value={this.props.userphoneNo}
                  onChange={this.handlePhoneNumber.bind(this)}
                />
            </div>;
      case 1:
        return <div>
          <TextField
                      floatingLabelText="Blood Group"
                      floatingLabelStyle={styles.floatingLabelStyle}
                      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                      underlineFocusStyle={styles.underlineStyle}
                      fullWidth={true}
                      value={this.props.bloodGroup}
                      onChange={this.handleBloodGroup.bind(this)}
                    /><br />  
                    <TextField
                      floatingLabelText="Email"
                      floatingLabelStyle={styles.floatingLabelStyle}
                      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                      underlineFocusStyle={styles.underlineStyle}
                      fullWidth={true}
                      value={this.props.userEmail}
                      onChange={this.handleEmail.bind(this)}
                    /><br />  
                    <TextField
                      type="password"
                      floatingLabelText="Password"
                      floatingLabelStyle={styles.floatingLabelStyle}
                      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                      underlineFocusStyle={styles.underlineStyle}
                      fullWidth={true}
                      value={this.props.userPassword}
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
                value={this.props.userAddress}
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
          title="Sign Up To Blood Donor "
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
    firstName:state.donorRegistration.firstName,
    lastName:state.donorRegistration.lastName,
    userphoneNo:state.donorRegistration.userphoneNo,
    bloodGroup:state.donorRegistration.bloodGroup,
    userEmail:state.donorRegistration.userEmail,
    userPassword:state.donorRegistration.userPassword,
    userAddress:state.donorRegistration.userAddress,
    userLatitude:'12.807970',
    userLongitude:'77.562400',
  };
}
export default connect(mapStateToProps)(SignUp);