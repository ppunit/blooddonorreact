import React, { Component } from 'react'
import '../../App'
import Header from './Header'
import AddNewPatient from './AddNewPatient'
import DisplayPatientContent from './DisplayPatientContent'

class DisplayPatientDetails extends Component {
    constructor(props){
        super(props);
        this.state={
          patientDetails: this.props.patientDetails[0]
        }
    }
  render() {
    return (
      <div>
        <Header />
        <AddNewPatient hospitalId={this.state.patientDetails.hid}/>
        <div className="cards">
       {this.state.patientDetails.patient.map(patient=>{
           return <div className="patient-details" key={patient.patientid}>
           <DisplayPatientContent patient={patient}/>
           </div>
       })}
       </div>
      </div>
    )
  }
}

export default DisplayPatientDetails