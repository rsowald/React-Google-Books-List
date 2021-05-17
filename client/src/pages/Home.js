import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <Container style={{
            padding: "200px 100px 300px 100px",
            backgroundImage: `url(./background.jpg)`,
            height: "auto",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <Row className="text-center">
                <Col style={{ backgroundColor: "rgba(0, 123, 255, .9)" }}>
                    <h1 style={{ marginBottom: "20px" }}>Welcome to your personal reading list <br />powered by React and Google Books!</h1>
                    <p style={{ fontWeight: "bold" }}>Start by visiting the Search page and searching Google Books for information on specific titles.</p>
                    <p style={{ fontWeight: "bold" }}>Save books that interest you, and view your list any time on the Saved page.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;