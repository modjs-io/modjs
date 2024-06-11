import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { MessageArea } from '../../index'

describe('MessageArea', () => {
    context('Render with default and custom props', () => {
        it('should render MessageArea with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <MessageArea />
                </ThemeProvider>,
            )
            cy.get('textarea')
                .should('exist')
                .should('have.attr', 'minlength', '1')
                .should('have.attr', 'maxlength', '5000')
                .should('have.attr', 'autocomplete', 'off')
                .should('have.attr', 'type', 'text')
                .should('have.attr', 'rows', '9')
                .should('have.attr', 'resize', 'vertical')
                .focus()
            cy.get('[data-testid="char-length"]').contains(/5000 characters$/)
        })

        it('should render MessageArea with custom html attr', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <MessageArea
                        minLength="2"
                        maxLength="10"
                        autoComplete="on"
                        placeholder="Write something..."
                        type="text"
                        name="test"
                        id="test"
                    />
                </ThemeProvider>,
            )
            cy.get('textarea')
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
            it('should show character count if MessageArea is on focus', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <MessageArea />
                    </ThemeProvider>,
                )
                cy.get('textarea').focus()
                cy.get('[data-testid="character-count"]').should('exist')
            })
            it('should not show character count if MessageArea is not on focus', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <MessageArea />
                    </ThemeProvider>,
                )
                cy.get('textarea').focus().blur()
                cy.get('[data-testid="character-count"]').should('not.exist')
            })
        })
        context('MaxLength', () => {
            it('should not allow characters more than maxlength', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <MessageArea maxLength="5" />
                    </ThemeProvider>,
                )
                cy.get('textarea')
                    .type('Prashan Pudasaini')
                    .contains(/^Prash$/)
            })
        })
    })

    context('Validations', () => {
        context('MinLength', () => {
            it('should show error if the min length is not satisfied', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <MessageArea minLength="4" />
                    </ThemeProvider>,
                )
                cy.get('textarea').type('Pr')
                cy.get('[data-testid=error]')
                    .should('exist')
                    .contains(/Please enter your message./)
            })
            it('should show error icon if minlength is not satisfied', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <MessageArea minLength="4" />
                    </ThemeProvider>,
                )
                cy.get('textarea').type('Pr')
                cy.get('[data-testid=length-error]').should('exist')
                cy.get('[data-testid=length-success]').should('not.exist')
            })

            it('should show success icon if minlength is satisfied', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <MessageArea minLength="4" />
                    </ThemeProvider>,
                )
                cy.get('textarea').type('Prashan')
                cy.get('[data-testid=length-error]').should('not.exist')
                cy.get('[data-testid=length-success]').should('exist')
            })
        })

        context('MaxLength', () => {
            it('should display the correct max length', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <MessageArea maxLength="6" />
                    </ThemeProvider>,
                )
                cy.get('textarea').focus()
                cy.get('[data-testid="char-length"]').contains(/6 characters$/)
            })
        })
    })

    context('Styles and Variants', () => {
        context('Filled MessageArea', () => {
            it('should render filled MessageArea without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <MessageArea variant="filled" notched={false} />
                    </ThemeProvider>,
                )
            })
            it('should render filled MessageArea with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <MessageArea variant="filled" notched={true} />
                    </ThemeProvider>,
                )
            })
        })
        context('Outlined MessageArea', () => {
            it('should render outlined MessageArea with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <MessageArea variant="outlined" notched={true} />
                    </ThemeProvider>,
                )
            })
            it('should render outlined MessageArea without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <MessageArea variant="outlined" notched={false} />
                    </ThemeProvider>,
                )
            })
        })
        context('Transparent MessageArea', () => {
            it('should render transparent MessageArea', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <MessageArea variant="transparent" />
                    </ThemeProvider>,
                )
            })
            it('should not have notch effect on transparent MessageArea', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <MessageArea variant="transparent" notched={true} />
                    </ThemeProvider>,
                )
            })
        })
    })
})
