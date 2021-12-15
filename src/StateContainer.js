import React, { Component } from "react";
import App from "./App";
// import generateRandomAppointments from "./utils";
import { v4 as uuidv4 } from "uuid";
import uniqueArray from "./utils";



class StateContainer extends Component {
    constructor() {
        super()
        // const appointments = generateRandomAppointments(150);
        const appointments = uniqueArray;
        const assistents = [...new Set(appointments.map(item => item.assistent))]
        const dentists = [...new Set(appointments.map(item => item.dentist))]
        const patients = [...new Set(appointments.map(item => item.patient))]
        this.state = {
            patients,
            assistents,
            dentists,
            appointments,
        }
        console.log(appointments)
        console.log("assistents:", assistents)
        console.log("patients:", patients)
    
    }

    
    render() {
        return (
            <div>
                <App 
                    appointments={this.state.appointments}
                    dentists={this.state.dentists}
                    assistents={this.state.assistents}
                    patients={this.state.patients}     
                />
            </div>
        )
    }
}

export default StateContainer;