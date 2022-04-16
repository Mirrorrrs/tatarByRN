import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MapIcon = ({fill}) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M8.625 4.144 3.401 5.711A.563.563 0 0 0 3 6.25v14.625l5.625-2.056V4.143ZM14.25 5.982l-4.5-1.8v14.711l4.5 1.8V5.982ZM21 4l-5.625 2.056v14.675l5.224-1.567a.563.563 0 0 0 .401-.539V4Z"
            fill={fill}
        />
    </Svg>
)

export default MapIcon
