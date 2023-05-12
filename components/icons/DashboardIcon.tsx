"use client";
import { SvgProps } from "@/types";
import { FC } from "react";

const DashboardIcon: FC<SvgProps> = (props) => {
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
        d="M21 14.0005H14V21.0005H21V14.0005Z"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14.0005H3V21.0005H10V14.0005Z"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 3.00049H14V10.0005H21V3.00049Z"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 3.00049H3V10.0005H10V3.00049Z"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default DashboardIcon;
