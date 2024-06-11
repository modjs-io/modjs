import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AccountIcon } from '@modjs/icons'
import { ModTheme } from '@modjs/utils'
import { PhoneField } from '../../index'

describe('PhoneField', () => {
    context('Render with default and custom props', () => {
        it('should render PhoneField with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <PhoneField />
                </ThemeProvider>,
            )
            cy.get('input')
                .should('exist')
                .should('have.attr', 'autocomplete', 'off')
                .should('have.attr', 'placeholder', 'Your Phone Number *')
                .should('have.attr', 'type', 'text')
                .should('have.attr', 'name', 'phone')
                .should('have.attr', 'id', 'phone')
                .should('have.attr', 'value', '')
        })

        it('should render PhoneField with custom html attr', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <PhoneField
                        autoComplete="on"
                        placeholder="Phone Number *"
                        type="text"
                        name="your-phone"
                        id="your-phone"
                        startAdornment={
                            <AccountIcon fill={ModTheme.color.light} />
                        }
                    />
                </ThemeProvider>,
            )
            cy.get('input')
                .should('exist')
                .should('have.attr', 'autocomplete', 'on')
                .should('have.attr', 'placeholder', 'Phone Number *')
                .should('have.attr', 'type', 'text')
                .should('have.attr', 'name', 'your-phone')
                .should('have.attr', 'id', 'your-phone')
        })
    })

    context('Validations', () => {
        it('should not show error if the phone number is valid', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <PhoneField minLength="2" />
                </ThemeProvider>,
            )
            cy.get('input').type('1234567890')
            cy.get('[data-testid="error"]').should('not.exist')
        })
        it('should show error if the phone number is not valid', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <PhoneField minLength="6" />
                </ThemeProvider>,
            )
            cy.get('input').type('123456')
            cy.get('[data-testid="error"]').should('exist')
        })
    })

    context('Interactions', () => {
        context('Focus and Blur', () => {
            it('should show error if PhoneField is on focus and empty', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PhoneField />
                    </ThemeProvider>,
                )
                cy.get('input').focus()
                cy.get('[data-testid="error"]').should('exist')
            })
            it('should not show error if PhoneField is on focus and not empty and is valid', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PhoneField />
                    </ThemeProvider>,
                )
                cy.get('input').focus().type('1234567890')
                cy.get('[data-testid="error"]').should('not.exist')
            })
            it('should not show error if PhoneField is not on focus', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PhoneField />
                    </ThemeProvider>,
                )
                cy.get('input').focus().blur()
                cy.get('[data-testid="error"]').should('not.exist')
            })
        })
        context('Formatting', () => {
            it('should format the phone number correctly', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PhoneField />
                    </ThemeProvider>,
                )
                cy.get('input')
                    .focus()
                    .type('1234567890')
                    .should('have.attr', 'value', '(123) 456-7890')
            })
        })
        context('Whitespaces', () => {
            it('should not allow leading whitespaces', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PhoneField />
                    </ThemeProvider>,
                )
                cy.get('input').type(' ').should('have.attr', 'value', '')
            })

            it('should not allow internal whitespaces', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PhoneField />
                    </ThemeProvider>,
                )
                cy.get('input')
                    .type('123     456   7890')
                    .should('have.attr', 'value', '(123) 456-7890')
            })
        })
    })

    context('Styles and Variants', () => {
        context('Filled PhoneField', () => {
            it('should render filled PhoneField without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PhoneField variant="filled" notched={false} />
                    </ThemeProvider>,
                )
            })
            it('should render filled PhoneField with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PhoneField variant="filled" notched={true} />
                    </ThemeProvider>,
                )
            })
        })

        context('Outlined PhoneField', () => {
            it('should render outlined PhoneField with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PhoneField variant="outlined" notched={true} />
                    </ThemeProvider>,
                )
            })
            it('should render outlined PhoneField without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PhoneField variant="outlined" notched={false} />
                    </ThemeProvider>,
                )
            })
        })

        context('Transparent PhoneField', () => {
            it('should render transparent PhoneField', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PhoneField variant="transparent" />
                    </ThemeProvider>,
                )
            })
            it('should not have notch effect on transparent PhoneField', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <PhoneField variant="transparent" notched={true} />
                    </ThemeProvider>,
                )
            })
        })
    })
})
