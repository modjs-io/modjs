import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface UnorderedListProps {
  children: React.ReactNode
  indent?: 'true' | 'false'
}
const forwardProps = (prop: string) => !['indent'].includes(prop);

const ModUnorderedList = styled.ul.withConfig({
  shouldForwardProp: (prop) => forwardProps(prop)
})<UnorderedListProps>`
  margin: 0;
  padding-left: ${props => props.indent === "false" ? "0" : "3em"};
  padding-right: ${props => props.indent === "false" ? "0" : "3em"};
`

const UnorderedList = ({ children, ...props }: UnorderedListProps) => {
  return (
    <ModUnorderedList {...props}>
      {children}
    </ModUnorderedList>
  )
}

export default withLayout(UnorderedList)