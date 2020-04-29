import React, { useEffect, useState } from 'react'
import auth from '../../Home/CommonComponents/Auth'
import FreelancerDashUI from './1DashboardHome/FreelancerDashUI';
import FreelancerDashHeader from './0CommonComponents/FreelancerDashHeader'
import DetailsComponent from './2MoreDetails/DetailsComponent';
import { Route } from "react-router-dom";
import Confirmation from './3Confirmation/Confirmation';
import MyAppointments from './MyAppointments';
import PaymentGateway from './4PaymentGateway/PaymentGateway';

const FreelancerDash = (props) => {

    const [userInDash, setUserInDash] = useState(0);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        fetchUser()
    }, [userId])


    return (
        <div>
            <FreelancerDashHeader logout={props.history} />
            Hello {userInDash.name}
            <br /><br /><br /><br />
            <Route exact path="/freelancerDashboard" component={FreelancerDashUI} />
            <Route exact path="/freelancerDashboard/myAppointments" component={MyAppointments} />

            <Route exact path="/freelancerDashboard/moreDetails" component={DetailsComponent} />
            <Route exact path="/freelancerDashboard/confirmationPage" component={Confirmation} />
            <Route exact path="/freelancerDashboard/paymentsGateway" component={PaymentGateway} />

        </div>
    )

    async function fetchUser() {
        console.log('userInDash Before ' + userInDash)
        let requestObject = { "email": auth.userEmail }
        fetch('/api/authenticate/getUserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Dash ' + JSON.stringify(data))
                console.log('Dash ' + data[0].name)
                setUserInDash(data[0])
                setUserId(data[0].name)
            })
            .catch(err => console.log('Error when calling api : ' + err))
        console.log('userInDash After ' + userInDash)
    }
}

export default FreelancerDash
