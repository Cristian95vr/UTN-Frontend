import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container, Spinner, ListGroup} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";
function Posts() {
const [publicaciones, setPublicaciones] = useState([]);
const [cargando, setCargando] = useState(true);
    
useEffect(() => {
    const obtenerDatos = async () => {
        try {
            const respuesta = await axios.get('https://jsonplaceholder.typicode.com/post');
            setPublicaciones(respuesta.data);
            setCargando(false);
        } catch (error) {
            console.error('Error al obtener datos:', error);
            toast.error('Error al obtener datos');
            setCargando(false);
        }
    };

    obtenerDatos();
}, []);
  return (
    <Container>
      <ToastContainer />
      {cargando ? (
          <div className="d-flex justify-content-center">
            <ClipLoader/>
          </div>
      ): (
        <ListGroup>
          {publicaciones.map((publicacion) => (
            <ListGroup.Item key={publicacion.id}>
              {publicacion.title}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )
    }
    </Container>
  );
}
export default Posts;
