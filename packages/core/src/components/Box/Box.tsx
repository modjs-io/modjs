import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '../../../../utils/src/index'

interface ModBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const ModBox = styled.div`
    margin: 0;
    padding: 0;
    display: block;
`

const Box = ({ children, ...props }: ModBoxProps) => {
    return (
        <ModBox {...props} data-test="box">
            {children}
        </ModBox>
    )
}

export default withLayout(Box)
