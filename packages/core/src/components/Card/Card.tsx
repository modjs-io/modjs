import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    variant?: 'filled' | 'outlined' | 'dark' | 'transparent'
    notched?: boolean
}

const forwardProps = (prop: string) => !['variant', 'notched'].includes(prop)

const ModCard = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModCardProps>`
    background-color: ${props =>
        props.variant === 'filled'
            ? props.theme.color.fade
            : props.variant === 'outlined'
              ? props.theme.color.transparent
              : props.variant === 'dark'
                ? props.theme.color.secondary
                : props.variant === 'transparent'
                  ? props.theme.color.transparent
                  : props.theme.color.primary};

    position: relative;
    overflow: hidden;
    align-items: center;
    padding: ${props =>
        props.variant === 'filled' ||
        props.variant === 'outlined' ||
        props.variant === 'dark'
            ? props.theme.spacing.dense
            : '0em'};
    margin: 0.8em 0em;
    ${props =>
        props.notched &&
        `
            clip-path: polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%);
    `};
    ${props =>
        ((!props.notched && props.variant === 'outlined') ||
            (!props.notched && props.variant === 'filled')) &&
        `
            border: 1px solid ${props.theme.color.light};
    `};
    ${props =>
        ((props.notched === true && props.variant === 'filled') ||
            (props.notched === true && props.variant === 'outlined')) &&
        `
            &:before { 
                content: '';
                background: ${props.theme.color.light};
                clip-path: polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px,8px 0%,9.9px 0px,1px 8px,1px calc(100% - 1px),calc(100% - 8px) calc(100% - 1px),calc(100% - 1px) calc(100% - 8px),calc(100% - 1px) 1px,7px 1px);
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
            };
        `};

    &:hover {
        background-color: ${props =>
            props.variant === 'dark' && props.theme.color.black};
        transition: ${props => props.variant === 'dark' && '0.5s ease-in-out'};
    }
`

const Card = ({ children, variant, notched, ...props }: ModCardProps) => {
    return (
        <ModCard
            {...props}
            variant={variant ? variant : 'filled'}
            notched={notched === false ? false : true}
            data-test="card"
        >
            {children}
        </ModCard>
    )
}

export default withLayout(Card)
