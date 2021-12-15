import React, { Component } from "react";
import App from "./App";
import { v4 as uuidv4 } from "uuid";
import uniqueArray from "./utils";

class StateContainer extends Component {
  constructor() {
    super();
    const appointments = uniqueArray;
    const assistents = [...new Set(appointments.map((item) => item.assistent))];
    const dentists = [...new Set(appointments.map((item) => item.dentist))];
    const patients = [...new Set(appointments.map((item) => item.patient))];
    this.state = {
      patients,
      assistents,
      dentists,
      appointments,
    };
  }

  addPatient = () => {
    const firstname = "Piet";
    const lastname = "Auw";
    const yearOfBirth = 1985;
    const mobile = "(020) 1234567";
    const email = "piet@wincacademy.nl";

    const newPatient = {
      id: uuidv4(),
      firstname: firstname,
      lastname: lastname,
      yearOfBirth: yearOfBirth,
      mobile: mobile,
      email: email,
      sick: false,
    };
    console.log("new", newPatient);
    const newListPatients = [...this.state.patients, newPatient];
    this.setState({ patients: newListPatients });
    console.log(newListPatients);
  };
  addDentist = () => {
    const firstname = "Toos";
    const lastname = "Trekker";
    const mobile = "(020) 4562343";
    const email = "toos@dentistcompanybvt.com";

    const newDentist = {
      id: uuidv4(),
      firstname: firstname,
      lastname: lastname,
      mobile: mobile,
      email: email,
      sick: false,
    };
    console.log("new", newDentist);
    const newListDentist = [...this.state.dentists, newDentist];
    this.setState({ dentist: newListDentist });
    console.log(newListDentist);
  };

  render() {
    return (
      <div>
        <App
          appointments={this.state.appointments}
          dentists={this.state.dentists}
          assistents={this.state.assistents}
          patients={this.state.patients}
          addPatient={this.addPatient}
          addDentist={this.addDentist}
        />
      </div>
    );
  }
}

export default StateContainer;
