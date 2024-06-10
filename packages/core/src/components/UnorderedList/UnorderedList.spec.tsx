import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { UnorderedList } from '../../index'

describe('UnorderedList', () => {
    context('Render with default props', () => {
        it('should render UnorderedList with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <UnorderedList>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry.
                    </UnorderedList>
                </ThemeProvider>,
            )
            cy.get('[data-test="unordered-list"]')
                .should('exist')
                .should('have.css', 'padding-left', '48px')
        })
    })
    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <UnorderedList bgColor="light" p="normal">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </UnorderedList>
                </ThemeProvider>,
            )
            cy.get('[data-test="unordered-list"]')
                .should('have.css', 'padding', '16px')
                .and('have.css', 'background-color', 'rgb(142, 142, 142)')
        })
        context('Indentation', () => {
            it('should render UnorderedList with indent', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <UnorderedList indent={true}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </UnorderedList>
                    </ThemeProvider>,
                )
                cy.get('[data-test="unordered-list"]')
                    .should('exist')
                    .should('have.css', 'padding-left', '48px')
            })
            it('should render UnorderedList without indent', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <UnorderedList indent={false}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </UnorderedList>
                    </ThemeProvider>,
                )
                cy.get('[data-test="unordered-list"]')
                    .should('exist')
                    .should('have.css', 'padding-left', '0px')
            })
        })
    })
})
