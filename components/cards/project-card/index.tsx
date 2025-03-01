import Button from '@/components/ui-components/button';
import Container from '@/components/ui-components/container';
import Text from '@/components/ui-components/text';
import { Project } from '@/utils/types';
import Image from 'next/image';
import React from 'react'
import { useRouter } from 'next/router';

type Props = {
    project: Project;
}

const ProjectCard = ({
    project
}: Props) => {
    const router = useRouter()
    return (
        <Container className='!p-0 hover:bg-[#f7f7f7] group duration-300 ease-in-out'>
            <div className='relative'>
                <Image
                    src={project.coverImage.url}
                    alt=''
                    width={100}
                    height={100}
                    className='h-[240px] w-full object-cover mt-4'
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <Container className='!px-4'>
                <Text variant='title5' additional=''>
                    {project.title}
                </Text>
                <Text variant='body2' additional=''>
                    {project.location}
                </Text>
                <Button additional='uppercase mt-6' size='small' onClick={() => router.push(`/projects/${project?.slug}`)}>
                    View Project
                </Button>
            </Container>
        </Container>
    )
}

export default ProjectCard
