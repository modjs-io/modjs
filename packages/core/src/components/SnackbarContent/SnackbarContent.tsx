import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '../../../../utils/src/index'

interface ModSnackbarContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const ModSnackbarContent = styled.div<ModSnackbarContentProps>`
    align-items: center;
    justify-content: space-between;
    padding-left: ${props => props.theme.spacing.dense};
    padding-right: ${props => props.theme.spacing.dense};
    padding-top: ${props => props.theme.spacing.dense};
    padding-bottom: ${props => props.theme.spacing.dense};
`

const SnackbarContent = ({ children, ...props }: ModSnackbarContentProps) => {
    return (
        <ModSnackbarContent {...props} data-test="snackbar-content">
            {children}
        </ModSnackbarContent>
    )
}

export default withLayout(SnackbarContent)
