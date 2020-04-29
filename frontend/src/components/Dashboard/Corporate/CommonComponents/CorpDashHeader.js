import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const CorpDashHeader = (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link exact to="/corporateDashboard">  <Navbar.Brand href="#home">Freelanco</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link exact to="/corporateDashboard"><Nav.Link href="#home">Home</Nav.Link></Link>
                    <Link to="/corporateDashboard/uploadProjectImage"> <Nav.Link href="#features">Add Project</Nav.Link></Link>

                    <Button
                        onClick={() => {
                            auth.logout(() => {
                                props.logout.push("/");
                            });
                        }}
                    >
                        Logout
                    </Button>
                </Nav>
            </Navbar>
        </div>
    )
}

export default CorpDashHeader
