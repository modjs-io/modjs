import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { SlideshowItem } from '../../index'

describe('SlideshowItem', () => {
    context('Render with default props', () => {
        it('should render SlideshowItem component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <SlideshowItem></SlideshowItem>
                </ThemeProvider>,
            )
            cy.get('[data-test="slideshow-item"]').should('exist')
        })
    })
})
