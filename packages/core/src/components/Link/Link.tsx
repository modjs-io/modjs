import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'

interface ModLinkProps {
    children: React.ReactNode
    startAdornment?: React.ReactNode
    endAdornment?: React.ReactNode
    variant?: 'filled' | 'outlined' | 'transparent' | 'icon' | 'inline'
    notched?: boolean //works only on variant filled and outlined
}

const forwardProps = (prop: string) => !['variant', 'notched'].includes(prop)

const ModLink = styled.a.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModLinkProps>`
    background-color: ${props =>
        props.variant === 'filled'
            ? props.theme.color.primary
            : props.variant === 'outlined'
              ? props.theme.color.transparent
              : props.variant === 'transparent'
                ? props.theme.color.transparent
                : props.variant === 'icon'
                  ? props.theme.color.transparent
                  : props.variant === 'inline'
                    ? props.theme.color.transparent
                    : props.theme.color.primary};
    ${props =>
        props.variant === 'filled' &&
        props.notched &&
        `
        clip-path: polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%);
    `}
    width: fit-content;
    max-width: fit-content;
    font-family: ${props => props.theme.font.primary};
    font-size: ${props =>
        props.variant === 'transparent'
            ? props.theme.fs.sm
            : props.variant === 'inline'
              ? props.theme.fs.md
              : props.theme.fs.xsm};
    font-weight: ${props =>
        props.variant === 'inline'
            ? props.theme.fw.semibold
            : props.theme.fw.medium};
    color: ${props =>
        props.variant === 'filled'
            ? props.theme.color.white
            : props.variant === 'outlined'
              ? props.theme.color.primary
              : props.variant === 'transparent'
                ? props.theme.color.primary
                : props.variant === 'inline'
                  ? props.theme.color.primary
                  : ''};
    text-transform: ${props =>
        props.variant === 'filled'
            ? 'uppercase'
            : props.variant === 'outlined'
              ? 'uppercase'
              : props.variant === 'transparent'
                ? 'uppercase'
                : 'none'};
    text-decoration: none;
    padding: ${props =>
        props.variant === 'filled'
            ? props.theme.spacing.dense
            : props.variant === 'outlined'
              ? props.theme.spacing.dense
              : 'none'};
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: ${props => (props.variant === 'inline' ? 'inline' : 'flex')};
    gap: ${props => props.theme.spacing.udense};
    align-items: center;
    justify-content: ${props =>
        props.variant === 'outlined' ? 'center' : 'left'};
    border: none;
    ${props =>
        props.variant === 'outlined' &&
        !props.notched &&
        `
        border: 1px solid ${props.theme.color.primary};
    `};
    ${props =>
        props.variant === 'outlined' &&
        props.notched &&
        `
    &::before {
      content: '';
      background-color: ${props.theme.color.primary};
      clip-path: polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px,8px 0%,9.9px 0px,1px 8px,1px calc(100% - 1px),calc(100% - 8px) calc(100% - 1px),calc(100% - 1px) calc(100% - 8px),calc(100% - 1px) 1px,7px 1px);
      position: absolute;
      top: none;
      left: none;
      width: 100%;
      height: 100%;
    }
  `};
    &:hover {
        opacity: 0.5;
    }
`
const Link = ({
    children,
    startAdornment,
    endAdornment,
    variant,
    notched,
    ...props
}: ModLinkProps) => {
    return (
        <ModLink
            variant={variant ? variant : 'filled'}
            notched={notched === false ? false : true}
            {...props}
            data-test="link"
        >
            {startAdornment}
            {children}
            {endAdornment}
        </ModLink>
    )
}

export default withLayout(Link)
