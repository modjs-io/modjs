import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '../../../../utils/src/index'

interface ModListProps extends React.HTMLAttributes<HTMLLIElement> {
    children: React.ReactNode
    listStyle?: 'square' | 'inside' | 'none'
}

const forwardProps = (prop: string) => !['listStyle'].includes(prop)

const ModList = styled.li.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModListProps>`
    list-style: ${props =>
        props.listStyle === 'square'
            ? 'square'
            : props.listStyle === 'inside'
              ? 'inside'
              : props.listStyle === 'none'
                ? 'none'
                : ''};
    font-family: ${props => props.theme.font.primary};
    color: ${props => props.theme.color.dark};
    font-size: ${props => props.theme.fs.md};
`

const List = ({ children, listStyle, ...props }: ModListProps) => {
    return (
        <ModList
            listStyle={listStyle ? listStyle : 'none'}
            {...props}
            data-test="list"
        >
            {children}
        </ModList>
    )
}

export default withLayout(List)
