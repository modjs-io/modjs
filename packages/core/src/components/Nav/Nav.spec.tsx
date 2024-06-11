import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { Nav } from '../../index'

describe('Nav', () => {
    context('Render with default props', () => {
        it('should render Nav component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Nav></Nav>
                </ThemeProvider>,
            )
            cy.get('[data-test="nav"]').should('exist')
        })
    })
})
