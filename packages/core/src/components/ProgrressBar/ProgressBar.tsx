import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    isLoading?: boolean
    variant?: 'success' | 'error' | 'default'
}

const forwardProps = (prop: string) => !['isLoading', 'variant'].includes(prop)

const ModProgressBar = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModProgressBarProps>`
    display: ${props => (props.isLoading ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4em;
    background-color: ${props =>
        props.variant === 'success'
            ? props.theme.color.success
            : props.variant === 'error'
              ? props.theme.color.error
              : props.theme.color.primary};
    height: 0.2em;
`

const ProgressBar = ({ variant, ...props }: ModProgressBarProps) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const finishLoading = () => {
            setLoading(false)
        }

        window.addEventListener('load', finishLoading)

        return () => {
            window.removeEventListener('load', finishLoading)
        }
    }, [])

    return (
        <ModProgressBar
            isLoading={loading}
            variant={variant ? variant : 'default'}
            {...props}
            data-test="progress-bar"
        />
    )
}

export default withLayout(ProgressBar)
