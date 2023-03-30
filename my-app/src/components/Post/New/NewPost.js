import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../images/circle_icon.svg';
import Camera from '../../../images/camera_icon.png';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './NewPost.css';

import Header from "../Header/Header";

export default function NewPost() {
const [formData, setFormData]=useState({
image: null,
author:"",
location:"",
description:""
})

function captureForm(event){
    event.preventDefault();
    const formValues=new FormData(event.target);
    
}



    return (
        <>
            <Header />

            <div className="new-post-container">
                <Card >
                    <Card.Body>
                        <Form onSubmit={captureForm}>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control name="Image" type="file"  />
                            </Form.Group>

                            <InputGroup className="mb-3">
                                <Form.Control aria-label="Author" name="author" placeholder="Enter Name" />
                                <Form.Control aria-label="Location" name="location" placeholder="Enter Location" />
                            </InputGroup>
                            <Form.Control size="lg" type="text" name="description" placeholder="Description" />
                            <div className="btn-container">
                                <Button variant="primary" className="" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>

                    </Card.Body>
                </Card>
            </div>
        </>

    )
}