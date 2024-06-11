import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { Container, Typography } from '../../index'

describe('Container', () => {
    context('Styles and Variants', () => {
        context('Normal Container without fluid', () => {
            context('Greater than 1280px', () => {
                it('should center contents in screen sizes larger than 1280px and also apply pr and pl of 5em or 80px', () => {
                    cy.viewport(3440, 1440) //LG 4k Monitor
                    cy.mount(
                        <ThemeProvider theme={ModTheme}>
                            <Container>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not five centuries, but also the
                                    leap into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and
                                    more recently with desktop publishing
                                    software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                                </Typography>
                            </Container>
                        </ThemeProvider>,
                    )
                    cy.get('[data-test="container"]')
                        .should('have.css', 'padding-right', '80px')
                        .and('have.css', 'padding-left', '80px')
                        .and('have.css', 'max-width', '1280px')
                        .and('have.css', 'margin', '0px 992px')
                })
            })
            context('Less than 1280px but greater than 768px', () => {
                it('should apply pr and pl of 3em or 48px', () => {
                    cy.viewport(1280, 1440)
                    cy.mount(
                        <ThemeProvider theme={ModTheme}>
                            <Container>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not five centuries, but also the
                                    leap into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and
                                    more recently with desktop publishing
                                    software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                                </Typography>
                            </Container>
                        </ThemeProvider>,
                    )
                    cy.get('[data-test="container"]')
                        .should('have.css', 'padding-right', '48px')
                        .and('have.css', 'padding-left', '48px')
                })
            })
            context('Less than 768px', () => {
                it('should apply pr and pl of 0.4em', () => {
                    cy.viewport(380, 650)
                    cy.mount(
                        <ThemeProvider theme={ModTheme}>
                            <Container>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not five centuries, but also the
                                    leap into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and
                                    more recently with desktop publishing
                                    software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                                </Typography>
                            </Container>
                        </ThemeProvider>,
                    )
                    cy.get('[data-test="container"]')
                        .should('have.css', 'padding-right', '6.4px')
                        .and('have.css', 'padding-left', '6.4px')
                })
            })
        })

        context('Fluid Container', () => {
            context('Greater than 1280px', () => {
                it('should render fluid container with pr and pl of 5em or 80px and not centered', () => {
                    cy.viewport(3440, 1440)
                    cy.mount(
                        <ThemeProvider theme={ModTheme}>
                            <Container fluid={true}>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not five centuries, but also the
                                    leap into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and
                                    more recently with desktop publishing
                                    software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                                </Typography>
                            </Container>
                        </ThemeProvider>,
                    )
                    cy.get('[data-test="container"]')
                        .should('have.css', 'padding-right', '80px')
                        .and('have.css', 'padding-left', '80px')
                })
            })
            context('Less than 1280px but greater than 768px', () => {
                it('should render fluid container with pr and pl of 3em or 48px', () => {
                    cy.viewport(1280, 650)
                    cy.mount(
                        <ThemeProvider theme={ModTheme}>
                            <Container fluid={true}>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not five centuries, but also the
                                    leap into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and
                                    more recently with desktop publishing
                                    software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                                </Typography>
                            </Container>
                        </ThemeProvider>,
                    )
                    cy.get('[data-test="container"]')
                        .should('have.css', 'padding-right', '48px')
                        .and('have.css', 'padding-left', '48px')
                })
            })
            context('Less than 768px', () => {
                it('should render fluid container with pr and pl of 0.4em', () => {
                    cy.viewport(400, 650)
                    cy.mount(
                        <ThemeProvider theme={ModTheme}>
                            <Container fluid={true}>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not five centuries, but also the
                                    leap into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and
                                    more recently with desktop publishing
                                    software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                                </Typography>
                            </Container>
                        </ThemeProvider>,
                    )
                    cy.get('[data-test="container"]')
                        .should('have.css', 'padding-right', '6.4px')
                        .and('have.css', 'padding-left', '6.4px')
                })
            })
        })
    })
})
