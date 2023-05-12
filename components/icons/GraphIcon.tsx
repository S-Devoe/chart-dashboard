"use client";

import { SvgProps } from "@/types";

function GraphIcon(props: SvgProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 13.3335V9.3335"
        stroke={props.stroke || "#0D027D" }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13.3332V6.6665"
        stroke={props.stroke || "#0D027D" }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13.3332V2.6665"
        stroke={props.stroke || "#0D027D" }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default GraphIcon;
