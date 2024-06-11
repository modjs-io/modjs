import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { Avatar, SlideshowMedia } from '../../index'
import Bob from '../../assets/images/bob.jpeg'

describe('SlideshowMedia', () => {
    context('Render with default props', () => {
        it('should render SlideshowMedia component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <SlideshowMedia>
                        <Avatar src={Bob} height="lg" width="lg" />
                    </SlideshowMedia>
                </ThemeProvider>,
            )
            cy.get('[data-test="slideshow-media"]').should('exist')
        })
    })
})
