import React from 'react'
import Container from '@/components/ui-components/container'
import Text from '@/components/ui-components/text'
import { capitalizeFirstCharacter } from '@/utils/capitalise-first-character'

const ProjectsBanner = ({ selectedCategory }: { selectedCategory: string | null }) => {
    return (
        <Container className='!px-0'>
            <Text variant="title4" color='black'>
                {`Our ${selectedCategory ? capitalizeFirstCharacter(selectedCategory):''} Projects`}
            </Text>
            <Text variant="title5" color='brown' additional="w-full max-w-[440px] mt-4 !text-khakhi">
                Listen to what some of our clients say about our services
            </Text>
        </Container>
    )
}

export default ProjectsBanner
