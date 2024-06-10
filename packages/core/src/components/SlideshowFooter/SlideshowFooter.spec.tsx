import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { SlideshowFooter, Typography } from '../../index'

describe('SlideshowFooter', () => {
    context('Render with default props', () => {
        it('should render SlideshowFooter component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <SlideshowFooter>
                        <Typography variant="body1">
                            Author | Organization
                        </Typography>
                    </SlideshowFooter>
                </ThemeProvider>,
            )
            cy.get('[data-test="slideshow-footer"]').should('exist')
        })
    })
    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <SlideshowFooter bgColor="light" p="normal">
                        <Typography variant="body1">
                            Author | Organization
                        </Typography>
                    </SlideshowFooter>
                </ThemeProvider>,
            )
            cy.get('[data-test="slideshow-footer"]')
                .should('have.css', 'padding', '16px')
                .and('have.css', 'background-color', 'rgb(142, 142, 142)')
        })
    })
})
