import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModSectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
}

const ModSection = styled.section<ModSectionProps>`
    margin: 0;
    padding: 0;
    display: block;
`

const Section = ({ children, ...props }: ModSectionProps) => {
    return (
        <ModSection {...props} data-test="section">
            {children}
        </ModSection>
    )
}

export default withLayout(Section)
