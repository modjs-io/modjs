import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { SnackbarHeader, Typography } from '../../index'

describe('SnackbarHeader', () => {
    context('Render with default props', () => {
        it('should render SnackbarHeader component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <SnackbarHeader>
                        <Typography variant="small" fs="sm">
                            Snackbar Header
                        </Typography>
                    </SnackbarHeader>
                </ThemeProvider>,
            )
            cy.get('[data-test="snackbar-header"]').should('exist')
        })
    })
    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <SnackbarHeader p="normal">
                        <Typography variant="small" fs="sm">
                            Snackbar Header
                        </Typography>
                    </SnackbarHeader>
                </ThemeProvider>,
            )
            cy.get('[data-test="snackbar-header"]').should(
                'have.css',
                'padding',
                '16px',
            )
        })
    })
})
