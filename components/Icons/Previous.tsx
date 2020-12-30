import * as React from "react"
import Svg, { Path } from "react-native-svg";

export default (props) => {
  return (
    <Svg
      width={15}
      height={15}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.825 13.5l15.006 10.31c1.192.798 2.169.213 2.169-1.302V2.49c0-1.51-.977-2.096-2.169-1.303L7.825 11.502s-.581.415-.581.996c0 .583.581 1.002.581 1.002zM4.167 25H2.083C.931 25 0 24.9 0 23.75V1.25C0 .1.931 0 2.083 0h2.084C5.319 0 6.25.1 6.25 1.25v22.5c0 1.15-.931 1.25-2.083 1.25z"
        fill="#FFF"
      />
    </Svg>
  )
}


