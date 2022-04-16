import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const Logo = (props) => (
    <Svg
        width={146}
        height={35}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <Path fill="url(#a)" d="M0 0h146v35H0z" />
        <Defs>
            <Pattern
                id="a"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <Use xlinkHref="#b" transform="matrix(.00402 0 0 .01675 0 -.003)" />
            </Pattern>
            <Image
                id="b"
                width={249}
                height={60}
                xlinkHref="data:image/png;base64,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"
            />
        </Defs>
    </Svg>
)

export default Logo
