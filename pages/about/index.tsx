import React from "react";
import Head from "next/head";
import CompanyVision from "./company-vision";
import CoreValues from "./core-values";
import Divisions from "./divisions";
import Management from "./management";

const AboutUs = () => {
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
                <Management />
            </div>
        </>
    );
};

export default AboutUs;