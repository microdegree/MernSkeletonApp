import React, { useState } from 'react'
import auth from '../CommonComponents/Auth'
import HeaderHome from '../CommonComponents/HeaderHome';
import Login from './Login';
import SignUp from './SignUp';

const LoginContainer = props => {
    const [loginSelected, setLoginSelected] = useState(true)

    let selectedComponentUI
    if (loginSelected) {
        selectedComponentUI = <Login routeHistory={props.history} />
    } else {
        selectedComponentUI = < SignUp routeHistory={props.history} />
    }

    function setMenuSelected(selected) {
        console.log('selected ', selected)
        setLoginSelected(selected)
    }

    return (
        <div>
            <HeaderHome />
            Login Component Main
            <br /> <br />

            <button onClick={() => setMenuSelected(true)}>Login</button>
            <br />
            <button onClick={() => setMenuSelected(false)}>SignUp Now</button>
            <br /> <br />

            {selectedComponentUI}
            <br /> <br />
            <button onClick={() => { auth.login(() => { bypassLogin(props, 'superadmin') }); }}>ByPass Super Admin Login</button>
            <br /><button onClick={() => { auth.login(() => { bypassLogin(props, 'admin') }); }}>ByPass Admin Login</button>
            <br /> <button onClick={() => { auth.login(() => { bypassLogin(props, 'consumer') }); }}>ByPass Consumer Login</button>

        </div>

    )

    function bypassLogin(props, loginType) {

        let email = 'consumer@gmail.com'
        if ('superadmin' === loginType) {
            email = 'superadmin@gmail.com'
        } else if ('admin' === loginType) {
            email = 'admin@gmail.com'
        }

        const requestObject = {
            "email": email,
            "password": "test"
        }
        auth.userEmail = requestObject.email;

        let responseObj = {}
        fetch('/api/authenticate/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    props.history.push("/");
                }
                console.log(data[0].role)
                responseObj = data[0];
                if ('consumer' === data[0].role) {
                    auth.authenticated = true;
                    props.history.push("/freelancerDashboard");
                } else if ('admin' === data[0].role) {
                    auth.authenticated = true;
                    props.history.push("/corporateDashboard");
                } else if ('superadmin' === data[0].role) {
                    auth.authenticated = true;
                    props.history.push("/superAdminDashboard");
                } else {
                    props.history.push("/");
                }
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }

}


export default LoginContainer
