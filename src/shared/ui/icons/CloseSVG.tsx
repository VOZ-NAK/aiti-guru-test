import type { FC } from 'react';

import type { IIcon } from './types';

const CloseSVG: FC<IIcon> = ({ size = 16, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 17 18"
    fill="none"
    {...props}
  >
    <path d="M1.01031 1.00002L15.0103 17" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M15 1.00002L1 17" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default CloseSVG;
