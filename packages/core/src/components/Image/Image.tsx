import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface ImageProps {
  notched?: 'true' | 'false'
  brightness?: 'light' | 'normal' | 'dark'
  height?: 'sm' | 'md' | 'lg' | 'full'
  width?: 'sm' | 'md' | 'lg' | 'full'
}

const ModImage = styled.img<ImageProps>`
    height: ${props => 
        props.height === 'sm' ? ({theme}) => theme.image.height.sm : 
        props.height === 'md' ? ({theme}) => theme.image.height.md : 
        props.height === 'lg' ? ({theme}) => theme.image.height.lg :
        props.height === 'full' ? ({theme}) => theme.image.height.full :
    ''};
    width: ${props => 
        props.width === 'sm' ? ({theme}) => theme.image.width.sm : 
        props.width === 'md' ? ({theme}) => theme.image.width.md : 
        props.width === 'lg' ? ({theme}) => theme.image.width.lg :
        props.width === 'full' ? ({theme}) => theme.image.width.full :
    ''};
    clip-path: ${props => 
        props.notched === "true" ? ({theme}) => theme.notched.secondary : 
    ''};
    filter: ${props => 
        props.brightness === "light" ? ({theme}) => theme.image.brightness.light :
        props.brightness === "normal" ? ({theme}) => theme.image.brightness.normal : 
        props.brightness === "dark" ? ({theme}) => theme.image.brightness.dark : 
    ''};
`

const Image = ({ brightness, height, width, ...props }: ImageProps) => {
  return (
    <ModImage brightness = {brightness} height = {height} width = {width} {...props} />  
    )
}

export default withLayout(Image)