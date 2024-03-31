import React from 'react'
import {styled} from 'styled-components'

type IconProps = React.SVGAttributes<SVGSVGElement> & {
  fill?: string
  height?: string
  width?: string
}

const ModFlutterIcon = styled.svg`
  fill: ${props => props.fill ? props.fill : ({theme}) => theme.color.primary};
  height: ${props => props.height ? props.height : ({theme}) => theme.icons.height.lg};
  width: ${props => props.width ? props.width : ({theme}) => theme.icons.width.lg};
`;

const FlutterIcon = ({ fill, height, width, ...props }: IconProps) => {
  return (
    <ModFlutterIcon 
      {...props} 
      xmlns='http://www.w3.org/2000/svg' 
      viewBox='-15 -15 120 120'
      height = {height}
      width = {width}
      >
      <title>Flutter Icon</title>
      <metadata>Created by Prashan Pudasaini on Thursday, January 4th, 2024 @ fullstackpro.io</metadata>
      <g fill='none' fillRule='evenodd'>
        <path d='m48.75 95.97-25.91-25.74 14.32-14.57 40.39 40.31z' fill='#02539a' />
        <g fill='#45d1fd'>
          <path d='m22.52 70.25 25.68-25.68h28.87l-39.95 39.95z' fillOpacity='.85' />
          <path d='m.29 47.85 14.58 14.57 62.2-62.2h-29.02z' />
        </g>
      </g>
    </ModFlutterIcon>
  )
}

export default FlutterIcon
