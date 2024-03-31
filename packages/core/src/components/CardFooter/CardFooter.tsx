import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface CardFooterProps {
  children: React.ReactNode
}

const ModCardFooter = styled.div<CardFooterProps>`

`

const CardFooter = ({ children, ...props }: CardFooterProps) => {
  return (
      <ModCardFooter {...props}>
        {children}
      </ModCardFooter>
  )
}

export default withLayout(CardFooter)