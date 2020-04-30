import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUp = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log('signup data ', data);
        updateSignupInfoInServer(data)

    }
    console.log(errors);

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Group controlId="formBasicSignupFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" name="name" ref={register({ required: true, maxLength: 80 })} />
                </Form.Group>
                <Form.Group controlId="formBasicSignupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" ref={register({ required: true, pattern: { value: /^\S+@\S+$/i, message: "invalid email address" } })} />
                </Form.Group>
                {errors.email && errors.email.message}
                <Form.Group controlId="formBasicSignupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" ref={register({ required: true, maxLength: 80 })} />
                </Form.Group>


                <select name="role" ref={register({ required: true })}>
                    <option value="consumer">Freelancer</option>
                    <option value="admin">Corporate</option>
                    <option value="superadmin">SuperAdmin</option>
                </select>

                <br /> <br /> <br />
                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>

        </div>
    )


    function updateSignupInfoInServer(requestObject) {

        auth.userEmail = requestObject.email;

        console.log('email entered ', requestObject.email)
        fetch('/api/authenticate/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {

                if ('consumer' === requestObject.role) {
                    auth.authenticated = true;
                    console.log('in consumer flow signup')
                    props.routeHistory.push("/freelancerDashboard");
                } else if ('admin' === requestObject.role) {
                    auth.authenticated = true;
                    props.routeHistory.push("/corporateDashboard");
                }
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }

}

export default SignUp
