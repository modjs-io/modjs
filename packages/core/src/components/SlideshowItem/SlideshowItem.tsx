import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModSlideshowItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const ModSlideshowItem = styled.div<ModSlideshowItemProps>`
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
`

const SlideshowItem = ({ children, ...props }: ModSlideshowItemProps) => {
    return (
        <ModSlideshowItem {...props} data-test="slideshow-item">
            {children}
        </ModSlideshowItem>
    )
}

export default withLayout(SlideshowItem)
