import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { Header } from '../../index'

describe('Header', () => {
    context('Render with default props', () => {
        it('should render Header component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Header></Header>
                </ThemeProvider>,
            )
            cy.get('[data-test="header"]').should('exist')
        })
    })
})
