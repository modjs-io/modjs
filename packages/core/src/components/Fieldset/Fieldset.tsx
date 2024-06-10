import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '../../../../utils/src/index'

interface ModFieldSetProps extends React.HTMLAttributes<HTMLFieldSetElement> {
    children: React.ReactNode
}

const ModFieldset = styled.fieldset`
    border: none;
    padding: 0;
`

const Fieldset = ({ children, ...props }: ModFieldSetProps) => {
    return (
        <ModFieldset {...props} data-test="fieldset">
            {children}
        </ModFieldset>
    )
}

export default withLayout(Fieldset)
