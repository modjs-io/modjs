import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface CardMediaProps {
  children: React.ReactNode
}

const ModCardMedia = styled.div<CardMediaProps>`

`

const CardMedia = ({ children, ...props }: CardMediaProps) => {
  return (
      <ModCardMedia {...props}>
        {children}
      </ModCardMedia>
  )
}

export default withLayout(CardMedia)