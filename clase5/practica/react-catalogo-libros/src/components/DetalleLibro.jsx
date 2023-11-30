import { useParams } from 'react-router-dom';

const DetalleLibro = ({ libros }) => {
  const { id } = useParams();
  const libro = libros.find(l => l.id === parseInt(id));

  if (!libro) {
    return <p>Libro no encontrado</p>;
  }

  return (
    <div>
      <h2>{libro.titulo}</h2>
      <p>{libro.descripcion}</p>
      <p>{libro.autor}</p>
      <p>{libro.categoria}</p>
    </div>
  );
};
export default DetalleLibro;