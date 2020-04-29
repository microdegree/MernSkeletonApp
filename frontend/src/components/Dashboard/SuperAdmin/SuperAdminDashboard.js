import React, { useState, useEffect } from 'react'
import SuperAdminDashHeader from './SuperAdminDashHeader';
import GetAllUsers from './GetAllUsers';
import { Route } from 'react-router-dom'
import AddUser from './AddUser';
import ModifyUser from './ModifyUser';
import DeleteUser from './DeleteUser';

const SuperAdminDashboard = (props) => {

    return (
        <div>
            SuperAdminDashboard Page
            <br />
            <SuperAdminDashHeader logout={props.history} />

            <Route exact path="/superAdminDashboard/getAllUsers" component={GetAllUsers} />
            <Route exact path="/superAdminDashboard/addUser" component={AddUser} />
            <Route exact path="/superAdminDashboard/modifyUser" component={ModifyUser} />
            <Route exact path="/superAdminDashboard/deleteUser" component={DeleteUser} />

        </div>
    )

}

export default SuperAdminDashboard
