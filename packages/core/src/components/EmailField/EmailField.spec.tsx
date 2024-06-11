import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AccountIcon } from '@modjs/icons'
import { ModTheme } from '@modjs/utils'
import { EmailField } from '../../index'

describe('EmailField', () => {
    context('Render with default and custom props', () => {
        it('should render EmailField with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <EmailField />
                </ThemeProvider>,
            )
            cy.get('input')
                .should('exist')
                .should('have.attr', 'minlength', '6')
                .should('have.attr', 'maxlength', '64')
                .should('have.attr', 'autocomplete', 'off')
                .should('have.attr', 'placeholder', 'Your Email *')
                .should('have.attr', 'type', 'text')
                .should('have.attr', 'name', 'email')
                .should('have.attr', 'id', 'email')
                .should('have.attr', 'value', '')
        })

        it('should render EmailField with custom html attr', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <EmailField
                        minLength="4"
                        maxLength="16"
                        autoComplete="on"
                        placeholder="Email *"
                        type="email"
                        name="your-email"
                        id="your-email"
                        startAdornment={
                            <AccountIcon fill={ModTheme.color.light} />
                        }
                    />
                </ThemeProvider>,
            )
            cy.get('input')
                .should('exist')
                .should('have.attr', 'minlength', '4')
                .should('have.attr', 'maxlength', '16')
                .should('have.attr', 'autocomplete', 'on')
                .should('have.attr', 'placeholder', 'Email *')
                .should('have.attr', 'type', 'email')
                .should('have.attr', 'name', 'your-email')
                .should('have.attr', 'id', 'your-email')
        })
    })

    context('Validations', () => {
        it('should not show error if the email is valid', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <EmailField />
                </ThemeProvider>,
            )
            cy.get('input').type('test@example.com')
            cy.get('[data-testid="error"]').should('not.exist')
        })
        it('should show error if the email is not valid', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <EmailField />
                </ThemeProvider>,
            )
            cy.get('input').type('test@e')
            cy.get('[data-testid="error"]').should('exist')
        })
    })

    context('Interactions', () => {
        context('Focus and Blur', () => {
            it('should show error if EmailField is on focus and empty', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <EmailField />
                    </ThemeProvider>,
                )
                cy.get('input').focus()
                cy.get('[data-testid="error"]').should('exist')
            })
            it('should not show error if EmailField is on focus and not empty and is valid', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <EmailField />
                    </ThemeProvider>,
                )
                cy.get('input').focus().type('test@example.com')
                cy.get('[data-testid="error"]').should('not.exist')
            })
            it('should not show error if EmailField is not on focus', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <EmailField />
                    </ThemeProvider>,
                )
                cy.get('input').focus().blur()
                cy.get('[data-testid="error"]').should('not.exist')
            })
        })
        context('Whitespaces', () => {
            it('should not allow leading whitespaces', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <EmailField />
                    </ThemeProvider>,
                )
                cy.get('input').type(' ').should('have.attr', 'value', '')
            })

            it('should not allow internal whitespaces', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <EmailField />
                    </ThemeProvider>,
                )
                cy.get('input')
                    .type('test@     example.    com')
                    .should('have.attr', 'value', 'test@example.com')
            })
        })
    })

    context('Styles and Variants', () => {
        context('Filled EmailField', () => {
            it('should render filled EmailField without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <EmailField variant="filled" notched={false} />
                    </ThemeProvider>,
                )
            })
            it('should render filled EmailField with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <EmailField variant="filled" notched={true} />
                    </ThemeProvider>,
                )
            })
        })

        context('Outlined EmailField', () => {
            it('should render outlined EmailField with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <EmailField variant="outlined" notched={true} />
                    </ThemeProvider>,
                )
            })
            it('should render outlined EmailField without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <EmailField variant="outlined" notched={false} />
                    </ThemeProvider>,
                )
            })
        })

        context('Transparent EmailField', () => {
            it('should render transparent EmailField', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <EmailField variant="transparent" />
                    </ThemeProvider>,
                )
            })
            it('should not have notch effect on transparent EmailField', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <EmailField variant="transparent" notched={true} />
                    </ThemeProvider>,
                )
            })
        })
    })
})
