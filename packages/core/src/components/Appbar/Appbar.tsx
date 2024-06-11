import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { useMediaQuery, withLayout } from '@modjs/utils'

interface AppbarProps {
    children: React.ReactNode
    sticky?: boolean
    persistent?: boolean
}

const forwardProps = (prop: string) => !['sticky', 'persistent'].includes(prop)

const ModAppbar = styled.nav.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<AppbarProps>`
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
    @media (max-width: 768px) {
        display: none;
    }
`

const Appbar = ({ children, ...props }: AppbarProps) => {
    const smScreen = useMediaQuery({ query: { media: '(max-width: 768px)' } })

    const [sticky, setSticky] = useState(false)

    const handleScroll = () => {
        if (window.scrollY >= 50) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            {!smScreen && (
                <ModAppbar
                    {...props}
                    sticky={sticky === true ? true : false}
                    persistent={sticky === true ? true : false}
                    data-test="appbar"
                >
                    {children}
                </ModAppbar>
            )}
        </>
    )
}

export default withLayout(Appbar)
