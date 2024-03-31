import React from 'react'
import withLayout from '../../assets/withLayout'
import {styled} from 'styled-components'

type FooterProps = React.HTMLProps<HTMLElement> & {
  children: React.ReactNode
}

const ModFooter = styled.footer<FooterProps>`
    bottom: 0;
    z-index: -2;
    width: 100%;
    position: fixed;
    @media (max-width: 768px) {
      position: relative;
    };
`

const Footer = ({ children, ...props }: FooterProps) => {
  return (
    <ModFooter {...props}>
      {children}
    </ModFooter>
  )
}

export default withLayout(Footer)