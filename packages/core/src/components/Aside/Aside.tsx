import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '../../../../utils/src/index'

interface ModAsideProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
}

const ModAside = styled.aside<ModAsideProps>`
    margin: 0;
    padding: 0;
    display: block;
`

const Aside = ({ children, ...props }: ModAsideProps) => {
    return (
        <ModAside {...props} data-test="aside">
            {children}
        </ModAside>
    )
}

export default withLayout(Aside)
