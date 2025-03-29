import Button from "@/components/ui-components/button";
import { useRouter } from "next/router";
import Head from "next/head";

const Custom404: React.FC = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Page Not Found | Procad Construction</title>
                <meta name="description" content="The page you are looking for does not exist. Visit Procad Construction's homepage for more information about our services and projects." />
                <meta name="keywords" content="404, page not found, Procad Construction, error page, construction company, engineering, Zimbabwe" />
                <meta name="author" content="Procad Construction" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://procad.co.zw/404" />
                <meta property="og:title" content="404 - Page Not Found | Procad Construction" />
                <meta property="og:description" content="The page you are looking for does not exist. Visit Procad Construction's homepage for more information about our services and projects." />
                <meta property="og:image" content="/assets/logo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://procad.co.zw/404" />
                <meta name="twitter:title" content="404 - Page Not Found | Procad Construction" />
                <meta name="twitter:description" content="The page you are looking for does not exist. Visit Procad Construction's homepage for more information about our services and projects." />
                <meta name="twitter:image" content="/assets/logo.png" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center my-12">
                <img src='/assets/not_found.png' alt="Page Not Found" />
                <p className="mt-2 text-gray-600">Oops! The page you're looking for does not exist.</p>
                <Button additional="mt-4" onClick={() => router.back()}>
                    Go Back
                </Button>
            </div>
        </>
    );
};

export default Custom404;