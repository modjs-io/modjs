import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { RightChevronIcon, LoginIcon } from '../../../../icons/src/index'
import { Button } from '../../index'

describe('Button', () => {
    context('Default and custom props', () => {
        it('should render Button with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Button>Button with default props</Button>
                </ThemeProvider>,
            )
            cy.get('[data-test="button"]')
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
    context('Interactions and Behavior', () => {
        it('should disabled the button when disabled', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Button disabled={true}>Disabled button</Button>
                </ThemeProvider>,
            )
            cy.get('[data-test="button"]')
                .should('exist')
                .should('have.css', 'cursor', 'not-allowed')
        })
    })
    context('Styles and Variants', () => {
        context('Filled Button', () => {
            it('should render filled button with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Button variant="filled" notched={true}>
                            Filled Button With Notch
                        </Button>
                    </ThemeProvider>,
                )
                cy.get('[data-test="button"]')
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
            it('should render filled button without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Button variant="filled" notched={false}>
                            Filled Button Without Notch
                        </Button>
                    </ThemeProvider>,
                )
                cy.get('[data-test="button"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgb(31, 142, 255)')
                    .and('have.css', 'color', 'rgb(255, 255, 255)')
                    .and('have.css', 'font-size', '12px')
                    .and('have.css', 'font-weight', '400')
                    .and('have.css', 'text-transform', 'uppercase')
            })
        })
        context('Outlined Button', () => {
            it('should render outlined button with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Button variant="outlined" notched={true}>
                            Outlined Button With Notch
                        </Button>
                    </ThemeProvider>,
                )
                cy.get('[data-test="button"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                    .and('have.css', 'color', 'rgb(31, 142, 255)')
                    .and('have.css', 'font-size', '12px')
                    .and('have.css', 'font-weight', '400')
                    .and('have.css', 'text-transform', 'uppercase')
            })
            it('should render filled button without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Button variant="outlined" notched={false}>
                            Outlined Button Without Notch
                        </Button>
                    </ThemeProvider>,
                )
                cy.get('[data-test="button"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                    .and('have.css', 'color', 'rgb(31, 142, 255)')
                    .and('have.css', 'font-size', '12px')
                    .and('have.css', 'font-weight', '400')
                    .and('have.css', 'text-transform', 'uppercase')
            })
        })
        context('Transparent Button', () => {
            it('should render transparent button', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Button variant="transparent">
                            Transparent Button
                        </Button>
                    </ThemeProvider>,
                )
                cy.get('[data-test="button"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                    .and('have.css', 'color', 'rgb(31, 142, 255)')
                    .and('have.css', 'font-size', '14px')
                    .and('have.css', 'font-weight', '400')
                    .and('have.css', 'text-transform', 'uppercase')
            })
        })
        context('Icon Button', () => {
            it('should render icon button', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Button variant="icon">
                            <LoginIcon data-testid="login-icon" />
                        </Button>
                    </ThemeProvider>,
                )
                cy.get('[data-test="button"]')
                    .should('exist')
                    .within(() => {
                        cy.get('svg[data-testid="login-icon"]').should('exist')
                    })
            })
        })
        context('Inline Button', () => {
            it('should render inline button', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Button variant="inline">Inline Button</Button>
                    </ThemeProvider>,
                )
                cy.get('[data-test="button"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                    .and('have.css', 'color', 'rgb(31, 142, 255)')
                    .and('have.css', 'font-size', '16px')
                    .and('have.css', 'font-weight', '600')
                    .and('have.css', 'text-transform', 'none')
            })
        })
        context('Button with Adornments', () => {
            it('should render button with adornments', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Button variant="filled">
                            <LoginIcon fill="white" data-testid="login-icon" />
                            Button with Adornments
                            <RightChevronIcon
                                fill="white"
                                data-testid="right-chevron-icon"
                            />
                        </Button>
                    </ThemeProvider>,
                )
                cy.get('[data-test="button"]')
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
                    <Button bgColor="dark">
                        Button with styles from withLayout HOC
                    </Button>
                </ThemeProvider>,
            )
            cy.get('[data-test="button"]')
                .should('exist')
                .should('have.css', 'background-color', 'rgb(71, 71, 71)')
        })
    })
})
