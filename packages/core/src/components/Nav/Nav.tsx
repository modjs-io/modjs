import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface NavProps {
  children: React.ReactNode
}

const ModNav = styled.nav`

`

const Nav = ({ children, ...props }: NavProps) => {
  return (
    <ModNav {...props}>
      {children}
    </ModNav>
  )
}

export default withLayout(Nav)