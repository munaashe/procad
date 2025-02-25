import React from "react";
import Head from "next/head";
import CompanyVision from "./company-vision";
import CoreValues from "./core-values";
import Divisions from "./divisions";
import Management from "./management";
import apolloClient from "@/lib/apolloclient";
import { GET_ABOUT_PAGE_DATA } from "@/lib/queries";
import { Management as ManagementProp } from "@/utils/types";

type Props = {
    management: ManagementProp[];
}

const AboutUs = ({
    management
}: Props) => {
    return (
        <>
            <Head>
                <title>About Us | Procad Construction</title>
                <meta name="description" content="Learn more about Procad Construction, a leading construction and engineering firm in Zimbabwe, delivering innovative and sustainable building solutions." />
                <meta name="keywords" content="Procad Construction, about us, construction company, engineering, building, Zimbabwe, infrastructure, architecture" />
                <meta name="author" content="Procad Construction" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://procad.co.zw/about" />
                <meta property="og:title" content="About Us - Procad Construction" />
                <meta property="og:description" content="Learn more about Procad Construction, a leading construction and engineering firm in Zimbabwe, delivering innovative and sustainable building solutions." />
                <meta property="og:image" content="/assets/logo.png" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://procad.co.zw/about" />
                <meta name="twitter:title" content="About Us - Procad Construction" />
                <meta name="twitter:description" content="Learn more about Procad Construction, a leading construction and engineering firm in Zimbabwe, delivering innovative and sustainable building solutions." />
                <meta name="twitter:image" content="/assets/logo.png" />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen">
                <CompanyVision />
                <CoreValues />
                <Divisions />
                <Management management={management} />
            </div>
        </>
    );
};


export async function getServerSideProps() {
    try {
        const { data } = await apolloClient.query({
            query: GET_ABOUT_PAGE_DATA
        });

        return {
            props: {
                management: data?.management?.items,
            },
        };
    } catch (error) {
        console.error('Error fetching page data:', error);
        return {
            props: {
                item: null,
            },
        };
    }
}

export default AboutUs;