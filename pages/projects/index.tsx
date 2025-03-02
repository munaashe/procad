'use client'

import React, { useEffect, useState } from 'react'
import ProjectsBanner from './projects-banner'
import Filter from './filter'
import Container from '@/components/ui-components/container'
import apolloClient from '@/lib/apolloclient'
import { GET_PROJECTS } from '@/lib/queries'
import { GetServerSideProps } from 'next'
import { Category } from '@/utils/types'
import { capitalizeFirstCharacter } from '@/utils/capitalise-first-character'
import ProjectCard from '@/components/cards/project-card'
import Head from 'next/head'

type Props = {
    projects: any[];
    categories: Category[];
}

const Projects = ({
    categories,
    projects
}: Props) => {
    const onFilterChange: (type: 'jobType' | 'industry', value: string | null) => void = () => {
        // Does nothing
    };
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    useEffect(() => {
        if (categories) {
            setSelectedCategory(null);
        }
    }, [categories])
    return (
        <>
            <Head>
                <title>Projects | Latest Building & Infrastructure</title>
                <meta name="description" content="Explore the latest Procad construction projects. Find detailed information on infrastructure, commercial, and residential projects in Zimbabwe." />
                <meta name="keywords" content="Procad Construction, projects, building, infrastructure, engineering, Zimbabwe, architecture" />
                <meta name="author" content="Procad Construction" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://procad.co.zw/projects" />
                <meta property="og:title" content="Procad Construction Projects" />
                <meta property="og:description" content="Discover Procad's latest construction and engineering projects. Stay updated on innovative infrastructure developments in Zimbabwe." />
                <meta property="og:image" content="/assets/logo.png" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://procad.co.zw/projects" />
                <meta name="twitter:title" content="Procad Construction Projects" />
                <meta name="twitter:description" content="Discover Procad's latest construction and engineering projects in Zimbabwe." />
                <meta name="twitter:image" content="/assets/logo.png" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container className='min-h-[70vh]'>
                <ProjectsBanner selectedCategory={selectedCategory} />
                <Filter
                    jobTypes={[]}
                    industries={[]}
                    onFilterChange={() => onFilterChange('industry', '')}
                />
                <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 !px-0'>
                    {projects.map((project, index) => <ProjectCard key={index} project={project} />)}
                </Container>
            </Container>
        </>
    )
}

export default Projects


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { stage, categoryName } = context.query || {};
    const capitalizedCategoryName = categoryName ? capitalizeFirstCharacter(categoryName as string) : null;
    const capitalizedStage = stage ? capitalizeFirstCharacter(stage as string) : null;


    try {
        const { data } = await apolloClient.query({
            query: GET_PROJECTS,
            variables: {
                categoryName: capitalizedCategoryName,
                stage: capitalizedStage,
            },
        });

        return {
            props: {
                categories: data?.categories?.items,
                projects: data?.projects?.items,
            },
        };
    } catch (error) {
        console.error('Error fetching projects:', error);
        return {
            props: {
                projects: [],
                categories: [],
            },
        };
    }
}