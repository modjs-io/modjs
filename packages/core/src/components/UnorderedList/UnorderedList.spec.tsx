import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
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
