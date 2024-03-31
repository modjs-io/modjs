import React from 'react'
import {styled} from 'styled-components'

type IconProps = React.SVGAttributes<SVGSVGElement> & {
  fill?: string
  height?: string
  width?: string
}

const ModRightArrowIcon = styled.svg`
  fill: ${props => props.fill ? props.fill : ({theme}) => theme.color.primary};
  height: ${props => props.height ? props.height : ({theme}) => theme.icons.height.sm};
  width: ${props => props.width ? props.width : ({theme}) => theme.icons.width.sm};
`;

const RightArrowIcon = ({ fill, height, width, ...props }: IconProps) => {
  return (
    <ModRightArrowIcon
      {...props}
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 900.000000 900.000000'
      preserveAspectRatio='xMidYMid meet'
      height = {height}
      width = {width}
    >
      <title>Right Arrow Outlined Icon</title>
      <metadata>Created by Prashan Pudasaini on Thursday, January 4th, 2024 @ fullstackpro.io</metadata>
      <g transform='translate(0.000000,900.000000) scale(0.100000,-0.100000)' fill={fill} stroke='none'>
        {' '}
        <path d='M6614 6691 c-53 -24 -110 -83 -118 -123 -10 -52 -7 -107 9 -146 11 -26 265 -286 852 -873 494 -495 833 -841 829 -848 -5 -8 -1072 -11 -3974 -12 -3021 0 -3975 -3 -4000 -12 -17 -7 -46 -25 -62 -41 -114 -107 -83 -270 63 -334 22 -9 901 -12 3990 -12 2513 0 3967 -4 3977 -10 12 -8 -158 -183 -822 -847 -587 -588 -842 -849 -853 -875 -30 -74 -15 -165 37 -221 31 -33 103 -67 143 -67 79 0 82 3 1138 1058 683 682 1028 1033 1048 1067 20 35 29 63 29 95 0 32 -9 60 -29 95 -20 34 -365 385 -1048 1067 -1056 1055 -1059 1058 -1138 1058 -16 0 -48 -9 -71 -19z' />{' '}
      </g>
    </ModRightArrowIcon>
  )
}

export default RightArrowIcon
