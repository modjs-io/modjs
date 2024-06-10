import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { OrderedList } from '../../index'

describe('OrderedList', () => {
    context('Render with default props', () => {
        it('should render OrderedList with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <OrderedList>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry.
                    </OrderedList>
                </ThemeProvider>,
            )
            cy.get('[data-test="ordered-list"]')
                .should('exist')
                .should('have.css', 'padding-left', '48px')
        })
    })
    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <OrderedList bgColor="light" p="normal">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </OrderedList>
                </ThemeProvider>,
            )
            cy.get('[data-test="ordered-list"]')
                .should('have.css', 'padding', '16px')
                .and('have.css', 'background-color', 'rgb(142, 142, 142)')
        })
        context('Indentation', () => {
            it('should render OrderedList with indent', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <OrderedList indent={true}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </OrderedList>
                    </ThemeProvider>,
                )
                cy.get('[data-test="ordered-list"]')
                    .should('exist')
                    .should('have.css', 'padding-left', '48px')
            })
            it('should render OrderedList without indent', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <OrderedList indent={false}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </OrderedList>
                    </ThemeProvider>,
                )
                cy.get('[data-test="ordered-list"]')
                    .should('exist')
                    .should('have.css', 'padding-left', '0px')
            })
        })
    })
})
