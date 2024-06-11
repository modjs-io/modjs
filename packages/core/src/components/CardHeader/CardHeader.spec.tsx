import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
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
})
