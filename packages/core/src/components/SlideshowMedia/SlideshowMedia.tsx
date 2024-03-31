import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface SlideshowMediaProps {
    children: React.ReactNode[]
}

const ModSlideshowMedia = styled.div<SlideshowMediaProps>`

`

const SlideshowMedia = ({ children, ...props }: SlideshowMediaProps) => {

  return (
    <ModSlideshowMedia {...props}>
        {children}
    </ModSlideshowMedia>
  )
}

export default withLayout(SlideshowMedia)