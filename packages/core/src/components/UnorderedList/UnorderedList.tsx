import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface UnorderedListProps {
  children: React.ReactNode
  indent?: 'true' | 'false'
}

const ModUnorderedList = styled.ul<UnorderedListProps>`
  margin: 0;
  padding-left: ${props => props.indent === "false" ? "0" : "3em"};
  padding-right: ${props => props.indent === "false" ? "0" : "3em"};
`

const UnorderedList = ({ children, indent, ...props }: UnorderedListProps) => {
  return (
    <ModUnorderedList indent = {indent} {...props}>
      {children}
    </ModUnorderedList>
  )
}

export default withLayout(UnorderedList)