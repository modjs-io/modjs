import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { Fieldset } from '../../index'

describe('Fieldset', () => {
    context('Render with default props', () => {
        it('should render Fieldset component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Fieldset></Fieldset>
                </ThemeProvider>,
            )
            cy.get('[data-test="fieldset"]').should('exist')
        })
    })
})
