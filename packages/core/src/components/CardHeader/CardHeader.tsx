import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const ModCardHeader = styled.div<ModCardHeaderProps>`
    color: ${props => props.theme.color.dark};
`

const CardHeader = ({ children, ...props }: ModCardHeaderProps) => {
    return (
        <ModCardHeader {...props} data-test="card-header">
            {children}
        </ModCardHeader>
    )
}

export default withLayout(CardHeader)
