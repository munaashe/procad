import CategoryCard from '@/components/cards/category-card';
import Container from '@/components/ui-components/container';
import { Category } from '@/utils/types'
import React from 'react'

type Props = {
    categories: Category[];
}

const ProjectsComponent = ({
    categories = []
}: Props) => {
    return (
        <Container>
            {categories.map((category, index) => <CategoryCard key={index} category={category} />)}
        </Container>
    )
}

export default ProjectsComponent
