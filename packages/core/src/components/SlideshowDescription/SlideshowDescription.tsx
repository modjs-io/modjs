import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '../../../../utils/src/index'

interface ModSlideshowDescriptionProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const ModSlideshowDescription = styled.div<ModSlideshowDescriptionProps>`
    text-align: center;
`

const SlideshowDescription = ({
    children,
    ...props
}: ModSlideshowDescriptionProps) => {
    return (
        <ModSlideshowDescription {...props} data-test="slideshow-description">
            {children}
        </ModSlideshowDescription>
    )
}

export default withLayout(SlideshowDescription)
