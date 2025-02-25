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
    icon: {
        url: string;
    };
    image: {
        url: string;
        title: string;
    };
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