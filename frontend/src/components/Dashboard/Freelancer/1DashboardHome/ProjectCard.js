import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.projectData.imageName} style={{ padding: 10 }} />
            <Card.Body>
                <Card.Title>{props.projectData.projectTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.projectData.projectTechnology} | {props.projectData.projectBudget}</Card.Subtitle>
                <br /><br />
                <Link to={{
                    pathname: '/freelancerDashboard/moreDetails',
                    projectData: props.projectData
                }}><Button variant="primary">More Details</Button></Link>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{props.projectData.projectCorporateName}</small>
            </Card.Footer>
        </Card>
    )
}

export default ProjectCard
