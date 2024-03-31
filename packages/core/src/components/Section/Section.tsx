import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface SectionProps {
  children: React.ReactNode
}

const ModSection = styled.section<SectionProps>`

`

const Section = ({ children, ...props }: SectionProps) => {
  return (
    <ModSection {...props}>
      {children}
    </ModSection>
  )
}

export default withLayout(Section)