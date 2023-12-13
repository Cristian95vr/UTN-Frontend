import { useParams } from 'react-router-dom';

const DetalleLibro = ({libros}) => {
    const {id} = useParams();
    const libro = libros.find((libro) => libro.id === parseInt(id));
    return (
        <div className='detalle-libro'>
            <h2>{libro.titulo}</h2>
            <p className='detalle-autor'>Autor: {libro.autor}</p>
            <p className='detalle-precio'>Precio: {libro.precio}</p>
            <p className='detalle-sipnosis'>{libro.sipnosis}</p>
            <p className='detalle-categoria'>Categoría: {libro.categoria}</p>
        </div>
    );
};

export default DetalleLibro;