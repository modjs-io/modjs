import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '../../../../utils/src/index'

interface ModMainProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
}

const ModMain = styled.main<ModMainProps>`
    margin: 0;
    padding: 0;
    display: block;
`

const Main = ({ children, ...props }: ModMainProps) => {
    return (
        <ModMain {...props} data-test="main">
            {children}
        </ModMain>
    )
}

export default withLayout(Main)
