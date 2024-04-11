import React, {useState, useEffect} from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface ListProps {
  children: React.ReactNode
  listStyle?: 'square' | 'inside' | 'none';
}

const forwardProps = (prop: string) => !['listStyle'].includes(prop);

const ModList = styled.li.withConfig({
  shouldForwardProp: (prop) => forwardProps(prop)
})<ListProps>`
    list-style: ${props => props.listStyle === 'square' ? 'square' : props.listStyle === 'inside' ? 'inside' : props.listStyle === 'none' ? 'none' : 'none'};
    font-family: ${({theme}) => theme.font.primary};
`

const List = ({ children, ...props }: ListProps) => {
  return (
      <ModList {...props}>
        {children}
      </ModList>
  )
}

export default withLayout(List)