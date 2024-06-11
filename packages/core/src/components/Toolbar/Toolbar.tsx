import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModToolbarProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
}

const ModToolbar = styled.nav<ModToolbarProps>`
    background-color: ${props => props.theme.color.white};
    padding-top: 1em;
    @media (max-width: 768px) {
        display: none;
    }
`

const Toolbar = ({ children, ...props }: ModToolbarProps) => {
    return (
        <ModToolbar {...props} data-test="toolbar">
            {children}
        </ModToolbar>
    )
}

export default withLayout(Toolbar)
