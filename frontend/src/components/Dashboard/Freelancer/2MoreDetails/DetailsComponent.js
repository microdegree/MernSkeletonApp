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
            projectData Details
            <Link to={{
                pathname: '/freelancerDashboard/confirmationPage',
                projectData: props.location.projectData,
                bookingInfo: "ticketQuantity"

            }}><Button>Apply Now</Button></Link>

            {props.location.projectData.email}<br />
            {props.location.projectData.specialization}

            <Row>{props.location.projectData.projectTitle}</Row>
            <Row>{props.location.projectData.projectDescription}</Row>
            <Row>{props.location.projectData.projectTimeline}</Row>
            <Row>{props.location.projectData.projectManagerName}</Row>
            <Row>{props.location.projectData.projectManagerContact}</Row>
            <Row>{props.location.projectData.projectManagerEmail}</Row>
            <Row>{props.location.projectData.projectCategory}</Row>
            <Row>{props.location.projectData.projectTechnology}</Row>
            <Row>{props.location.projectData.projectBudget}</Row>

            <Row>
                <Col>
                    <Card.Img variant="top" src={props.location.projectData.imageName} style={{ padding: 10 }} />
                </Col>
                <Col>
                    <Row>{props.location.projectData.projectDescription}</Row>
                </Col>
            </Row>
        </div>
    )
}

export default DetailsComponent
