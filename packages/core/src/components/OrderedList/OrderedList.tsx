import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface OrderedListProps {
  children: React.ReactNode
  indent?: 'true' | 'false'
}

const ModOrderedList = styled.ol<OrderedListProps>`
  margin: 0;
  padding-left: ${props => props.indent === "false" ? "0" : "3em"};
  padding-right: ${props => props.indent === "false" ? "0" : "3em"};
`

const OrderedList = ({ children, indent, ...props }: OrderedListProps) => {
  return (
    <ModOrderedList indent = {indent} {...props}>
      {children}
    </ModOrderedList>
  )
}

export default withLayout(OrderedList)