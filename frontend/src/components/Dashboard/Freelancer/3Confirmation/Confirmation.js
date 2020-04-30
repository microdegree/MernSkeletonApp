import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../../../Home/CommonComponents/Auth'

const Confirmation = (props) => {
    return (
        <div>
            Confirmation Page<br />

            <br />Booking Info <br />

            {props.location.projectData.specialization}
            {props.location.bookingInfo}

            <br /> <br />
            <Link to='/freelancerDashboard/paymentsGateway' onClick={confirmAppointmentAtServer}>COnfirm Booking and go to Payments</Link>
        </div>
    )

    function confirmAppointmentAtServer() {

        fetch('/api/patient/addNewAppointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": auth.userEmail,
                "specialization": props.location.projectData.specialization,
            }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log('error when calling confirmAppointmentAtServer ', error))

    }
}

export default Confirmation
