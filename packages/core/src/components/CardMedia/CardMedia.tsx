import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModCardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const ModCardMedia = styled.div<ModCardMediaProps>`
    margin-bottom: ${props => props.theme.spacing.xdense};
`

const CardMedia = ({ children, ...props }: ModCardMediaProps) => {
    return (
        <ModCardMedia {...props} data-test="card-media">
            {children}
        </ModCardMedia>
    )
}

export default withLayout(CardMedia)
