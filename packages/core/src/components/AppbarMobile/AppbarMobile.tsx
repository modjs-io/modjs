import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { useMediaQuery, withLayout } from '@modjs/utils'
import { MenuIcon, CloseIcon } from '@modjs/icons'
import { Box, Button } from '../../index'

interface ModMobileAppbarProps {
    children: React.ReactNode
    sticky?: boolean
    persistent?: boolean
    logo?: React.ReactNode
}

const forwardProps = (prop: string) =>
    !['sticky', 'persistent', 'logo'].includes(prop)

const StyledBox = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModMobileAppbarProps>`
    position: relative;
    transition: left 0.3s ease-in-out;
    box-shadow:
        rgb(0 0 0 / 30%) 0px 6px 6px,
        rgb(0 0 0 / 5%) 0px 10px 20px;
`

const ModAppbarMobile = styled.nav.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModMobileAppbarProps>`
    background-color: ${props => props.theme.color.white};
    height: 50px;
    ${props =>
        props.sticky &&
        props.persistent &&
        `
        position: fixed;
        top: 0;
        width: 100%;
        box-shadow:
            rgb(0 0 0 / 30%) 0px 6px 6px,
            rgb(0 0 0 / 5%) 0px 10px 20px;
    `};
`

const AppbarMobile = ({ children, logo, ...props }: ModMobileAppbarProps) => {
    const smScreen = useMediaQuery({ query: { media: '(max-width: 768px)' } })

    const [sticky, setSticky] = useState(false)
    const [menuVisible, setMenuVisible] = useState(false)

    const handleScroll = () => {
        if (window.scrollY >= 50) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    const handleToggle = () => {
        setMenuVisible(!menuVisible)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            {smScreen && (
                <ModAppbarMobile
                    {...props}
                    sticky={sticky === true ? true : false}
                    persistent={sticky === true ? true : false}
                    data-test="appbar-mobile"
                >
                    <Box display="flex" justifyContent="space-between">
                        {logo}
                        {menuVisible ? (
                            <Button
                                variant="outlined"
                                onClick={handleToggle}
                                data-testid="hide-menu"
                            >
                                Hide Menu
                                <CloseIcon height="1em" width="1em" />
                            </Button>
                        ) : (
                            <Button
                                variant="icon"
                                onClick={handleToggle}
                                data-testid="show-menu"
                            >
                                <MenuIcon />
                            </Button>
                        )}
                    </Box>
                    {menuVisible && (
                        <StyledBox data-testid="menu-items">
                            {children}
                        </StyledBox>
                    )}
                </ModAppbarMobile>
            )}
        </>
    )
}

export default withLayout(AppbarMobile)
