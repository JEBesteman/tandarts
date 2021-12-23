import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

export default ({
  appointments,
  removeAppointment,
  makeDentistSick,
  makePatientSick,
  moveAppointment,
}) => {
  const appointmentsJSX = appointments.map(
    ({ time, patient, dentist, id }, index) => (
      <AppointmentInMonth
        time={time}
        patient={patient}
        id={id}
        key={index}
        removeAppointment={removeAppointment}
        dentist={dentist}
        makeDentistSick={makeDentistSick}
        makePatientSick={makePatientSick}
        moveAppointment={moveAppointment}
      />
    )
  );
  return <div className="day">{appointmentsJSX}</div>;
};
