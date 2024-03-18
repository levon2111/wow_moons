import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import React, {useEffect, useRef, useState} from 'react';
import {ToastContainer} from 'react-toastify';
import styled from 'styled-components';
import {useTina} from 'tinacms/dist/react';
import {CaseStudyQuery, Exact} from "../../../tina/__generated__/types";
import {getReadTime} from "@/pages/utils/readTime";
import {formatDate} from "@/pages/utils/formatDate";
import OpenGraphHead from "@/pages/views/SingleArticlePage/OpenGraphHead";
import StructuredDataHead from "@/pages/views/SingleArticlePage/StructuredDataHead";
import MetadataHead from "@/pages/views/SingleArticlePage/MetadataHead";
import Header from "@/pages/views/SingleArticlePage/Header";
import MDXRichText from '../_components/MDXRichText';
import BlogGridItem from "@/pages/_components/BlogIGridItem";
import AutofitGrid from "@/pages/_components/AutofitGrid";
import {media} from "@/pages/utils/media";
import client from "../../../tina/__generated__/client";
import {getAllCaseStudies} from "@/pages/utils/postsFetcher";
import Container from "@/pages/_components/Container";
import dynamic from "next/dynamic";
import "../../app/[lang]/global.scss";

const TopMenu = dynamic(
    () => import('@/app/[lang]/components/topMenu'),
    {ssr: false}
)
const GetTouchSection = dynamic(
    () => import('@/app/[lang]/components/getTouchSection'),
    {ssr: false}
)
const Footer = dynamic(
    () => import('@/app/[lang]/components/footer'),
    {ssr: false}
)

type Props = {
    variables: Exact<{ relativePath: string }>;
    query: string;
    data: CaseStudyQuery;
    posts: InferGetStaticPropsType<typeof getStaticProps>['posts'];
};
export default function CaseStudiesPage(props: Props) {
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
    const slug = data?.caseStudy?._sys.filename;
    const content = data?.caseStudy?.body;
    //
    if (!data) {
        return null;
    }
    const meta = {
        title: data?.caseStudy?.title,
        description: data?.caseStudy?.description,
        date: data?.caseStudy?.date,
        tags: data?.caseStudy?.tags,
        image: data?.caseStudy?.image,
        author: '',
    };
    const formattedDate = formatDate(new Date(data?.caseStudy?.date));
    const absoluteImageUrl = data?.caseStudy?.image?.replace(/\/+/, '/');
    return (
        <>
            <Head>
                <noscript>
                    <link rel="stylesheet" href="/prism-theme.css"/>
                </noscript>
            </Head>
            <TopMenu/>
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
                    authorPosition={data?.caseStudy?.authorPosition}
                    author={data?.caseStudy?.author}
                    title={data?.caseStudy?.title}
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
                                             link={`/case-study/${slug}`}/>;
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
`;
const CustomAutofitGrid = styled(AutofitGrid)`
    width: 100%;
    margin-bottom: 6rem;
    margin-top: 3.2rem;
    --autofit-grid-item-size: 40rem;

    ${media('<=tablet')} {
        --autofit-grid-item-size: 30rem;
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
        const res = await client.queries.caseStudy(variables);
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
            posts: await getAllCaseStudies(),
        },
    };
};

export const getStaticPaths = async () => {
    const caseStudiesData = await client.queries.caseStudyConnection();

    return {
        paths: caseStudiesData?.data?.caseStudyConnection?.edges?.map((caseStudy) => ({
            params: {slug: caseStudy?.node?._sys.filename},
        })),
        fallback: false,
    };
};

const CustomContainer = styled(Container)`
    position: relative;
    margin: 12rem auto;

    ${media('<=tablet')} {
        margin: 5rem auto;
    }
`;

const MdxContainer = styled.div`
    position: relative;
    max-width: 90rem;
    margin: 10rem auto;

    ${media('<=tablet')} {
        margin: 5rem auto;
    }
`;
