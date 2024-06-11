import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModOrderedListProps extends React.HTMLAttributes<HTMLOListElement> {
    children: React.ReactNode
    indent?: boolean
}

const forwardProps = (prop: string) => !['indent'].includes(prop)

const ModOrderedList = styled.ol.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModOrderedListProps>`
    margin: 0;
    padding-left: ${props => (props.indent ? '3em' : '0')};
    color: ${props => props.theme.color.dark};
    font-family: ${props => props.theme.font.primary};
    font-size: ${props => props.theme.fs.md};
`

const OrderedList = ({ children, indent, ...props }: ModOrderedListProps) => {
    return (
        <ModOrderedList
            indent={indent === false ? false : true}
            {...props}
            data-test="ordered-list"
        >
            {children}
        </ModOrderedList>
    )
}

export default withLayout(OrderedList)
