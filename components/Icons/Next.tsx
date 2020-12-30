import * as React from "react";
import Svg, {Path} from "react-native-svg";

export default (props) => {
  return (
    <Svg
      width={15}
      height={15}
      viewBox="0 0 25 25"
      fill="none"
      {...props}
    >
      <Path
        d="M17.175 11.5L2.169 1.19C.977.392 0 .977 0 2.492V22.51c0 1.51.977 2.096 2.169 1.302l15.006-10.314s.581-.415.581-.996c0-.583-.581-1.002-.581-1.002zM20.833 0h2.084C24.069 0 25 .1 25 1.25v22.5c0 1.15-.931 1.25-2.083 1.25h-2.084c-1.152 0-2.083-.1-2.083-1.25V1.25C18.75.1 19.681 0 20.833 0z"
        fill="#FFF"
      />
    </Svg>
  )
};

