import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { Card, CardFooter, Typography } from '../../index'

describe('CardFooter', () => {
    context('Render with default props', () => {
        it('should render CardFooter component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Card>
                        <CardFooter>
                            <Typography variant="body2">Card Footer</Typography>
                        </CardFooter>
                    </Card>
                </ThemeProvider>,
            )
            cy.get('[data-test="card-footer"]').should('exist')
        })
    })
})
