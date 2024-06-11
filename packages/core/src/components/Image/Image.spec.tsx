import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { Image } from '../../index'
import Bob from '../../assets/images/bob.jpeg'

describe('Image', () => {
    context('Render with default props', () => {
        it('should render Image component with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Image src={Bob} />
                </ThemeProvider>,
            )
            cy.get('[data-test="image"]')
                .should('exist')
                .should('have.css', 'height', '320px')
                .and('have.css', 'height', '320px')
                .and('have.css', 'filter', 'brightness(0.4)')
                .and(
                    'have.css',
                    'clip-path',
                    'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                )
        })
    })
    context('Styles and Variants', () => {
        context('Notched', () => {
            it('should render image without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Image src={Bob} notched={false} />
                    </ThemeProvider>,
                )
                cy.get('[data-test="image"]').should(
                    'have.css',
                    'clip-path',
                    'none',
                )
            })
        })
        context('Brightness', () => {
            it('should render image without brightness light', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Image src={Bob} brightness="light" />
                    </ThemeProvider>,
                )
                cy.get('[data-test="image"]').should(
                    'have.css',
                    'filter',
                    'brightness(0.6)',
                )
            })
            it('should render image without brightness normal', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Image src={Bob} brightness="normal" />
                    </ThemeProvider>,
                )
                cy.get('[data-test="image"]').should(
                    'have.css',
                    'filter',
                    'brightness(0.4)',
                )
            })
            it('should render image without brightness dark', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Image src={Bob} brightness="dark" />
                    </ThemeProvider>,
                )
                cy.get('[data-test="image"]').should(
                    'have.css',
                    'filter',
                    'brightness(0.2)',
                )
            })
        })
        context('Sizes', () => {
            it('should render sm image', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Image src={Bob} height="sm" width="sm" />
                    </ThemeProvider>,
                )
                cy.get('[data-test="image"]')
                    .should('have.css', 'height', '96px')
                    .and('have.css', 'width', '96px')
            })
            it('should render md image', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Image src={Bob} height="md" width="md" />
                    </ThemeProvider>,
                )
                cy.get('[data-test="image"]')
                    .should('have.css', 'height', '240px')
                    .and('have.css', 'width', '240px')
            })
            it('should render lg image', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Image src={Bob} height="lg" width="lg" />
                    </ThemeProvider>,
                )
                cy.get('[data-test="image"]')
                    .should('have.css', 'height', '320px')
                    .and('have.css', 'width', '320px')
            })
            it('should render full width image', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Image src={Bob} height="full" width="full" />
                    </ThemeProvider>,
                )
                cy.get('[data-test="image"]')
                    .should('have.css', 'height', '738px')
                    .and('have.css', 'width', '738px')
            })
        })
    })
})
