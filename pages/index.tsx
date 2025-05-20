import Banner from "@/components/homepage/banner";
import Head from "next/head";
import ProjectsComponent from "@/components/homepage/projects";
import CompanyPhilosophy from "@/components/homepage/philosophy";
import Testimonials from "@/components/homepage/testimonials";
import Container from "@/components/ui-components/container";
import apolloClient from "@/lib/apolloclient";
import { GET_HOMEPAGE_DATA } from "@/lib/queries";
import {
  CardDetails,
  Membership as MembershipsProp,
  Philosophy as PhilosophyProp,
  Category as CategoryProp,
  BannerItem,
} from "@/utils/types";

interface Props {
  testimonies: CardDetails[];
  memberships: MembershipsProp;
  philosophy: PhilosophyProp;
  categories: CategoryProp[];
  bannerItems: BannerItem[];
}


export default function Home({
  testimonies,
  memberships,
  philosophy,
  categories,
  bannerItems,
}: Props) {
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
        <Banner bannerItems={bannerItems} />
        <Container>
          <ProjectsComponent categories={categories} />
          <CompanyPhilosophy philosophy={philosophy} />
          <CompanyPhilosophy imageFirst={false} membership={memberships} />
          <Testimonials testimonies={testimonies} />
        </Container>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { data } = await apolloClient.query({
      query: GET_HOMEPAGE_DATA
    });

    return {
      props: {
        testimonies: data?.testimonies?.items,
        memberships: data?.memberships?.items[0],
        philosophy: data?.philosophy?.items[0],
        categories: data?.categories?.items,
        bannerItems: data?. bannerItems?.items,
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