import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface CardProps {
  children: React.ReactNode
  notched?: 'true' | 'false'
  darkonhover?: 'true' | 'false'
}

const ModCard = styled.div<CardProps>`
  clip-path: ${props => 
    props.notched === "true" ? ({theme}) => theme.notched.secondary : 
  ''};
  &:hover {
    background-color: ${props => props.darkonhover === "true" ? ({theme}) => theme.color.black : ({theme}) => theme.style.none};
    transition: ${props => props.darkonhover === "true" ? "0.5s ease-in-out" : ''}
  };
`

const Card = ({ children, ...props }: CardProps) => {
  return (
      <ModCard {...props}>
        {children}
      </ModCard>
  )
}

export default withLayout(Card)