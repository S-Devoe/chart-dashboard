"use client";

import { SvgProps } from "@/types";

function BoxIcon(props: SvgProps) {
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
        d="M16.5 9.40045L7.5 4.21045"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 16.0004V8.00039C20.9996 7.64966 20.9071 7.3052 20.7315 7.00155C20.556 6.69791 20.3037 6.44575 20 6.27039L13 2.27039C12.696 2.09485 12.3511 2.00244 12 2.00244C11.6489 2.00244 11.304 2.09485 11 2.27039L4 6.27039C3.69626 6.44575 3.44398 6.69791 3.26846 7.00155C3.09294 7.3052 3.00036 7.64966 3 8.00039V16.0004C3.00036 16.3511 3.09294 16.6956 3.26846 16.9992C3.44398 17.3029 3.69626 17.555 4 17.7304L11 21.7304C11.304 21.9059 11.6489 21.9983 12 21.9983C12.3511 21.9983 12.696 21.9059 13 21.7304L20 17.7304C20.3037 17.555 20.556 17.3029 20.7315 16.9992C20.9071 16.6956 20.9996 16.3511 21 16.0004Z"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.26953 6.96045L11.9995 12.0104L20.7295 6.96045"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22.0805V12.0005"
        stroke={props.stroke || "#004A3F"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default BoxIcon;
