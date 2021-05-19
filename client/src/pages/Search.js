import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SearchResults from "../components/SearchResults";
import API from '../utils/API';

function Search() {

    const defaultThumbnail = "https://via.placeholder.com/150";

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    function handleInputChange(event) {
        // Destructure the name and value properties off of event.target
        // Update the query state
        const { value } = event.target;
        setQuery(value);
    }

    function handleSearch(event) {
        event.preventDefault();
        console.log(query);
        API.search(query)
            .then(res => {
                setResults(res.data.items || []);
                setShowResults(true);
            })
            .catch(err => console.log(err));
    }

    function handleSave() {

    }

    return (
        <Container>
            <Row style={{ border: "3px solid black", borderRadius: "5px", marginTop: "20px" }}>
                <Col size="md-8">
                    <Form style={{ padding: "10px" }}>
                        <Form.Group controlId="searchForm.Input">
                            <Form.Label>Search Terms</Form.Label>
                            <Form.Control type="text" onChange={handleInputChange} placeholder="Keyword? Title? Author? Whatever." />
                        </Form.Group>
                        {/* <Form.Group controlId="searchForm.Select">
                            <Form.Label>Search By</Form.Label>
                            <Form.Control as="select">
                                <option value="title">Title</option>
                                <option value="author">Author</option>
                                <option value="genre">Genre</option>
                            </Form.Control>
                        </Form.Group> */}
                        <Button variant="primary" className="float-right mb-2" onClick={handleSearch}>Search</Button>
                    </Form>
                </Col>
            </Row>

            {showResults && (
                <Row style={{ border: "3px solid black", borderRadius: "5px", marginTop: "20px" }}>
                    <Col size="md-8">
                        {results.length ?
                            results.map(book => {
                                const imageLinks = book.volumeInfo.imageLinks;

                                return <SearchResults
                                    style={{ padding: "10px" }}
                                    key={book.id}
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                    selfLink={book.selfLink}
                                    thumbnail={(imageLinks && imageLinks.thumbnail) || defaultThumbnail}
                                    description={book.volumeInfo.description}
                                    handleSave={handleSave}
                                />;
                            }) :
                            <h3>No matching results found. Please try different search criteria.</h3>
                        }
                    </Col>
                </Row>
            )}
        </Container>
    )
}

export default Search;