import React from 'react'
import Logo from '../assets/images/logo.svg'
import Main from '../assets/images/main.svg'

import LandingWrapper from '../assets/wrappers/LandingWrapper'

const Landing = () => {
    return (
        <LandingWrapper>
            <nav>
                <img src={Logo} alt='Jobify Logo' className='logo' />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>Job <span>Tracking</span> App</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget orci sit amet mi rutrum faucibus ut et eros. Donec est massa, hendrerit eget tortor et, pharetra rutrum neque. Duis mattis iaculis fringilla. Morbi congue justo non diam elementum, vel egestas mauris dapibus. In hac habitasse platea dictumst. Pellentesque eget rutrum nisi. Ut ac sem a tortor euismod rhoncus. Curabitur at vulputate ex, eleifend tempor felis. Morbi tellus metus, dapibus sit amet gravida id, tristique vel sapien. In aliquet hendrerit turpis, eget volutpat risus pulvinar in. Sed sed lectus dapibus, consectetur eros ut, vestibulum massa.
                    </p>
                    <button className='btn btn-hero'>Login / Register</button>
                </div>
                <img src={Main} alt='main image' className='img main-img' />
            </div>
        </LandingWrapper>
    )
}


export default Landing
