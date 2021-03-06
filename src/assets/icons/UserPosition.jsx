import * as React from "react"
import Svg, { Path } from "react-native-svg"

const UserPosition = ({fill}) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M12 8.364A3.635 3.635 0 0 0 8.364 12 3.635 3.635 0 0 0 12 15.636 3.635 3.635 0 0 0 15.636 12 3.635 3.635 0 0 0 12 8.364Zm8.127 2.727a8.177 8.177 0 0 0-7.218-7.218V2h-1.818v1.873a8.177 8.177 0 0 0-7.218 7.218H2v1.818h1.873a8.177 8.177 0 0 0 7.218 7.218V22h1.818v-1.873a8.177 8.177 0 0 0 7.218-7.218H22v-1.818h-1.873ZM12 18.364A6.359 6.359 0 0 1 5.636 12 6.359 6.359 0 0 1 12 5.636 6.359 6.359 0 0 1 18.364 12 6.359 6.359 0 0 1 12 18.364Z"
            fill={fill}
        />
    </Svg>
)

export default UserPosition
