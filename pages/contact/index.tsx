import apolloClient from '@/lib/apolloclient';
import { GET_CONTACT_LINKS } from '@/lib/queries';
import { GetServerSideProps } from 'next';
import React from 'react';
import Head from 'next/head';
import { ContactLink } from '@/utils/types';
import Container from '@/components/ui-components/container';
import Text from '@/components/ui-components/text';
import ContactCard from '@/components/cards/contact-link';
type Props = {
    contactLinks: ContactLink[];
}

const ContactUs = ({
    contactLinks
}: Props) => {
    return (
        <>
            <Head>
                <title>Contact Us | Procad Construction</title>
                <meta name="description" content="Get in touch with Procad Construction, a leading construction and engineering firm in Zimbabwe. Contact us for inquiries, support, and more information." />
                <meta name="keywords" content="Procad Construction, contact us, construction company, engineering, building, Zimbabwe, inquiries, support" />
                <meta name="author" content="Procad Construction" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://procad.co.zw/contact" />
                <meta property="og:title" content="Contact Us - Procad Construction" />
                <meta property="og:description" content="Get in touch with Procad Construction, a leading construction and engineering firm in Zimbabwe. Contact us for inquiries, support, and more information." />
                <meta property="og:image" content="/assets/logo.png" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://procad.co.zw/contact" />
                <meta name="twitter:title" content="Contact Us - Procad Construction" />
                <meta name="twitter:description" content="Get in touch with Procad Construction, a leading construction and engineering firm in Zimbabwe. Contact us for inquiries, support, and more information." />
                <meta name="twitter:image" content="/assets/logo.png" />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container className="my-8 md:my-16">
                <Text variant="title4" color='black'>
                    Contact Us
                </Text>
                <Text variant="title5" color='brown' additional="w-full max-w-[440px] mt-4 !text-khakhi">
                    We would love to hear from you. Please reach out to us for inquiries, support, or more information.
                </Text>
                <Container className='!px-0 w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-16 mt-4'>
                    {contactLinks?.map((link, index) => (
                        <ContactCard key={index} link={link} />
                    ))}
                </Container>
            </Container>
        </>
    );
}

export default ContactUs;

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const { data } = await apolloClient.query({
            query: GET_CONTACT_LINKS,
        });

        return {
            props: {
                contactLinks: data?.contactLinkCollection?.items || [],
            },
        };
    } catch (error) {
        console.error('Error fetching projects:', error);
        return {
            props: {
                contactLinks: [],
            },
        };
    }
};