import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModTheme } from '@modjs/utils'
import { Article, Typography } from '../../index'

describe('Article', () => {
    context('Render with default props', () => {
        it('should render Article component correctly', () => {
            cy.mount(
                <ThemeProvider theme={ModTheme}>
                    <Article>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not five centuries, but also the leap into
                            electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </Typography>
                    </Article>
                </ThemeProvider>,
            )
            cy.get('[data-test="article"]').should('exist')
        })
    })
})
