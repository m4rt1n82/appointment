import React from "react";
import PropTypes from 'prop-types';

const Cita = ({ cita, eliminarCita }) => (
  <div className="cita">
    <p>
      Pet: <span>{cita.mascota}</span>
    </p>
    <p>
      Pet's Owner: <span>{cita.propietario}</span>
    </p>
    <p>
      Date: <span>{cita.fecha}</span>
    </p>
    <p>
      Time: <span>{cita.hora}</span>
    </p>
    <p>
      Sympthoms: <span>{cita.sintomas}</span>
    </p>
    <button
      className="button eliminar u-full-width"
      onClick={() => eliminarCita(cita.id)}
    >
      Delete &times;
    </button>
  </div>
);

Cita.propTypes = {
  cita: PropTypes.array.isRequired,
  eliminarCita: PropTypes.func.isRequired
};
export default Cita;
