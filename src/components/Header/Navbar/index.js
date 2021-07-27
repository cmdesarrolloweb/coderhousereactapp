import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { FaRegGrinTongueSquint } from 'react-icons/fa'
import CartWidget from '../CartWidget'
import UserWidget from '../UserWidget'

const NavBar = () => 
        
        <Navbar expand="lg" bg="secondary" variant="dark">
            <Container fluid="xxl">
                <Navbar.Brand href="#home">
                    <h1 className="d-inline-block align-middle"><FaRegGrinTongueSquint className="me-2"/></h1><span>La Carpintería del Kabe</span>
                </Navbar.Brand>
                <Navbar.Toggle className="text-dark" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Catálogo</Nav.Link>
                        <Nav.Link href="#pricing">Cómo Comprar?</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#cart">
                            <CartWidget/>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <UserWidget/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
        </Navbar>

export default NavBar