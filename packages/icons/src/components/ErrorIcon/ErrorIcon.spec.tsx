import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { ErrorIcon } from '../../index'

describe('ErrorIcon', () => {
    it('should render with default props', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <ErrorIcon />
            </ThemeProvider>,
        )
        cy.get('svg').should('exist')
    })

    it('should render with custom props and styles from theme', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <ErrorIcon
                    fill={ModTheme.color.error}
                    height={ModTheme.icons.height.md}
                    width={ModTheme.icons.height.md}
                />
            </ThemeProvider>,
        )
        cy.get('svg')
            .should('exist')
            .should('have.attr', 'height', '2rem')
            .should('have.attr', 'width', '2rem')
        cy.get('g').should('have.attr', 'fill', '#ca3c1f')
    })

    it('should render with custom props and hardcoded styles', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <ErrorIcon fill="#ca3c1f" height="10rem" width="10rem" />
            </ThemeProvider>,
        )
        cy.get('svg')
            .should('exist')
            .should('have.attr', 'height', '10rem')
            .should('have.attr', 'width', '10rem')
        cy.get('g').should('have.attr', 'fill', '#ca3c1f')
    })
    it('should apply styles from withLayout HOC', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <ErrorIcon border="light" />
            </ThemeProvider>,
        )
        cy.get('svg')
            .should('exist')
            .should('have.css', 'border', '1px solid rgb(194, 194, 194)')
    })
})
