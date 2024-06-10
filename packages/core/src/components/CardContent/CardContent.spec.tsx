import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { Card, CardContent, Typography } from '../../index'

describe('CardContent', () => {
    context('Render with default props', () => {
        it('should render CardContent component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Card>
                        <CardContent>
                            <Typography variant="body2">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum is simply
                                dummy text of the printing and typesetting
                                industry. Lorem Ipsum is simply dummy text of
                                the printing and typesetting industry.
                            </Typography>
                        </CardContent>
                    </Card>
                </ThemeProvider>,
            )
            cy.get('[data-test="card-content"]').should('exist')
        })
    })
    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Card>
                        <CardContent p="normal">
                            <Typography variant="body2">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum is simply
                                dummy text of the printing and typesetting
                                industry. Lorem Ipsum is simply dummy text of
                                the printing and typesetting industry.
                            </Typography>
                        </CardContent>
                    </Card>
                </ThemeProvider>,
            )
            cy.get('[data-test="card-content"]').should(
                'have.css',
                'padding',
                '16px',
            )
        })
    })
})
