import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Inventory = ({fill = "#858585" }) => (
    <Svg
        width={18}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"

    >
        <Path
            d="M4.417 8.542a4.125 4.125 0 1 1 0-8.25 4.125 4.125 0 0 1 0 8.25Zm0 9.166a4.125 4.125 0 1 1 0-8.25 4.125 4.125 0 0 1 0 8.25Zm9.166-9.166a4.124 4.124 0 1 1 0-8.25 4.124 4.124 0 0 1 0 8.25Zm0 9.166a4.125 4.125 0 1 1 0-8.25 4.125 4.125 0 0 1 0 8.25Z"
            fill={fill}
        />
    </Svg>
)

export default Inventory