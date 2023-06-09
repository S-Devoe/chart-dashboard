"use client";

import { SvgProps } from "@/types";

function SendIcon(props: SvgProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_42_12302)">
        <path
          d="M14.6673 1.3335L7.33398 8.66683"
          stroke={props.stroke || "#7A4605"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6673 1.3335L10.0007 14.6668L7.33398 8.66683L1.33398 6.00016L14.6673 1.3335Z"
          stroke={props.stroke || "#7A4605"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_42_12302">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SendIcon;
