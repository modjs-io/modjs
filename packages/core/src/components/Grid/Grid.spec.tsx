import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import { Grid, Typography } from '../../index'

describe('Grid', () => {
    context('Render with default props', () => {
        it('should render Grid component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Grid>
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
                    </Grid>
                </ThemeProvider>,
            )
            cy.get('[data-test="grid"]').should('exist')
        })
    })
    context('Styles and Variants', () => {
        context('Columns', () => {
            it('should render gird with one column', () => {
                cy.viewport(769, 600)
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Grid columns={1}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Grid>
                    </ThemeProvider>,
                )
                cy.get('[data-test="grid"]')
                    .should('exist')
                    .should('have.css', 'grid-template-columns', '753px')
            })
            it('should render gird with two columns', () => {
                cy.viewport(769, 600)
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Grid columns={2}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Grid>
                    </ThemeProvider>,
                )
                cy.get('[data-test="grid"]')
                    .should('exist')
                    .should(
                        'have.css',
                        'grid-template-columns',
                        '376.5px 376.5px',
                    )
            })
            it('should render gird with three columns', () => {
                cy.viewport(769, 600)
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Grid columns={3}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Grid>
                    </ThemeProvider>,
                )
                cy.get('[data-test="grid"]')
                    .should('exist')
                    .should(
                        'have.css',
                        'grid-template-columns',
                        '251px 251px 251px',
                    )
            })
            it('should render gird with four columns', () => {
                cy.viewport(769, 600)
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Grid columns={4}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Grid>
                    </ThemeProvider>,
                )
                cy.get('[data-test="grid"]')
                    .should('exist')
                    .should(
                        'have.css',
                        'grid-template-columns',
                        '188.25px 188.25px 188.25px 188.25px',
                    )
            })
            it('should render gird with five columns', () => {
                cy.viewport(769, 600)
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Grid columns={5}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Grid>
                    </ThemeProvider>,
                )
                cy.get('[data-test="grid"]')
                    .should('exist')
                    .should(
                        'have.css',
                        'grid-template-columns',
                        '150.594px 150.602px 150.602px 150.602px 150.602px',
                    )
            })
            it('should render gird with six columns', () => {
                cy.viewport(769, 600)
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Grid columns={6}>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </Typography>
                        </Grid>
                    </ThemeProvider>,
                )
                cy.get('[data-test="grid"]')
                    .should('exist')
                    .should(
                        'have.css',
                        'grid-template-columns',
                        '125.5px 125.5px 125.5px 125.5px 125.5px 125.5px',
                    )
            })
        })
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Grid bgColor="light" p="normal">
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
                    </Grid>
                </ThemeProvider>,
            )
            cy.get('[data-test="grid"]')
                .should('have.css', 'padding', '16px')
                .and('have.css', 'background-color', 'rgb(142, 142, 142)')
        })
    })
})
