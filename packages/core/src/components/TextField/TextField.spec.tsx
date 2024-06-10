import React from 'react'
import { ThemeProvider } from 'styled-components'
import { EmailIcon } from '../../../../icons/src/index'
import { ModTheme } from '../../../../utils/src/index'
import { TextField } from '../../index'

describe('TextField', () => {
    context('Render with default and custom props', () => {
        it('should render TextField with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <TextField />
                </ThemeProvider>,
            )
            cy.get('input')
                .should('exist')
                .should('have.attr', 'minlength', '1')
                .should('have.attr', 'maxlength', '200')
                .should('have.attr', 'autocomplete', 'off')
                .should('have.attr', 'type', 'text')
                .focus()
            cy.get('[data-testid="char-length"]').contains(/200 characters$/)
        })

        it('should render TextField with custom html attr', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <TextField
                        minLength="2"
                        maxLength="10"
                        autoComplete="on"
                        placeholder="Write something..."
                        type="text"
                        name="test"
                        id="test"
                        startAdornment={
                            <EmailIcon fill={ModTheme.color.light} />
                        }
                    />
                </ThemeProvider>,
            )
            cy.get('input')
                .should('exist')
                .should('have.attr', 'minlength', '2')
                .should('have.attr', 'maxlength', '10')
                .should('have.attr', 'autocomplete', 'on')
                .should('have.attr', 'placeholder', 'Write something...')
                .should('have.attr', 'type', 'text')
                .should('have.attr', 'name', 'test')
                .should('have.attr', 'id', 'test')
        })
    })

    context('Interactions', () => {
        context('Focus and Blur', () => {
            it('should show character count if TextField is on focus', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <TextField />
                    </ThemeProvider>,
                )
                cy.get('input').focus()
                cy.get('[data-testid="character-count"]').should('exist')
            })
            it('should not show character count if TextField is not on focus', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <TextField />
                    </ThemeProvider>,
                )
                cy.get('input').focus().blur()
                cy.get('[data-testid="character-count"]').should('not.exist')
            })
        })
        context('MaxLength', () => {
            it('should not allow characters more than maxlength', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <TextField maxLength="5" />
                    </ThemeProvider>,
                )
                cy.get('input')
                    .type('Prashan Pudasaini')
                    .should('have.attr', 'value', 'Prash')
            })
        })
    })

    context('Validations', () => {
        context('MinLength', () => {
            it('should show error icon if minlength is not satisfied', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <TextField minLength="4" />
                    </ThemeProvider>,
                )
                cy.get('input').type('Pr')
                cy.get('[data-testid=length-error]').should('exist')
                cy.get('[data-testid=length-success]').should('not.exist')
            })

            it('should show success icon if minlength is satisfied', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <TextField minLength="4" />
                    </ThemeProvider>,
                )
                cy.get('input').type('Prashan')
                cy.get('[data-testid=length-error]').should('not.exist')
                cy.get('[data-testid=length-success]').should('exist')
            })
        })
        context('MaxLength', () => {
            it('should display the correct max length', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <TextField maxLength="6" />
                    </ThemeProvider>,
                )
                cy.get('input').focus()
                cy.get('[data-testid="char-length"]').contains(/6 characters$/)
            })
        })
    })

    context('Styles and Variants', () => {
        context('Filled TextField', () => {
            it('should render filled TextField without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <TextField variant="filled" notched={false} />
                    </ThemeProvider>,
                )
            })
            it('should render filled TextField with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <TextField variant="filled" notched={true} />
                    </ThemeProvider>,
                )
            })
        })
        context('Outlined TextField', () => {
            it('should render outlined TextField with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <TextField variant="outlined" notched={true} />
                    </ThemeProvider>,
                )
            })
            it('should render outlined TextField without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <TextField variant="outlined" notched={false} />
                    </ThemeProvider>,
                )
            })
        })
        context('Transparent TextField', () => {
            it('should render transparent TextField', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <TextField variant="transparent" />
                    </ThemeProvider>,
                )
            })
            it('should not have notch effect on transparent TextField', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <TextField variant="transparent" notched={true} />
                    </ThemeProvider>,
                )
            })
        })
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <TextField variant="filled" p="normal" bgColor="light" />
                </ThemeProvider>,
            )
            cy.get('[data-test="text-field"]')
                .should('have.css', 'padding', '16px')
                .and('have.css', 'background-color', 'rgb(142, 142, 142)')
        })
    })
})
