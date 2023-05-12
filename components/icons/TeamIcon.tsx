"use client";

import { SvgProps } from "@/types";
import { FC } from "react";

const TeamIcon: FC<SvgProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23 21.0004V19.0004C22.9993 18.1141 22.7044 17.2531 22.1614 16.5527C21.6184 15.8522 20.8581 15.3519 20 15.1304"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 21.0005V19.0005C17 17.9396 16.5786 16.9222 15.8284 16.1721C15.0783 15.4219 14.0609 15.0005 13 15.0005H5C3.93913 15.0005 2.92172 15.4219 2.17157 16.1721C1.42143 16.9222 1 17.9396 1 19.0005V21.0005"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3.13037C16.8604 3.35067 17.623 3.85107 18.1676 4.55268C18.7122 5.25429 19.0078 6.1172 19.0078 7.00537C19.0078 7.89354 18.7122 8.75645 18.1676 9.45806C17.623 10.1597 16.8604 10.6601 16 10.8804"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11.0005C11.2091 11.0005 13 9.20963 13 7.00049C13 4.79135 11.2091 3.00049 9 3.00049C6.79086 3.00049 5 4.79135 5 7.00049C5 9.20963 6.79086 11.0005 9 11.0005Z"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default TeamIcon;
