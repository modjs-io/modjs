import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { SlideshowExcerpt, Typography } from '../../index'

describe('SlideshowExcerpt', () => {
    context('Render with default props', () => {
        it('should render SlideshowExcerpt component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <SlideshowExcerpt>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </Typography>
                    </SlideshowExcerpt>
                </ThemeProvider>,
            )
            cy.get('[data-test="slideshow-excerpt"]').should('exist')
        })
    })
    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <SlideshowExcerpt bgColor="light" p="normal">
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </Typography>
                    </SlideshowExcerpt>
                </ThemeProvider>,
            )
            cy.get('[data-test="slideshow-excerpt"]')
                .should('have.css', 'padding', '16px')
                .and('have.css', 'background-color', 'rgb(142, 142, 142)')
        })
    })
})
