import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { Typography } from '../../index'

describe('Typography', () => {
    context('Render with default props', () => {
        it('should render Typography component with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </ThemeProvider>,
            )
            cy.get('p').should('exist')
        })
    })
    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Typography variant="body1" p="normal" bgColor="light">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </ThemeProvider>,
            )
            cy.get('[data-test="typography"]')
                .should('have.css', 'padding', '16px')
                .and('have.css', 'background-color', 'rgb(142, 142, 142)')
        })
        context('Variants', () => {
            it('should render h1', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Typography variant="h1">
                            Lorem Ipsum is simply dummy text
                        </Typography>
                    </ThemeProvider>,
                )
                cy.get('h1').should('exist')
            })
            it('should render h2', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Typography variant="h2">
                            Lorem Ipsum is simply dummy text
                        </Typography>
                    </ThemeProvider>,
                )
                cy.get('h2').should('exist')
            })
            it('should render h3', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Typography variant="h3">
                            Lorem Ipsum is simply dummy text
                        </Typography>
                    </ThemeProvider>,
                )
                cy.get('h3').should('exist')
            })
            it('should render h4', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Typography variant="h4">
                            Lorem Ipsum is simply dummy text
                        </Typography>
                    </ThemeProvider>,
                )
                cy.get('h4').should('exist')
            })
            it('should render h5', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Typography variant="h5">
                            Lorem Ipsum is simply dummy text
                        </Typography>
                    </ThemeProvider>,
                )
                cy.get('h5').should('exist')
            })
            it('should render h6', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Typography variant="h6">
                            Lorem Ipsum is simply dummy text
                        </Typography>
                    </ThemeProvider>,
                )
                cy.get('h6').should('exist')
            })
            it('should render body1', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not five centuries, but also the leap into
                            electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </Typography>
                    </ThemeProvider>,
                )
                cy.get('p').should('exist')
            })
            it('should render body2', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Typography variant="body2">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not five centuries, but also the leap into
                            electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </Typography>
                    </ThemeProvider>,
                )
                cy.get('p').should('exist')
            })
            it('should render small', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Typography variant="small">
                            Lorem Ipsum is simply dummy text
                        </Typography>
                    </ThemeProvider>,
                )
                cy.get('small').should('exist')
            })
        })
    })
})
