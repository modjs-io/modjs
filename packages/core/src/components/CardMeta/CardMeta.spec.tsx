import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
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
})
