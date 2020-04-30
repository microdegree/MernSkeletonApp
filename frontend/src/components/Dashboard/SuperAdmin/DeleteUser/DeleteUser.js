import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const DeleteUser = () => {
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <div>

            Delete Users Page
            <br /> <br />
            <ul>
                {allUsers.map(user =>
                    <Link to={{
                        pathname: `/superAdminDashboard/modal/deleteUser`,
                        userData: user
                    }}> <li key={user._id}>{user.name} {user.email} {user.role}</li></Link>
                )}
            </ul>
        </div>
    )

    async function getAllUsers() {
        console.log('In SUperAdmin getAllUsers ')
        fetch('/api/superAdmin/getAllUsers')
            .then(response => response.json())
            .then(data => {
                setAllUsers(data)
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default DeleteUser
