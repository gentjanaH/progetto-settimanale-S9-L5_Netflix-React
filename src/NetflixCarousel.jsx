import { Component } from "react";


import { Image, Row, Col, Placeholder } from 'react-bootstrap';



class NetflixCarousel extends Component {
    state = {
        movies: [],
        loading: true,

    }

    getMoovies = (query) => {
        const URL = `https://www.omdbapi.com/?apikey=b0e8895d&s=${query}`
        fetch(URL)
            .then((response) => {
                if (response.ok) {
                    return response.json()

                } else {
                    throw new Error("Errore nella chiamata API", response.status)
                }

            })
            .then((data) => {
                console.log(data)
                this.setState({
                    movies: data.Search,
                    loading: false,
                })
            })
            .catch(error => console.log(error))

    }
    componentDidMount() {
        this.getMoovies(this.props.query)
    }



    render() {
        return (

            <Row className="flex-nowrap overflow-auto align-items-center">

                {this.state.loading ? [...Array(6)].map((_, i) => (
                    <Col key={i} xs={4} md={2}>
                        <Placeholder animation="glow">
                            <Placeholder className="bg-secondary" style={{ height: "200px", width: "200px" }} />
                        </Placeholder>
                    </Col>
                )) : this.state.movies
                    .filter((movie) => movie.Type === "movie")
                    .map((movie) => (
                        <Col key={movie.imdbID} xs={4} md={2} height={"200px"} className="me-2">
                            <Image src={movie.Poster} className=" img-fluid w-100" rounded />
                        </Col>
                    ))}
            </Row>



        )
    }
}
export default NetflixCarousel;