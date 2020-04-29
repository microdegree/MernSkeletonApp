import React, { Component, Fragment } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";

class HomeUI extends Component {
    render() {
        return (
            <Jumbotron style={{ margin: 0 }}>
                <Container>
                    <Row>
                        <Col> <img
                            src="https://fcaryk.com/wp-content/uploads/2019/09/main-qimg-2055ee889c730f4ac6a52f49e08f822e.png" /></Col>
                        <Col>
                            <br /><br />
                            <h1>Freelancer to Corporate Connect</h1>
                            <p> A one stop solution to connect freelancers to corporate projects. Freelancers can now choose and work for the projects listed by corporates</p>
                            <p><Button variant="primary" href='/login'>Signin</Button></p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default HomeUI;
