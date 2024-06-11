import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModUnorderedListProps extends React.HTMLAttributes<HTMLUListElement> {
    children: React.ReactNode
    indent?: boolean
}
const forwardProps = (prop: string) => !['indent'].includes(prop)

const ModUnorderedList = styled.ul.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModUnorderedListProps>`
    margin: 0;
    padding-left: ${props => (props.indent ? '3em' : '0')};
    color: ${props => props.theme.color.dark};
    font-family: ${props => props.theme.font.primary};
    font-size: ${props => props.theme.fs.md};
`

const UnorderedList = ({
    children,
    indent,
    ...props
}: ModUnorderedListProps) => {
    return (
        <ModUnorderedList
            indent={indent === false ? false : true}
            {...props}
            data-test="unordered-list"
        >
            {children}
        </ModUnorderedList>
    )
}

export default withLayout(UnorderedList)
