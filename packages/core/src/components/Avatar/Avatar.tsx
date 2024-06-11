import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModAvatarProps extends React.HTMLAttributes<HTMLImageElement> {
    brightness?: 'light' | 'normal' | 'dark'
    height?: 'sm' | 'md' | 'lg'
    width?: 'sm' | 'md' | 'lg'
}

const forwardProps = (prop: string) =>
    !['brightness', 'height', 'width'].includes(prop)

const ModAvatar = styled.img.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModAvatarProps>`
    height: ${props =>
        props.height === 'sm'
            ? props.theme.avatar.height.sm
            : props.height === 'md'
              ? props.theme.avatar.height.md
              : props.height === 'lg'
                ? props.theme.avatar.height.lg
                : ''};
    width: ${props =>
        props.width === 'sm'
            ? props.theme.avatar.width.sm
            : props.width === 'md'
              ? props.theme.avatar.width.md
              : props.width === 'lg'
                ? props.theme.avatar.width.lg
                : ''};
    filter: ${props =>
        props.brightness === 'light'
            ? props.theme.avatar.brightness.light
            : props.brightness === 'normal'
              ? props.theme.avatar.brightness.normal
              : props.brightness === 'dark'
                ? props.theme.avatar.brightness.dark
                : ''};
    border-radius: 100% !important;
`

const Avatar = ({ brightness, height, width, ...props }: ModAvatarProps) => {
    return (
        <ModAvatar
            {...props}
            brightness={brightness ? brightness : 'light'}
            height={height ? height : 'sm'}
            width={width ? width : 'sm'}
            data-test="avatar"
        />
    )
}

export default withLayout(Avatar)
