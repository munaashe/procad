import React from 'react'
import { Management as ManagementProp } from "@/utils/types";
import Container from '@/components/ui-components/container';
import Text from '@/components/ui-components/text';
import TeamCard from '@/components/cards/team-card';

type Props = {
    management: ManagementProp[];
}

const Management = ({
    management = []
}: Props) => {
    return (
        <Container>
            <Text variant="title4" color='black'>
                Our Management
            </Text>
            <Container className='px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12'>
                {management.map((item, index) => <TeamCard key={index} details={item} />)}
            </Container>
        </Container>
    )
}

export default Management
