import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '../../../../utils/src/index'
import {
    Snackbar,
    Typography,
    SnackbarHeader,
    SnackbarContent,
} from '../../index'

describe('Snackbar', () => {
    context('Render with default props', () => {
        it('should render Snackbar component with default props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Snackbar variant="success" notched={true} visible={true}>
                        <SnackbarHeader>
                            <Typography variant="small" fs="sm" color="success">
                                Default Snackbar
                            </Typography>
                        </SnackbarHeader>
                        <SnackbarContent>
                            <Typography variant="small" fs="sm" color="white">
                                This is a Default Snackbar
                            </Typography>
                        </SnackbarContent>
                    </Snackbar>
                </ThemeProvider>,
            )
            cy.get('[data-test="snackbar"]').should('exist')
        })
        it('should render Snackbar component with custom props', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Snackbar
                        variant="error"
                        notched={false}
                        visible={true}
                        disableTimeout={true}
                    >
                        <SnackbarHeader>
                            <Typography variant="small" fs="sm" color="error">
                                Default Snackbar
                            </Typography>
                        </SnackbarHeader>
                        <SnackbarContent>
                            <Typography variant="small" fs="sm" color="white">
                                This is a Default Snackbar
                            </Typography>
                        </SnackbarContent>
                    </Snackbar>
                </ThemeProvider>,
            )
            cy.get('[data-test="snackbar"]').should('exist')
        })
    })

    context('Interaction and Behavior', () => {
        it('should hide the snackbar based on the timeout', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Snackbar
                        variant="error"
                        notched={false}
                        visible={true}
                        disableTimeout={false}
                        timeout={10}
                    >
                        <SnackbarHeader>
                            <Typography variant="small" fs="sm" color="error">
                                Snackbar Header
                            </Typography>
                        </SnackbarHeader>
                        <SnackbarContent>
                            <Typography variant="small" fs="sm" color="white">
                                This is a Snackbar Content
                            </Typography>
                        </SnackbarContent>
                    </Snackbar>
                </ThemeProvider>,
            )
            cy.get('[data-test="snackbar"]').should('exist')
            cy.wait(10)
            cy.get('[data-test="snackbar"]').should('not.exist')
        })
        it('should be visible is visiblity is true', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Snackbar variant="error" notched={false} visible={true}>
                        <SnackbarHeader>
                            <Typography variant="small" fs="sm" color="error">
                                Snackbar Header
                            </Typography>
                        </SnackbarHeader>
                        <SnackbarContent>
                            <Typography variant="small" fs="sm" color="white">
                                This is a Snackbar Content
                            </Typography>
                        </SnackbarContent>
                    </Snackbar>
                </ThemeProvider>,
            )
            cy.get('[data-test="snackbar"]').should('exist')
        })
        it('should not be visible is visiblity is false', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Snackbar variant="error" notched={false} visible={false}>
                        <SnackbarHeader>
                            <Typography variant="small" fs="sm" color="error">
                                Snackbar Header
                            </Typography>
                        </SnackbarHeader>
                        <SnackbarContent>
                            <Typography variant="small" fs="sm" color="white">
                                This is a Snackbar Content
                            </Typography>
                        </SnackbarContent>
                    </Snackbar>
                </ThemeProvider>,
            )
            cy.get('[data-test="snackbar"]').should('not.exist')
        })
        it('should hide the snackbar if the close button is clicked', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Snackbar variant="error" notched={false} visible={true}>
                        <SnackbarHeader>
                            <Typography variant="small" fs="sm" color="error">
                                Snackbar Header
                            </Typography>
                        </SnackbarHeader>
                        <SnackbarContent>
                            <Typography variant="small" fs="sm" color="white">
                                This is a Snackbar Content
                            </Typography>
                        </SnackbarContent>
                    </Snackbar>
                </ThemeProvider>,
            )
            cy.get('[data-testid="close-snackbar"]').click()
            cy.get('[data-test="snackbar"]').should('not.exist')
        })
    })

    context('Styles and Variants', () => {
        it('should apply specified styles from withLayout HOC', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Snackbar
                        variant="filled"
                        notched={true}
                        visible={true}
                        disableTimeout
                        bgColor="dark"
                    >
                        <SnackbarHeader>
                            <Typography variant="small" fs="sm">
                                Filled Snackbar
                            </Typography>
                        </SnackbarHeader>
                        <SnackbarContent>
                            <Typography variant="small" fs="sm">
                                Filled Snackbar With Notch
                            </Typography>
                        </SnackbarContent>
                    </Snackbar>
                </ThemeProvider>,
            )
            cy.get('[data-test="snackbar"]').and(
                'have.css',
                'background-color',
                'rgb(71, 71, 71)',
            )
        })
        it('should render only SnackbarHeader', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Snackbar
                        variant="filled"
                        notched={true}
                        visible={true}
                        disableTimeout
                        bgColor="dark"
                    >
                        <SnackbarHeader>
                            <Typography variant="small" fs="sm">
                                Snackbar with only header rendered
                            </Typography>
                        </SnackbarHeader>
                    </Snackbar>
                </ThemeProvider>,
            )
            cy.get('[data-test="snackbar"]').and(
                'have.css',
                'background-color',
                'rgb(71, 71, 71)',
            )
        })
        it('should render only SnackbarContent', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Snackbar
                        variant="filled"
                        notched={true}
                        visible={true}
                        disableTimeout
                        bgColor="dark"
                    >
                        <SnackbarContent>
                            <Typography variant="small" fs="sm">
                                Snackbar with only header rendered
                            </Typography>
                        </SnackbarContent>
                    </Snackbar>
                </ThemeProvider>,
            )
            cy.get('[data-test="snackbar"]').and(
                'have.css',
                'background-color',
                'rgb(71, 71, 71)',
            )
        })
        context('Positioning', () => {
            it('should put snackbar to the topLeft', () => {
                cy.viewport(900, 700)
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Snackbar
                            variant="filled"
                            notched={true}
                            visible={true}
                            disableTimeout
                            displayPosition="topLeft"
                        >
                            <SnackbarHeader>
                                <Typography variant="small" fs="sm">
                                    Filled Snackbar
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="small" fs="sm">
                                    Filled Snackbar With Notch
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </ThemeProvider>,
                )
                cy.get('[data-test="snackbar"]')
                    .should('exist')

                    .and('have.css', 'position', 'fixed')
            })
            it('should put snackbar to the topRight', () => {
                cy.viewport(900, 700)
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Snackbar
                            variant="filled"
                            notched={true}
                            visible={true}
                            disableTimeout
                            displayPosition="topRight"
                        >
                            <SnackbarHeader>
                                <Typography variant="small" fs="sm">
                                    Filled Snackbar
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="small" fs="sm">
                                    Filled Snackbar With Notch
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </ThemeProvider>,
                )
                cy.get('[data-test="snackbar"]')
                    .should('exist')
                    .and('have.css', 'position', 'fixed')
            })
            it('should put snackbar to the bottomLeft', () => {
                cy.viewport(900, 700)
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Snackbar
                            variant="filled"
                            notched={true}
                            visible={true}
                            disableTimeout
                            displayPosition="bottomLeft"
                        >
                            <SnackbarHeader>
                                <Typography variant="small" fs="sm">
                                    Filled Snackbar
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="small" fs="sm">
                                    Filled Snackbar With Notch
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </ThemeProvider>,
                )
                cy.get('[data-test="snackbar"]')
                    .should('exist')
                    .and('have.css', 'position', 'fixed')
            })
            it('should put snackbar to the bottomRight', () => {
                cy.viewport(900, 700)
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Snackbar
                            variant="filled"
                            notched={true}
                            visible={true}
                            disableTimeout
                            displayPosition="bottomRight"
                        >
                            <SnackbarHeader>
                                <Typography variant="small" fs="sm">
                                    Filled Snackbar
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="small" fs="sm">
                                    Filled Snackbar With Notch
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </ThemeProvider>,
                )
                cy.get('[data-test="snackbar"]')
                    .should('exist')
                    .and('have.css', 'position', 'fixed')
            })
        })
        context('Filled Snackbar', () => {
            it('should render filled Snackbar with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Snackbar
                            variant="filled"
                            notched={true}
                            visible={true}
                            disableTimeout
                            displayPosition="topRight"
                        >
                            <SnackbarHeader>
                                <Typography variant="small" fs="sm">
                                    Filled Snackbar
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="small" fs="sm">
                                    Filled Snackbar With Notch
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </ThemeProvider>,
                )
                cy.get('[data-test="snackbar"]')
                    .should('exist')
                    .should(
                        'have.css',
                        'background-color',
                        'rgb(242, 242, 242)',
                    )
                    .and(
                        'have.css',
                        'clip-path',
                        'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                    )
                cy.get('button')
                    .should(
                        'have.css',
                        'border-right',
                        '1px solid rgb(142, 142, 142)',
                    )
                    .and(
                        'have.css',
                        'border-top',
                        '1px solid rgb(142, 142, 142)',
                    )
            })
            it('should render filled Snackbar without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Snackbar
                            variant="filled"
                            notched={false}
                            visible={true}
                            disableTimeout
                        >
                            <SnackbarHeader>
                                <Typography variant="small" fs="sm">
                                    Filled Snackbar
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="small" fs="sm">
                                    Filled Snackbar Without Notch
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </ThemeProvider>,
                )
                cy.get('[data-test="snackbar"]')
                    .should('exist')
                    .should(
                        'have.css',
                        'background-color',
                        'rgb(242, 242, 242)',
                    )
                    .and('have.css', 'clip-path', 'none')
                cy.get('button')
                    .should('have.css', 'border-right', '0px none rgb(0, 0, 0)')
                    .and('have.css', 'border-top', '0px none rgb(0, 0, 0)')
            })
        })

        context('Outlined Snackbar', () => {
            it('should render outlined Snackbar with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Snackbar
                            variant="outlined"
                            notched={true}
                            visible={true}
                            disableTimeout
                        >
                            <SnackbarHeader>
                                <Typography variant="small" fs="sm">
                                    Outlined Snackbar Header
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="small" fs="sm">
                                    Something went wrong. Please try again
                                    later.
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </ThemeProvider>,
                )
                cy.get('[data-test="snackbar"]')
                    .should('exist')
                    .should(
                        'have.css',
                        'background-color',
                        'rgb(255, 255, 255)',
                    )
                    .and(
                        'have.css',
                        'clip-path',
                        'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                    )
                cy.get('button')
                    .should(
                        'have.css',
                        'border-right',
                        '1px solid rgb(142, 142, 142)',
                    )
                    .and(
                        'have.css',
                        'border-top',
                        '1px solid rgb(142, 142, 142)',
                    )
            })
            it('should render outlined Snackbar without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Snackbar
                            variant="outlined"
                            notched={false}
                            visible={true}
                            disableTimeout
                        >
                            <SnackbarHeader>
                                <Typography variant="small" fs="sm">
                                    Outlined Snackbar Header
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="small" fs="sm">
                                    Something went wrong. Please try again
                                    later.
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </ThemeProvider>,
                )
                cy.get('[data-test="snackbar"]')
                    .should('exist')
                    .should(
                        'have.css',
                        'background-color',
                        'rgb(255, 255, 255)',
                    )
                    .and('have.css', 'clip-path', 'none')
                cy.get('button')
                    .should('have.css', 'border-right', '0px none rgb(0, 0, 0)')
                    .and('have.css', 'border-top', '0px none rgb(0, 0, 0)')
            })
        })

        context('Dark Snackbar', () => {
            it('should render dark Snackbar with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Snackbar
                            variant="dark"
                            notched={true}
                            visible={true}
                            disableTimeout
                        >
                            <SnackbarHeader>
                                <Typography variant="small" fs="sm">
                                    Dark Snackbar Header
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="small" fs="sm">
                                    Something went wrong. Please try again
                                    later.
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </ThemeProvider>,
                )
                cy.get('[data-test="snackbar"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgb(42, 38, 31)')
                    .and(
                        'have.css',
                        'clip-path',
                        'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                    )
                cy.get('button')
                    .should(
                        'have.css',
                        'border-right',
                        '1px solid rgb(71, 71, 71)',
                    )
                    .and('have.css', 'border-top', '1px solid rgb(71, 71, 71)')
            })
            it('should render dark Snackbar without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Snackbar
                            variant="dark"
                            notched={false}
                            visible={true}
                            disableTimeout
                        >
                            <SnackbarHeader>
                                <Typography variant="small" fs="sm">
                                    Dark Snackbar Header
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography variant="small" fs="sm">
                                    Something went wrong. Please try again
                                    later.
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </ThemeProvider>,
                )
                cy.get('[data-test="snackbar"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgb(42, 38, 31)')
                    .and('have.css', 'clip-path', 'none')

                cy.get('button')
                    .should('have.css', 'border-right', '0px none rgb(0, 0, 0)')
                    .and('have.css', 'border-top', '0px none rgb(0, 0, 0)')
            })
        })

        context('Success Snackbar', () => {
            it('should render Success Snackbar with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Snackbar
                            variant="success"
                            notched={true}
                            visible={true}
                            disableTimeout
                        >
                            <SnackbarHeader>
                                <Typography
                                    variant="small"
                                    fs="sm"
                                    color="success"
                                >
                                    Success Snackbar Header
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography
                                    variant="small"
                                    fs="sm"
                                    color="white"
                                >
                                    Everything went alright. Works as expected.
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </ThemeProvider>,
                )
                cy.get('[data-test="snackbar"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgb(90, 107, 49)')
                    .and(
                        'have.css',
                        'clip-path',
                        'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                    )
                cy.get('button')
                    .should(
                        'have.css',
                        'border-right',
                        '1px solid rgb(90, 107, 49)',
                    )
                    .and('have.css', 'border-top', '1px solid rgb(90, 107, 49)')
            })
            it('should render Success Snackbar without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Snackbar
                            variant="success"
                            notched={false}
                            visible={true}
                            disableTimeout
                        >
                            <SnackbarHeader>
                                <Typography
                                    variant="small"
                                    fs="sm"
                                    color="success"
                                >
                                    Success Snackbar Header
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography
                                    variant="small"
                                    fs="sm"
                                    color="white"
                                >
                                    Everything went alright. Works as expected.
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </ThemeProvider>,
                )
                cy.get('[data-test="snackbar"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgb(90, 107, 49)')
                    .and('have.css', 'clip-path', 'none')
                cy.get('button')
                    .should('have.css', 'border-right', '0px none rgb(0, 0, 0)')
                    .and('have.css', 'border-top', '0px none rgb(0, 0, 0)')
            })
        })

        context('Error Snackbar', () => {
            it('should render Error Snackbar with notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Snackbar
                            variant="error"
                            notched={true}
                            visible={true}
                            disableTimeout
                            displayPosition="topRight"
                        >
                            <SnackbarHeader>
                                <Typography
                                    variant="small"
                                    fs="sm"
                                    color="error"
                                >
                                    Error Snackbar Header
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography
                                    variant="small"
                                    fs="sm"
                                    color="white"
                                >
                                    Something went wrong. Please try again
                                    later.
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </ThemeProvider>,
                )
                cy.get('[data-test="snackbar"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgb(202, 60, 31)')
                    .and(
                        'have.css',
                        'clip-path',
                        'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%)',
                    )
                cy.get('button')
                    .should(
                        'have.css',
                        'border-right',
                        '1px solid rgb(202, 60, 31)',
                    )
                    .and('have.css', 'border-top', '1px solid rgb(202, 60, 31)')
            })
            it('should render Error Snackbar without notch', () => {
                cy.mount(
                    <ThemeProvider theme={ModTheme}>
                        <Snackbar
                            displayPosition="bottomRight"
                            variant="error"
                            notched={false}
                            visible={true}
                            disableTimeout
                        >
                            <SnackbarHeader>
                                <Typography
                                    variant="small"
                                    fs="sm"
                                    color="error"
                                >
                                    Error Snackbar Header
                                </Typography>
                            </SnackbarHeader>
                            <SnackbarContent>
                                <Typography
                                    variant="small"
                                    fs="sm"
                                    color="white"
                                >
                                    Something went wrong. Please try again
                                    later.
                                </Typography>
                            </SnackbarContent>
                        </Snackbar>
                    </ThemeProvider>,
                )
                cy.get('[data-test="snackbar"]')
                    .should('exist')
                    .should('have.css', 'background-color', 'rgb(202, 60, 31)')
                    .and('have.css', 'clip-path', 'none')
                cy.get('button')
                    .should('have.css', 'border-right', '0px none rgb(0, 0, 0)')
                    .and('have.css', 'border-top', '0px none rgb(0, 0, 0)')
            })
        })
    })
})
