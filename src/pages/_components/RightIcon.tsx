import React from 'react';
import Icon from './Icon';

type Props = {
  color?: string;
};
const RightIcon = ({ color = '#Eff0F3' }: Props) => {
  return (
    <Icon>
      <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 9.00006L15.2929 5.70717C15.6834 5.31664 15.6834 4.68348 15.2929 4.29295L12 1.00006"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path opacity="0.4" d="M15 5.00006L1 5.00006" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </Icon>
  );
};

export default RightIcon;
