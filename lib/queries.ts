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
    }
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
    bannerItems: bannerItemCollection(limit: 4){
      items{
        title
        project{
          location
          slug
          coverImage{
            url
            title
          }
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
`;

export const GET_PROJECTS = gql`
  query GetProjectsData ($stage: String, $categoryName: String)  {
    categories: categoryCollection(limit: 10) {
      items {
        categoryName
        description
        icon {
          url
          title
        }
        image {
          url
          title
        }
      }
    },
    projects : projectCollection(
      where: { category: { categoryName: $categoryName }, stage: $stage }
    ) {
      items {
        title
        stage
        client
        slug
        coverImage {
          url
          title
        }
        category {
          categoryName
          image {
            url
          }
          icon {
            url
          }
        }
        location
      }
    }
  }
`

export const GET_PROJECT = gql`
query GetProject($slug: String!) {
  project: projectCollection(limit: 1, where: { slug: $slug }) {
    items {
      title
      location
      client
      stage
      coverImage {
        url
      }
      details {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              url
              title
              width
              height
            }
          }
        }
      }
      galleryCollection {
        items {
          url
          description
          width
          height
        }
      }
    }
  }
}
`;