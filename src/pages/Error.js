import React from 'react'
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage'

import NotFoundImage from '../assets/images/not-found.svg'

const Error = () => {
    return (
        <Wrapper className='full-page'>
            <div>
                <img src={NotFoundImage} alt='not found' />
                <h3>Not Found</h3>
                <p>404 Error</p>
                <Link to="/">Back Home</Link>
            </div>
        </Wrapper>
    )
}

export default Error
