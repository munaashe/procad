import Head from "next/head";
import Container from "@/components/ui-components/container";
import RichText from "@/components/ui-components/rich-text";
import apolloClient from "@/lib/apolloclient";
import { GET_PAGE_DATA } from "@/lib/queries";

const Privacy = ({ item }: { item: { title: string; slug: string; details: JSON } | null }) => {
    console.log(item);

    return (
        <>
            <Head>
                <title>Privacy Policy - Procad Construction</title>
                <meta name="description" content="Read our Privacy Policy to understand how Procad Construction collects, uses, and protects your information." />
                <meta name="keywords" content="Privacy Policy, Data Protection, Procad Construction, Zimbabwe, Personal Information" />
                <meta name="author" content="Procad Construction" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://procad.co.zw/privacy" />
                <meta property="og:title" content="Privacy Policy | Procad Construction" />
                <meta property="og:description" content="Read our Privacy Policy to understand how Procad Construction collects, uses, and protects your information." />
                <meta property="og:image" content="/assets/logo.png" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://procad.co.zw/privacy" />
                <meta name="twitter:title" content="Privacy Policy | Procad Construction" />
                <meta name="twitter:description" content="Read our Privacy Policy to understand how Procad Construction collects, uses, and protects your information." />
                <meta name="twitter:image" content="/assets/logo.png" />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex justify-center min-h-[78vh]">
                <Container className="w-full md:w-2/3">
                    <RichText content={item?.details} />
                </Container>
            </div>
        </>
    );
};

export default Privacy;

export async function getServerSideProps() {
    try {
        const { data } = await apolloClient.query({
            query: GET_PAGE_DATA,
            variables: { slug: "privacy" },
        });

        const fetchedItem = data.pageCollection.items[0] || null;

        return {
            props: {
                item: fetchedItem,
            },
        };
    } catch (error) {
        console.error("Error fetching page data:", error);
        return {
            props: {
                item: null,
            },
        };
    }
}