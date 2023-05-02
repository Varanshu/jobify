import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'

import { Logo, FormRow, Alert } from '../components'
import { useAppContext } from '../hooks'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: true
}

const Register = () => {

    const [values, setValues] = useState(initialState)

    const { isLoading, showAlert, displayAlert } = useAppContext()

    const toggleMember = () => {
        setValues({
            ...values,
            isMember: !values.isMember
        })
    }

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        const { name, email, password, isMember } = values
        if (!email || !password || (!isMember && !name)) {
            displayAlert()
            return
        }
        console.log(values);
    }

    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={submitHandler}>
                <Logo />
                <h3>{values.isMember ? 'Register' : 'Login'}</h3>
                {showAlert && <Alert />}
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
                    name="password"
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
