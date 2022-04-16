import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Cross = ({fill}) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="m13.06 12 6.47 6.47a.75.75 0 1 1-1.06 1.06L12 13.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 0 1 1.06-1.06L12 10.94l6.47-6.47a.75.75 0 1 1 1.06 1.06L13.06 12Z"
            fill={fill}
        />
    </Svg>
)

export default Cross
