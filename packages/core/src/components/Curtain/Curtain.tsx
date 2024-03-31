import React from 'react'
import withLayout from '../../assets/withLayout'
import {styled} from 'styled-components'

type CurtainProps = React.HTMLProps<HTMLElement> & {
  children: React.ReactNode
}

const ModCurtain = styled.div<CurtainProps>`
    background-color: ${({theme}) => theme.color.white};
`

const Curtain = ({ children, ...props }: CurtainProps) => {
  return (
    <ModCurtain {...props}>
      {children}
    </ModCurtain>
  )
}

export default withLayout(Curtain)