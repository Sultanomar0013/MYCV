import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/navbar.css"

function NavbarSection() {
    const customStyle = {
        color: "chocolate",
    };
    return (

        <Navbar expand="lg" className="navsec" >
            <Container >
                <Navbar.Brand href="#home" style={customStyle}>MY-Folio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={customStyle} >Home</Nav.Link>
                        <Nav.Link href="#about" style={customStyle} >About</Nav.Link>
                        <Nav.Link href="#education" style={customStyle} >Qualification</Nav.Link>
                        <Nav.Link href="#objective" style={customStyle} >Objective</Nav.Link>
                        <Nav.Link href="#skill" style={customStyle} >Skills</Nav.Link>
                        <Nav.Link href="#project" style={customStyle} >Project</Nav.Link>
                        <Nav.Link href="#experience" style={customStyle} >Experience</Nav.Link>
                        <Nav.Link href="#contact" style={customStyle} >Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
}

export default NavbarSection;