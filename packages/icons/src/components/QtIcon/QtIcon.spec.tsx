import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { QtIcon } from '../../index'

describe('QtIcon', () => {
    it('should render with default props', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <QtIcon />
            </ThemeProvider>,
        )
        cy.get('svg').should('exist')
    })

    it('should render with custom props and styles from theme', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <QtIcon
                    height={ModTheme.icons.height.sm}
                    width={ModTheme.icons.height.sm}
                />
            </ThemeProvider>,
        )
        cy.get('svg')
            .should('exist')
            .should('have.attr', 'height', '1rem')
            .should('have.attr', 'width', '1rem')
    })

    it('should render with custom props and hardcoded styles', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <QtIcon height="10rem" width="10rem" />
            </ThemeProvider>,
        )
        cy.get('svg')
            .should('exist')
            .should('have.attr', 'height', '10rem')
            .should('have.attr', 'width', '10rem')
    })
    it('should apply styles from withLayout HOC', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <QtIcon border="light" />
            </ThemeProvider>,
        )
        cy.get('svg')
            .should('exist')
            .should('have.css', 'border', '1px solid rgb(194, 194, 194)')
    })
})
