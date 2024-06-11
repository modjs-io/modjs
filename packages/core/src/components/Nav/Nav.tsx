import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModNavProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
}

const ModNav = styled.nav`
    margin: 0;
    padding: 0;
`

const Nav = ({ children, ...props }: ModNavProps) => {
    return (
        <ModNav {...props} data-test="nav">
            {children}
        </ModNav>
    )
}

export default withLayout(Nav)
