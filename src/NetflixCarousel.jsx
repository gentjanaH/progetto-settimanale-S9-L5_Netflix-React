import { Component } from "react";


import { Image, Row, Col } from 'react-bootstrap';



class NetflixCarousel extends Component {
    state = {
        movies: [],

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
                    movies: data.Search
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
                {this.state.movies
                    .filter((movie) => movie.Type === "movie")
                    .map((movie) => (
                        <Col key={movie.imdbID} xs={2} height={"200px"} className="me-2">
                            <Image src={movie.Poster} className=" img-fluid w-100" rounded />
                        </Col>
                    ))}
            </Row>



        )
    }
}
export default NetflixCarousel;