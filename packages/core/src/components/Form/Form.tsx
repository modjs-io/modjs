import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModFormProps extends React.HTMLAttributes<HTMLFormElement> {
    children: React.ReactNode
}

const ModForm = styled.form`
    margin: 0;
    padding: 0;
`

const Form = ({ children, ...props }: ModFormProps) => {
    return (
        <ModForm {...props} data-test="form">
            {children}
        </ModForm>
    )
}

export default withLayout(Form)
