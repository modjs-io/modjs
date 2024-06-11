import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { Form } from '../../index'

describe('Form', () => {
    context('Render with default props', () => {
        it('should render Form component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Form></Form>
                </ThemeProvider>,
            )
            cy.get('[data-test="form"]').should('exist')
        })
    })
})
