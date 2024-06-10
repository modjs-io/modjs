import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { Form } from '../../index'

describe('Form', () => {
    context('Render with default props', () => {
        it('should render Form component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Form></Form>
                </ThemeProvider>,
            )
            cy.get('[data-test="form"]').should('exist')
        })
    })
    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Form bgColor="light" p="normal"></Form>
                </ThemeProvider>,
            )
            cy.get('[data-test="form"]')
                .should('have.css', 'padding', '16px')
                .and('have.css', 'background-color', 'rgb(142, 142, 142)')
        })
    })
})
