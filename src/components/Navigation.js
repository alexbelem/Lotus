// src/components/Navigation.jsx
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
// Importe seu logo. Coloque o arquivo de imagem na pasta 'src/assets'
import logo from '../assets/lotus_logo.png';

function Navigation() {
    return (
        <Navbar bg="light" expand="lg" className="navbar-light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="150" // ajuste o tamanho conforme necessário
                        className="d-inline-block align-top"
                        alt="Logo da Lótus"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarTogglerDemo02" />
                <Navbar.Collapse id="navbarTogglerDemo02">
                    <Nav className="me-auto mb-2 mb-lg-0">
                        <Nav.Link href="#home" active>Home</Nav.Link>
                        <Nav.Link href="#servicesSection">Serviços</Nav.Link>
                        <Nav.Link href="#footer">Contato</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;