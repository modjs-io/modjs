import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AccountIcon } from '../../../../icons/src/index'
import { ModTheme } from '../../../../utils/src/index'
import { CreatePasswordField } from '../../index'

describe('CreatePasswordField', () => {
    context('Render with default and custom props', () => {
        it('should render CreatePasswordField with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <CreatePasswordField />
                </ThemeProvider>,
            )
            cy.get('input')
                .should('exist')
                .should('have.attr', 'minlength', '8')
                .should('have.attr', 'maxlength', '32')
                .should('have.attr', 'autocomplete', 'off')
                .should('have.attr', 'placeholder', 'New Password *')
                .should('have.attr', 'type', 'password')
                .should('have.attr', 'name', 'new-password')
                .should('have.attr', 'id', 'new-password')
                .should('have.attr', 'value', '')
        })

        it('should render CreatePasswordField with custom html attr', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <CreatePasswordField
                        minLength="6"
                        maxLength="16"
                        autoComplete="on"
                        placeholder="Your New Password *"
                        type="password"
                        name="your-new-pw"
                        id="your-new-pw"
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
                .should('have.attr', 'placeholder', 'Your New Password *')
                .should('have.attr', 'type', 'password')
                .should('have.attr', 'name', 'your-new-pw')
                .should('have.attr', 'id', 'your-new-pw')
        })
    })

    context('Validations', () => {
        it('should not show error if the password meets all requirement', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <CreatePasswordField />
                </ThemeProvider>,
            )
            cy.get('input').type('Testing1234!')
            cy.get('[data-testid="error"]').should('not.exist')
        })
        context('Length', () => {
            it('should show success icon if the minLength is satisfied', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField minLength="4" />
                    </ThemeProvider>,
                )
                cy.get('input').type('testing')
                cy.get('[data-testid="length-satisfied"]').should('exist')
                cy.get('[data-testid="length-not-satisfied"]').should(
                    'not.exist',
                )
            })
            it('should show error icon if the minLength is not satisfied', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField minLength="4" />
                    </ThemeProvider>,
                )
                cy.get('input').type('te')
                cy.get('[data-testid="length-satisfied"]').should('not.exist')
                cy.get('[data-testid="length-not-satisfied"]').should('exist')
            })

            it('should show success icon if the maxLength is satisfied', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField minLength="2" maxLength="6" />
                    </ThemeProvider>,
                )
                cy.get('input').type('test')
                cy.get('[data-testid="length-satisfied"]').should('exist')
                cy.get('[data-testid="length-not-satisfied"]').should(
                    'not.exist',
                )
            })
            it('should not allow characters more than maxlength', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField minLength="2" maxLength="5" />
                    </ThemeProvider>,
                )
                cy.get('input')
                    .type('testing')
                    .should('have.attr', 'value', 'testi')
            })
        })

        context('Digit', () => {
            it('should show digit error icon if the pw does not contain atleast one digit', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField />
                    </ThemeProvider>,
                )
                cy.get('input').type('testing')
                cy.get('[data-testid="digit-satisfied"]').should('not.exist')
                cy.get('[data-testid="digit-not-satisfied"]').should('exist')
            })
            it('should show digit success icon if the pw contains atleast one digit', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField />
                    </ThemeProvider>,
                )
                cy.get('input').type('test1')
                cy.get('[data-testid="digit-satisfied"]').should('exist')
                cy.get('[data-testid="digit-not-satisfied"]').should(
                    'not.exist',
                )
            })
        })

        context('Uppercase', () => {
            it('should show uppercase error icon if the pw does not contain atleast one uppercase char', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField />
                    </ThemeProvider>,
                )
                cy.get('input').type('testing')
                cy.get('[data-testid="uppercase-satisfied"]').should(
                    'not.exist',
                )
                cy.get('[data-testid="uppercase-not-satisfied"]').should(
                    'exist',
                )
            })
            it('should show uppercase success icon if the pw contains atleast one uppercase char', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField />
                    </ThemeProvider>,
                )
                cy.get('input').type('Testing')
                cy.get('[data-testid="uppercase-satisfied"]').should('exist')
                cy.get('[data-testid="uppercase-not-satisfied"]').should(
                    'not.exist',
                )
            })
        })

        context('Lowercase', () => {
            it('should show lowercase error icon if the pw does not contain atleast one lowercase char', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField />
                    </ThemeProvider>,
                )
                cy.get('input').type('TESTING')
                cy.get('[data-testid="lowercase-satisfied"]').should(
                    'not.exist',
                )
                cy.get('[data-testid="lowercase-not-satisfied"]').should(
                    'exist',
                )
            })
            it('should show lowercase success icon if the pw contains atleast one lowercase char', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField />
                    </ThemeProvider>,
                )
                cy.get('input').type('TESTINg')
                cy.get('[data-testid="lowercase-satisfied"]').should('exist')
                cy.get('[data-testid="lowercase-not-satisfied"]').should(
                    'not.exist',
                )
            })
        })

        context('Special Character', () => {
            it('should show special char error icon if the pw does not contain atleast one special char', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField />
                    </ThemeProvider>,
                )
                cy.get('input').type('TESTING')
                cy.get('[data-testid="specialChar-satisfied"]').should(
                    'not.exist',
                )
                cy.get('[data-testid="specialChar-not-satisfied"]').should(
                    'exist',
                )
            })
            it('should show special char success icon if the pw contains atleast one special char ', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField />
                    </ThemeProvider>,
                )
                cy.get('input').type('TESTING!')
                cy.get('[data-testid="specialChar-satisfied"]').should('exist')
                cy.get('[data-testid="specialChar-not-satisfied"]').should(
                    'not.exist',
                )
            })
        })
    })

    context('Interactions', () => {
        context('Visibility', () => {
            it('should toggle visibility', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField />
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
            it('should show error if CreatePasswordField is on focus and empty', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField />
                    </ThemeProvider>,
                )
                cy.get('input').focus()
                cy.get('[data-testid="error"]').should('exist')
            })
            it('should not show error if CreatePasswordField is on focus and not empty and password meets all requirement', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField />
                    </ThemeProvider>,
                )
                cy.get('input').focus().type('Testing1234!')
                cy.get('[data-testid="error"]').should('not.exist')
            })
            it('should not show error if CreatePasswordField is not on focus', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField />
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
                        <CreatePasswordField />
                    </ThemeProvider>,
                )
                cy.get('input').type(' ').should('have.attr', 'value', '')
            })

            it('should not allow internal whitespaces', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField />
                    </ThemeProvider>,
                )
                cy.get('input')
                    .type('Testing      1234')
                    .should('have.attr', 'value', 'Testing1234')
            })
        })
    })

    context('Styles and Variants', () => {
        context('Filled CreatePasswordField', () => {
            it('should render filled CreatePasswordField without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField variant="filled" notched={false} />
                    </ThemeProvider>,
                )
            })
            it('should render filled CreatePasswordField with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField variant="filled" notched={true} />
                    </ThemeProvider>,
                )
            })
        })

        context('Outlined CreatePasswordField', () => {
            it('should render outlined CreatePasswordField with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField
                            variant="outlined"
                            notched={true}
                        />
                    </ThemeProvider>,
                )
            })
            it('should render outlined CreatePasswordField without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField
                            variant="outlined"
                            notched={false}
                        />
                    </ThemeProvider>,
                )
            })
        })

        context('Transparent CreatePasswordField', () => {
            it('should render transparent CreatePasswordField', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField variant="transparent" />
                    </ThemeProvider>,
                )
            })
            it('should not have notch effect on transparent CreatePasswordField', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <CreatePasswordField
                            variant="transparent"
                            notched={true}
                        />
                    </ThemeProvider>,
                )
            })
        })
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <CreatePasswordField
                        variant="filled"
                        p="normal"
                        bgColor="light"
                    />
                </ThemeProvider>,
            )
            cy.get('[data-test="create-password-field"]')
                .should('have.css', 'padding', '16px')
                .and('have.css', 'background-color', 'rgb(142, 142, 142)')
        })
    })
})
