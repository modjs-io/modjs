import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AccountIcon } from '@modjs/icons'
import { ModTheme } from '@modjs/utils'
import { ConfirmPasswordField } from '../../index'

describe('ConfirmPasswordField', () => {
    context('Render with default and custom props', () => {
        it('should render ConfirmPasswordField with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <ConfirmPasswordField />
                </ThemeProvider>,
            )
            cy.get('input')
                .should('exist')
                .should('have.attr', 'minlength', '8')
                .should('have.attr', 'maxlength', '32')
                .should('have.attr', 'autocomplete', 'off')
                .should('have.attr', 'placeholder', 'Confirm Password *')
                .should('have.attr', 'type', 'password')
                .should('have.attr', 'name', 'confirm-password')
                .should('have.attr', 'id', 'confirm-password')
                .should('have.attr', 'value', '')
        })

        it('should render ConfirmPasswordField with custom html attr', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <ConfirmPasswordField
                        minLength="6"
                        maxLength="16"
                        autoComplete="on"
                        placeholder="Confirm Your Password *"
                        type="password"
                        name="confirm-pw"
                        id="confirm-pw"
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
                .should('have.attr', 'placeholder', 'Confirm Your Password *')
                .should('have.attr', 'type', 'password')
                .should('have.attr', 'name', 'confirm-pw')
                .should('have.attr', 'id', 'confirm-pw')
        })
    })

    context('Validations', () => {
        context('Match', () => {
            it('should show error if the value does not match the password', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <ConfirmPasswordField compareWith="Testing1234!" />
                    </ThemeProvider>,
                )
                cy.get('input').focus().type('Testing')
                cy.get('[data-testid="error"]').should('exist')
            })
            it('should not show error if the value matches the password', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <ConfirmPasswordField compareWith="Testing1234!" />
                    </ThemeProvider>,
                )
                cy.get('input').focus().type('Testing1234!')
                cy.get('[data-testid="error"]').should('not.exist')
            })
        })
    })

    context('Interactions', () => {
        context('Whitespaces', () => {
            it('should not allow leading whitespaces', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <ConfirmPasswordField />
                    </ThemeProvider>,
                )
                cy.get('input').type(' ').should('have.attr', 'value', '')
            })

            it('should not allow internal whitespaces', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <ConfirmPasswordField />
                    </ThemeProvider>,
                )
                cy.get('input')
                    .type('Testing      1234')
                    .should('have.attr', 'value', 'Testing1234')
            })
            context('MaxLength', () => {
                it('should not allow characters more than maxlength', () => {
                    cy.mount(
                        <ThemeProvider theme={ModTheme}>
                            <ConfirmPasswordField maxLength="5" />
                        </ThemeProvider>,
                    )
                    cy.get('input')
                        .type('Testing1234!')
                        .should('have.attr', 'value', 'Testi')
                })
            })
        })
        context('Focus and Blur', () => {
            it('should show error if ConfirmPasswordField is on focus and empty', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <ConfirmPasswordField />
                    </ThemeProvider>,
                )
                cy.get('input').focus()
                cy.get('[data-testid="error"]').should('exist')
            })
            it('should not show error if ConfirmPasswordField is on focus and not empty and password matches', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <ConfirmPasswordField compareWith="Testing1234!" />
                    </ThemeProvider>,
                )
                cy.get('input').focus().type('Testing1234!')
                cy.get('[data-testid="error"]').should('not.exist')
            })
            it('should not show error if ConfirmPasswordField is not on focus', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <ConfirmPasswordField />
                    </ThemeProvider>,
                )
                cy.get('input').focus().blur()
                cy.get('[data-testid="error"]').should('not.exist')
            })
        })
        context('Visibility', () => {
            it('should toggle visibility', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <ConfirmPasswordField />
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
    })

    context('Styles and Variants', () => {
        context('Filled ConfirmPasswordField', () => {
            it('should render filled ConfirmPasswordField without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <ConfirmPasswordField
                            variant="filled"
                            notched={false}
                        />
                    </ThemeProvider>,
                )
            })
            it('should render filled ConfirmPasswordField with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <ConfirmPasswordField variant="filled" notched={true} />
                    </ThemeProvider>,
                )
            })
        })

        context('Outlined ConfirmPasswordField', () => {
            it('should render outlined ConfirmPasswordField with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <ConfirmPasswordField
                            variant="outlined"
                            notched={true}
                        />
                    </ThemeProvider>,
                )
            })
            it('should render outlined ConfirmPasswordField without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <ConfirmPasswordField
                            variant="outlined"
                            notched={false}
                        />
                    </ThemeProvider>,
                )
            })
        })

        context('Transparent ConfirmPasswordField', () => {
            it('should render transparent ConfirmPasswordField', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <ConfirmPasswordField variant="transparent" />
                    </ThemeProvider>,
                )
            })
            it('should not have notch effect on transparent ConfirmPasswordField', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <ConfirmPasswordField
                            variant="transparent"
                            notched={true}
                        />
                    </ThemeProvider>,
                )
            })
        })
    })
})
