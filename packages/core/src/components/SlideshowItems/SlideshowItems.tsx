import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface SlideshowItemsProps {
    currentIndex?: Number;
    children: React.ReactNode[]
}
const forwardProps = (prop: string) => !['currentIndex'].includes(prop);

const ModSlideshowItems = styled.div.withConfig({
    shouldForwardProp: (prop) => forwardProps(prop)
  })<SlideshowItemsProps>`
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

const SlideshowItems = ({children, ...props }: SlideshowItemsProps) => {

  return (
    <ModSlideshowItems {...props}>
        {children}
    </ModSlideshowItems>
  )
}

export default withLayout(SlideshowItems)