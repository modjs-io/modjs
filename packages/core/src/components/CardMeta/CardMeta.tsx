import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface CardMetaProps {
  children: React.ReactNode
}

const ModCardMeta = styled.div<CardMetaProps>`

`

const CardMeta = ({ children, ...props }: CardMetaProps) => {
  return (
      <ModCardMeta {...props}>
        {children}
      </ModCardMeta>
  )
}

export default withLayout(CardMeta)