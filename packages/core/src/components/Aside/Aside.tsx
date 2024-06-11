import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModAsideProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
}

const ModAside = styled.aside<ModAsideProps>``

const Aside = ({ children, ...props }: ModAsideProps) => {
    return (
        <ModAside {...props} data-test="aside">
            {children}
        </ModAside>
    )
}

export default withLayout(Aside)
