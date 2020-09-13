import React, { Fragment, useState } from "react";
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {


    const[cita,actualizarCita] = useState ({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''

    });

    const [error,actualizarError] = useState(false)

    // para leer el contenido y ponerlo en el state
    const actualizarState = e  =>{ 
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }
    // extraer datos
    const {mascota,propietario,fecha,hora,sintomas} = cita;

    // cuando envia formulario

    const submitCita = e => {
      e.preventDefault();
 
      // Validar
      if(mascota.trim() === '' || propietario.trim() === ''  || fecha.trim() === ''  || hora.trim() === ''  || sintomas.trim() === '' ){
          actualizarError(true);
          return;
      }

      actualizarError(false);
    //genera ID
      cita.id= uuid();
      
      //crear cita
      crearCita(cita);
      // reiniciar form

      actualizarCita({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''

      })
    }
  return (
    <Fragment>
      <h1> Appointment Request</h1>
      {error ? <p className="alerta-error"> Please fill the complete form</p>: false} 
      <form  
      onSubmit={submitCita}
      >
        <label> Pet's Name</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Pet's name"
          onChange={actualizarState}
          value={mascota}
        />
        <label> Owner's name</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Owner's name"
          onChange={actualizarState}
          value={propietario}
        />

        <label> Date</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label> Time </label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Symptoms </label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Request appointment
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired

}
export default Formulario;
