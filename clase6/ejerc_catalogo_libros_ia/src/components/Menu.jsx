import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <>
            <nav className="menu">
                <Link to="/" className="menu-link">Inicio</Link>
                <Link to="/libros" className="menu-link">Libros</Link>
                <Link to="/acerca-de" className="menu-link">Acerca de</Link>
            </nav>
        </>
    )
}

export default Menu;