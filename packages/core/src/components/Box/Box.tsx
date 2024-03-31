import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface BoxProps {
  children: React.ReactNode
}

const ModBox = styled.div`

`

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <ModBox {...props}>{children}</ModBox>
  )
}

export default withLayout(Box)

