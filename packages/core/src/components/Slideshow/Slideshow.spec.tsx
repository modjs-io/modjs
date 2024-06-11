import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { QuoteIcon } from '@modjs/icons'
import {
    Box,
    Slideshow,
    SlideshowFooter,
    SlideshowDescription,
    SlideshowItem,
    SlideshowMedia,
    Avatar,
    Typography,
} from '../../index'
import Bob from '../../assets/images/bob.jpeg'

const data = [
    {
        id: 100000,
        count: 0,
        excerpt:
            'Excerpt One: Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description:
            'Description One: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        author: 'Author One',
        avatarSrc: Bob,
        avatarAlt: '',
        role: 'Auther Role',
        org: 'Author Organization',
    },
    {
        id: 100001,
        count: 1,
        excerpt:
            'Excerpt Two: Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description:
            'Description Two: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        author: 'Author Two',
        avatarSrc: Bob,
        avatarAlt: '',
        role: 'Auther Role',
        org: 'Author Organization',
    },
    {
        id: 100002,
        count: 2,
        excerpt:
            'Excerpt Three: Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description:
            'Description Three: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        author: 'Author Three',
        avatarSrc: Bob,
        avatarAlt: '',
        role: 'Auther Role',
        org: 'Author Organization',
    },
]

describe('Slideshow', () => {
    beforeEach(() => {
        cy.mount(
            <ThemeProvider theme={ModTheme}>
                <Slideshow data={data}>
                    {data.map(data => (
                        <SlideshowItem key={data.id}>
                            <SlideshowMedia>
                                <Avatar
                                    src={data.avatarSrc}
                                    alt={data.avatarAlt}
                                    height="lg"
                                    width="lg"
                                />
                            </SlideshowMedia>
                            <Box textAlign="center">
                                <QuoteIcon height="2rem" width="2rem" />
                            </Box>
                            <SlideshowDescription>
                                <Typography variant="body1">
                                    {data.description}
                                </Typography>
                            </SlideshowDescription>

                            <SlideshowFooter>
                                <Typography variant="body2">
                                    {data.author} | {data.role} | {data.org}
                                </Typography>
                            </SlideshowFooter>
                        </SlideshowItem>
                    ))}
                </Slideshow>
            </ThemeProvider>,
        )
    })
    context('Render with default props', () => {
        it('should integrate well with other slideshow component', () => {
            cy.get('[data-test="slideshow"]').should('exist')
        })
        it('should render correct number of items based on the number of items in the array', () => {
            cy.get('[data-test="slideshow-items"] > :nth-child(1)').should(
                'exist',
            )
            cy.get('[data-test="slideshow-items"] > :nth-child(2)').should(
                'exist',
            )
            cy.get('[data-test="slideshow-items"] > :nth-child(3)').should(
                'exist',
            )
            cy.get('[data-test="slideshow-items"] > :nth-child(4)').should(
                'not.exist',
            )
        })
        it('should render correct number of button based on the number of items in the array', () => {
            cy.get('[data-testid="index-0"]').should('exist')
            cy.get('[data-testid="index-1"]').should('exist')
            cy.get('[data-testid="index-2"]').should('exist')
            cy.get('[data-testid="index-3"]').should('not.exist')
        })
    })

    context('Interactions and Behavior', () => {
        context('Mouse Clicks', () => {
            it('should show the first item in the array', () => {
                cy.get('[data-test="slideshow"]').should('exist')
                cy.get('[data-test="slideshow-items"]').should('exist')
                cy.get('[data-test="slideshow-items"] > :first-child').contains(
                    /One/,
                )
            })
            it('should show next item when the right arrow is clicked', () => {
                cy.get('[data-testid="next"]').click()
                cy.get(
                    '[data-test="slideshow-items"] > :nth-child(2)',
                ).contains(/Two/)
            })
            it('should show previous item when the left arrow is clicked', () => {
                cy.get('[data-testid="next"]').click()
                cy.get('[data-testid="prev"]').click()
                cy.get(
                    '[data-test="slideshow-items"] > :nth-child(1)',
                ).contains(/One/)
            })
            it('should show the exact item when the sqaure button is clicked', () => {
                cy.get('[data-testid="index-2"]').click()
                cy.get(
                    '[data-test="slideshow-items"] > :nth-child(3)',
                ).contains(/Three/)
            })
            it('should disable the clicked square button', () => {
                cy.get('[data-testid="index-1"]').click()
                cy.get('[data-testid="index-1"]').should('be.disabled')
            })
            it('should disbale the left arrow button if there is no prev item', () => {
                cy.get('[data-testid="index-0"]').should('be.disabled')
            })
            it('should enable the left arrow button if there are prev items', () => {
                cy.get('[data-testid="next"]').click()
                cy.get('[data-testid="index-0"]').should('be.enabled')
            })
            it('should disbale the right arrow button if there is no next item', () => {
                cy.get('[data-testid="next"]').click()
                cy.get('[data-testid="next"]').click()
                cy.get('[data-testid="index-2"]').should('be.disabled')
            })
            it('should enable the right arrow button if there are next items', () => {
                cy.get('[data-testid="next"]').click()
                cy.get('[data-testid="index-2"]').should('be.enabled')
            })
        })

        context('TODO: Swipe', () => {
            it('should swipe right when swipped right with fingers in mobile device', () => {
                cy.viewport('iphone-6')
            })
        })
    })
})
