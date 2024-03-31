import React from 'react'
import withLayout from '../../assets/withLayout'
import {styled} from 'styled-components'

interface HeaderProps{
  children: React.ReactNode
}

const ModHeader = styled.header<HeaderProps>`

`

const Header = ({ children, ...props }: HeaderProps) => {
  return (
    <ModHeader {...props}>
      {children}
    </ModHeader>
  )
}

export default withLayout(Header)