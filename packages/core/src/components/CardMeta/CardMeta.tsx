import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModCardMetaProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const ModCardMeta = styled.div<ModCardMetaProps>`
    color: ${props => props.theme.color.light};
`

const CardMeta = ({ children, ...props }: ModCardMetaProps) => {
    return (
        <ModCardMeta {...props} data-test="card-meta">
            {children}
        </ModCardMeta>
    )
}

export default withLayout(CardMeta)
