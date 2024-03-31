import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface SlideshowExcerptProps {
    children: React.ReactNode[]
}

const ModSlideshowExcerpt = styled.div<SlideshowExcerptProps>`

`

const SlideshowExcerpt = ({ children, ...props }: SlideshowExcerptProps) => {

  return (
    <ModSlideshowExcerpt {...props}>
        {children}
    </ModSlideshowExcerpt>
  )
}

export default withLayout(SlideshowExcerpt)