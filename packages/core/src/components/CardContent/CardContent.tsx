import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface CardContentProps {
  children: React.ReactNode
}

const ModCardContent = styled.div<CardContentProps>`

`

const CardContent = ({ children, ...props }: CardContentProps) => {
  return (
      <ModCardContent {...props}>
        {children}
      </ModCardContent>
  )
}

export default withLayout(CardContent)