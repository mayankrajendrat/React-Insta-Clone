import React from "react";
import home from '../../images/home.png';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Landing.css';



export default function LandingPage(){
    return (
      
<div className="home-container">
<Card className="home-content">
      <Card.Img className="landing-img" variant="left" src={home} alt="Landing-image" />
      <Card.Body className="landing-content">
        <Card.Title>10x Team 04</Card.Title>
        
        <Link to={"new"}> <Button variant="primary">Enter</Button> </Link>
      </Card.Body>
    </Card>
    </div>


      
    )
}