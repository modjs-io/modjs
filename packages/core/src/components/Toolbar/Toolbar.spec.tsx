import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { Toolbar } from '../../index'

describe('Toolbar', () => {
    context('Render with default props', () => {
        it('should render Article component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Toolbar></Toolbar>
                </ThemeProvider>,
            )
            cy.get('[data-test="toolbar"]').should('exist')
        })
    })
    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Toolbar bgColor="light" p="normal"></Toolbar>
                </ThemeProvider>,
            )
            cy.get('[data-test="toolbar"]')
                .should('have.css', 'padding', '16px')
                .and('have.css', 'background-color', 'rgb(142, 142, 142)')
        })
    })
})
