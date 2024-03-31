import React from 'react'
import {styled} from 'styled-components'

type IconProps = React.SVGAttributes<SVGSVGElement> & {
    fill?: string
    height?: string
    width?: string
}

const ModAnimatedLoadingIcon = styled.svg`
  fill: ${props => props.fill ? props.fill : ({theme}) => theme.color.primary};
  height: ${props => props.height ? props.height : ({theme}) => theme.icons.height.sm};
  width: ${props => props.width ? props.width : ({theme}) => theme.icons.width.sm};
`;

const AnimatedLoadingIcon = ({ fill, height, width, ...props }: IconProps) => {
  return (
    <ModAnimatedLoadingIcon
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 50 50'
      preserveAspectRatio='xMidYMid'
      height = {height}
      width = {width}
    >
      <title>Animated Loading Icon</title>
      <metadata>Created by Prashan Pudasaini on Thursday, January 4th, 2024 @ fullstackpro.io</metadata>
      <circle
        cx='25'
        cy='25'
        fill={fill}
        stroke='none'
        strokeWidth='3'
        r='15'
        strokeDasharray='47.123889803846895 16.041189668484067'
      >
        <animateTransform
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='1s'
          values='0 25 25;360 25 25'
          keyTimes='0;1'
        ></animateTransform>
      </circle>
    </ModAnimatedLoadingIcon>
  )
}

export default AnimatedLoadingIcon