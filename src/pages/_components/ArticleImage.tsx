import NextImage, { ImageProps } from 'next/image';
import React from 'react';
import styled from 'styled-components';
import {media} from "@/pages/utils/media";

interface ArticleImageProps extends ImageProps {
  src: string;
  caption?: string;
}

export default function ArticleImage({ src, caption, ...rest }: ArticleImageProps) {
  return (
    <Wrapper>
      <Shadow />
      <ImageWrapper>
        <NextImage
          src={src}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkj6+vBwAC4AFuNSmtGAAAAABJRU5ErkJggg=="
          layout="fill"
          objectFit="cover"
          {...rest}
          alt={caption || 'Article Image'}
        />
      </ImageWrapper>
      {caption && <Caption>{caption}</Caption>}
    </Wrapper>
  );
}

const Shadow = styled.div`
  display: none;
  //width: 55.6rem;
  //position: absolute;
  //aspect-ratio: 1 / 1;
  //background-color: var(--blue_1);
  //right: -9rem;
  //top: -9rem;
  //border-radius: 1.2rem;

  ${media('<=tablet')} {
    //width: 50%;
    //aspect-ratio: 1 / 1.4;
    //right: 0;
    //top: -4rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  //max-width: 55.6rem;
  border-radius: 1.2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  >img{
    position: static !important;
    height: auto !important;
    display: block;
  }
  //aspect-ratio: 1 / 1;
  //&::before {
  //  float: left;
  //  padding-top: 56.25%;
  //  content: '';
  //}
  //
  //&::after {
  //  display: block;
  //  content: '';
  //  clear: both;
  //}
  ${media('<=tablet')} {
    //width: 80%;
    //aspect-ratio: 1 / 1.15;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  //width: 100%;
  height: 40rem;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const Caption = styled.small`
  display: block;
  font-size: 1.4rem;
  text-align: center;
  margin-top: 1rem;
`;
