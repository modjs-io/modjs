import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { SlideshowFooter, Typography } from '../../index'

describe('SlideshowFooter', () => {
    context('Render with default props', () => {
        it('should render SlideshowFooter component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <SlideshowFooter>
                        <Typography variant="body1">
                            Author | Organization
                        </Typography>
                    </SlideshowFooter>
                </ThemeProvider>,
            )
            cy.get('[data-test="slideshow-footer"]').should('exist')
        })
    })
})
