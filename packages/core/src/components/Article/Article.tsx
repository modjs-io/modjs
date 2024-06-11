import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModArticleProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
}

const ModArticle = styled.article<ModArticleProps>``

const Article = ({ children, ...props }: ModArticleProps) => {
    return (
        <ModArticle {...props} data-test="article">
            {children}
        </ModArticle>
    )
}

export default withLayout(Article)
