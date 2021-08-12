import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget'
import UserWidget from '../UserWidget'
import LogoWidget from '../LogoWidget'
import { Link } from 'react-router-dom'
import './navbar.css'

const NavBar = () => 
        
        <Navbar expand="lg" bg="secondary" variant="dark">
            <Container fluid="xxl">
                <Navbar.Brand className="logo">
                    <Link to="/">
                        <LogoWidget />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle className="text-dark" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="nav-link" to="/categoria/1">Categoría 1</Link>
                        <Link className="nav-link" to="/categoria/2">Categoría 2</Link>
                        <Link className="nav-link" to="/categoria/3">Categoría 3</Link>
                        <Link className="nav-link" to="/">Catálogo</Link>
                        <Link className="nav-link" to="/">Cómo Comprar?</Link>
                        <Link className="nav-link" to="/">Contacto</Link>
                    </Nav>
                    <Nav>
                        <Link className="nav-link" eventKey={2}>
                            <CartWidget />
                        </Link>
                    </Nav>
                    <Nav>
                        <Link className="nav-link">
                            <UserWidget/>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
        </Navbar>

export default NavBar