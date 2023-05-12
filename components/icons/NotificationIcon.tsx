"use client";

import { SvgProps } from "@/types";

function NotificationIcon(props: SvgProps) {
  return (
    <svg
      width="48"
      height="40"
      viewBox="0 0 48 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30 16C30 14.4087 29.3679 12.8826 28.2426 11.7574C27.1174 10.6321 25.5913 10 24 10C22.4087 10 20.8826 10.6321 19.7574 11.7574C18.6321 12.8826 18 14.4087 18 16C18 23 15 25 15 25H33C33 25 30 23 30 16Z"
        stroke="#004A3F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.7295 29C25.5537 29.3031 25.3014 29.5547 24.9978 29.7295C24.6941 29.9044 24.3499 29.9965 23.9995 29.9965C23.6492 29.9965 23.3049 29.9044 23.0013 29.7295C22.6977 29.5547 22.4453 29.3031 22.2695 29"
        stroke="#004A3F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="30.998"
        cy="11.0005"
        r="5"
        fill="url(#paint0_linear_42_12220)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_42_12220"
          x1="30.998"
          y1="16.1205"
          x2="30.998"
          y2="6.03049"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00C0F4" />
          <stop offset="1" stop-color="#12ECA0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default NotificationIcon;
