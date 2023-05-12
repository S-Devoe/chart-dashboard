"use client";

import { SvgProps } from "@/types";

function HelpIcon(props: SvgProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_42_12248)">
        <path
          d="M9.99935 18.3332C14.6017 18.3332 18.3327 14.6022 18.3327 9.99984C18.3327 5.39746 14.6017 1.6665 9.99935 1.6665C5.39698 1.6665 1.66602 5.39746 1.66602 9.99984C1.66602 14.6022 5.39698 18.3332 9.99935 18.3332Z"
          stroke={props.stroke || "#004A3F" }
          stroke-width={props.strokeWidth || "2" }
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 14.1665H10.0083"
          stroke={props.stroke || "#004A3F" }
          stroke-width={props.strokeWidth || "2" }
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.57422 7.49999C7.77014 6.94304 8.15685 6.47341 8.66585 6.17426C9.17485 5.87512 9.7733 5.76577 10.3552 5.86558C10.9371 5.96539 11.4649 6.26792 11.8451 6.71959C12.2253 7.17126 12.4334 7.74292 12.4326 8.33332C12.4326 9.99999 9.93255 10.8333 9.93255 10.8333"
          stroke={props.stroke || "#004A3F" }
          stroke-width={props.strokeWidth || "2" }
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_42_12248">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default HelpIcon;
