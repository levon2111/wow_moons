import React from 'react';
import Icon from './Icon';

type Props = {
  color: string;
};

const UpRightIcon = ({ color }: Props) => {
  return (
    <Icon>
      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.488 3.14852C13.5699 2.60235 13.1935 2.09317 12.6474 2.01125L3.74694 0.676184C3.20076 0.594257 2.69159 0.970605 2.60966 1.51678C2.52773 2.06295 2.90408 2.57213 3.45025 2.65406L11.3617 3.84078L10.175 11.7523C10.0931 12.2984 10.4694 12.8076 11.0156 12.8895C11.5618 12.9715 12.071 12.5951 12.1529 12.049L13.488 3.14852ZM1.59341 12.3044L13.0934 3.80436L11.9046 2.19601L0.404632 10.696L1.59341 12.3044Z"
          fill={color}
        />
      </svg>
    </Icon>
  );
};

export default UpRightIcon;
