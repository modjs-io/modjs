import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AccountIcon } from '../../../../icons/src/index'
import { ModTheme } from '../../../../utils/src/index'
import { UrlField } from '../../index'

describe('UrlField', () => {
    context('Render with default and custom props', () => {
        it('should render UrlField with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <UrlField />
                </ThemeProvider>,
            )
            cy.get('input')
                .should('exist')
                .should('have.attr', 'minlength', '3')
                .should('have.attr', 'maxlength', '2048')
                .should('have.attr', 'autocomplete', 'off')
                .should('have.attr', 'placeholder', 'Your Website *')
                .should('have.attr', 'type', 'text')
                .should('have.attr', 'name', 'website')
                .should('have.attr', 'id', 'website')
                .should('have.attr', 'value', '')
        })

        it('should render UrlField with custom html attr', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <UrlField
                        minLength="4"
                        maxLength="16"
                        autoComplete="on"
                        placeholder="Website *"
                        type="text"
                        name="your-website"
                        id="your-website"
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
                .should('have.attr', 'placeholder', 'Website *')
                .should('have.attr', 'type', 'text')
                .should('have.attr', 'name', 'your-website')
                .should('have.attr', 'id', 'your-website')
        })
    })

    context('Validations', () => {
        it('should not show error if the url is of valid length', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <UrlField minLength="2" />
                </ThemeProvider>,
            )
            cy.get('input').type('test.com')
            cy.get('[data-testid="error"]').should('not.exist')
        })
        it('should show error if the url is not of valid length', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <UrlField minLength="6" />
                </ThemeProvider>,
            )
            cy.get('input').type('t.co')
            cy.get('[data-testid="error"]').should('exist')
        })
    })

    context('Interactions', () => {
        context('Focus and Blur', () => {
            it('should show error if UrlField is on focus and empty', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <UrlField />
                    </ThemeProvider>,
                )
                cy.get('input').focus()
                cy.get('[data-testid="error"]').should('exist')
            })
            it('should not show error if UrlField is on focus and not empty and is valid', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <UrlField />
                    </ThemeProvider>,
                )
                cy.get('input').focus().type('example.com')
                cy.get('[data-testid="error"]').should('not.exist')
            })
            it('should not show error if UrlField is not on focus', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <UrlField />
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
                        <UrlField />
                    </ThemeProvider>,
                )
                cy.get('input').type(' ').should('have.attr', 'value', '')
            })

            it('should not allow internal whitespaces', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <UrlField />
                    </ThemeProvider>,
                )
                cy.get('input')
                    .type('test@     example.    com')
                    .should('have.attr', 'value', 'test@example.com')
            })
        })
    })

    context('Styles and Variants', () => {
        context('Filled UrlField', () => {
            it('should render filled UrlField without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <UrlField variant="filled" notched={false} />
                    </ThemeProvider>,
                )
            })
            it('should render filled UrlField with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <UrlField variant="filled" notched={true} />
                    </ThemeProvider>,
                )
            })
        })

        context('Outlined UrlField', () => {
            it('should render outlined UrlField with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <UrlField variant="outlined" notched={true} />
                    </ThemeProvider>,
                )
            })
            it('should render outlined UrlField without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <UrlField variant="outlined" notched={false} />
                    </ThemeProvider>,
                )
            })
        })

        context('Transparent UrlField', () => {
            it('should render transparent UrlField', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <UrlField variant="transparent" />
                    </ThemeProvider>,
                )
            })
            it('should not have notch effect on transparent UrlField', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <UrlField variant="transparent" notched={true} />
                    </ThemeProvider>,
                )
            })
        })
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <UrlField variant="filled" p="normal" bgColor="light" />
                </ThemeProvider>,
            )
            cy.get('[data-test="url-field"]')
                .should('have.css', 'padding', '16px')
                .and('have.css', 'background-color', 'rgb(142, 142, 142)')
        })
    })
})
