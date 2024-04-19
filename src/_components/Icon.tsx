import React, { HTMLProps, Ref } from 'react';
import styled from 'styled-components';

export type IconProps = HTMLProps<HTMLButtonElement> & { _ref?: Ref<HTMLButtonElement> };

export default function Icon({ _ref, ...rest }: any) {
  return <IconWrapper type="button" {...rest} {...(_ref && { ref: _ref })} />;
}

const IconWrapper = styled.button`
  border: none;
  background-color: transparent;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  //height: max-content;
  line-height: 0;
  >svg{
    //fill: #3d8fd1;
    width: 1.6rem;
    height: 1.6rem;
    fill: #019dfe;
    transition: fill 180ms;
  }
  &:hover{
    svg{
      fill: #03c8fe;
    }
  }
`;
