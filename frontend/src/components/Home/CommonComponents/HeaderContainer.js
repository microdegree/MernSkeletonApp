import React, { useState } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import About from '../About/AboutContainer';
import Home from '../HomeContainer';
import LoginContainer from '../Login/LoginContainer';
import auth from './Auth'
import FreelancerDashContainer from '../../Dashboard/Freelancer/FreelancerDashContainer';
import CorpDashContainer from '../../Dashboard/Corporate/CorpDashContainer';
import SuperAdminDashboard from '../../Dashboard/SuperAdmin/SuperAdminDashboard';

const HeaderContainer = () => {

    const [user, setUser] = useState('rakeshFromState')

    return (
        <div>
            {/* Routing Logic */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/login" render={(props) => <LoginContainer {...props} user={user} />} />
                <PrivateRoute path='/freelancerDashboard' component={FreelancerDashContainer} user={user} />
                <PrivateRoute path='/corporateDashboard' component={CorpDashContainer} user={user} />
                <PrivateRoute path='/superAdminDashboard' component={SuperAdminDashboard} user={user} />

                <Route path="*" component={() => "404 NOT FOUND"} />
            </Switch>
        </div >
    )
}

/* Logic to Check if Logged iN or Not*/

function PrivateRoute({ component: Component, user, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => auth.isAuthenticated() === true
                ? <Component user={user} {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
    )
}

export default HeaderContainer
