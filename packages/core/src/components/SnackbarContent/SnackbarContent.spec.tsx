import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
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
})
