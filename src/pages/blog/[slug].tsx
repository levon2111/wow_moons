import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import React, {useEffect, useRef, useState} from 'react';
import {ToastContainer} from 'react-toastify';
import styled from 'styled-components';
import {useTina} from 'tinacms/dist/react';
import 'react-toastify/dist/ReactToastify.css';
import {Exact, PostQuery} from "../../../tina/__generated__/types";
import {getReadTime} from "@/utils/readTime";
import {formatDate} from "@/utils/formatDate";
import OpenGraphHead from "@/views/SingleArticlePage/OpenGraphHead";
import StructuredDataHead from "@/views/SingleArticlePage/StructuredDataHead";
import MetadataHead from "@/views/SingleArticlePage/MetadataHead";
import Header from "@/views/SingleArticlePage/Header";
import client from "../../../tina/__generated__/client";
import {getAllPosts} from "@/utils/postsFetcher";
import dynamic from "next/dynamic";
const TopMenu = dynamic(
    () => import('@/app/[lang]/includes/header'),
    { ssr: false }
)
const GetTouchSection = dynamic(
    () => import('@/app/[lang]/includes/getTouchSection'),
    { ssr: false }
)
const Footer = dynamic(
    () => import('@/app/[lang]/includes/footer'),
    { ssr: false }
)
import MDXRichText from '@/_components/MDXRichText';
import BlogGridItem from "@/_components/BlogIGridItem";
import {media} from "@/utils/media";
import AutofitGrid from "@/_components/AutofitGrid";
import Container from "@/_components/Container";

type Props = {
    variables: Exact<{ relativePath: string }>;
    query: string;
    data: PostQuery;
    posts: InferGetStaticPropsType<typeof getStaticProps>['posts'];
};
export default function SingleArticlePage(props: Props) {
    const {data} = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [readTime, setReadTime] = useState('');

    useEffect(() => {
        calculateReadTime();
        lazyLoadPrismTheme();

        function calculateReadTime() {
            const currentContent = contentRef.current;
            if (currentContent) {
                setReadTime(getReadTime(currentContent.textContent || ''));
            }
        }

        function lazyLoadPrismTheme() {
            const prismThemeLinkEl = document.querySelector('link[data-id="prism-theme"]');

            if (!prismThemeLinkEl) {
                const headEl = document.querySelector('head');
                if (headEl) {
                    const newEl = document.createElement('link');
                    newEl.setAttribute('data-id', 'prism-theme');
                    newEl.setAttribute('rel', 'stylesheet');
                    newEl.setAttribute('href', '/prism-theme.css');
                    newEl.setAttribute('media', 'print');
                    newEl.setAttribute('onload', "this.media='all'; this.onload=null;");
                    headEl.appendChild(newEl);
                }
            }
        }
    }, []);
    //
    const slug = data?.post?._sys.filename;
    const content = data?.post?.body;
    //
    if (!data) {
        return null;
    }

    const meta = {
        title: data?.post?.title,
        description: data?.post?.description,
        date: data?.post?.date,
        tags: data?.post?.tags,
        image: data?.post?.image?.replace(/\/+/, '/'),
        author: '',
    };
    const formattedDate = formatDate(new Date(data?.post?.date));
    const absoluteImageUrl = data?.post?.image?.replace(/\/+/, '/');
    return (
        <>
            <TopMenu/>
            <Head>
                <noscript>
                    <link rel="stylesheet" href="/prism-theme.css"/>
                </noscript>
            </Head>
            <OpenGraphHead slug={slug} {...meta} />
            <StructuredDataHead slug={slug} {...meta} />
            <MetadataHead {...meta} />
            <CustomContainer id="content" ref={contentRef}>
                <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    limit={1}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <Header
                    slug={slug}
                    authorPosition={data?.post?.authorPosition}
                    author={data?.post?.author}
                    title={data?.post?.title}
                    formattedDate={formattedDate}
                    imageUrl={absoluteImageUrl as string}
                    readTime={readTime}
                />
                <MdxContainer>
                    <MDXRichText content={content}/>
                </MdxContainer>
                <Title>Recent Blogposts</Title>
                <CustomAutofitGrid>
                    {props.posts.slice(0, 3).map(({meta: {title, description, image, date}, slug}) => {
                        return <BlogGridItem key={slug} img={image} date={date} title={title} description={description}
                                             link={`/blog/${slug}`}/>;
                    })}
                </CustomAutofitGrid>
            </CustomContainer>
            <GetTouchSection/>
            <Footer/>
        </>
    );
}

const Title = styled.h1`
    margin-top: 4.8rem;
    font-size: 4.8rem;
    font-weight: 600;

    ${media('<=tablet')} {
        font-weight: 700;
        font-size: 34px;
        line-height: 42px;
        margin-top: 6rem;
        margin-bottom: -1.6rem;
    }
`;
const CustomAutofitGrid = styled(AutofitGrid)`
    width: 100%;
    margin-bottom: 6rem;
    margin-top: 3.2rem;
    --autofit-grid-item-size: 40rem;

    ${media('<=tablet')} {
        --autofit-grid-item-size: 30rem;
        //margin-bottom: -14rem;
    }

    ${media('<=phone')} {
        --autofit-grid-item-size: 100%;
    }

    .article-card-wrapper {
        max-width: 100%;
    }
`;

export const getStaticProps = async ({params}: any) => {
    let data = {};
    let query = {};
    let variables = {relativePath: `${params.slug}.mdx`};
    try {
        const res = await client.queries.post(variables);
        query = res.query;
        data = res.data;
        variables = res.variables;
    } catch {
        // swallow errors related to document creation
    }

    return {
        props: {
            variables: variables,
            data: data,
            query: query,
            posts: await getAllPosts(),
        },
    };
};

export const getStaticPaths = async () => {
    const postsData = await client.queries.postConnection();

    return {
        paths: postsData?.data?.postConnection?.edges?.map((post) => ({
            params: {slug: post?.node?._sys.filename},
        })),
        fallback: false,
    };
};

const CustomContainer = styled(Container)`
    position: relative;
    //margin: 12rem auto;
    z-index: 11;
    color: #0c0f12;

    ${media('<=tablet')} {
        //margin: 7.2rem auto;
    }
`;

const MdxContainer = styled.div`
    position: relative;
    max-width: 110rem;
    margin: 8rem auto;

    ${media('<=tablet')} {
        margin: 5rem auto;
    }
`;
