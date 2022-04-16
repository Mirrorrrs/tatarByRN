import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Point = ({fill = "#858585" }) => (
    <Svg
        width={18}
        height={21}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M14.834 14.917 9 20.751l-5.834-5.834a8.25 8.25 0 1 1 11.668 0ZM9 12.75a3.666 3.666 0 1 0 0-7.333 3.666 3.666 0 0 0 0 7.333Zm0-1.833A1.833 1.833 0 1 1 9 7.25a1.833 1.833 0 0 1 0 3.667Z"
            fill={fill}
        />
    </Svg>
)

export default Point
