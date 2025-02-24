import { Category } from '@/utils/types';
import React from 'react'

type Props = {
    category: Category;
}

const CategoryCard = ({
    category
}: Props) => {
    return (
        <div>
            {category?.categoryName}
        </div>
    )
}

export default CategoryCard
