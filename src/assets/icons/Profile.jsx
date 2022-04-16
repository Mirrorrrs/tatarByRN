import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Profile = ({fill = "#858585" }) => (
    <Svg
        width={16}
        height={21}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M.667 20.167a7.333 7.333 0 0 1 14.666 0H.667ZM8 11.917a5.498 5.498 0 0 1-5.5-5.5c0-3.039 2.461-5.5 5.5-5.5s5.5 2.461 5.5 5.5-2.461 5.5-5.5 5.5Z"
            fill={fill}
        />
    </Svg>
)

export default Profile
