import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModHeaderProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
}

const ModHeader = styled.header<ModHeaderProps>`
    margin: 0;
    padding: 0;
`

const Header = ({ children, ...props }: ModHeaderProps) => {
    return (
        <ModHeader {...props} data-test="header">
            {children}
        </ModHeader>
    )
}

export default withLayout(Header)
