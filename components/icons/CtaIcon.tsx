"use client";

import { SvgProps } from "@/types";

function CtaIcon(props: SvgProps) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_42_12218)">
        <rect
          x="4"
          width="40"
          height="40"
          rx="20"
          fill="url(#paint0_linear_42_12218)"
          shapeRendering="crispEdges"
        />
        <path
          d="M24 16V24"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 20H28"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_42_12218"
          x="0"
          y="0"
          width="48"
          height="48"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.00300002 0 0 0 0 0.489 0 0 0 0 0.597 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_42_12218"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_42_12218"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_42_12218"
          x1="24"
          y1="40.48"
          x2="24"
          y2="0.119998"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A1CC" />
          <stop offset="1" stopColor="#0EBE81" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default CtaIcon;
