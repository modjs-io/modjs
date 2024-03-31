import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface FormProps {
  children: React.ReactNode
}

const ModForm = styled.form`

`

const Form: React.FC<FormProps> = ({ children, ...props }) => {
  return (
    <ModForm {...props}>{children}</ModForm>
  )
}

export default withLayout(Form)