'use client'

import React, { useEffect, useState } from 'react'
import ProjectsBanner from './projects-banner'
import Filter from './filter'
import Container from '@/components/ui-components/container'
import apolloClient from '@/lib/apolloclient'
import { GET_PROJECTS } from '@/lib/queries'
import { GetServerSideProps } from 'next'
import { Category, Project } from '@/utils/types'
import { capitalizeFirstCharacter } from '@/utils/capitalise-first-character'
import ProjectCard from '@/components/cards/project-card'
import Head from 'next/head'
import { useRouter, useSearchParams } from 'next/navigation'

type Props = {
    projects: Project[];
    //categories: Category[];
}

const Projects = ({
    projects
}: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [categories, setCategories] = useState<Category[]>([]);
    const [stages, setStages] = useState<string[]>([]);
    const [filterItems, setFilterItems] = useState({
        category: searchParams.get('categoryName') || null,
        stage: searchParams.get('stage') || null
    });

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const hasQueryParams = searchParams.has('categoryName') || searchParams.has('stage');

        if (!hasQueryParams && projects.length > 0) {
            const uniqueCategories = projects.reduce((acc: Category[], project: Project) => {
                const category = project.category;
                if (!acc.some((cat) => cat.categoryName === category.categoryName)) {
                    acc.push(category);
                }
                return acc;
            }, []);
            setCategories(uniqueCategories);
        }
        const uniqueStages = projects.reduce((acc: string[], project: Project) => {
            const stage = project.stage;
            if (!acc.includes(stage)) {
                acc.push(stage);
            }
            return acc;
        }, []);
        setStages(uniqueStages);
    }, [projects]);

    const onFilterChange = (type: 'category' | 'stage', value: string | null) => {
        const newFilters = {
            ...filterItems,
            [type]: value
        };

        setFilterItems(newFilters);

        // Update URL with new filters
        const params = new URLSearchParams();
        if (newFilters.category) params.set('categoryName', newFilters.category);
        if (newFilters.stage) params.set('stage', newFilters.stage);

        router.push(`/projects?${params.toString()}`, { scroll: false });
    };

    const [selectedCategory, setSelectedCategory] = useState<string | null>(filterItems.category)
    useEffect(() => {
        setSelectedCategory(filterItems.category);
    }, [filterItems.category])

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
                    stages={stages}
                    categories={categories}
                    filterItems={filterItems}
                    onFilterChange={onFilterChange}
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
                categories: data?.categories?.items || [],
                projects: data?.projects?.items || [],
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