import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface SlideshowNavigationProps {
    children: React.ReactNode[]
}

const ModSlideshowNavigation = styled.div<SlideshowNavigationProps>`
    display: flex;
    justify-content: center;
    margin-top: 0;
`

const StyledBox = styled.div`
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.spacing.xdense};
    justify-content: center;
`

const SlideshowNavigation = ({ children, ...props }: SlideshowNavigationProps) => {

  return (
    <>
        <ModSlideshowNavigation {...props}>
            <StyledBox>
                {children}
            </StyledBox>
        </ModSlideshowNavigation>
    </>
  )
}

export default withLayout(SlideshowNavigation)