import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { Card, CardHeader, Typography } from '../../index'

describe('CardHeader', () => {
    context('Render with default props', () => {
        it('should render CardHeader component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Card>
                        <CardHeader>
                            <Typography variant="h3">Card Header</Typography>
                        </CardHeader>
                    </Card>
                </ThemeProvider>,
            )
            cy.get('[data-test="card-header"]').should('exist')
        })
    })
    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Card>
                        <CardHeader p="normal">
                            <Typography variant="h3">Card Header</Typography>
                        </CardHeader>
                    </Card>
                </ThemeProvider>,
            )
            cy.get('[data-test="card-header"]').should(
                'have.css',
                'padding',
                '16px',
            )
        })
    })
})
