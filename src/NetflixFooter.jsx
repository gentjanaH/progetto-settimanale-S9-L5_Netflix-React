import { Container, Row, Col } from "react-bootstrap";

function NetflixFooter() {
    return (
        <footer className="bg-dark text-light">
            <Container>
                <Row className="justify-content-center">
                    {/* icone social */}
                    <Col
                        xs={12}
                        md={10}
                        className="text-center offset-md-2 text-md-start text-secondary my-4"
                    >
                        <span className="me-2"><i className="bi bi-facebook"></i></span>
                        <span className="me-2"><i className="bi bi-instagram"></i></span>
                        <span className="me-2"><i className="bi bi-twitter"></i></span>
                        <span className="me-2"><i className="bi bi-youtube"></i></span>
                    </Col>

                    {/* prima colonna */}
                    <Col xs={12} md={2} className="text-center text-md-start text-secondary">
                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-secondary" href="#">Audio and Subtitles</a>
                        </p>
                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-secondary" href="#">Media Center</a>
                        </p>
                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-secondary" href="#">Privacy</a>
                        </p>
                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-secondary" href="#">Contact Us</a>
                        </p>
                        <button className="btn btn-sm bg-transparent border-secondary fs-6 text-secondary my-2">
                            Service Code
                        </button>
                        <p className="text-secondary">&copy; 1997-2025 Netflix, Inc.</p>
                    </Col>

                    {/* seconda colonna */}
                    <Col xs={12} md={2} className="text-center text-md-start text-secondary">
                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-secondary" href="#">Audio Description</a>
                        </p>
                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-secondary" href="#">Investor Relations</a>
                        </p>
                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-secondary" href="#">Legal Notices</a>
                        </p>
                    </Col>

                    {/* terza colonna */}
                    <Col xs={12} md={2} className="text-center text-md-start text-secondary">
                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-secondary" href="#">Help Center</a>
                        </p>
                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-secondary" href="#">Jobs</a>
                        </p>
                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-secondary" href="#">Cookies Preferences</a>
                        </p>
                    </Col>

                    {/* quarta colonna */}
                    <Col xs={12} md={2} className="text-center text-md-start text-secondary">
                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-secondary" href="#">Gift Card</a>
                        </p>
                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-secondary" href="#">Terms of Use</a>
                        </p>
                        <p className="m-0 fs-6">
                            <a className="text-decoration-none text-secondary" href="#">Corporate Information</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default NetflixFooter;
