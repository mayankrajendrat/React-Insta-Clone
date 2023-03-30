import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../images/circle_icon.svg';
import Camera from '../../../images/camera_icon.png';
import heart from '../../../images/heart_icon.png';
import rocket from '../../../images/rocket_icon.jpg';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './List.css';

import Header from "../Header/Header";

export default function AllPost() {

    return (
        <>
            <Header />

            <div className="list-post-container">
                <div className="row m-3">
                    <div className="col-12">
                        <Card className="post-card">
                            <Card.Header className="card-header">
                                <div col-5>
                                    <h4>Siva</h4>
                                    <label>Bengaluru</label>
                                </div>
                                <div col-5>
                                    <span className='dot'>&#9679;&#9679;&#9679;</span>
                                </div>
                            </Card.Header>
                            <Card.Body className="card-body">
                                <img src="https://images.unsplash.com/photo-1680169287995-9b7b4642eba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" />
                            </Card.Body>
                            <Card.Footer className="card-footer">
                                <div className="wrapper">
                                    <div className="col-5">
                                        <img src={heart} alt="heart_icon" />
                                        <img src={rocket} alt="heart_icon" />
                                        <p> 64 Likes</p>
                                    </div>
                                    <div className="col-5">
                                        <span className='dot'>30 Mar-2023</span>
                                    </div>
                                </div>
                                <div col-12 d-block>
                                    <h3> Hello from Mayank</h3>
                                </div>
                            </Card.Footer>
                        </Card>


                    </div>
                </div>




            </div>


        </>

    )
}