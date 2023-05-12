"use client";
import { SvgProps } from "@/types";
import { FC } from "react";

const ReportIcon: FC<SvgProps> = (props) => {
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
        d="M14 2.00049H6C5.46957 2.00049 4.96086 2.2112 4.58579 2.58627C4.21071 2.96135 4 3.47006 4 4.00049V20.0005C4 20.5309 4.21071 21.0396 4.58579 21.4147C4.96086 21.7898 5.46957 22.0005 6 22.0005H18C18.5304 22.0005 19.0391 21.7898 19.4142 21.4147C19.7893 21.0396 20 20.5309 20 20.0005V8.00049L14 2.00049Z"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 17.0005H8"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 13.0005H8"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 9.00049H9H8"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2.00049V8.00049H20"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ReportIcon;
