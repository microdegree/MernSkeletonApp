import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const DetailsComponent = (props) => {

    const [bookingInfo, setBookingInfo] = useState({})
    return (
        <div>
            Doctor Details
            <Link to={{
                pathname: '/freelancerDashboard/confirmationPage',
                doctor: props.location.doctor,
                bookingInfo: "ticketQuantity"

            }}><Button>Apply Now</Button></Link>

            {props.location.doctor.email}<br />
            {props.location.doctor.specialization}

            <Row>{props.location.doctor.projectTitle}</Row>
            <Row>{props.location.doctor.projectDescription}</Row>
            <Row>{props.location.doctor.projectTimeline}</Row>
            <Row>{props.location.doctor.projectManagerName}</Row>
            <Row>{props.location.doctor.projectManagerContact}</Row>
            <Row>{props.location.doctor.projectManagerEmail}</Row>
            <Row>{props.location.doctor.projectCategory}</Row>
            <Row>{props.location.doctor.projectTechnology}</Row>
            <Row>{props.location.doctor.projectBudget}</Row>

            <Row>
                <Col>
                    <Card.Img variant="top" src={props.location.doctor.imageName} style={{ padding: 10 }} />
                </Col>
                <Col>
                    <Row>{props.location.doctor.projectDescription}</Row>
                </Col>
            </Row>
        </div>
    )
}

export default DetailsComponent
