export interface CardDetails {
    photograph: {
        url: string;
        title: string;
    };
    name: string;
    text: string;
    type: string;
    x?: number;
    y?: number;
};

export interface Membership {
    title: string;
    subtitle: string;
    image: {
        url: string;
        title: string;
    }
    memberships: string[];
};

export interface Philosophy extends Membership {
    points: string[];
};

export interface Category {
    categoryName: string;
    description: string;
    icon: Image;
    image: Image;
};

interface Image {
    url: string;
    title: string;
};

export interface Management {
    name: string;
    headline: string;
    bio: string;
    linkedin: string;
    email: string;
    image: Image;
};

export interface BannerItem {
    title: string;
    project: {
        location: string;
        slug: string;
        coverImage: Image;
    };
};
export interface Asset {
    __typename: string;
    url: string;
    description: string;
    width: number;
    height: number;
}

export interface Project {
    title: string;
    stage: string;
    client: string;
    slug: string;
    coverImage: Image;
    category: Category;
    location: string;
    details: JSON;
    galleryCollection: {
        items: Asset[];
    };
}
