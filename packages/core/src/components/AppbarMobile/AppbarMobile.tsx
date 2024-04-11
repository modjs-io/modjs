import React, { useState, useEffect } from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'
import Box from '../Box/Box'

interface AppbarMobileProps {
  sticky?: boolean
  logo?: React.ReactNode
  menuIcon?: React.ReactNode
  closeIcon?: React.ReactNode
  toolbarItem?: React.ReactNode
  menuItems?: React.ReactNode
  footerItems?: React.ReactNode
}

const ModAppbarMobile = styled.nav<AppbarMobileProps>`
    background-color: ${({theme}) => theme.color.white};
    display: none;
    padding-top: 1em;
    ${props => props.sticky === "false" && `
        position: static;
    `};
    ${props => props.sticky === "true" && `
        width: -webkit-fill-available;
        width: -moz-available;
        position: sticky;
        top: 0em;
        z-index: 1000;
        box-shadow: ${({ top }) => (top ? 'rgb(0 0 0 / 30%) 0px 6px 6px, rgb(0 0 0 / 5%) 0px 10px 20px' : 'none')};
    `};
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    };
`

const ModAppbarMenu = styled.nav`
    background-color: ${({theme}) => theme.color.white};
    z-index: 1000;
    box-shadow: rgb(0 0 0 / 30%) 0px 6px 6px, rgb(0 0 0 / 5%) 0px 10px 20px;
    position: absolute;
    margin-top: 18em;
    width: -webkit-fill-available;
    width: -moz-available;
`

const AppbarMobile = ({
  sticky,
  logo,
  menuIcon,
  closeIcon,
  toolbarItem,
  menuItems,
  footerItems,
  ...props
}: AppbarMobileProps) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
  const [top, settop] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset >= 56) {
      settop(true)
    } else {
      settop(false)
    }
  }

  const handleMenuToggle = () => {
    setMobileMenuVisible(!mobileMenuVisible)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <ModAppbarMobile sticky = {sticky} {...props}>
        <Box pr = "dense" pl = "dense">{logo}</Box>
        {mobileMenuVisible ? (
            <>
             <Box display='flex' alignItems = "center" justifyContent = "end" gap = "dense" pr = "dense" pl = "dense">
                <Box>{toolbarItem}</Box>
                <Box onClick={handleMenuToggle}>{closeIcon}</Box>
            </Box>
            <ModAppbarMenu>
                {menuItems}
                <Box display='flex' justifyContent='space-between' p = "dense">
                    {footerItems}
                </Box>
            </ModAppbarMenu>

            </>
        ) : (
            <>
            <Box onClick={handleMenuToggle} p = "dense">{menuIcon} </Box>
            </>
        )}
    </ModAppbarMobile>
  )
}

export default withLayout(AppbarMobile)
