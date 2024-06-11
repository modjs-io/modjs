import React from 'react'
import { withLayout } from '@modjs/utils'
import { styled } from 'styled-components'

interface ModFooterProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
}

const ModFooter = styled.footer<ModFooterProps>`
    bottom: 0;
    z-index: -2;
    width: 100%;
    position: fixed;
    @media (max-width: 768px) {
        position: relative;
    }
`

const Footer = ({ children, ...props }: ModFooterProps) => {
    return (
        <ModFooter {...props} data-test="footer">
            {children}
        </ModFooter>
    )
}

export default withLayout(Footer)
