import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { List } from '../../index'

describe('List', () => {
    context('Render with default props', () => {
        it('should render List component with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <List>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </List>
                    <List>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </List>
                </ThemeProvider>,
            )
            cy.get('[data-test="list"]')
                .should('exist')
                .should('have.css', 'list-style', 'outside none none')
        })
    })
    context('Styles and Variants', () => {
        context('List Style', () => {
            it('should render List with square style', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <List listStyle="square">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </List>
                        <List listStyle="square">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </List>
                        <List listStyle="square">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </List>
                    </ThemeProvider>,
                )
                cy.get('[data-test="list"]')
                    .should('exist')
                    .should('have.css', 'list-style', 'outside none square')
            })
            it('should render List with inline style', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <List listStyle="inline">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </List>
                        <List listStyle="inline">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </List>
                        <List listStyle="inline">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </List>
                    </ThemeProvider>,
                )
                cy.get('[data-test="list"]')
                    .should('exist')
                    .should('have.css', 'list-style', 'outside none disc')
            })
            it('should render List with none style', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <List listStyle="none">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </List>
                        <List listStyle="none">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </List>
                        <List listStyle="none">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </List>
                    </ThemeProvider>,
                )
                cy.get('[data-test="list"]')
                    .should('exist')
                    .should('have.css', 'list-style', 'outside none none')
            })
        })
    })
})
