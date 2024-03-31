import React, {useState, useEffect} from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface ListProps {
  children: React.ReactNode
  liststyle?: 'square' | 'inside' | 'none';
}

const ModList = styled.li<ListProps>`
    list-style: ${props => props.liststyle === 'square' ? 'square' : props.liststyle === 'inside' ? 'inside' : props.liststyle === 'none' ? 'none' : 'none'};
    font-family: ${({theme}) => theme.font.primary};
`

const List = ({ children, liststyle, ...props }: ListProps) => {
  return (
      <ModList liststyle = {liststyle} {...props}>
        {children}
      </ModList>
  )
}

export default withLayout(List)