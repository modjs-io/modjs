import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Bob, ModTheme } from '../../../../utils/src/index'
import { Avatar, SlideshowMedia } from '../../index'

describe('SlideshowMedia', () => {
    context('Render with default props', () => {
        it('should render SlideshowMedia component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <SlideshowMedia>
                        <Avatar src={Bob} height="lg" width="lg" />
                    </SlideshowMedia>
                </ThemeProvider>,
            )
            cy.get('[data-test="slideshow-media"]').should('exist')
        })
    })
    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <SlideshowMedia bgColor="light" p="normal">
                        <Avatar src={Bob} height="lg" width="lg" />
                    </SlideshowMedia>
                </ThemeProvider>,
            )
            cy.get('[data-test="slideshow-media"]')
                .should('have.css', 'padding', '16px')
                .and('have.css', 'background-color', 'rgb(142, 142, 142)')
        })
    })
})
