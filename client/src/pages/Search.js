import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SearchResults from "../components/SearchResults";

function Search() {
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
                                <option>Title</option>
                                <option>Author</option>
                                <option>Genre</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row style={{ border: "3px solid black", borderRadius: "5px", marginTop: "20px" }}>
                <SearchResults style={{ padding: "10px" }} />
            </Row>
            {/* <Button variant="primary" onClick={handleSearch}>Search</Button> */}
        </Container >
    )
}

export default Search;