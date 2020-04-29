import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard';
import CardDeck from 'react-bootstrap/CardDeck'

const FreelancerDashUI = (props) => {

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetchDoctorsFromServer()

    }, [])

    return (
        <div>
            <CardDeck>
                {doctors.map(doctor =>
                    <ProjectCard key={doctor._id} doctor={doctor} />
                )}
            </CardDeck>
        </div >

    )

    function fetchDoctorsFromServer() {
        console.log('In fetchDoctorsFromServer ')
        fetch('/api/consumer/getAllProjects')
            .then(response => response.json())
            .then(data => {
                setDoctors(data)
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default FreelancerDashUI
