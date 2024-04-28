import NextImage from 'next/image';
import NextLink from 'next/link';
import React, { useContext } from 'react';
import styled from 'styled-components';
import CustomCursorContext from "@/contexts/CustomCursor/context/CustomCursorContext";
import {formatDate} from "@/utils/formatDate";
import {media} from "@/utils/media";
import RightIcon from "@/_components/RightIcon";

type Props = {
  img: string;
  date: string;
  title: string;
  description: string;
  link: string;
};
const BlogGridItem = ({ img, link, date, description, title }: Props) => {
  const { setType } = useContext(CustomCursorContext);

  return (
    <GridItem>
      <ImageContainer>
        <NextImage src={img} alt={title} fill />
      </ImageContainer>
      <Content>
        <Info>
          <DateTime>{formatDate(new Date(date))}</DateTime>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>
        <NextLink
          href={`${link}`}
          onMouseEnter={() => {
            setType('link');
          }}
          onMouseLeave={() => {
            setType('default');
          }}
        >
          Read More <RightIcon color={'var(--blue_6)'} />
        </NextLink>
      </Content>
    </GridItem>
  );
};

const Title = styled.h3`
  font-size: 3rem;
  line-height: 3.4rem;
  font-weight: 600;
  color: var(--gray_8);
`;

const Description = styled.p`
  font-size: 2.2rem;
  line-height: 2.6rem;
  font-weight: 400;
  color: #a9a8a8;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const DateTime = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--gray_6);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.8rem;

  ${media('<=tablet')} {
    gap: 0.4rem;

    & ${DateTime} {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    & ${Title} {
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 2.8rem;
    }

    & ${Description} {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2rem;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;

  & a {
    display: flex;
    align-items: center;
    font-size: 2rem;
    line-height: 2.2rem;
    color: #019dfe;
    font-weight: 400;
    margin-top: 1.2rem;
    transition: color 180ms;
    svg{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &:hover{
      color: #03c8fe;
      svg{
        fill: #03c8fe;
      }
    }
  }
`;

const ImageContainer = styled.div`
  transition: transform 200ms;
  width: 100%;
  height: 40rem;
  border-radius: 1.2rem;
  overflow: hidden;
  will-change: transform;
  z-index: 2;

  & img {
    display: block;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  }

  ${media('<=tablet')} {
    height: 23rem;
  }
`;

const GridItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  gap: 3.2rem;

  ${media('<=tablet')} {
    gap: 1.6rem;
  }
`;

export default BlogGridItem;
