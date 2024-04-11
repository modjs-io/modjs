import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface OrderedListProps {
  children: React.ReactNode
  indent?: 'true' | 'false'
}

const forwardProps = (prop: string) => !['indent'].includes(prop);

const ModOrderedList = styled.ol.withConfig({
  shouldForwardProp: (prop) => forwardProps(prop)
})<OrderedListProps>`
  margin: 0;
  padding-left: ${props => props.indent === "false" ? "0" : "3em"};
  padding-right: ${props => props.indent === "false" ? "0" : "3em"};
`

const OrderedList = ({ children, ...props }: OrderedListProps) => {
  return (
    <ModOrderedList {...props}>
      {children}
    </ModOrderedList>
  )
}

export default withLayout(OrderedList)