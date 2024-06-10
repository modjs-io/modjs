import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '../../../../utils/src/index'

interface ModCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const ModCardFooter = styled.div<ModCardFooterProps>`
    color: ${props => props.theme.color.dark};
`

const CardFooter = ({ children, ...props }: ModCardFooterProps) => {
    return (
        <ModCardFooter {...props} data-test="card-footer">
            {children}
        </ModCardFooter>
    )
}

export default withLayout(CardFooter)
