import React from 'react'
import {styled} from 'styled-components'

type IconProps = React.SVGAttributes<SVGSVGElement> & {
  fill?: string
  height?: string
  width?: string
}

const ModRightChevronIcon = styled.svg`
  fill: ${props => props.fill ? props.fill : ({theme}) => theme.color.primary};
  height: ${props => props.height ? props.height : ({theme}) => theme.icons.height.sm};
  width: ${props => props.width ? props.width : ({theme}) => theme.icons.width.sm};
`;

const RightChevronIcon = ({ fill, height, width, ...props  }: IconProps) => {
  return (
    <ModRightChevronIcon
      {...props}
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 900.000000 900.000000'
      preserveAspectRatio='xMidYMid meet'
      height = {height}
      width = {width}
    >
      <title>Right Chevron Outlined Icon</title>
      <metadata>Created by Prashan Pudasaini on Thursday, January 4th, 2024 @ fullstackpro.io</metadata>
      <g transform='translate(0.000000,900.000000) scale(0.100000,-0.100000)' fill={fill} stroke='none'>
        {' '}
        <path d='M2975 7561 c-58 -26 -102 -67 -135 -125 -26 -45 -30 -61 -30 -133 0 -65 5 -92 22 -125 15 -30 433 -455 1335 -1357 722 -723 1313 -1322 1313 -1331 0 -9 -591 -608 -1314 -1331 -894 -894 -1320 -1327 -1335 -1356 -16 -33 -21 -60 -21 -125 0 -73 4 -89 30 -134 54 -96 134 -143 241 -144 130 0 21 -101 1597 1474 972 970 1443 1447 1463 1481 26 45 29 59 29 135 0 76 -3 90 -29 135 -20 34 -491 511 -1463 1481 -1204 1203 -1441 1435 -1482 1453 -63 27 -164 28 -221 2z' />{' '}
      </g>
    </ModRightChevronIcon>
  )
}

export default RightChevronIcon

