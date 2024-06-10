import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Bob, ModTheme } from '../../../../utils/src/index'
import { Card, CardMedia, Image } from '../../index'

describe('CardMedia', () => {
    context('Render with default props', () => {
        it('should render CardMedia component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Card>
                        <CardMedia>
                            <Image
                                src={Bob}
                                height="md"
                                width="md"
                                brightness="normal"
                                notched="true"
                            />
                        </CardMedia>
                    </Card>
                </ThemeProvider>,
            )
            cy.get('[data-test="card-media"]').should('exist')
        })
    })
    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Card>
                        <CardMedia p="normal">
                            <Image
                                src={Bob}
                                height="md"
                                width="md"
                                brightness="normal"
                                notched="true"
                            />
                        </CardMedia>
                    </Card>
                </ThemeProvider>,
            )
            cy.get('[data-test="card-media"]').should(
                'have.css',
                'padding',
                '16px',
            )
        })
    })
})
