import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { InfrastructureIcon } from '../../index'

describe('InfrastructureIcon', () => {
    it('should render with default props', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <InfrastructureIcon />
            </ThemeProvider>,
        )
        cy.get('svg').should('exist')
    })

    it('should render with custom props and styles from theme', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <InfrastructureIcon
                    fill={ModTheme.color.success}
                    height={ModTheme.icons.height.lg}
                    width={ModTheme.icons.height.lg}
                />
            </ThemeProvider>,
        )
        cy.get('svg')
            .should('exist')
            .should('have.attr', 'height', '4rem')
            .should('have.attr', 'width', '4rem')
        cy.get('g').should('have.attr', 'fill', '#5a6b31')
    })

    it('should render with custom props and hardcoded styles', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <InfrastructureIcon
                    fill="#c2c2c2"
                    height="10rem"
                    width="10rem"
                />
            </ThemeProvider>,
        )
        cy.get('svg')
            .should('exist')
            .should('have.attr', 'height', '10rem')
            .should('have.attr', 'width', '10rem')
        cy.get('g').should('have.attr', 'fill', '#c2c2c2')
    })
    it('should apply styles from withLayout HOC', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <InfrastructureIcon border="light" />
            </ThemeProvider>,
        )
        cy.get('svg')
            .should('exist')
            .should('have.css', 'border', '1px solid rgb(194, 194, 194)')
    })
})
