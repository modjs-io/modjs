import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { SnackbarContent, Typography } from '../../index'

describe('SnackbarContent', () => {
    context('Render with default props', () => {
        it('should render SnackbarContent component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <SnackbarContent>
                        <Typography variant="small" fs="sm">
                            Snackbar Content
                        </Typography>
                    </SnackbarContent>
                </ThemeProvider>,
            )
            cy.get('[data-test="snackbar-content"]').should('exist')
        })
    })
    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <SnackbarContent p="normal">
                        <Typography variant="small" fs="sm">
                            Snackbar Content
                        </Typography>
                    </SnackbarContent>
                </ThemeProvider>,
            )
            cy.get('[data-test="snackbar-content"]').should(
                'have.css',
                'padding',
                '16px',
            )
        })
    })
})
