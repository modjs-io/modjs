import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModSlideshowExcerptProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const ModSlideshowExcerpt = styled.div<ModSlideshowExcerptProps>`
    text-align: center;
`

const SlideshowExcerpt = ({ children, ...props }: ModSlideshowExcerptProps) => {
    return (
        <ModSlideshowExcerpt {...props} data-test="slideshow-excerpt">
            {children}
        </ModSlideshowExcerpt>
    )
}

export default withLayout(SlideshowExcerpt)
