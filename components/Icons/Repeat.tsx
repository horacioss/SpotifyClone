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
        d="M12.5 4.688l1.875 1.875L12.5 8.438"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.75 6.563H5.625A3.134 3.134 0 002.5 9.688v.624M7.5 15.313l-1.875-1.876L7.5 11.563"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.25 13.438h8.125a3.135 3.135 0 003.125-3.126v-.624"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

