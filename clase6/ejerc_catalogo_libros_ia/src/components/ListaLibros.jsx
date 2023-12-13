// dicho componente debe mostrar el listado de libros que estan en el archivo ./data/libros.js
import React from 'react';

import { Link } from 'react-router-dom';

const ListaLibros = ({libros}) => {
  return (
    <div className='lista-libros'>
        <h2>Libros</h2>
        <Link to={"/libros/crear"}>Crear Libro</Link>
 <ul>
  {libros.map((libro) => (
    <li key={libro.id} className='libro-item'>
      <h3>{libro.titulo}</h3>
      <p>Autor: {libro.autor}</p>
      <p>Precio: {libro.precio}</p>
      <p>{libro.sipnosis}</p>
      <p>Categoría: {libro.categoria}</p>
      <Link to={`/libros/${libro.id}`}>Detalles</Link>
    </li>
  ))}
</ul>
    </div>
  );
};

export default ListaLibros;