import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SottosezioneNav from "./SottosezioneNav";


class NetflixNav extends Component {
    state = {
        sezioneCorrente: "Home"
    }

    cambiaSezione = (testo) => {
        this.setState({ sezioneCorrente: testo })
    }
    render() {
        return (
            <>
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Container fluid >
                        <Navbar.Brand href="#home">
                            <img src="public/logo.png" alt="logo" width={"110px"} height={"50px"} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link onClick={() => this.cambiaSezione("Home")} >Home</Nav.Link>
                                <Nav.Link onClick={() => this.cambiaSezione("TV shows")} >TV shows</Nav.Link>
                                <Nav.Link onClick={() => this.cambiaSezione("Movies")} >Movies</Nav.Link>
                                <Nav.Link onClick={() => this.cambiaSezione("Recently Added")} >Recently Added</Nav.Link>
                                <Nav.Link onClick={() => this.cambiaSezione("My List")} >My List</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <SottosezioneNav sezioneCorrente={this.state.sezioneCorrente} />
            </>
        );
    }
}

export default NetflixNav;