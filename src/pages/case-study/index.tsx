import {InferGetStaticPropsType} from 'next';
import NextImage from 'next/image';
import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import CustomCursorContext from "@/contexts/CustomCursor/context/CustomCursorContext";
import {media} from "@/utils/media";
import {getAllCaseStudies} from "@/utils/postsFetcher";

import dynamic from "next/dynamic";
import UpRightArrowButton from "@/_components/UpRightArrowButton";
import BlogGridItem from "@/_components/BlogIGridItem";
import Button from "@/_components/Button";
import Container from "@/_components/Container";
import AutofitGrid from "@/_components/AutofitGrid";

const TopMenu = dynamic(
    () => import('@/app/[lang]/includes/header'),
    {ssr: false}
)
const GetTouchSection = dynamic(
    () => import('@/app/[lang]/includes/getTouchSection'),
    {ssr: false}
)
const Footer = dynamic(
    () => import('@/app/[lang]/includes/footer'),
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
    //display: inline-block;
    //text-decoration: none;
    //text-align: center;
    //font-family: var(--font);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.6rem;
    font-size: 2rem;
    line-height: 2.2rem;
    font-weight: 400;
    border-radius: 0.8rem;
    transition: transform 0.3s;
    backface-visibility: hidden;
    will-change: transform;
    padding: 0 1.2rem;
    text-transform: none;
    color: #ffffff;
    border: 0.1rem solid #5e5e5e;
    cursor: pointer;
    //background: var(--gray_4);
    //border: 2px solid var(--gray_4);
    //color: var(--gray_7);
    width: max-content;

    //height: 100%;
    //opacity: 1;
    //margin: 0 !important;

    &.selected {
        background: var(--gray_10);
        border-color: var(--gray_10);
        color: var(--gray_1);
    }
    @media screen and (max-width: 768px) {
        font-size: 1.6rem;
        line-height: 1.8rem;
    }
`;

const Title = styled.h1`
    //margin-top: 4.8rem;
    font-size: 4.8rem;
    line-height: 5rem;
    font-weight: 600;
    margin-bottom: 1.4rem;
`;
const SubTitle = styled.h2`
    font-size: 6rem;
    line-height: 6.2rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
`;
const Description = styled.p`
    font-size: 2.4rem;
    line-height: 2.6rem;
    font-weight: 400;
    color: #a9a8a8;
    margin-bottom: 2.2rem;
    //color: var(--gray_8);
`;

const BlogListContainer = styled.div`
    ${media('<=tablet')} {
        //padding: 0 2rem;

        & ${Title} {
            font-size: 3.4rem;
            line-height: 3.6rem;
            word-break: break-all;
            //margin: 4.8rem 0 3.2rem;
        }
    }
`;

const Badge = styled.span`
    //color: var(--orange_5);
    font-size: 1.6rem;
    line-height: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
`;

const LatestPostImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 48rem;
    overflow: hidden;
    border-radius: 1rem;
    > img {
        position: static !important;
        display: block;
        object-fit: cover;
        width: auto !important;
        height: 100% !important;
        @media screen and (max-width: 768px) {
            width: 100% !important;
            height: auto !important;
        }
    }
`;

const LatestPostContent = styled.div`
    //padding: 6rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    //gap: 1.6rem;
    //color: var(--gray_1);
`;

const BlogTitle = styled.h3``;
const BlogMoto = styled.h5``;

const BlogGridContainer = styled(Container)`
    //margin-top: 6rem;
    display: grid;
    grid-template-columns: 1fr;
    //gap: 1.6rem;
    z-index: 11;

        // & > ${Description} {
    //     max-width: 50%;
    // }

    ${media('<=tablet')} {
        //padding: 0;
        //margin-top: 0;
        & > ${SubTitle} {
            font-size: 4.8rem;
            line-height: 5.2rem;
        }
        & > ${Description} {
            font-size: 1.6rem;
            line-height: 2.4rem;
            max-width: 100%;
            margin-bottom: 1.6rem;
            //margin: 0 1.6rem 0;
        }
        & ${LatestPostImageContainer} {
            width: 100%;
            height: 28rem;
            grid-row: 1 / 2;
        }
        & ${LatestPostContent} {
            //padding: 2.4rem;
            //gap: 0.8rem;
            & ${Badge} {
                font-size: 1.4rem;
                line-height: 2rem;
            }
            & ${BlogTitle} {
                font-size: 2.8rem;
                line-height: 3.2rem;
            }
            & ${BlogMoto} {
                font-size: 2rem;
                line-height: 2.4rem;
                font-weight: 600;
            }
            & ${Description} {
                font-size: 1.6rem;
                line-height: 2rem;
                font-weight: 400;
            }
        }
    }
`;

const LatestPostContainer = styled.div`
    //border-radius: 1.2rem;
    //overflow: hidden;
    //background-color: var(--gray_10);
    //height: 50rem;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.8rem;
    //margin-top: 1.6rem;
    
    & ${BlogTitle} {
        font-size: 4.8rem;
        line-height: 5rem;
        font-weight: 700;
        margin-bottom: 1.2rem;
        //margin: 0;
    }
    & ${BlogMoto} {
        font-size: 3rem;
        line-height: 3.2rem;
        font-weight: 600;
        margin-bottom: 0.6rem;
        //margin: 0;
    }
    & ${Description} {
        font-size: 2.4rem;
        font-weight: 400;
        margin: 0;
    }
    & a {
        margin-top: 0.8rem;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.2rem;
    }
    ${media('<=tablet')} {
        //grid-template-columns: 1fr;
        //grid-template-rows: repeat(2, 31rem);
        //height: auto;
        //border-radius: 0;
        //margin-top: .4rem;
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
        gap: 3rem;
        //margin-bottom: -8rem;
    }
`;

export async function getStaticProps() {
    return {
        props: {
            posts: await getAllCaseStudies(),
        },
    };
}
