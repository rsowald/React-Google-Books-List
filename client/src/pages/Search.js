import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SearchResults from "../components/SearchResults";

function Search() {

    const [search, setSearch] = useState("");
    const [results, setResults] = useState([])

    function handleSearch() {

    }

    return (
        <Container>
            <Row style={{ border: "3px solid black", borderRadius: "5px", marginTop: "20px" }}>
                <Col size="md-8">
                    <Form style={{ padding: "10px" }}>
                        <Form.Group controlId="searchForm.Input">
                            <Form.Label>Search Terms</Form.Label>
                            <Form.Control type="input" />
                        </Form.Group>
                        <Form.Group controlId="searchForm.Select">
                            <Form.Label>Search By</Form.Label>
                            <Form.Control as="select">
                                <option value="title">Title</option>
                                <option value="author">Author</option>
                                <option value="genre">Genre</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row style={{ border: "3px solid black", borderRadius: "5px", marginTop: "20px" }}>
                <Col size="md-8">
                    {results.length ?
                        (results.map(book => (
                            <SearchResults
                                style={{ padding: "10px" }}
                                title={book.title}
                                authors={book.authors}
                                selfLink={book.selfLink}
                                thumbnail={book.imageLinks.thumbnail}
                                description={book.description}
                            ></SearchResults>))
                        ) : (
                            <h3>No matching results found. Please try different search criteria.</h3>
                        )}
                </Col>

            </Row>
            {/* <Button variant="primary" onClick={handleSearch}>Search</Button> */}
        </Container >
    )
}

export default Search;