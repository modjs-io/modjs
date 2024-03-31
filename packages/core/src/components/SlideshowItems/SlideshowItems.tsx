import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface SlideshowItemsProps {
    currentindex?: Number;
    children: React.ReactNode[]
}

const ModSlideshowItems = styled.div<SlideshowItemsProps>`
    display: flex;
    transition: all 150ms linear;
    -ms-overflow-style: none;
    scrollbar-width: none;
    transform: translateX(-${props => props.currentindex * 100}%);
    &:-webkit-scrollbar {
        display: none;
    }
    &:-webkit-scrollbar {
        display: none;
    }
`

const SlideshowItems = ({ currentindex, children, ...props }: SlideshowItemsProps) => {

  return (
    <ModSlideshowItems currentindex = {currentindex} {...props}>
        {children}
    </ModSlideshowItems>
  )
}

export default withLayout(SlideshowItems)