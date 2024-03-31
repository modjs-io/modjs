import React from 'react'
import {styled} from 'styled-components'

type IconProps = React.SVGAttributes<SVGSVGElement> & {
  fill?: string
  height?: string
  width?: string
}

const ModTypescriptIcon = styled.svg`
  fill: ${props => props.fill ? props.fill : ({theme}) => theme.color.primary};
  height: ${props => props.height ? props.height : ({theme}) => theme.icons.height.lg};
  width: ${props => props.width ? props.width : ({theme}) => theme.icons.width.lg};
`;

const TypeScriptIcon = ({ fill, height, width, ...props }: IconProps) => {
  return (
    <ModTypescriptIcon 
      {...props} 
      xmlns='http://www.w3.org/2000/svg' 
      viewBox='0 0 400 400'
      height = {height}
      width = {width}
      >
      <title>TypeScript Icon</title>
      <metadata>Created by Prashan Pudasaini on Thursday, January 7th, 2024 @ fullstackpro.io</metadata>
      <text
        x='50%'
        y='50%'
        fontSize='150'
        fill='#3178C6'
        textAnchor='middle'
        dominantBaseline='middle'
        fontFamily='Helvetica Neue'
      >
        TS
      </text>
    </ModTypescriptIcon>
  )
}

export default TypeScriptIcon
