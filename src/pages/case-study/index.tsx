import {InferGetStaticPropsType} from 'next';
import NextImage from 'next/image';
import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import CustomCursorContext from "@/pages/contexts/CustomCursor/context/CustomCursorContext";
import UpRightArrowButton from "@/pages/_components/UpRightArrowButton";
import BlogGridItem from "@/pages/_components/BlogIGridItem";
import Button from "@/pages/_components/Button";
import {media} from "@/pages/utils/media";
import Container from "@/pages/_components/Container";
import AutofitGrid from "@/pages/_components/AutofitGrid";
import {getAllCaseStudies} from "@/pages/utils/postsFetcher";

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

export default function CaseStudyIndexPage({posts}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [selected, setSelected] = useState<string | null>(null);
    const restPosts = posts.slice(1);
    const {setType} = useContext(CustomCursorContext);

    const [filteredPosts, setFilteredPosts] = useState(restPosts);

    const {
        meta: {title, description, image, category},
        slug,
    } = posts[0];

    useEffect(() => {
        if (selected) {
            setFilteredPosts(restPosts.filter((post) => post.meta.category === selected));
        } else {
            setFilteredPosts(restPosts);
        }
    }, [selected]);

    const categories = [
        {label: 'All', value: null},
        ...Array.from(new Set(restPosts.map((post) => post.meta.category))).map((c) => ({
            label: c,
            value: c,
        })),
    ];

    return (
        <>
            <TopMenu/>
            <BlogGridContainer>
                <SubTitle>Featured Case Study</SubTitle>
                <Description>Experience the results of our work for leading organizations in diverse
                    industries.</Description>
                <LatestPostContainer>
                    <LatestPostContent>
                        <Badge>NEW</Badge>
                        <BlogTitle>{category}</BlogTitle>
                        <BlogMoto>{title}</BlogMoto>
                        <Description>{description}</Description>
                        <UpRightArrowButton href={`/case-study/${slug}`} color={'var(--gray_1)'}/>
                    </LatestPostContent>
                    <LatestPostImageContainer>
                        <NextImage src={image} alt={title} fill/>
                    </LatestPostImageContainer>
                </LatestPostContainer>
                <BlogListContainer>
                    <Title>All Case Studies</Title>
                    <SegmentButtonGroup>
                        {categories.map(({label, value}) => (
                            <SegmentItem
                                key={label}
                                onClick={() => setSelected(value)}
                                className={`${selected === value ? 'selected' : ''}`}
                                onMouseEnter={() => {
                                    setType('link');
                                }}
                                onMouseLeave={() => {
                                    setType('default');
                                }}
                            >
                                {label}
                            </SegmentItem>
                        ))}
                    </SegmentButtonGroup>
                    <CustomAutofitGrid>
                        {filteredPosts.map(({meta: {title, description, image, date}, slug}) => {
                            return <BlogGridItem key={slug} img={image} date={date} title={title}
                                                 description={description}
                                                 link={`/case-study/${slug}`}/>;
                        })}
                    </CustomAutofitGrid>
                </BlogListContainer>
            </BlogGridContainer>
            <GetTouchSection/>
            <Footer/>
        </>

    );
}

const SegmentButtonGroup = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 2.4rem;
`;

const SegmentItem = styled(Button)`
    background: none;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    font-family: var(--font);
    font-weight: bold;
    border-radius: 0.8rem;
    transition: transform 0.3s;
    backface-visibility: hidden;
    will-change: transform;
    padding: 0.4rem 1.2rem;
    font-size: 16px;
    text-transform: none;
    background: var(--gray_4);
    border: 2px solid var(--gray_4);
    color: var(--gray_7);
    width: max-content;
    cursor: none;

    height: 100%;
    opacity: 1;
    margin: 0 !important;

    &.selected {
        background: var(--gray_10);
        border-color: var(--gray_10);
        color: var(--gray_1);
    }
`;

const Title = styled.h1`
    margin-top: 4.8rem;
    font-size: 4.8rem;
    font-weight: 600;
`;
const SubTitle = styled.h2`
    font-size: 7.2rem;
    font-weight: 700;
    line-height: 80px;
`;
const Description = styled.p`
    font-size: 2.4rem;
    font-weight: 400;
    color: var(--gray_8);
`;

const BlogListContainer = styled.div`
    ${media('<=tablet')} {
        padding: 0 2rem;

        & ${Title} {
            font-size: 34px;
            line-height: 42px;
            letter-spacing: 0.0025em;
            word-break: break-all;
            margin: 4.8rem 0 3.2rem;
        }
    }
`;

const Badge = styled.span`
    color: var(--orange_5);
    font-size: 1.6rem;
    font-weight: 600;
`;

const LatestPostImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

const LatestPostContent = styled.div`
    padding: 6rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.6rem;
    color: var(--gray_1);
`;

const BlogTitle = styled.h3``;
const BlogMoto = styled.h5``;

const BlogGridContainer = styled(Container)`
    margin-top: 6rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.6rem;
    z-index: 11;

    & > ${Description} {
        max-width: 50%;
    }

    ${media('<=tablet')} {
        padding: 0;
        margin-top: 0;

        & > ${SubTitle} {
            font-size: 48px;
            line-height: 55px;
            margin: 4rem 1.6rem 0.8rem;
        }

        & > ${Description} {
            font-size: 16px;
            line-height: 24px;
            max-width: 100%;
            margin: 0 1.6rem 0;
        }

        & ${LatestPostImageContainer} {
            grid-row: 1 / 2;
        }

        & ${LatestPostContent} {
            padding: 2.4rem;
            gap: 0.8rem;

            & ${Badge} {
                font-size: 14px;
                line-height: 22px;
            }

            & ${BlogTitle} {
                font-size: 34px;
                line-height: 42px;
            }

            & ${BlogMoto} {
                font-weight: 600;
                font-size: 20px;
                line-height: 28px;
            }

            & ${Description} {
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
            }
        }
    }
`;

const LatestPostContainer = styled.div`
    border-radius: 1.2rem;
    overflow: hidden;
    background-color: var(--gray_10);
    height: 50rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    margin-top: 1.6rem;

    & ${BlogTitle} {
        font-weight: 700;
        font-size: 4.8rem;
        margin: 0;
    }

    & ${BlogMoto} {
        font-weight: 600;
        font-size: 3rem;
        margin: 0;
    }

    & ${Description} {
        font-weight: 400;
        font-size: 2.4rem;
        margin: 0;
    }

    & a {
        margin-top: 1.6rem;
    }

    ${media('<=tablet')} {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 31rem);
        height: auto;
        border-radius: 0;
        margin-top: 0.4rem;
    }
`;
const CustomAutofitGrid = styled(AutofitGrid)`
    width: 100%;
    margin-bottom: 6rem;
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

    ${media('<=tablet')} {
        gap: 4rem;
        margin-bottom: -8rem;
    }
`;

export async function getStaticProps() {
    return {
        props: {
            posts: await getAllCaseStudies(),
        },
    };
}
