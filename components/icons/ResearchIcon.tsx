"use client";
import { SvgProps } from "@/types";
import { FC } from "react";

const ResearchIcon: FC<SvgProps> = (props) => {
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
        d="M21.2104 15.8906C20.5742 17.395 19.5792 18.7208 18.3123 19.7519C17.0454 20.783 15.5452 21.488 13.9428 21.8053C12.3405 22.1227 10.6848 22.0427 9.12055 21.5724C7.55627 21.102 6.13103 20.2556 4.96942 19.1072C3.80782 17.9588 2.94522 16.5433 2.45704 14.9845C1.96886 13.4257 1.86996 11.7711 2.169 10.1652C2.46804 8.55935 3.1559 7.05119 4.17245 5.7726C5.189 4.494 6.50329 3.48388 8.0004 2.83057"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 12.0005C22 10.6873 21.7413 9.38691 21.2388 8.17365C20.7362 6.9604 19.9997 5.85801 19.0711 4.92942C18.1425 4.00083 17.0401 3.26424 15.8268 2.76169C14.6136 2.25915 13.3132 2.00049 12 2.00049V12.0005H22Z"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ResearchIcon;
