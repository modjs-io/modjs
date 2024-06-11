import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import Bob from '../../assets/images/bob.jpeg'

import {
    Card,
    CardHeader,
    CardMeta,
    CardContent,
    CardMedia,
    CardFooter,
    Image,
    Link,
    Typography,
} from '../../index'
import { PlayIcon, RightChevronIcon } from '../../../../icons/src/index'

describe('Card', () => {
    context('Render with default props', () => {
        it('should render Card component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Card></Card>
                </ThemeProvider>,
            )
            cy.get('[data-test="card"]').should('exist')
        })

        it('should render Card component with other card components', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Card>
                        <CardHeader>
                            <Typography variant="h3">
                                Card Header Lorem Ipsum
                            </Typography>
                        </CardHeader>
                        <CardMeta>
                            <Typography variant="small">
                                Card meta Lorem Ipsum is simply dummy text
                            </Typography>
                        </CardMeta>
                        <CardContent>
                            <Typography variant="body2">
                                Card content Lorem Ipsum is simply dummy text of
                                the printing and typesetting industry. Lorem
                                Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum is simply
                                dummy text of the printing and typesetting
                                industry.
                            </Typography>
                        </CardContent>
                        <CardMedia>
                            <Image
                                src={Bob}
                                height="md"
                                width="md"
                                brightness="normal"
                            />
                        </CardMedia>
                        <CardFooter>
                            <Link variant="filled">
                                <PlayIcon fill="white" /> Card Footer
                                <RightChevronIcon fill="white" />
                            </Link>
                        </CardFooter>
                    </Card>
                </ThemeProvider>,
            )
            cy.get('[data-test="card"]').should('exist')
        })
    })

    context('Styles and Variants', () => {
        context('Filled Card', () => {
            it('should render filled Card without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Card variant="filled" notched={false} />
                    </ThemeProvider>,
                )
                cy.get('[data-test="card"]')
                    .should('exist')
                    .should(
                        'have.css',
                        'background-color',
                        'rgb(242, 242, 242)',
                    )
                    .and('have.css', 'padding', '12.8px')
                    .and('have.css', 'clip-path', 'none')
                    .and('have.css', 'border', '1px solid rgb(142, 142, 142)')
            })
            it('should render filled Card with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Card variant="filled" notched={true} />
                    </ThemeProvider>,
                )
                cy.get('[data-test="card"]')
                    .should('exist')
                    .should(
                        'have.css',
                        'background-color',
                        'rgb(242, 242, 242)',
                    )
                    .and('have.css', 'padding', '12.8px')
                    .and(
                        'have.css',
                        'clip-path',
                        'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                    )
                    .and('have.css', 'border', '0px none rgb(0, 0, 0)')
            })
        })

        context('Outlined Card', () => {
            it('should render outlined Card with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Card variant="outlined" notched={true} />
                    </ThemeProvider>,
                )
                cy.get('[data-test="card"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                    .and('have.css', 'padding', '12.8px')
                    .and(
                        'have.css',
                        'clip-path',
                        'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                    )
                    .and('have.css', 'border', '0px none rgb(0, 0, 0)')
            })
            it('should render outlined Card without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Card variant="outlined" notched={false} />
                    </ThemeProvider>,
                )
                cy.get('[data-test="card"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                    .and('have.css', 'padding', '12.8px')
                    .and('have.css', 'clip-path', 'none')
                    .and('have.css', 'border', '1px solid rgb(142, 142, 142)')
            })
        })

        context('Transparent Card', () => {
            it('should render transparent Card', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Card variant="transparent" />
                    </ThemeProvider>,
                )
                cy.get('[data-test="card"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                    .and('have.css', 'padding', '0px')
                    .and('have.css', 'border', '0px none rgb(0, 0, 0)')
            })
            it('should not have notch effect on transparent Card', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Card variant="transparent" notched={true} />
                    </ThemeProvider>,
                )
                cy.get('[data-test="card"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
                    .and('have.css', 'padding', '0px')
                    .and('have.css', 'border', '0px none rgb(0, 0, 0)')
            })
        })

        context('Dark Card', () => {
            it('should render dark Card with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Card variant="dark" />
                    </ThemeProvider>,
                )
                cy.get('[data-test="card"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgb(42, 38, 31)')
                    .and('have.css', 'padding', '12.8px')
                    .and('have.css', 'border', '0px none rgb(0, 0, 0)')
                    .and(
                        'have.css',
                        'clip-path',
                        'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                    )
            })
            it('should render dark Card without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Card variant="dark" notched={false} />
                    </ThemeProvider>,
                )
                cy.get('[data-test="card"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgb(42, 38, 31)')
                    .and('have.css', 'padding', '12.8px')
                    .and('have.css', 'border', '0px none rgb(0, 0, 0)')
                    .and('have.css', 'clip-path', 'none')
            })
        })
    })
})
