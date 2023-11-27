import React from 'react';
function Encuestas({ encuestas }) {
return (
<div>
      <h2>Encuestas Disponibles</h2>
      <ul>
        {encuestas.map(encuesta => (
          <li key={encuesta.id}>
            <strong>{encuesta.pregunta}</strong>
            <ul>
              {encuesta.opciones.map((opcion, index) => (
                <li key={index}>{opcion}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Encuestas;