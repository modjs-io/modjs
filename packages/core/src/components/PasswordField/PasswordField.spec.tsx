import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AccountIcon } from '@modjs/icons'
import { ModTheme } from '@modjs/utils'
import { PasswordField } from '../../index'

describe('PasswordField', () => {
    context('Render with default and custom props', () => {
        it('should render PasswordField with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <PasswordField />
                </ThemeProvider>,
            )
            cy.get('input')
                .should('exist')
                .should('have.attr', 'minlength', '8')
                .should('have.attr', 'maxlength', '32')
                .should('have.attr', 'autocomplete', 'off')
                .should('have.attr', 'placeholder', 'Your Password *')
                .should('have.attr', 'type', 'password')
                .should('have.attr', 'name', 'password')
                .should('have.attr', 'id', 'password')
                .should('have.attr', 'value', '')
        })

        it('should render PasswordField with custom html attr', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <PasswordField
                        minLength="6"
                        maxLength="16"
                        autoComplete="on"
                        placeholder="Password *"
                        type="password"
                        name="your-pw"
                        id="your-pw"
                        startAdornment={
                            <AccountIcon fill={ModTheme.color.light} />
                        }
                    />
                </ThemeProvider>,
            )
            cy.get('input')
                .should('exist')
                .should('have.attr', 'minlength', '6')
                .should('have.attr', 'maxlength', '16')
                .should('have.attr', 'autocomplete', 'on')
                .should('have.attr', 'placeholder', 'Password *')
                .should('have.attr', 'type', 'password')
                .should('have.attr', 'name', 'your-pw')
                .should('have.attr', 'id', 'your-pw')
        })
    })

    context('Validations', () => {
        it('should not show error if the password meets all requirement', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <PasswordField />
                </ThemeProvider>,
            )
            cy.get('input').type('Testing1234!')
            cy.get('[data-testid="error"]').should('not.exist')
        })
        it('should show error if the password does not meet all requirements', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <PasswordField />
                </ThemeProvider>,
            )
            cy.get('input').type('Testing1234')
            cy.get('[data-testid="error"]').should('exist')
        })
    })

    context('Interactions', () => {
        context('Visibility', () => {
            it('should toggle visibility', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PasswordField />
                    </ThemeProvider>,
                )
                cy.get('input').focus().type('Testing1234!')
                cy.get('button').click()
                cy.get('input')
                    .should('exist')
                    .should('have.attr', 'type', 'text')
                cy.get('button').click()
                cy.get('input')
                    .should('exist')
                    .should('have.attr', 'type', 'password')
            })
        })
        context('Focus and Blur', () => {
            it('should show error if PasswordField is on focus and empty', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PasswordField />
                    </ThemeProvider>,
                )
                cy.get('input').focus()
                cy.get('[data-testid="error"]').should('exist')
            })
            it('should not show error if PasswordField is on focus and not empty and password meets all requirement', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PasswordField />
                    </ThemeProvider>,
                )
                cy.get('input').focus().type('Testing1234!')
                cy.get('[data-testid="error"]').should('not.exist')
            })
            it('should not show error if PasswordField is not on focus', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PasswordField />
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
                        <PasswordField />
                    </ThemeProvider>,
                )
                cy.get('input').type(' ').should('have.attr', 'value', '')
            })

            it('should not allow internal whitespaces', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PasswordField />
                    </ThemeProvider>,
                )
                cy.get('input')
                    .type('Testing      1234')
                    .should('have.attr', 'value', 'Testing1234')
            })
        })
    })

    context('Styles and Variants', () => {
        context('Filled PasswordField', () => {
            it('should render filled PasswordField without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PasswordField variant="filled" notched={false} />
                    </ThemeProvider>,
                )
            })
            it('should render filled PasswordField with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PasswordField variant="filled" notched={true} />
                    </ThemeProvider>,
                )
            })
        })

        context('Outlined PasswordField', () => {
            it('should render outlined PasswordField with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PasswordField variant="outlined" notched={true} />
                    </ThemeProvider>,
                )
            })
            it('should render outlined PasswordField without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PasswordField variant="outlined" notched={false} />
                    </ThemeProvider>,
                )
            })
        })

        context('Transparent PasswordField', () => {
            it('should render transparent PasswordField', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PasswordField variant="transparent" />
                    </ThemeProvider>,
                )
            })
            it('should not have notch effect on transparent PasswordField', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PasswordField variant="transparent" notched={true} />
                    </ThemeProvider>,
                )
            })
        })
    })
})
