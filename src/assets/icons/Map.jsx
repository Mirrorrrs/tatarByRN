import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Map = ({fill = "#858585" }) => (
    <Svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M.833 3.583 7.25.833l5.5 2.75 5.778-2.476a.459.459 0 0 1 .639.422v14.888l-6.417 2.75-5.5-2.75-5.778 2.475a.46.46 0 0 1-.639-.421V3.583ZM12.75 17.117V5.577l-.06.027-5.44-2.721v11.539l.06-.026 5.44 2.72Z"
            fill={fill}
        />
    </Svg>
)

export default Map
