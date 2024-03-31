import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface CardHeaderProps {
  children: React.ReactNode
}

const ModCardHeader = styled.div<CardHeaderProps>`

`

const CardHeader = ({ children, ...props }: CardHeaderProps) => {
  return (
      <ModCardHeader {...props}>
        {children}
      </ModCardHeader>
  )
}

export default withLayout(CardHeader)