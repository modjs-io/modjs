import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '../../../../utils/src/index'

interface ModArticleProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
}

const ModArticle = styled.article<ModArticleProps>`
    margin: 0;
    padding: 0;
    display: block;
`

const Article = ({ children, ...props }: ModArticleProps) => {
    return (
        <ModArticle {...props} data-test="article">
            {children}
        </ModArticle>
    )
}

export default withLayout(Article)
