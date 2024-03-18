import React, { useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import CustomCursorContext from "@/pages/contexts/CustomCursor/context/CustomCursorContext";
import UpRightIcon from "@/pages/_components/UpRightIcon";

type Props = {
  href: string;
  color?: string;
};
const UpRightArrowButton = ({ href, color = 'var(--blue_6)' }: Props) => {
  const { setType } = useContext(CustomCursorContext);
  return (
    <ButtonLink
      href={href}
      color={color}
      onMouseEnter={() => {
        setType('link');
      }}
      onMouseLeave={() => {
        setType('default');
      }}
    >
      <UpRightIcon color={color} />
    </ButtonLink>
  );
};

const ButtonLink = styled(Link)<{ color: string }>`
  color: ${(props) => props.color || 'rgba(var(--gray_10))'};
  border: 2px solid ${(props) => props.color || 'rgba(var(--gray_10))'};
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export default UpRightArrowButton;
