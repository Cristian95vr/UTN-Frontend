import logo from './logo.svg';
import './App.css';
import ListaLibros from './components/ListaLibros';
import DetalleLibro from './components/DetalleLibro';
import FormularioCrearLibro from './components/FormularioCrearLibro';
import PaginaNoEncontrada from './components/PaginaNoEncontrada';
import AcercaDe from './components/AcercaDe.jsx';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Libros } from './data/libros.js';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<ListaLibros libros={Libros} />} />
        <Route path="/libros/:id" element={<DetalleLibro libros={Libros} />} />
        <Route path="/libros/crear" element={<FormularioCrearLibro />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
