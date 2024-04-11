import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface CardProps {
  children: React.ReactNode
  notched?: 'true' | 'false'
  darkOnHover?: 'true' | 'false'
}

const forwardProps = (prop: string) => !['notched', 'darkOnHover'].includes(prop);

const ModCard = styled.div.withConfig({
  shouldForwardProp: (prop) => forwardProps(prop)
})<CardProps>`
  clip-path: ${props => 
    props.notched === "true" ? ({theme}) => theme.notched.secondary : 
  ''};
  &:hover {
    background-color: ${props => props.darkOnHover === "true" ? ({theme}) => theme.color.black : ({theme}) => theme.style.none};
    transition: ${props => props.darkOnHover === "true" ? "0.5s ease-in-out" : ''}
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