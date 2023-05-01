import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'

import { Logo, FormRow, Alert } from '../components'

const Register = () => {

    const initialState = {
        name: '',
        email: '',
        password: '',
        isMember: true,
        showAlert: true
    }



    const [values, setValues] = useState(initialState)

    const toggleMember = () => {
        setValues({
            ...values,
            isMember: !values.isMember
        })
    }

    const handleChange = e => {

    }

    const submitHandler = e => {
        e.preventDefault()
    }

    return (
        <Wrapper className='full-page'>
            <form className='form'>
                <Logo />
                <h3>{values.isMember ? 'Register' : 'Login'}</h3>
                {values.showAlert && <Alert text="Alert" />}
                {
                    values.isMember
                    && <FormRow
                        type="text"
                        value={values.name}
                        handleChange={handleChange}
                        labelText="Name"
                        name="name"
                    />
                }
                <FormRow
                    type="email"
                    value={values.email}
                    handleChange={handleChange}
                    labelText="Email"
                    name="email"
                />
                <FormRow
                    type="password"
                    value={values.password}
                    handleChange={handleChange}
                    labelText="Password"
                    name="pwd"
                />
                <button className='btn btn-block'>Submit</button>
                <p>
                    {values.isMember ? 'Please sign up' : 'Already signed up'}
                    <button type='button' className='member-btn' onClick={e => toggleMember()}>{values.isMember ? 'Login' : 'Register'}</button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register
