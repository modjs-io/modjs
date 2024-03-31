import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface SlideshowDescriptionProps {
    children: React.ReactNode[]
}

const ModSlideshowDescription = styled.div<SlideshowDescriptionProps>`

`

const SlideshowDescription = ({ children, ...props }: SlideshowDescriptionProps) => {

  return (
    <ModSlideshowDescription {...props}>
        {children}
    </ModSlideshowDescription>
  )
}

export default withLayout(SlideshowDescription)