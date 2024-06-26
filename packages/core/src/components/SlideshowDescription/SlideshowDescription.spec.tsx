import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { SlideshowDescription, Typography } from '../../index'

describe('SlideshowDescription', () => {
    context('Render with default props', () => {
        it('should render SlideshowDescription component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <SlideshowDescription>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not five centuries, but also the leap into
                            electronic typesetting.
                        </Typography>
                    </SlideshowDescription>
                </ThemeProvider>,
            )
            cy.get('[data-test="slideshow-description"]').should('exist')
        })
    })
})
