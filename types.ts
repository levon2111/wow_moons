export type SingleNavItem = { title: string; href: string; outlined?: boolean };

export type NavItems = SingleNavItem[];

export type SingleArticle = {
  slug: string;
  content: string;
  meta: {
    title: string;
    description: string;
    date: string;
    tags: string;
    image: string;
    author: string;
    authorPosition: string;
    category: string;
  };
};

export type SingleService = {
  slug: string;
  content: string;
  meta: {
    heroTitle: string;
    heroImage: string;
    firstSubtitle: string;
    firstContentBody: string;
    firstContentImage: string;
    secondSubtitle: string;
    secondContentBody: string;
    secondContentImage: string;
  };
};

export type NonNullableChildren<T> = { [P in keyof T]: Required<NonNullable<T[P]>> };

export type NonNullableChildrenDeep<T> = {
  [P in keyof T]-?: NonNullableChildrenDeep<NonNullable<T[P]>>;
};
