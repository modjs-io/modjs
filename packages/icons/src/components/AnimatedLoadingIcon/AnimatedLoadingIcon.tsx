import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '../../../../utils/src/index'
import { IconProps } from '../../utils/IconProps'

interface AnimatedLoadingIconProps extends IconProps {
    stroke?: string
}

const ModAnimatedLoadingIcon = styled.svg<AnimatedLoadingIconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.transparent)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
    stroke: ${props =>
        props.stroke ? props.stroke : props.theme.color.primary};
`

const AnimatedLoadingIcon = ({
    fill,
    stroke,
    height,
    width,
    ...props
}: AnimatedLoadingIconProps) => {
    return (
        <ModAnimatedLoadingIcon
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            preserveAspectRatio="xMidYMid"
            height={height}
            width={width}
        >
            <circle
                cx="25"
                cy="25"
                fill={fill}
                stroke={stroke}
                strokeWidth="3"
                r="15"
                strokeDasharray="47.123889803846895 16.041189668484067"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0 25 25;360 25 25"
                    keyTimes="0;1"
                ></animateTransform>
            </circle>
        </ModAnimatedLoadingIcon>
    )
}

export default withLayout(AnimatedLoadingIcon)
