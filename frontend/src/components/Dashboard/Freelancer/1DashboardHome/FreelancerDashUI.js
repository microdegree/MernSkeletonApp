import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard';
import CardDeck from 'react-bootstrap/CardDeck'

const FreelancerDashUI = (props) => {

    const [corporate, setCorporate] = useState([])

    useEffect(() => {
        fetchProjectsFromServer()

    }, [])

    return (
        <div>
            <CardDeck>
                {corporate.map(projectData =>
                    <ProjectCard key={projectData._id} projectData={projectData} />
                )}
            </CardDeck>
        </div >

    )

    function fetchProjectsFromServer() {
        console.log('In fetchProjectsFromServer ')
        fetch('/api/consumer/getAllProjects')
            .then(response => response.json())
            .then(data => {
                setCorporate(data)
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default FreelancerDashUI
