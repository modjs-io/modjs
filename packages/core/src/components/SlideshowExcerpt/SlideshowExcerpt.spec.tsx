import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { SlideshowExcerpt, Typography } from '../../index'

describe('SlideshowExcerpt', () => {
    context('Render with default props', () => {
        it('should render SlideshowExcerpt component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <SlideshowExcerpt>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </Typography>
                    </SlideshowExcerpt>
                </ThemeProvider>,
            )
            cy.get('[data-test="slideshow-excerpt"]').should('exist')
        })
    })
})
