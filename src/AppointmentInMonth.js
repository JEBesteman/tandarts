import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({ time, patient, id, dentist, removeAppointment, makeDentistSick }) => (
  <div className="appointment" style={dentist.sick ? { backgroundColor: "red" } : null}>
    <span className="time">{format_time(time)}</span><br />
    <span className="patient" id={patient.id}>Patient: {patient.firstname} {patient.lastname}</span><br />

    <span id={dentist.id}>Dentist: {dentist.firstName} {dentist.lastname} <button onClick={makeDentistSick}>ZIEK</button></span> 
    {/* liefst () => makeDentistSick(dentist.id) */}
    <span id={id}><button onClick={removeAppointment}>Remove Appointment</button></span>
    {console.log(dentist.sick)}
  </div>
);
