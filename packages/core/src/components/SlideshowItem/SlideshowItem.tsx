import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface SlideshowItemProps {
    children: React.ReactNode[]
}

const ModSlideshowItem = styled.div<SlideshowItemProps>`
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
`

const SlideshowItem = ({ children, ...props }: SlideshowItemProps) => {

  return (
    <ModSlideshowItem {...props}>
        {children}
    </ModSlideshowItem>
  )
}

export default withLayout(SlideshowItem)