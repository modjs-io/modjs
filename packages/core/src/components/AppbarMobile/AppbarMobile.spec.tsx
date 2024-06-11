import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { PilotProIcon } from '@modjs/icons'
import { AppbarMobile, Box, Container, Link, Typography } from '../../index'

describe('AppbarMobile', () => {
    beforeEach(() => {
        cy.viewport(350, 600)
    })
    context('Render with default props', () => {
        it('should render AppbarMobile component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <AppbarMobile
                        logo={
                            <Link
                                variant="icon"
                                href="/"
                                data-testid="logo-link"
                            >
                                <PilotProIcon />
                            </Link>
                        }
                    >
                        <Box bgColor="white" borderTop="light">
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                        </Box>
                    </AppbarMobile>

                    <Container mt="wide">
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>

                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>

                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                    </Container>
                </ThemeProvider>,
            )
            cy.get('[data-test="appbar-mobile"]').should('exist')
        })
    })
    context('Interactions and Behavior', () => {
        it('should display sticky AppbarMobile without box shadow if not scrolling', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <AppbarMobile
                        logo={
                            <Link
                                variant="icon"
                                href="/"
                                data-testid="logo-link"
                            >
                                <PilotProIcon />
                            </Link>
                        }
                    >
                        <Box bgColor="white" borderTop="light">
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                        </Box>
                    </AppbarMobile>

                    <Container mt="wide">
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>

                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>

                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                    </Container>
                </ThemeProvider>,
            )
            cy.get('[data-test="appbar-mobile"]')
                .should('exist')
                .should('have.css', 'position', 'static')
                .and('have.css', 'top', 'auto')
                .and('have.css', 'box-shadow', 'none')
        })
        it('should display sticky AppbarMobile with box shadow after scrolling', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <AppbarMobile
                        logo={
                            <Link
                                variant="icon"
                                href="/"
                                data-testid="logo-link"
                            >
                                <PilotProIcon />
                            </Link>
                        }
                    >
                        <Box bgColor="white" borderTop="light">
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                        </Box>
                    </AppbarMobile>

                    <Container mt="wide">
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>

                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>

                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                    </Container>
                </ThemeProvider>,
            )
            cy.scrollTo(0, 500)
            cy.get('[data-test="appbar-mobile"]')
                .should('exist')
                .should('have.css', 'position', 'fixed')
                .and('have.css', 'top', '0px')
                .and(
                    'have.css',
                    'box-shadow',
                    'rgba(0, 0, 0, 0.3) 0px 6px 6px 0px, rgba(0, 0, 0, 0.05) 0px 10px 20px 0px',
                )
        })
        it('should not display AppbarMobile on larger device', () => {
            cy.viewport(900, 600)
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <AppbarMobile
                        logo={
                            <Link
                                variant="icon"
                                href="/"
                                data-testid="logo-link"
                            >
                                <PilotProIcon />
                            </Link>
                        }
                    >
                        <Box bgColor="white" borderTop="light">
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                        </Box>
                    </AppbarMobile>

                    <Container mt="wide">
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>

                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>

                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                    </Container>
                </ThemeProvider>,
            )
            cy.wait(20)
            cy.get('[data-test="appbar-mobile"]').should('not.exist')
        })
        it('should show the menuItem box on click', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <AppbarMobile
                        logo={
                            <Link
                                variant="icon"
                                href="/"
                                data-testid="logo-link"
                            >
                                <PilotProIcon />
                            </Link>
                        }
                    >
                        <Box bgColor="white" borderTop="light">
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                        </Box>
                    </AppbarMobile>
                </ThemeProvider>,
            )
            cy.get('[data-testid="show-menu"]').click()
            cy.get('[data-testid="menu-items"]').should('exist')
        })
        it('should hide the menuItem box on click', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <AppbarMobile
                        logo={
                            <Link
                                variant="icon"
                                href="/"
                                data-testid="logo-link"
                            >
                                <PilotProIcon />
                            </Link>
                        }
                    >
                        <Box bgColor="white" borderTop="light">
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                            <Box borderBottom="light" pt="xdense" pb="xdense">
                                <Link variant="transparent">Link</Link>
                            </Box>
                        </Box>
                    </AppbarMobile>
                </ThemeProvider>,
            )
            cy.get('[data-testid="show-menu"]').click()
            cy.get('[data-testid="hide-menu"]').click()
            cy.get('[data-testid="menu-items"]').should('not.exist')
        })
    })
})
