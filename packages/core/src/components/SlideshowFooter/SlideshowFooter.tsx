import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModSlideshowFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const ModSlideshowFooter = styled.div<ModSlideshowFooterProps>`
    text-align: center;
`

const SlideshowFooter = ({ children, ...props }: ModSlideshowFooterProps) => {
    return (
        <ModSlideshowFooter {...props} data-test="slideshow-footer">
            {children}
        </ModSlideshowFooter>
    )
}

export default withLayout(SlideshowFooter)
