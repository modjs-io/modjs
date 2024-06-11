import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModImageProps extends React.HTMLAttributes<HTMLImageElement> {
    notched?: boolean
    brightness?: 'light' | 'normal' | 'dark'
    height?: 'sm' | 'md' | 'lg' | 'full'
    width?: 'sm' | 'md' | 'lg' | 'full'
}
const forwardProps = (prop: string) =>
    !['notched', 'brightness', 'height', 'width'].includes(prop)

const ModImage = styled.img.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModImageProps>`
    height: ${props =>
        props.height === 'sm'
            ? props.theme.image.height.sm
            : props.height === 'md'
              ? props.theme.image.height.md
              : props.height === 'lg'
                ? props.theme.image.height.lg
                : props.height === 'full'
                  ? props.theme.image.height.full
                  : ''};
    width: ${props =>
        props.width === 'sm'
            ? props.theme.image.width.sm
            : props.width === 'md'
              ? props.theme.image.width.md
              : props.width === 'lg'
                ? props.theme.image.width.lg
                : props.width === 'full'
                  ? props.theme.image.width.full
                  : ''};
    clip-path: ${props =>
        props.notched &&
        'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)'};
    filter: ${props =>
        props.brightness === 'light'
            ? props.theme.image.brightness.light
            : props.brightness === 'normal'
              ? props.theme.image.brightness.normal
              : props.brightness === 'dark'
                ? props.theme.image.brightness.dark
                : ''};
`

const Image = ({
    notched,
    brightness,
    height,
    width,
    ...props
}: ModImageProps) => {
    return (
        <ModImage
            notched={notched === false ? false : true}
            brightness={brightness ? brightness : 'normal'}
            height={height ? height : 'lg'}
            width={width ? width : 'lg'}
            {...props}
            data-test="image"
        />
    )
}

export default withLayout(Image)
