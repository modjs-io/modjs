import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import Bob from '../../assets/images/bob.jpeg'
import { Avatar } from '../../index'

describe('Avatar', () => {
    context('Default and custom props', () => {
        it('should render Avatar with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Avatar src={Bob} />
                </ThemeProvider>,
            )
            cy.get('[data-test="avatar"]')
                .should('exist')
                .should('have.css', 'height', '32px')
                .and('have.css', 'width', '32px')
                .and('have.css', 'filter', 'brightness(0.6)')
                .and('have.css', 'border-radius', '100%')
        })
        it('should render Avatar with custom props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Avatar
                        src={Bob}
                        brightness="dark"
                        height="lg"
                        width="lg"
                    />
                </ThemeProvider>,
            )
            cy.get('[data-test="avatar"]')
                .should('exist')
                .should('have.css', 'height', '96px')
                .and('have.css', 'width', '96px')
                .and('have.css', 'filter', 'brightness(0.2)')
                .and('have.css', 'border-radius', '100%')
        })
    })
})
