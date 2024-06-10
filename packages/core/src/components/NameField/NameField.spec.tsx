import React from 'react'
import { ThemeProvider } from 'styled-components'
import { EmailIcon } from '../../../../icons/src/index'
import { ModTheme } from '../../../../utils/src/index'
import { NameField } from '../../index'

describe('NameField', () => {
    context('Render with default and custom props', () => {
        it('should render NameField with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <NameField />
                </ThemeProvider>,
            )
            cy.get('input')
                .should('exist')
                .should('have.attr', 'minlength', '2')
                .should('have.attr', 'maxlength', '64')
                .should('have.attr', 'autocomplete', 'off')
                .should('have.attr', 'placeholder', 'Your Full Name *')
                .should('have.attr', 'type', 'text')
                .should('have.attr', 'name', 'name')
                .should('have.attr', 'id', 'name')
        })

        it('should render NameField with custom html attr', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <NameField
                        minLength="4"
                        maxLength="10"
                        autoComplete="on"
                        placeholder="Your Name *"
                        type="text"
                        name="full-name"
                        id="full-name"
                        startAdornment={
                            <EmailIcon fill={ModTheme.color.light} />
                        }
                    />
                </ThemeProvider>,
            )
            cy.get('input')
                .should('exist')
                .should('have.attr', 'minlength', '4')
                .should('have.attr', 'maxlength', '10')
                .should('have.attr', 'autocomplete', 'on')
                .should('have.attr', 'placeholder', 'Your Name *')
                .should('have.attr', 'type', 'text')
                .should('have.attr', 'name', 'full-name')
                .should('have.attr', 'id', 'full-name')
        })
    })

    context('Interactions', () => {
        context('Focus and Blur', () => {
            it('should show error if NameField is on focus and empty', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <NameField />
                    </ThemeProvider>,
                )
                cy.get('input').focus()
                cy.get('[data-testid="error"]').should('exist')
            })
            it('should not show error if NameField is on focus but not empty', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <NameField />
                    </ThemeProvider>,
                )
                cy.get('input').focus().type('Prashan Pudasaini')
                cy.get('[data-testid="error"]').should('not.exist')
            })
            it('should not show error if NameField is not on focus', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <NameField />
                    </ThemeProvider>,
                )
                cy.get('input').focus().blur()
                cy.get('[data-testid="error"]').should('not.exist')
            })
        })
        context('MaxLength', () => {
            it('should not allow characters more than maxlength', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <NameField maxLength="5" />
                    </ThemeProvider>,
                )
                cy.get('input')
                    .type('Prashan Pudasaini')
                    .should('have.attr', 'value', 'Prash')
            })
        })
        context('Formatting', () => {
            it('should auto capitalize first letter of the name', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <NameField />
                    </ThemeProvider>,
                )
                cy.get('input')
                    .type('prashan pudasaini')
                    .should('have.attr', 'value', 'Prashan Pudasaini')
            })
        })
        context('Whitespaces', () => {
            it('should not allow leading whitespaces', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <NameField />
                    </ThemeProvider>,
                )
                cy.get('input').type(' ').should('have.attr', 'value', '')
            })

            it('should replace multiple internal whitespaces with a single whitespace', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <NameField />
                    </ThemeProvider>,
                )
                cy.get('input')
                    .type('Prashan         Pudasaini')
                    .should('have.attr', 'value', 'Prashan Pudasaini')
            })

            it('should show error if the value contains trailing whitespace', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <NameField />
                    </ThemeProvider>,
                )
                cy.get('input').type('Prashan ')
                cy.get('[data-testid=error]').should('exist')
            })

            it('should not show error if the value does not contain trailing whitespace', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <NameField />
                    </ThemeProvider>,
                )
                cy.get('input').type('Prashan Pudasaini')
                cy.get('[data-testid=error]').should('not.exist')
            })
        })
    })

    context('Validations', () => {
        context('MinLength', () => {
            it('should show error if minlength is not satisfied', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <NameField minLength="4" />
                    </ThemeProvider>,
                )
                cy.get('input').type('Pr')
                cy.get('[data-testid=error]').should('exist')
            })

            it('should not show error if minlength is satisfied', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <NameField minLength="4" />
                    </ThemeProvider>,
                )
                cy.get('input').type('Prashan')
                cy.get('[data-testid=error]').should('not.exist')
            })
        })
    })

    context('Styles and Variants', () => {
        context('Filled NameField', () => {
            it('should render filled NameField without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <NameField variant="filled" notched={false} />
                    </ThemeProvider>,
                )
            })
            it('should render filled NameField with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <NameField variant="filled" notched={true} />
                    </ThemeProvider>,
                )
            })
        })
        context('Outlined NameField', () => {
            it('should render outlined NameField with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <NameField variant="outlined" notched={true} />
                    </ThemeProvider>,
                )
            })
            it('should render outlined NameField without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <NameField variant="outlined" notched={false} />
                    </ThemeProvider>,
                )
            })
        })
        context('Transparent NameField', () => {
            it('should render transparent NameField', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <NameField variant="transparent" />
                    </ThemeProvider>,
                )
            })
            it('should not have notch effect on transparent NameField', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <NameField variant="transparent" notched={true} />
                    </ThemeProvider>,
                )
            })
        })
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <NameField variant="filled" p="normal" bgColor="light" />
                </ThemeProvider>,
            )
            cy.get('[data-test="name-field"]')
                .should('have.css', 'padding', '16px')
                .and('have.css', 'background-color', 'rgb(142, 142, 142)')
        })
    })
})
