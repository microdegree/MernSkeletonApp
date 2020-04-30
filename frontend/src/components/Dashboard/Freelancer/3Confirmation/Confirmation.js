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
            <Link to='/freelancerDashboard/paymentsGateway' onClick={confirmBookingAtServer}>COnfirm Booking and go to Payments</Link>
        </div>
    )

    function confirmBookingAtServer() {

        fetch('/api/consumer/addNewBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "consumerEmail": auth.userEmail,
                "adminEmail": props.location.projectData.email,
                "projectId": props.location.projectData._id
            }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log('error when calling confirmAppointmentAtServer ', error))

    }
}

export default Confirmation
