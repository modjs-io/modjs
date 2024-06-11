import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { ProgressBar } from '../../index'

describe('ProgressBar', () => {
    context('Render with default props', () => {
        it('should render ProgressBar component with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <ProgressBar />
                </ThemeProvider>,
            )
            cy.get('[data-test="progress-bar"]')
                .should('exist')
                .should('have.css', 'display', 'block')
                .and('have.css', 'background-color', 'rgb(31, 142, 255)')
        })
    })
    context('Interactions and Behavior', () => {
        it('should show the progress bar if still loading', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <ProgressBar isLoading={true} />
                </ThemeProvider>,
            )
            cy.get('[data-test="progress-bar"]').should(
                'have.css',
                'display',
                'block',
            )
        })
        it('should hide the progress bar once completely loaded into the dom', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <ProgressBar isLoading={false} />
                </ThemeProvider>,
            )
            cy.get('[data-test="progress-bar"]').should(
                'have.css',
                'display',
                'none',
            )
        })
    })

    context('Styles and Variants', () => {
        context('Variants', () => {
            it('should render ProgressBar component with default variant', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <ProgressBar variant="default" />
                    </ThemeProvider>,
                )
                cy.get('[data-test="progress-bar"]')
                    .should('exist')
                    .should('have.css', 'display', 'block')
                    .and('have.css', 'background-color', 'rgb(31, 142, 255)')
            })
            it('should render ProgressBar component with success variant', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <ProgressBar variant="success" />
                    </ThemeProvider>,
                )
                cy.get('[data-test="progress-bar"]')
                    .should('exist')
                    .should('have.css', 'display', 'block')
                    .and('have.css', 'background-color', 'rgb(90, 107, 49)')
            })
            it('should render ProgressBar component with error variant', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <ProgressBar variant="error" />
                    </ThemeProvider>,
                )
                cy.get('[data-test="progress-bar"]')
                    .should('exist')
                    .should('have.css', 'display', 'block')
                    .and('have.css', 'background-color', 'rgb(202, 60, 31)')
            })
        })
    })
})
