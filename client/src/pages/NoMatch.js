import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NoMatch() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron align="center">
                        <h1>404 Sorry, we could not find that page.</h1>
                        <img role="img" alt="Error cat" src="https://http.cat/[404]" />
                        <p>Please try returning to the <Link to="/">home page</Link> to try again.</p>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default NoMatch;