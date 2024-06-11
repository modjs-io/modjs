import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
    fluid?: boolean
}

const forwardProps = (prop: string) => !['fluid'].includes(prop)

const ModContainer = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModContainerProps>`
    ${props =>
        !props.fluid &&
        `
            max-width: 1280px;
            margin: auto;
    `};
    padding-right: ${props => props.theme.spacing.mwide};
    padding-left: ${props => props.theme.spacing.mwide};
    @media (max-width: 1280px) {
        padding-right: ${props => props.theme.spacing.wide};
        padding-left: ${props => props.theme.spacing.wide};
    }
    @media (max-width: 768px) {
        padding-right: ${props => props.theme.spacing.xdense};
        padding-left: ${props => props.theme.spacing.xdense};
    }
`
const Container = ({ children, ...props }: ModContainerProps) => {
    return (
        <ModContainer {...props} data-test="container">
            {children}
        </ModContainer>
    )
}

export default withLayout(Container)
