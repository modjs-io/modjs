import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { Card, CardMedia, Image } from '../../index'
import Bob from '../../assets/images/bob.jpeg'

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
})
