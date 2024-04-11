import React, {useState, useEffect} from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface AppbarProps {
  children: React.ReactNode
  sticky?: 'true' | 'false'
}

const forwardProps = (prop: string) => !['sticky'].includes(prop);

const ModAppbar = styled.nav.withConfig({
  shouldForwardProp: (prop) => forwardProps(prop)
})<AppbarProps>`
    background-color: ${({theme}) => theme.color.white};
    ${props => props.sticky === "false" && `
        position: static;
    `};
    ${props => props.sticky === "true" && `
        width: -webkit-fill-available;
        width: -moz-available;
        position: sticky;
        top: 0em;
        z-index: 1000;
        box-shadow: ${({ top }) => (top ? 'rgb(0 0 0 / 30%) 0px 6px 6px, rgb(0 0 0 / 5%) 0px 10px 20px' : 'none')};
  `};
    @media (max-width: 768px) {
        display: none;
    };
`

const Appbar = ({ children, ...props }: AppbarProps) => {
  const [top, settop] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset >= 56) {
      settop(true)
    } else {
      settop(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
      <ModAppbar {...props}>
        {children}
      </ModAppbar>
  )
}

export default withLayout(Appbar)