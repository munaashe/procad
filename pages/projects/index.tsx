import React from 'react'
import ProjectsBanner from './projects-banner'
import Filter from './filter'

const Projects = () => {
    return (
        <div className='min-h-screen'>
            <ProjectsBanner />
            <Filter />
            projects mapped here
        </div>
    )
}

export default Projects
