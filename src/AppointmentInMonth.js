import React from "react";

const format_time = (time) => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({
  time,
  patient,
  id,
  dentist,
  removeAppointment,
  makeDentistSick,
  makePatientSick,
  moveAppointment,
}) => (
  <div
    className="appointment"
    style={dentist.sick ? { backgroundColor: "red" } : null}
  >
    <span className="time">{format_time(time)}</span>
    <br />
    
    <span id={id}>
      <button onClick={moveAppointment}>Move Appointment</button>
    </span>
    <br />

    <span id={patient.id}>
      Patient: {patient.firstname} {patient.lastname}{" "}
      <button onClick={makePatientSick}>Sick</button>
    </span>
    <br />

    <span id={dentist.id}>
      Dentist: {dentist.firstName} {dentist.lastname}{" "}
      <button onClick={makeDentistSick}>
        {dentist.sick ? "Better" : "Sick"}
      </button>
    </span>
    <br />

    <span id={id}>
      <button onClick={removeAppointment}>Remove Appointment</button>
    </span>
    {/* {console.log(dentist.sick)} */}
  </div>
);
