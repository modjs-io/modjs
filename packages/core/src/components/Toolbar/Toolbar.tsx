import React, {useState, useEffect} from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface ToolbarProps {
  children: React.ReactNode
}

const ModToolbar = styled.nav<ToolbarProps>`
    background-color: ${({theme}) => theme.color.white};
    padding-top: 1em;
    @media (max-width: 768px) {
      display: none;
    }
`

const Toolbar = ({ children, ...props }: ToolbarProps) => {
  return (
      <ModToolbar {...props}>
        {children}
      </ModToolbar>
  )
}

export default withLayout(Toolbar)