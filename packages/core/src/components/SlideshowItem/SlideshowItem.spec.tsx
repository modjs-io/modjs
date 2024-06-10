import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { SlideshowItem } from '../../index'

describe('SlideshowItem', () => {
    context('Render with default props', () => {
        it('should render SlideshowItem component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <SlideshowItem></SlideshowItem>
                </ThemeProvider>,
            )
            cy.get('[data-test="slideshow-item"]').should('exist')
        })
    })
    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <SlideshowItem bgColor="light" p="normal"></SlideshowItem>
                </ThemeProvider>,
            )
            cy.get('[data-test="slideshow-item"]')
                .should('have.css', 'padding', '16px')
                .and('have.css', 'background-color', 'rgb(142, 142, 142)')
        })
    })
})
