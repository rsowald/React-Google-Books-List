import React from 'react';
import { Card, Button } from 'react-bootstrap';

function SavedResults(props) {
    return (
        <Card>
            <Card.Header>
                <h3>{props.title}</h3>
                <p>by {props.authors}</p>
                <Button variant="primary" href={props.selfLink}>View</Button>
                <Button variant="primary" onClick={props.handleDelete}>Delete</Button>
            </Card.Header>
            <Card.Body>
                <img src={props.thumbnail} alt={props.title} />
                <p> {props.description} </p>
            </Card.Body>
        </Card>
    )
}

export default SavedResults;