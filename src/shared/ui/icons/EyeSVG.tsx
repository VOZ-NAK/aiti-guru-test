import type { FC } from 'react';

import type { IIcon } from './types';

const EyeSVG: FC<IIcon> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M2.42012 12.7132C3.54553 14.4952 6.8954 19 12.0004 19C17.1054 19 20.4553 14.4952 21.5807 12.7132C21.7169 12.4975 21.785 12.3897 21.8231 12.2234C21.8517 12.0984 21.8517 11.9014 21.8231 11.7765C21.785 11.6102 21.7169 11.5024 21.5807 11.2868C20.4553 9.50484 17.1054 5 12.0004 5C6.8954 5 3.54553 9.50484 2.42012 11.2868C2.28393 11.5024 2.21583 11.6102 2.17771 11.7765C2.14909 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42012 12.7132Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12.0004"
      cy="12.0002"
      r="3"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EyeSVG;
