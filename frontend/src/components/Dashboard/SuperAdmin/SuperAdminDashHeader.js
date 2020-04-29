import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../../Home/CommonComponents/Auth'

const SuperAdminDashHeader = (props) => {
    return (
        <div>

            <Link exact to="/superAdminDashboard/getAllUsers">Get Users</Link><br />
            <br /> <br />
            <Link exact to="/superAdminDashboard/addUser">Add Users</Link><br />
            <br /> <br />
            <Link exact to="/superAdminDashboard/modifyUser">Modify Users</Link><br />
            <br /> <br />
            <Link exact to="/superAdminDashboard/deleteUser">Delete Users</Link><br />
            <br /> <br />

            <br />
            <button
                onClick={() => {
                    auth.logout(() => {
                        props.logout.push("/");
                    });
                }}
            >Logout</button>

            <br /><br />

            {/* <button> Get Users</button>
            <br /> <br />
            <button> Add User</button>
            <br /> <br />
            <button> Modify Users</button>
            <br /> <br />
            <button> Delete Users</button>
            <br /> <br /> */}
        </div>
    )
}

export default SuperAdminDashHeader
