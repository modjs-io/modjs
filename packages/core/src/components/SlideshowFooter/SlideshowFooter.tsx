import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface SlideshowFooterProps {
    children: React.ReactNode[]
}

const ModSlideshowExcerpt = styled.div<SlideshowFooterProps>`

`

const SlideshowFooter = ({ children, ...props }: SlideshowFooterProps) => {

  return (
    <ModSlideshowExcerpt {...props}>
        {children}
    </ModSlideshowExcerpt>
  )
}

export default withLayout(SlideshowFooter)