import Button from '@/components/ui-components/button';
import Container from '@/components/ui-components/container';
import Text from '@/components/ui-components/text';
import { Category } from '@/utils/types';
import Image from 'next/image';
import React from 'react'

type Props = {
    category: Category;
}

const CategoryCard = ({
    category
}: Props) => {
    return (
        <Container className='!p-0'>
            <Text variant='title5'>
                {category?.categoryName}
            </Text>
            <Image
                src={category?.image?.url}
                alt=''
                width={100}
                height={100}
                className='h-[240px] w-full  object-cover mt-4'
            />
            <Text variant='body2' additional='mt-2'>
                {category?.description}
            </Text>
            <Button additional='uppercase mt-6' size='small'>
                View Projects
            </Button>
        </Container>
    )
}

export default CategoryCard
