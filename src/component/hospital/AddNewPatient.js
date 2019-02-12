import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Api from '../api/api'

 class AddNewPatient extends Component {
     constructor(props){
        super(props);
        this.state={
            open:false,
            patientId: '',
            patientName: '',
            bloodGroup: '',
            doctorName: '',
            patientDetails: ''
        }
    }
    handleClickOpen=()=>{
        this.setState({
            open:true
        })
    }
    handleClose=()=>{
        this.setState({
            open:false
        })
    }
    handleSubmit = (e)=>{
    console.log(this.props.hospitalId)
    Api.addNewbloodReq(this.props.hospitalId,
    this.state.patientId,
    this.state.patientName,
    this.state.bloodGroup,
    this.state.doctorName)
    .then(response => response.json())
      .then(data=>{console.log(data)})

    }
    onChange= (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
  render() {
    return (
      <div>
        <button className="new-patient-button" onClick={this.handleClickOpen}>+ Add new patient</button>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter patient details:</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            name="patientId"
            label="Patient Id"
            type="pid"
            fullWidth
            onChange={this.onChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="patientName"
            label="Patient Name"
            type="name"
            fullWidth
            onChange={this.onChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="bloodGroup"
            label="Blood Group"
            type="blood"
            fullWidth
            onChange={this.onChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="doctorName"
            label="Doctor Name"
            type="name"
            fullWidth
            onChange={this.onChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    )
  }
}
export default AddNewPatient