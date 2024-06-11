import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { MailIcon, PilotProIcon } from '@modjs/icons'
import { Appbar, Box, Container, Link, Toolbar, Typography } from '../../index'

describe('Appbar', () => {
    context('Render with default props', () => {
        it('should render appbar component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Appbar>
                        <Container
                            display="flex"
                            justifyContent="space-between"
                        >
                            <Box>
                                <Link
                                    variant="icon"
                                    href="/"
                                    data-testid="logo-link"
                                >
                                    <PilotProIcon />
                                </Link>
                            </Box>
                            <Box
                                display="flex"
                                gap="normal"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Box elevation="light">
                                    <Link
                                        variant="filled"
                                        color="white"
                                        fs="xsm"
                                        notched="true"
                                        href="/contact"
                                        data-testid="contact-us-link"
                                    >
                                        <MailIcon fill="white" />
                                        Filled Link
                                    </Link>
                                </Box>
                            </Box>
                        </Container>
                    </Appbar>
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
            cy.get('[data-test="appbar"]').should('exist')
        })
    })
    context('Interactions and Behavior', () => {
        it('should display sticky appbar without box shadow if not scrolling', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Appbar sticky={true}>
                        <Container
                            display="flex"
                            justifyContent="space-between"
                        >
                            <Box>
                                <Link
                                    variant="icon"
                                    href="/"
                                    data-testid="logo-link"
                                >
                                    <PilotProIcon />
                                </Link>
                            </Box>
                            <Box
                                display="flex"
                                gap="normal"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Box elevation="light">
                                    <Link
                                        variant="filled"
                                        color="white"
                                        fs="xsm"
                                        notched="true"
                                        href="/contact"
                                        data-testid="contact-us-link"
                                    >
                                        <MailIcon fill="white" />
                                        Filled Link
                                    </Link>
                                </Box>
                            </Box>
                        </Container>
                    </Appbar>
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
            cy.get('[data-test="appbar"]')
                .should('exist')
                .should('have.css', 'position', 'static')
                .and('have.css', 'top', 'auto')
                .and('have.css', 'box-shadow', 'none')
        })
        it('should display sticky appbar with box shadow after scrolling', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Appbar sticky={true}>
                        <Container
                            display="flex"
                            justifyContent="space-between"
                        >
                            <Box>
                                <Link
                                    variant="icon"
                                    href="/"
                                    data-testid="logo-link"
                                >
                                    <PilotProIcon />
                                </Link>
                            </Box>
                            <Box
                                display="flex"
                                gap="normal"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Box elevation="light">
                                    <Link
                                        variant="filled"
                                        color="white"
                                        fs="xsm"
                                        notched="true"
                                        href="/contact"
                                        data-testid="contact-us-link"
                                    >
                                        <MailIcon fill="white" />
                                        Filled Link
                                    </Link>
                                </Box>
                            </Box>
                        </Container>
                    </Appbar>
                    <Container mt="mwide">
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
            cy.get('[data-test="appbar"]')
                .should('exist')
                .should('have.css', 'position', 'fixed')
                .and('have.css', 'top', '0px')
                .and(
                    'have.css',
                    'box-shadow',
                    'rgba(0, 0, 0, 0.3) 0px 6px 6px 0px, rgba(0, 0, 0, 0.05) 0px 10px 20px 0px',
                )
        })
        it('should not display appbar on mobile device', () => {
            cy.viewport(350, 600)
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Appbar>
                        <Container
                            display="flex"
                            justifyContent="space-between"
                        >
                            <Box>
                                <Link
                                    variant="icon"
                                    href="/"
                                    data-testid="logo-link"
                                >
                                    <PilotProIcon />
                                </Link>
                            </Box>
                            <Box
                                display="flex"
                                gap="normal"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Box elevation="light">
                                    <Link
                                        variant="filled"
                                        color="white"
                                        fs="xsm"
                                        notched="true"
                                        href="/contact"
                                        data-testid="contact-us-link"
                                    >
                                        <MailIcon fill="white" />
                                        Filled Link
                                    </Link>
                                </Box>
                            </Box>
                        </Container>
                    </Appbar>
                    <Container mt="wide">
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
            cy.get('[data-test="appbar"]').should('not.exist')
        })
    })
    context('Integrations', () => {
        it('should integrate well with Toolbar', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Toolbar>
                        <Container display="flex" justifyContent="end">
                            <Box elevation="light">
                                <Link
                                    variant="outlined"
                                    color="primary"
                                    fs="xsm"
                                    notched="true"
                                    href="/contact"
                                    data-testid="contact-us-link"
                                >
                                    <MailIcon fill="primary" />
                                    Outlined Link
                                </Link>
                            </Box>
                        </Container>
                    </Toolbar>
                    <Appbar sticky={true}>
                        <Container
                            display="flex"
                            justifyContent="space-between"
                        >
                            <Box>
                                <Link
                                    variant="icon"
                                    href="/"
                                    data-testid="logo-link"
                                >
                                    <PilotProIcon />
                                </Link>
                            </Box>
                            <Box
                                display="flex"
                                gap="normal"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Box elevation="light">
                                    <Link
                                        variant="filled"
                                        color="white"
                                        fs="xsm"
                                        notched="true"
                                        href="/contact"
                                        data-testid="contact-us-link"
                                    >
                                        <MailIcon fill="white" />
                                        Filled Link With Icon
                                    </Link>
                                </Box>
                            </Box>
                        </Container>
                    </Appbar>
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
            cy.get('[data-test="appbar"]').should('exist')
            cy.get('[data-test="toolbar"]').should('exist')
        })
    })
})
