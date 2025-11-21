import { Component } from "react";
import { Container, Row, Col, Form } from 'react-bootstrap';

class SottosezioneNav extends Component {

    render() {
        return (
            <Container fluid className="bg-dark text-light">
                <Row className="ms-1">
                    <Col xs={6} className="d-flex justify-content-start align-items-center p-2">
                        <h2>{this.props.sezioneCorrente}</h2>

                        <Form.Select size="sm" className="ms-3 bg-dark text-light w-25">
                            <option>Genres</option>
                            <option>Horror</option>
                            <option>Action</option>
                            <option>Dramas</option>
                        </Form.Select>
                    </Col>
                    <Col xs={6}>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default SottosezioneNav;