import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { Header } from '../../index'

describe('Header', () => {
    context('Render with default props', () => {
        it('should render Header component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Header></Header>
                </ThemeProvider>,
            )
            cy.get('[data-test="header"]').should('exist')
        })
    })
    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Header bgColor="light" p="normal"></Header>
                </ThemeProvider>,
            )
            cy.get('[data-test="header"]')
                .should('have.css', 'padding', '16px')
                .and('have.css', 'background-color', 'rgb(142, 142, 142)')
        })
    })
})
