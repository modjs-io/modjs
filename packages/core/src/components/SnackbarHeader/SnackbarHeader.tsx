import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'
import Box from '../Box/Box'

interface ModSnackbarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const ModSnackbarHeader = styled.div<ModSnackbarHeaderProps>`
    font-weight: ${props => props.theme.fw.semibold};
    background-color: #ffffff;
    padding-left: ${props => props.theme.spacing.dense};
    padding-right: ${props => props.theme.spacing.udense};
    padding-top: ${props => props.theme.spacing.dense};
    padding-bottom: ${props => props.theme.spacing.dense};
    box-shadow:
        0px 10px 20px rgb(0 0 0 / 5%),
        0px 1px 6px 0px rgb(0 0 0 / 30%);
`

const SnackbarHeader = ({ children, ...props }: ModSnackbarHeaderProps) => {
    return (
        <ModSnackbarHeader {...props} data-test="snackbar-header">
            <Box display="flex" alignItems="center" gap="udense">
                {children}
            </Box>
        </ModSnackbarHeader>
    )
}

export default withLayout(SnackbarHeader)
