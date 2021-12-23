import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({ time, patient, dentist, assistent}) => (
  <li className="appointment" style={dentist.sick ? { backgroundColor: "red" } : null}>
    <div className="time">{format_time(time)}</div>
    <div className="patient">Patient: {patient.firstname} {patient.lastname}</div>
    <div className="dentist">Dentist: {dentist.firstname} {dentist.lastname} </div>
    <div className="assistent">Assistent: {assistent.firstname} {assistent.lastname}</div>
    {/* {console.log("is dentist sick?", dentist.id, dentist.sick)} */}
  </li>
);
