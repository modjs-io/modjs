import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { Nav } from '../../index'

describe('Nav', () => {
    context('Render with default props', () => {
        it('should render Nav component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Nav></Nav>
                </ThemeProvider>,
            )
            cy.get('[data-test="nav"]').should('exist')
        })
    })
    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Nav bgColor="light" p="normal"></Nav>
                </ThemeProvider>,
            )
            cy.get('[data-test="nav"]')
                .should('have.css', 'padding', '16px')
                .and('have.css', 'background-color', 'rgb(142, 142, 142)')
        })
    })
})
