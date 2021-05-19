import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import API from '../utils/API';

function SearchResults(props) {

    const [saved, setSaved] = useState(false);


    function handleSave(book) {
        console.log(book)
        API.saveBook(book)
            .then(setSaved(true))
            .catch(err => alert(err))
    }


    return (
        <Card>
            <Card.Header>
                <h3>{props.title}</h3>
                <p>by {props.authors}</p>
                <Button variant="primary" href={props.selfLink}>View</Button>
                <Button variant="primary" onClick={() => !saved && handleSave(
                    {
                        title: props.title,
                        author: props.authors,
                        description: props.description,
                        image: props.thumbnail,
                        link: props.selfLink
                    })}>{!saved ? "Save" : "Already Saved"}</Button>
            </Card.Header>
            <Card.Body>
                <img src={props.thumbnail} alt={props.title} />
                <p> {props.description} </p>
            </Card.Body>
        </Card>
    );
}

export default SearchResults;