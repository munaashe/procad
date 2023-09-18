import React from 'react'
import Services from './Services'
import Story from './Story'
import Vision from './Vision'
import Management from './Management'

export const metadata = {
    title: 'About Us | Procad Construction'
}

const About = () => {
    return (
        <div className='pt-20 pb-4'>
            <Story />
            <Vision />
            <Services />
            <Management />
        </div>
    )
}

export default About