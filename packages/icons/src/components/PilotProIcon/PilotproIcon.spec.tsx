import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { PilotProIcon } from '../../index'

describe('PilotProIcon', () => {
    it('should render with default props', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <PilotProIcon />
            </ThemeProvider>,
        )
        cy.get('svg').should('exist')
    })

    it('should render with custom props and styles from theme', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <PilotProIcon fill={ModTheme.color.success} />
            </ThemeProvider>,
        )
        cy.get('svg').should('exist')
        cy.get('g').should('have.attr', 'fill', '#5a6b31')
    })

    it('should render with custom props and hardcoded styles', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <PilotProIcon fill="#c2c2c2" height="4rem" width="14rem" />
            </ThemeProvider>,
        )
        cy.get('svg').should('exist')
        cy.get('g').should('have.attr', 'fill', '#c2c2c2')
    })
    it('should apply styles from withLayout HOC', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <PilotProIcon border="light" />
            </ThemeProvider>,
        )
        cy.get('svg')
            .should('exist')
            .should('have.css', 'border', '1px solid rgb(194, 194, 194)')
    })
})
