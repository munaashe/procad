import Head from "next/head";
import Container from "@/components/ui-components/container";
import RichText from "@/components/ui-components/rich-text";
import apolloClient from "@/lib/apolloclient";
import { GET_PAGE_DATA } from "@/lib/queries";

const Terms = ({ item }: { item: { title: string; slug: string; details: JSON } | null }) => {
    return (
        <>
            <Head>
                <title>Terms and Conditions | Procad Construction</title>
                <meta name="description" content="Read the Terms and Conditions of Procad Construction to understand our policies on services, payments, warranties, and liabilities." />
                <meta name="keywords" content="Terms and Conditions, Procad Construction, Zimbabwe, Legal Terms, Service Agreement" />
                <meta name="author" content="Procad Construction" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://procad.co.zw/terms" />
                <meta property="og:title" content="Terms and Conditions - Procad Construction" />
                <meta property="og:description" content="Read the Terms and Conditions of Procad Construction to understand our policies on services, payments, warranties, and liabilities." />
                <meta property="og:image" content="/assets/logo.png" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://procad.co.zw/terms" />
                <meta name="twitter:title" content="Terms and Conditions - Procad Construction" />
                <meta name="twitter:description" content="Read the Terms and Conditions of Procad Construction to understand our policies on services, payments, warranties, and liabilities." />
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

export default Terms;

export async function getServerSideProps() {
    try {
        const { data } = await apolloClient.query({
            query: GET_PAGE_DATA,
            variables: { slug: "terms" },
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