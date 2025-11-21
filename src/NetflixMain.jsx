import { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import './App.css'
import { Container, Row, Col } from 'react-bootstrap';
import NetflixCarousel from "./NetflixCarousel";

class NetflixMain extends Component {
    render() {
        return (
            <Container fluid className="bg-dark text-light flex-grow-1">
                <Row className="ms-1">
                    <Col xs={12}>
                        <h5 className="mt-3">Trending Now</h5>
                    </Col>
                    <Col>
                        {/* carosello */}
                        <Carousel indicators={false} className="">
                            <Carousel.Item>
                                {/* slide */}
                                <NetflixCarousel query="Batman" />
                            </Carousel.Item>
                            <Carousel.Item>
                                {/* slide */}
                                <NetflixCarousel query="Spider Man" />
                            </Carousel.Item>

                        </Carousel>


                    </Col>
                </Row>
                <Row className="ms-1  hide-scrollbar ">
                    <Col xs={12}>
                        <h5 className="mt-3">Watch It Again</h5>
                    </Col>
                    <Col>
                        {/* carosello */}

                        <Carousel indicators={false}>
                            <Carousel.Item>
                                {/* slide */}
                                <NetflixCarousel query="Mulan" />
                            </Carousel.Item>
                            <Carousel.Item>
                                {/* slide */}
                                <NetflixCarousel query="Thor" />
                            </Carousel.Item>

                        </Carousel>

                    </Col>
                </Row>
                <Row className="ms-1  hide-scrollbar ">
                    <Col xs={12}>
                        <h5 className="mt-3">New Releases</h5>

                    </Col>
                    <Col>
                        {/* carosello */}

                        <Carousel indicators={false}>
                            <Carousel.Item>
                                {/* slide */}
                                <NetflixCarousel query="Harry Potter" />
                            </Carousel.Item>
                            <Carousel.Item>
                                {/* slide */}
                                <NetflixCarousel query="Star Wars" />
                            </Carousel.Item>


                        </Carousel>

                    </Col>
                </Row>
            </Container>
        )
    }
};

export default NetflixMain;