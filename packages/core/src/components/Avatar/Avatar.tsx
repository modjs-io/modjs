import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface AvatarProps {
  brightness?: 'light' | 'normal' | 'dark'
  height?: 'sm' | 'md' | 'lg'
  width?: 'sm' | 'md' | 'lg'
}

const ModAvatar = styled.img<AvatarProps>`
    height: ${props => 
        props.height === 'sm' ? ({theme}) => theme.avatar.height.sm : 
        props.height === 'md' ? ({theme}) => theme.avatar.height.md : 
        props.height === 'lg' ? ({theme}) => theme.avatar.height.lg :
    ''};
    width: ${props => 
        props.width === 'sm' ? ({theme}) => theme.avatar.width.sm : 
        props.width === 'md' ? ({theme}) => theme.avatar.width.md : 
        props.width === 'lg' ? ({theme}) => theme.avatar.width.lg :
    ''};
    filter: ${props => 
        props.brightness === "light" ? ({theme}) => theme.avatar.brightness.light :
        props.brightness === "normal" ? ({theme}) => theme.avatar.brightness.normal : 
        props.brightness === "dark" ? ({theme}) => theme.avatar.brightness.dark : 
    ''};
    border-radius: 100%;
`

const Avatar = ({ brightness, height, width, ...props }: AvatarProps) => {
  return (
    <ModAvatar brightness = {brightness} height = {height} width = {width} {...props} />  
    )
}

export default withLayout(Avatar)