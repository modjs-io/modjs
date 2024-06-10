import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { Fieldset } from '../../index'

describe('Fieldset', () => {
    context('Render with default props', () => {
        it('should render Fieldset component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Fieldset></Fieldset>
                </ThemeProvider>,
            )
            cy.get('[data-test="fieldset"]').should('exist')
        })
    })
    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Fieldset bgColor="light" p="normal"></Fieldset>
                </ThemeProvider>,
            )
            cy.get('[data-test="fieldset"]')
                .should('have.css', 'padding', '16px')
                .and('have.css', 'background-color', 'rgb(142, 142, 142)')
        })
    })
})
