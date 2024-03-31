import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface SlideshowProps {
    onTouchStart?: (event: TouchEvent) => void;
    onTouchMove?: (event: TouchEvent) => void;
    children: React.ReactNode[]
}

const ModSlideshow = styled.div<SlideshowProps>`
    overflow: hidden;
`

const Slideshow = ({ onTouchStart, onTouchMove, children, ...props }: SlideshowProps) => {

  return (
    <>
        <ModSlideshow onTouchStart={onTouchStart} onTouchMove={onTouchMove} {...props}>
            {children}
        </ModSlideshow>
    </>
  )
}

export default withLayout(Slideshow)