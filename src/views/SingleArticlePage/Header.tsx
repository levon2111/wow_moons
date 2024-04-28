import React from 'react';
import styled from 'styled-components';
import ShareWidget from './ShareWidget';
import {media} from "@/utils/media";
import ArticleImage from "@/_components/ArticleImage";
import Container from "@/_components/Container";
import "../../styles/global.scss";

interface HeaderProps {
    title: string;
    formattedDate: string;
    imageUrl: string;
    readTime: string;
    author: string;
    authorPosition: string;
    slug: string;
}

export default function Header({slug, authorPosition, author, title, formattedDate, imageUrl, readTime}: HeaderProps) {
    return (
        <HeaderContainer>
            <DetailsContainer>
                <div className="info">
                    <div className="times">
                        <DateTime>{formattedDate}</DateTime>
                        <ReadTime>{readTime}</ReadTime>
                    </div>
                    <Title>{title}</Title>
                    <div className="author">
                        <Author>{author}</Author>
                        <MidDot/>
                        <AuthorPosition>{authorPosition}</AuthorPosition>
                    </div>
                </div>
                <div className="share">
                    <ShareWidget title={title} slug={slug}/>
                </div>
            </DetailsContainer>
            <ArticleImage alt={title} src={imageUrl}/>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
    display: flex;
    gap: 2.2rem;
    margin-bottom: 8rem;
    //padding: 0 6rem;

    ${media('<=desktop')} {
        width: 100%;
        //flex-direction: column;
    }

    ${media('<=tablet')} {
        font-size: 3.2rem;
        line-height: 3.8rem;
        padding: 0;
        flex-direction: column-reverse;
        margin-bottom: 4rem;
    }
`;

const DateTime = styled.span`
    color: var(--gray_6);

    ${media('<=tablet')} {
        margin-right: .5rem;

        &::after {
            content: ' / ';
        }
    }
`;

const Author = styled.span`
    color: var(--blue_6);
`;

const AuthorPosition = styled.span`
    color: var(--gray_6);
`;

const ReadTime = styled.span`
    color: var(--blue_3);
`;

const Title = styled.h1`
    font-weight: 600;
    font-size: 4.8rem;
    line-height: 5.6rem;
    margin-bottom: 1.6rem;

    ${media('<=tablet')} {
        font-size: 3rem;
        line-height: 4rem;
        margin-bottom: 0;
    }
`;

const DetailsContainer = styled(Container)`
    font-size: 1.6rem;
    line-height: 1.8rem;
    //color: var(--text-lighter);
    display: flex;
    flex: 1;
    min-width: 0;
    position: relative;

    & .info > .times {
        height: max-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    flex-direction: column;
    align-content: flex-start;
    justify-content: flex-start;

    & .share {
        margin-top: 3.2rem;
        @media screen and (max-width: 768px) {
            margin-top: 1.6rem;
        }
    }

    ${media('<=tablet')} {
        padding: 0;

        & > .info {
            text-align: center;
            //line-height: 22px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 0.8rem;
        }
    }
`;

const MidDot = styled.span`
    &::before {
        display: inline-block;
        content: '-';
        margin: 0 0.6rem;
    }
`;
