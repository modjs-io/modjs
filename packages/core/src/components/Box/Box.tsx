import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const ModBox = styled.div``

const Box = ({ children, ...props }: ModBoxProps) => {
    return (
        <ModBox {...props} data-test="box">
            {children}
        </ModBox>
    )
}

export default withLayout(Box)
