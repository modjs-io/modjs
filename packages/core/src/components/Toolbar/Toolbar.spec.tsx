import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { Toolbar } from '../../index'

describe('Toolbar', () => {
    context('Render with default props', () => {
        it('should render Article component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Toolbar></Toolbar>
                </ThemeProvider>,
            )
            cy.get('[data-test="toolbar"]').should('exist')
        })
    })
})
