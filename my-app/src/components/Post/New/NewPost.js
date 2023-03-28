import React from "react";
import home from '../../images/home.png';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './NewPost.css';



export default function NewPost() {
    return (


        <Card className="home-content">
            <Card.Img className="landing-img" variant="left" src={home} alt="Landing-image" />
            <Card.Body className="landing-content">
                <Card.Title>10x Team 04</Card.Title>

                <Link to={"post/all"}> <Button variant="primary">Enter</Button> </Link>
            </Card.Body>
        </Card>




    )
}