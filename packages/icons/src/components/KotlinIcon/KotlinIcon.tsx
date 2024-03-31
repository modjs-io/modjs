import React from 'react'
import {styled} from 'styled-components'

type IconProps = React.SVGAttributes<SVGSVGElement> & {
  fill?: string
  height?: string
  width?: string
}

const ModKotlinIcon = styled.svg`
  fill: ${props => props.fill ? props.fill : ({theme}) => theme.color.primary};
  height: ${props => props.height ? props.height : ({theme}) => theme.icons.height.lg};
  width: ${props => props.width ? props.width : ({theme}) => theme.icons.width.lg};
`;

const KotlinIcon = ({ fill, height, width, ...props  }: IconProps) => {
  return (
    <ModKotlinIcon 
    {...props} 
    xmlns='http://www.w3.org/2000/svg' 
    viewBox='-600 -500 3700 3700'
    height = {height}
    width = {width}
    >
      <title>Kotlin Icon</title>
      <metadata>Created by Prashan Pudasaini on Thursday, January 4th, 2024 @ fullstackpro.io</metadata>
      <radialGradient
        id='a'
        cx='2329.27'
        cy='2305.82'
        gradientTransform='matrix(1.09 0 0 -1.09 -110.8 2605.56)'
        gradientUnits='userSpaceOnUse'
        r='2638.25'
      >
        <stop offset='0' stopColor='#e44857' />
        <stop offset='.47' stopColor='#c711e1' />
        <stop offset='1' stopColor='#7f52ff' />
      </radialGradient>
      <path d='M2501.34 2500H0V0h2501.34L1224.87 1231.44z' fill='url(#a)' />
    </ModKotlinIcon>
  )
}

export default KotlinIcon
