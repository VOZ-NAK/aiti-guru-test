import type { FC } from 'react';

import type { IIcon } from './types';

const UserSVG: FC<IIcon> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx="12" cy="7.25" r="4" stroke={color} strokeWidth="2" />
    <path
      d="M9 13.75H15C16.6569 13.75 18 15.0931 18 16.75V20.75H6V16.75C6 15.0931 7.34315 13.75 9 13.75Z"
      stroke={color}
      strokeWidth="2"
    />
  </svg>
);

export default UserSVG;
