import React from 'react'

const Alert = ({
    text
}) => {
    return (
        <div className='alert alert-danger'>
            {text}
        </div>
    )
}

export default Alert
