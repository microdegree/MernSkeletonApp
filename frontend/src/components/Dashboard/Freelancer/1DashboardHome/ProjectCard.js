import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.doctor.imageName} style={{ padding: 10 }} />
                <Card.Body>
                    <Card.Title>{props.doctor.projectTitle}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.doctor.projectTechnology} | {props.doctor.projectBudget}</Card.Subtitle>
                    <br /><br />
                    <Link to={{
                        pathname: '/freelancerDashboard/moreDetails',
                        doctor: props.doctor
                    }}><Button variant="primary">More Details</Button></Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{props.doctor.projectCorporateName}</small>
                </Card.Footer>
            </Card>
        </div >
    )
}

export default ProjectCard
