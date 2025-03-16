import Container from '@/components/ui-components/container';
import Text from '@/components/ui-components/text';
import { ContactLink } from '@/utils/types'
import Link from 'next/link';
import React from 'react'

type Props = {
    link: ContactLink;
}

const ContactCard = ({ link }: Props) => {
    return (
        <Container className='!p-4 w-full shadow-lg'>
            <div className='flex items-center justify-=start gap-4'>
                <img
                    src={link.icon.url}
                    alt=''
                    className='h-10 w-10'
                />
                <Text variant='body2' weight='bold' additional='!flex-1'>
                    {link.titleText}
                </Text>
            </div>
            <Link href={link.link} target='_blank' className='!py-8 w-full'>
                <Text variant='body2' additional='mt-8 ml-14 hover:underline hover:text-brown-1'>
                    {link.text}
                </Text>
            </Link>
        </Container>
    )
}

export default ContactCard
