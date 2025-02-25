import { gql } from "@apollo/client";

export const GET_PAGE_DATA = gql`
  query GetPageData($slug: String!) {
    pageCollection(where: { slug: $slug }) {
      items {
        title
        details{
          json
        }
        slug
      }
    }
  }
`;

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    testimonies:  testimoniesCollection (limit: 4) {
      items{
        name
        text
        photograph{
          url
        }
      }
    }
    memberships: membershipsCollection(limit: 1){
      items {
        title
        subtitle
        image{
          url
        }
        memberships
      }
    }
    philosophy:  companyPhilosophyCollection(limit: 1) {
      items{
        title
        subtitle
        image{
          url
          title
        }
        points
      }
    },
    categories: categoryCollection(limit: 10) {
      items {
        categoryName
        description
        icon {
          url
        }
        image {
          url
          title
        }
      }
    }
  }
`;

export const GET_ABOUT_PAGE_DATA = gql`
  query GetAboutPageData {
    management: managementCollection(limit: 10) {
      items {
        name
        headline
        bio
        linkedin
        email
        image {
          url
          title
        }
      }
    }
  }
`