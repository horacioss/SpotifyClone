
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Play(props) {
  return (
    <Svg
      width={52}
      height={52}
      viewBox="0 0 52 52"
      fill="none"
      {...props}
    >
      <Path
        d="M20.93 12h-6.86A2.07 2.07 0 0012 14.07v23.86A2.07 2.07 0 0014.07 40h6.86A2.07 2.07 0 0023 37.93V14.07A2.07 2.07 0 0020.93 12zM37.93 12h-6.86A2.07 2.07 0 0029 14.07v23.86A2.07 2.07 0 0031.07 40h6.86A2.07 2.07 0 0040 37.93V14.07A2.07 2.07 0 0037.93 12z"
        fill="#FFF"
      />
      <Path
        d="M26 51c13.807 0 25-11.193 25-25S39.807 1 26 1 1 12.193 1 26s11.193 25 25 25z"
        stroke="#FFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

