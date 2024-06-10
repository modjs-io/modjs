import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { RightChevronIcon, LoginIcon } from '../../../../icons/src/index'
import { Link } from '../../index'

describe('Link', () => {
    context('Default and custom props', () => {
        it('should render Link with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Link>Link with default props</Link>
                </ThemeProvider>,
            )
            cy.get('[data-test="link"]')
                .should('exist')
                .should(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
                .and('have.css', 'background-color', 'rgb(31, 142, 255)')
                .and('have.css', 'color', 'rgb(255, 255, 255)')
                .and('have.css', 'font-size', '12px')
                .and('have.css', 'font-weight', '400')
                .and('have.css', 'text-transform', 'uppercase')
        })
    })
    context('Styles and Variants', () => {
        context('Filled Link', () => {
            it('should render filled Link with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Link variant="filled" notched={true}>
                            Filled Link With Notch
                        </Link>
                    </ThemeProvider>,
                )
                cy.get('[data-test="link"]')
                    .should('exist')
                    .should(
                        'have.css',
                        'clip-path',
                        'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                    )
                    .and('have.css', 'background-color', 'rgb(31, 142, 255)')
                    .and('have.css', 'color', 'rgb(255, 255, 255)')
                    .and('have.css', 'font-size', '12px')
                    .and('have.css', 'font-weight', '400')
                    .and('have.css', 'text-transform', 'uppercase')
            })
            it('should render filled Link without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Link variant="filled" notched={false}>
                            Filled Link Without Notch
                        </Link>
                    </ThemeProvider>,
                )
                cy.get('[data-test="link"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgb(31, 142, 255)')
                    .and('have.css', 'color', 'rgb(255, 255, 255)')
                    .and('have.css', 'font-size', '12px')
                    .and('have.css', 'font-weight', '400')
                    .and('have.css', 'text-transform', 'uppercase')
            })
        })
        context('Outlined Link', () => {
            it('should render outlined Link with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Link variant="outlined" notched={true}>
                            Outlined Link With Notch
                        </Link>
                    </ThemeProvider>,
                )
                cy.get('[data-test="link"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                    .and('have.css', 'color', 'rgb(31, 142, 255)')
                    .and('have.css', 'font-size', '12px')
                    .and('have.css', 'font-weight', '400')
                    .and('have.css', 'text-transform', 'uppercase')
            })
            it('should render filled Link without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Link variant="outlined" notched={false}>
                            Outlined Link Without Notch
                        </Link>
                    </ThemeProvider>,
                )
                cy.get('[data-test="link"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                    .and('have.css', 'color', 'rgb(31, 142, 255)')
                    .and('have.css', 'font-size', '12px')
                    .and('have.css', 'font-weight', '400')
                    .and('have.css', 'text-transform', 'uppercase')
            })
        })
        context('Transparent Link', () => {
            it('should render transparent Link', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Link variant="transparent">Transparent Link</Link>
                    </ThemeProvider>,
                )
                cy.get('[data-test="link"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                    .and('have.css', 'color', 'rgb(31, 142, 255)')
                    .and('have.css', 'font-size', '14px')
                    .and('have.css', 'font-weight', '400')
                    .and('have.css', 'text-transform', 'uppercase')
            })
        })
        context('Icon Link', () => {
            it('should render icon Link', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Link variant="icon">
                            <LoginIcon data-testid="login-icon" />
                        </Link>
                    </ThemeProvider>,
                )
                cy.get('[data-test="link"]')
                    .should('exist')
                    .within(() => {
                        cy.get('svg[data-testid="login-icon"]').should('exist')
                    })
            })
        })
        context('Inline Link', () => {
            it('should render inline Link', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Link variant="inline">Inline Link</Link>
                    </ThemeProvider>,
                )
                cy.get('[data-test="link"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                    .and('have.css', 'color', 'rgb(31, 142, 255)')
                    .and('have.css', 'font-size', '16px')
                    .and('have.css', 'font-weight', '600')
                    .and('have.css', 'text-transform', 'none')
            })
        })
        context('Link with Adornments', () => {
            it('should render Link with adornments', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Link variant="filled">
                            <LoginIcon fill="white" data-testid="login-icon" />
                            Link with Adornments
                            <RightChevronIcon
                                fill="white"
                                data-testid="right-chevron-icon"
                            />
                        </Link>
                    </ThemeProvider>,
                )
                cy.get('[data-test="link"]')
                    .should('exist')
                    .within(() => {
                        cy.get('svg[data-testid="login-icon"]').should('exist')
                    })
                    .within(() => {
                        cy.get('svg[data-testid="right-chevron-icon"]').should(
                            'exist',
                        )
                    })
            })
        })
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Link bgColor="dark">
                        LInk with styles from withLayout HOC
                    </Link>
                </ThemeProvider>,
            )
            cy.get('[data-test="link"]')
                .should('exist')
                .should('have.css', 'background-color', 'rgb(71, 71, 71)')
        })
    })
})
