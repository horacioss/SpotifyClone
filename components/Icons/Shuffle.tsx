import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default (props) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.625 11.875L17.5 13.75l-1.875 1.875M15.625 4.375L17.5 6.25l-1.875 1.875M2.5 13.75h3.328a3.125 3.125 0 002.6-1.391L10 10"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.5 6.25h3.328a3.125 3.125 0 012.6 1.391l3.144 4.718a3.126 3.126 0 002.6 1.391h2.078M16.25 6.25h-2.078a3.125 3.125 0 00-2.6 1.391l-.322.484"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
