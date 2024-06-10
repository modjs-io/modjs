import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '../../../../utils/src/index'

interface ModCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const ModCardContent = styled.div<ModCardContentProps>`
    color: ${props => props.theme.color.dark};
`

const CardContent = ({ children, ...props }: ModCardContentProps) => {
    return (
        <ModCardContent {...props} data-test="card-content">
            {children}
        </ModCardContent>
    )
}

export default withLayout(CardContent)
