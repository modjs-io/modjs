import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  fluid?: 'true' | 'false'
}

const forwardProps = (prop: string) => !['fluid'].includes(prop);

const ModContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => forwardProps(prop)
})<ContainerProps>`
  max-width: ${props => props.fluid === 'true' ? '' : '1280px'};
  margin: ${props => props.fluid === 'true' ? '' : 'auto'};
  padding-right: ${({theme}) => theme.spacing.mwide};
  padding-left: ${({theme}) => theme.spacing.mwide};
  @media (max-width: 1280px) {
    padding-right: ${({theme}) => theme.spacing.wide};
    padding-left: ${({theme}) => theme.spacing.wide};
  };
  @media (max-width: 768px) {
    padding-right: ${({theme}) => theme.spacing.normal};
    padding-left: ${({theme}) => theme.spacing.normal};
  };
`
const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <ModContainer {...props}>{children}</ModContainer>
  )
}

export default withLayout(Container)
