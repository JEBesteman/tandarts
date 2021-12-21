import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

export default ({ appointments, removeAppointment }) => {
  const appointmentsJSX = appointments.map(({ time, patient, id }, index) => (
    <AppointmentInMonth time={time} patient={patient} id={id} key={index} removeAppointment={removeAppointment} />
  ));
  return <div className="day">{appointmentsJSX}</div>;
};
