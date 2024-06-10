import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '../../../../utils/src/index'

interface ModSlideshowMediaProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const ModSlideshowMedia = styled.div<ModSlideshowMediaProps>`
    text-align: center;
    margin-bottom: ${props => props.theme.spacing.dense};
`

const SlideshowMedia = ({ children, ...props }: ModSlideshowMediaProps) => {
    return (
        <ModSlideshowMedia {...props} data-test="slideshow-media">
            {children}
        </ModSlideshowMedia>
    )
}

export default withLayout(SlideshowMedia)
