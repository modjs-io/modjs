import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '../../../../utils/src/index'

interface ModTypographyProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    variant?:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'body1'
        | 'body2'
        | 'small'
}

const ModTypographyH1 = styled.h1`
    font-family: ${props => props.theme.font.primary};
    color: ${props => props.theme.color.dark};
    font-size: ${props => props.theme.fs.ul};
    font-weight: ${props => props.theme.fw.bold};
    @media (max-width: 768px) {
        font-size: ${props => props.theme.fs.xl};
    }
`
const ModTypographyH2 = styled.h2`
    font-family: ${props => props.theme.font.primary};
    color: ${props => props.theme.color.dark};
    font-size: ${props => props.theme.fs.lg};
    font-weight: ${props => props.theme.fw.semibold};
    @media (max-width: 768px) {
        font-size: ${props => props.theme.fs.md};
    }
`
const ModTypographyH3 = styled.h3`
    font-family: ${props => props.theme.font.primary};
    font-size: ${props => props.theme.fs.md};
    color: ${props => props.theme.color.dark};
`
const ModTypographyH4 = styled.h4`
    font-family: ${props => props.theme.font.primary};
    font-size: ${props => props.theme.fs.md};
    color: ${props => props.theme.color.dark};
`
const ModTypographyH5 = styled.h5`
    font-family: ${props => props.theme.font.primary};
    font-size: ${props => props.theme.fs.md};
    color: ${props => props.theme.color.dark};
`
const ModTypographyH6 = styled.h6`
    font-family: ${props => props.theme.font.primary};
    font-size: ${props => props.theme.fs.md};
    color: ${props => props.theme.color.dark};
`
const ModTypographyBody1 = styled.p`
    font-family: ${props => props.theme.font.primary};
    font-size: ${props => props.theme.fs.md};
    color: ${props => props.theme.color.dark};
`
const ModTypographyBody2 = styled.p`
    font-family: ${props => props.theme.font.primary};
    font-size: ${props => props.theme.fs.sm};
    color: ${props => props.theme.color.light};
`
const ModTypographySmall = styled.small`
    font-family: ${props => props.theme.font.primary};
    font-size: ${props => props.theme.fs.xsm};
    color: ${props => props.theme.color.light};
`

const getTypographyComponent = (variant?: ModTypographyProps['variant']) => {
    switch (variant) {
        case 'h1':
            return ModTypographyH1
        case 'h2':
            return ModTypographyH2
        case 'h3':
            return ModTypographyH3
        case 'h4':
            return ModTypographyH4
        case 'h5':
            return ModTypographyH5
        case 'h6':
            return ModTypographyH6
        case 'small':
            return ModTypographySmall
        case 'body1':
            return ModTypographyBody1
        case 'body2':
            return ModTypographyBody2
        default:
            return ModTypographyBody1
    }
}

const Typography = ({ children, variant, ...props }: ModTypographyProps) => {
    const TypographyComponent = getTypographyComponent(variant)
    return (
        <TypographyComponent {...props} data-test="typography">
            {children}
        </TypographyComponent>
    )
}

export default withLayout(Typography)
