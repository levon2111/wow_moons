import {defineConfig} from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "master";

export default defineConfig({
    branch,

    // Get this from tina.io
    clientId: "d1d85810-24ce-4bdb-8ae0-4810649c5ee1",
    // Get this from tina.io
    token: "43707fa9e8f1ff3ce35d8bdf9451a3bee56b5511",

    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "public",
        },
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
    schema: {
        collections: [
            {
                label: 'Blog Posts',
                name: 'post',
                path: 'content/posts',
                format: 'mdx',
                fields: [
                    {
                        type: 'string',
                        label: 'Title',
                        name: 'title',
                        required: true,
                    },
                    {
                        type: 'string',
                        label: 'Author',
                        name: 'author',
                        required: true,
                    },
                    {
                        type: 'string',
                        label: 'Author position',
                        name: 'authorPosition',
                        required: true,
                    },
                    {
                        type: 'string',
                        label: 'Description',
                        name: 'description',
                        required: true,
                    },

                    {
                        type: 'string',
                        label: 'Date',
                        name: 'date',
                        required: true,
                    },
                    {
                        type: 'string',
                        label: 'Tags',
                        name: 'tags',
                        required: true,
                    },
                    {
                        type: 'image',
                        label: 'Image',
                        name: 'image',
                    },
                    {
                        label: 'Category',
                        name: 'category',
                        type: 'string',
                        required: true,
                        options: [
                            {
                                value: 'Big Data',
                                label: 'Big Data',
                            },
                            {
                                value: 'Finance',
                                label: 'Finance',
                            },
                            {
                                value: 'Analytics',
                                label: 'Analytics',
                            },
                            {
                                value: 'Recruitment',
                                label: 'Recruitment',
                            },
                            {
                                value: 'Real Estate',
                                label: 'Real Estate',
                            }
                        ],
                    },
                    {
                        type: 'rich-text',
                        label: 'Blog Post Body',
                        name: 'body',
                        isBody: true,
                        templates: [
                            {
                                name: 'Quote',
                                label: 'Quote',
                                fields: [
                                    {
                                        type: 'string',
                                        name: 'content',
                                        label: 'Content',
                                    },
                                    {
                                        type: 'string',
                                        name: 'author',
                                        label: 'Author',
                                    },
                                    {
                                        type: 'string',
                                        name: 'cite',
                                        label: 'Cite',
                                    },
                                ],
                            },
                            {
                                name: 'ArticleImage',
                                label: 'ArticleImage',
                                fields: [
                                    {
                                        type: 'string',
                                        name: 'src',
                                        label: 'Src',
                                    },
                                    {
                                        type: 'string',
                                        name: 'caption',
                                        label: 'Caption',
                                    },
                                ],
                            },
                            {
                                name: 'Code',
                                label: 'Code',
                                fields: [
                                    {
                                        type: 'string',
                                        name: 'code',
                                        label: 'Code',
                                    },
                                    {
                                        type: 'string',
                                        name: 'language',
                                        label: 'Language',
                                    },
                                    {
                                        type: 'string',
                                        name: 'selectedLines',
                                        label: 'Selected Lines',
                                    },
                                    {
                                        type: 'boolean',
                                        name: 'withCopyButton',
                                        label: 'With Copy Button',
                                    },
                                    {
                                        type: 'boolean',
                                        name: 'withLineNumbers',
                                        label: 'With Line Numbers',
                                    },
                                    {
                                        type: 'string',
                                        name: 'caption',
                                        label: 'Caption',
                                    },
                                ],
                            },
                        ],
                    },
                ],
                ui: {
                    router: ({document}) => `/blog/${document._sys.filename}`,
                },
            },
            {
                label: 'Case Studies',
                name: 'caseStudy',
                path: 'content/caseStudies',
                format: 'mdx',
                fields: [
                    {
                        type: 'string',
                        label: 'Title',
                        name: 'title',
                        required: true,
                    },
                    {
                        type: 'string',
                        label: 'Author',
                        name: 'author',
                        required: true,
                    },
                    {
                        type: 'string',
                        label: 'Author position',
                        name: 'authorPosition',
                        required: true,
                    },
                    {
                        type: 'string',
                        label: 'Description',
                        name: 'description',
                        required: true,
                    },
                    {
                        type: 'string',
                        label: 'Date',
                        name: 'date',
                        required: true,
                    },
                    {
                        type: 'string',
                        label: 'Tags',
                        name: 'tags',
                        required: true,
                    },
                    {
                        type: 'image',
                        label: 'Image',
                        name: 'image',
                    },
                    {
                        label: 'Category',
                        name: 'category',
                        type: 'string',
                        required: true,
                        options: [
                            {
                                value: 'firstCategory',
                                label: 'First Category',
                            },
                            {
                                value: 'secondCategory',
                                label: 'Second Category',
                            },
                        ],
                    },
                    {
                        type: 'rich-text',
                        label: 'Blog Post Body',
                        name: 'body',
                        isBody: true,
                        templates: [
                            {
                                name: 'Quote',
                                label: 'Quote',
                                fields: [
                                    {
                                        type: 'string',
                                        name: 'content',
                                        label: 'Content',
                                    },
                                    {
                                        type: 'string',
                                        name: 'author',
                                        label: 'Author',
                                    },
                                    {
                                        type: 'string',
                                        name: 'cite',
                                        label: 'Cite',
                                    },
                                ],
                            },
                            {
                                name: 'ArticleImage',
                                label: 'ArticleImage',
                                fields: [
                                    {
                                        type: 'string',
                                        name: 'src',
                                        label: 'Src',
                                    },
                                    {
                                        type: 'string',
                                        name: 'caption',
                                        label: 'Caption',
                                    },
                                ],
                            },
                            {
                                name: 'Code',
                                label: 'Code',
                                fields: [
                                    {
                                        type: 'string',
                                        name: 'code',
                                        label: 'Code',
                                    },
                                    {
                                        type: 'string',
                                        name: 'language',
                                        label: 'Language',
                                    },
                                    {
                                        type: 'string',
                                        name: 'selectedLines',
                                        label: 'Selected Lines',
                                    },
                                    {
                                        type: 'boolean',
                                        name: 'withCopyButton',
                                        label: 'With Copy Button',
                                    },
                                    {
                                        type: 'boolean',
                                        name: 'withLineNumbers',
                                        label: 'With Line Numbers',
                                    },
                                    {
                                        type: 'string',
                                        name: 'caption',
                                        label: 'Caption',
                                    },
                                ],
                            },
                        ],
                    },
                ],
                ui: {
                    router: ({document}) => {
                        return `/caseStudies/${document._sys.filename}`;
                    },
                },
            },
            {
                label: 'Our Services',
                name: 'service',
                path: 'content/services',
                format: 'mdx',
                fields: [
                    {
                        type: 'string',
                        label: 'Hero Title',
                        name: 'heroTitle',
                        required: true,
                    },
                    {
                        type: 'image',
                        label: 'Hero Image',
                        name: 'heroImage',
                    },
                    {
                        type: 'string',
                        label: 'First Subtitle',
                        name: 'firstSubtitle',
                        required: true,
                    },
                    {
                        type: 'rich-text',
                        label: 'First Content Body',
                        name: 'firstContentBody',
                        isBody: true,
                        required: true,
                    },
                    {
                        type: 'image',
                        label: 'First Content Image',
                        name: 'firstContentImage',
                    },
                    {
                        type: 'string',
                        label: 'Second Subtitle',
                        name: 'secondSubtitle',
                        required: true,
                    },
                    {
                        type: 'rich-text',
                        label: 'Second Content Body',
                        name: 'secondContentBody',
                        isBody: true,
                        required: true,
                    },
                    {
                        type: 'image',
                        label: 'Second Content Image',
                        name: 'secondContentImage',
                    },
                ],
                ui: {
                    router: ({document}) => {
                        return `/services/${document._sys.filename}`;
                    },
                },
            },
        ],
    },
});
