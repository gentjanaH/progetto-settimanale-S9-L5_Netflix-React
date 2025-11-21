import { Container, Row, Col } from 'react-bootstrap';

function NetflixFooter() {
    return (
        <Container fluid className="bg-dark text-white py-4 ">
            <Row>
                {/* icone footer */}
                <Col >
                    <span class="me-2"><i class="bi bi-facebook"></i></span>
                    <span class="me-2"><i class="bi bi-instagram"></i></span>
                    <span class="me-2"> <i class="bi bi-twitter"></i></span>
                    <span class="me-2"><i class="bi bi-youtube"></i></span></Col>
                <Col >
                    <p className="m-0 fs-6"><a className="text-decoration-none text-secondary" href="#">Audio and Subtitles</a>
                    </p>
                    <p className="m-0 fs-6"><a className="text-decoration-none text-secondary" href="#">Media center</a></p>
                    <p className="m-0 fs-6"><a className="text-decoration-none text-secondary" href="#">Media center</a></p>
                    <p className="m-0 fs-6"><a className="text-decoration-none text-secondary" href="#">Privacy</a></p>
                    <p className="m-0 fs-6"><a className="text-decoration-none text-secondary" href="#">Contact Us</a></p>
                    <button className="btn btn-sm bg-transparent border-secondary fs-6 text-secondary my-2">Service
                        Code</button>
                    <p className="text-secondary">&copy 1997- <span></span>Netlix,inc xxxxxx</p>
                </Col>
                <Col>
                    <p className="m-0 fs-6"><a className="text-decoration-none text-secondary" href="#">Audio Description</a>
                    </p>
                    <p className="m-0 fs-6"><a className="text-decoration-none text-secondary" href="#">Investor Relation</a>
                    </p>
                    <p className="m-0 fs-6"><a className="text-decoration-none text-secondary" href="#">Legal Notices</a></p>
                </Col>
                <Col>
                    <p className="m-0 fs-6"><a className="text-decoration-none text-secondary" href="#">Help Centern</a>
                    </p>
                    <p className="m-0 fs-6"><a className="text-decoration-none text-secondary" href="#">Jobs</a>
                    </p>
                    <p className="m-0 fs-6"><a className="text-decoration-none text-secondary" href="#">Cookies Preferences</a>
                    </p>
                </Col>
                <Col>
                    <p className="m-0 fs-6"><a className="text-decoration-none text-secondary" href="#">Gift Card</a>
                    </p>
                    <p className="m-0 fs-6"><a className="text-decoration-none text-secondary" href="#">Terms of Use</a>
                    </p>
                    <p className="m-0 fs-6"><a className="text-decoration-none text-secondary" href="#">Corporate
                        Information</a></p>
                </Col>
            </Row>

        </Container>
    )
}



export default NetflixFooter;