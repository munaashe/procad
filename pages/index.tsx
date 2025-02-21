import Banner from "@/components/homepage/banner";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import ProjectsComponent from "@/components/homepage/projects";
import CompanyPhilosophy from "@/components/homepage/philosophy";
import Testimonials from "@/components/homepage/testimonials";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Procad Construction</title>
        <meta name="description" content="Procad Construction is a leading construction and engineering firm in Zimbabwe, delivering innovative and sustainable building solutions." />
        <meta name="keywords" content="Procad Construction, construction company, engineering, building, Zimbabwe, infrastructure, architecture, civil engineering" />
        <meta name="author" content="Procad Construction" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://procad.co.zw" />
        <meta property="og:title" content="Procad Construction - Excellence in Building & Engineering" />
        <meta property="og:description" content="Procad Construction is a leading construction and engineering firm in Zimbabwe, delivering innovative and sustainable building solutions." />
        <meta property="og:image" content="/assets/logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://procad.co.zw" />
        <meta name="twitter:title" content="Procad Construction - Excellence in Building & Engineering" />
        <meta name="twitter:description" content="Procad Construction is a leading construction and engineering firm in Zimbabwe, delivering innovative and sustainable building solutions." />
        <meta name="twitter:image" content="/assets/logo.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head >

      <div className='min-h-[60vh]' >
        <Banner />
        <ProjectsComponent />
        <CompanyPhilosophy />
        <Testimonials />
      </div>
    </>
  );
}
