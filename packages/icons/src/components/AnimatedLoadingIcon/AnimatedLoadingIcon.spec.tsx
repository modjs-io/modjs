import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { AnimatedLoadingIcon } from '../../index'

describe('AnimatedLoadingIcon', () => {
    it('should render with default props', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <AnimatedLoadingIcon />
            </ThemeProvider>,
        )
        cy.get('svg').should('exist')
        cy.get('circle').should('exist')
    })

    it('should render with custom props and styles from theme', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <AnimatedLoadingIcon
                    fill={ModTheme.color.transparent}
                    stroke={ModTheme.color.success}
                    height={ModTheme.icons.height.lg}
                    width={ModTheme.icons.height.lg}
                />
            </ThemeProvider>,
        )
        cy.get('svg')
            .should('exist')
            .should('have.attr', 'height', '4rem')
            .should('have.attr', 'width', '4rem')
        cy.get('circle')
            .should('have.attr', 'fill', 'transparent')
            .should('have.attr', 'stroke', '#5a6b31')
    })

    it('should render with custom props and hardcoded styles', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <AnimatedLoadingIcon
                    fill="transparent"
                    height="10rem"
                    width="10rem"
                    stroke="#c2c2c2"
                />
            </ThemeProvider>,
        )
        cy.get('svg')
            .should('exist')
            .should('have.attr', 'height', '10rem')
            .should('have.attr', 'width', '10rem')
        cy.get('circle')
            .should('exist')
            .should('have.attr', 'fill', 'transparent')
            .should('have.attr', 'stroke', '#c2c2c2')
    })
    it('should apply styles from withLayout HOC', () => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <AnimatedLoadingIcon border="light" />
            </ThemeProvider>,
        )
        cy.get('svg')
            .should('exist')
            .should('have.css', 'border', '1px solid rgb(194, 194, 194)')
    })
})
