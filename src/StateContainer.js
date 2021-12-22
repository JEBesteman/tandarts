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
    // console.log("alle afspraken in state:", this.state.appointments)
    // console.log("alle patients in state:", this.state.patients)
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
    const newListPatients = [...this.state.patients, newPatient];
    this.setState({ patients: newListPatients });
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
    const newListDentist = [...this.state.dentists, newDentist];
    this.setState({ dentists: newListDentist });
  };

  //moet nog controle of dentist en/of assistent vrij is, en tijd/dag niet al voorkomt....
  addAppointment = () => {
    const dentist = [...this.state.dentists].find(
      (dentist) => dentist.id === 1
    );
    const patient = [...this.state.patients].find(
      (patient) => patient.id === 15 || patient.id === 12
    ); //backup als 15 er niet inzit

    const assistent = [...this.state.assistents].find(
      (assistent) => assistent.id === 2
    ); //id=3 no assistent

    const day = 1;
    const time = 13;

    const newAppointment = {
      id: uuidv4(),
      day,
      time,
      patient,
      dentist,
      assistent,
    };
    const checkDayTime = [...this.state.appointments].find(
      (appointment) => appointment.day === day && appointment.time === time
    );
    console.log(checkDayTime);
    if (checkDayTime) {
      alert("kies een andere tijd en dag!");
    }
    const findDentist = [...this.state.appointments].find(
      (appointment) =>
        appointment.day === day &&
        appointment.time === time &&
        appointment.dentist === dentist
    );
    console.log(findDentist);
    const findAssistent = [...this.state.appointments].find((appointment) => {
      if (dentist !== undefined) {
        //als er geen dentist is is er ook geen assistent..
        return (
          appointment.day === day &&
          appointment.time === time &&
          appointment.assistent === assistent
        );
      }
      return false;
    });
    if (checkDayTime || findDentist || findAssistent) {
      alert("sorry, deze afspraak kan je niet maken");
    } else {
      const newAppointmentList = [...this.state.appointments, newAppointment];
      this.setState({ appointments: newAppointmentList });
    }
  };

  removeAppointment = (event) => {
    const appointmentId = event.target.parentElement.id;
    const removedAppointment = [...this.state.appointments].find(
      (appointment) => appointment.id === appointmentId
    ); //vind de juiste appointment
    const updatedAppointmentList = [...this.state.appointments].filter(
      (appointment) => appointment !== removedAppointment
    ); //filtered verwijderde appointment eruit
    this.setState({ appointments: updatedAppointmentList });
  };

  makeDentistSick = (event) => {
    const dentistId = event.target.parentElement.id;
    const sickDentist = [...this.state.dentists].find(
      (dentist) => dentist.id === Number(dentistId)
    ); //of filter..
  
    const newDentistList = [...this.state.dentists].map((dentist) => {
      if (dentist === sickDentist) {
        dentist.sick = !dentist.sick;
      }
      return dentist;
    });
    this.setState({ dentists: newDentistList });
  };

  makePatientSick = (event) => {
    const patientId = event.target.parentElement.id;
    console.log(patientId)
    const sickPatient = [...this.state.patients].find(patient => patient.id === Number(patientId))
    console.log(sickPatient)
    //remove all the appointments of this sickPatient
    const newAppointmentsList = [...this.state.appointments].filter(appointment => appointment.patient !== sickPatient)
    console.log(newAppointmentsList)
    this.setState({appointments: newAppointmentsList})
  }

  render() {
    return (
      <div>
        <App
          appointments={this.state.appointments}
          dentists={this.state.dentists}
          assistents={this.state.assistents}
          patients={this.state.patients}
          addPatient={this.addPatient}
          addAppointment={this.addAppointment}
          addDentist={this.addDentist}
          removeAppointment={this.removeAppointment}
          makeDentistSick={this.makeDentistSick}
          makePatientSick={this.makePatientSick}
        />
      </div>
    );
  }
}

export default StateContainer;
