import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { Card, CardMeta, Typography } from '../../index'

describe('CardMeta', () => {
    context('Render with default props', () => {
        it('should render CardMeta component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Card>
                        <CardMeta>
                            <Typography variant="small">Card Meta</Typography>
                        </CardMeta>
                    </Card>
                </ThemeProvider>,
            )
            cy.get('[data-test="card-meta"]').should('exist')
        })
    })
    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Card>
                        <CardMeta p="normal">
                            <Typography variant="small">Card Meta</Typography>
                        </CardMeta>
                    </Card>
                </ThemeProvider>,
            )
            cy.get('[data-test="card-meta"]').should(
                'have.css',
                'padding',
                '16px',
            )
        })
    })
})
