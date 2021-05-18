import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SavedResults from "../components/SavedResults";
import API from "../utils/API";

function Saved() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    function loadBooks(){
        API.getBooks()
            .then(res=> {
            console.log(res.data)
            setBooks(res.data)
            })
            .catch(err=>console.error(err));
    };

    function deleteBook(id){
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.error(err));
    };

    return (
        <Container>
            <Row style={{marginTop: "20px"}}>
                <Col size="md-8">
                    {books.length ?
                        (books.map(book => (
                            <SavedResults
                                title={book.title}
                                authors={book.authors}
                                selfLink={book.selfLink}
                                thumbnail={book.thumbnail}
                                description={book.description}
                                handleDelete={deleteBook(book._id)}
                            >
                            </SavedResults>))
                            ) : (
                                <h3 align="center">You haven't saved any books yet.<h3>
                                    </h3>Go search for some!</h3>
                            )}
                </Col>
            </Row>
        </Container>
    )
}

export default Saved;