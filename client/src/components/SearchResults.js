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
                <h3 className="d-inline-flex mr-3">{props.title}</h3>
                <p className="d-inline-flex mt-2">by {props.authors.join(' , ')}</p>
                <Button className="float-right" size="sm" variant="primary" href={props.link} target={"_blank"}>View</Button>
                <Button className="float-right mr-1" size="sm" variant="primary" onClick={() => !saved && handleSave(
                    {
                        title: props.title,
                        authors: props.authors,
                        description: props.description,
                        image: props.thumbnail,
                        link: props.link
                    })}>{!saved ? "Save" : "Already Saved"}</Button>
            </Card.Header>
            <Card.Body className="d-flex">
                <img style={{ height: "100%", float: "left", marginRight: "10px" }} src={props.thumbnail} alt={props.title} />
                <p> {props.description} </p>
            </Card.Body>
        </Card>
    );
}

export default SearchResults;