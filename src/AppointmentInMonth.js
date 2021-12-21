import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({ time, patient, id, removeAppointment }) => (
  <div className="appointment">
    <span className="time">{format_time(time)}</span>
    <span className="patient">{patient.firstname} {patient.lastname}</span>
    <span id={id}><button onClick={removeAppointment}>Remove Appointment</button></span>
  </div>
);
