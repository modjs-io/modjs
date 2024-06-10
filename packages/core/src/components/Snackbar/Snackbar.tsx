import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { withLayout } from '../../../../utils/src/index'
import { CloseIcon } from '../../../../icons/src/index'
import { Box, Button } from '../../index'

interface ModSnackbarProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    variant?: 'filled' | 'outlined' | 'dark' | 'success' | 'error'
    displayPosition?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft'
    visible?: boolean
    timeout?: number
    disableTimeout?: boolean
    notched?: boolean
}

const forwardProps = (prop: string) =>
    ![
        'variant',
        'visible',
        'timeout',
        'disableTimeout',
        'notched',
        'displayPosition',
    ].includes(prop)

const ModSnackbar = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModSnackbarProps>`
    ${props =>
        ((props.notched === true && props.variant === 'filled') ||
            (props.notched === true && props.variant === 'outlined') ||
            (props.notched === true && props.variant === 'success') ||
            (props.notched === true && props.variant === 'error') ||
            (props.notched === true && props.variant === 'dark')) &&
        `
            &:before { 
                content: '';
                background: ${props.variant === 'success' ? props.theme.color.success : props.variant === 'error' ? props.theme.color.error : props.variant === 'dark' ? props.theme.color.dark : props.theme.color.light};
                clip-path: polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px,8px 0%,9.9px 0px,1px 8px,1px calc(100% - 1px),calc(100% - 8px) calc(100% - 1px),calc(100% - 1px) calc(100% - 8px),calc(100% - 1px) 1px,7px 1px);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
            };
    `};

    ${props =>
        props.displayPosition === 'topRight' &&
        `
            position: fixed;
            right: ${props.theme.spacing.dense};
    `};
    ${props =>
        props.displayPosition === 'topLeft' &&
        `
            position: fixed;
            left: ${props.theme.spacing.dense};
    `};
    ${props =>
        props.displayPosition === 'bottomRight' &&
        `
            position: fixed;
            right: ${props.theme.spacing.dense};
            bottom: ${props.theme.spacing.dense};
    `};
    ${props =>
        props.displayPosition === 'bottomLeft' &&
        `
            position: fixed;
            left: ${props.theme.spacing.dense};
            bottom: ${props.theme.spacing.dense};
    `};

    width: fit-content;
    background-color: ${props =>
        props.variant === 'filled'
            ? props.theme.color.fade
            : props.variant === 'outlined'
              ? props.theme.color.white
              : props.variant === 'dark'
                ? props.theme.color.secondary
                : props.variant === 'success'
                  ? props.theme.color.success
                  : props.variant === 'error'
                    ? props.theme.color.error
                    : props.theme.color.primary};

    color: ${props => props.theme.color.light};
    font-family: ${props => props.theme.font.primary};
    font-size: ${props => props.theme.fs.sm};

    ${props =>
        !props.notched &&
        props.variant === 'success' &&
        `
        border: 1px solid ${props.theme.color.success};
            border-bottom: 1px solid ${props.theme.color.success};
    `}
    ${props =>
        !props.notched &&
        props.variant === 'error' &&
        `
            border: 1px solid ${props.theme.color.error};
            border-bottom: 1px solid ${props.theme.color.error};
    `}
    ${props =>
        !props.notched &&
        props.variant === 'dark' &&
        `
            border: 1px solid ${props.theme.color.dark};
            border-bottom: 1px solid ${props.theme.color.dark};
    `}
    ${props =>
        !props.notched &&
        props.variant === 'outlined' &&
        `
            border: 1px solid ${props.theme.color.light};
            border-bottom: 1px solid ${props.theme.color.light};
    `}
    ${props =>
        !props.notched &&
        props.variant === 'filled' &&
        `
            border: 1px solid ${props.theme.color.light};
            border-bottom: 1px solid ${props.theme.color.light};
    `}

    overflow: hidden;
    display: block;
    align-items: center;
    ${props =>
        props.notched &&
        `
            clip-path: polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%);
    `};
`

const Snackbar = ({
    children,
    variant,
    displayPosition,
    visible,
    timeout,
    disableTimeout,
    notched,
    ...props
}: ModSnackbarProps) => {
    const [show, setShow] = useState(false)

    const handleCloseSnackbar = () => {
        setShow(false)
    }

    useEffect(() => {
        if (visible) {
            setShow(true)
        }
        if (visible && !disableTimeout) {
            const timer = setTimeout(() => {
                setShow(false)
            }, timeout || 5000)

            return () => clearTimeout(timer)
        }
    }, [visible, timeout, disableTimeout])

    return (
        <>
            {show && (
                <ModSnackbar
                    {...props}
                    variant={variant ? variant : 'success'}
                    displayPosition={
                        displayPosition ? displayPosition : 'topLeft'
                    }
                    notched={notched === false ? false : true}
                    timeout={disableTimeout ? Infinity : timeout || 5000}
                    data-test="snackbar"
                >
                    <Button
                        variant="icon"
                        bgColor="white"
                        float="right"
                        pt="normal"
                        data-testid="close-snackbar"
                        borderRight={
                            notched && variant === 'success'
                                ? 'success'
                                : notched && variant === 'error'
                                  ? 'error'
                                  : notched && variant === 'filled'
                                    ? 'fade'
                                    : notched && variant === 'outlined'
                                      ? 'fade'
                                      : notched && variant === 'dark'
                                        ? 'dark'
                                        : 'none'
                        }
                        borderTop={
                            notched && variant === 'success'
                                ? 'success'
                                : notched && variant === 'error'
                                  ? 'error'
                                  : notched && variant === 'filled'
                                    ? 'fade'
                                    : notched && variant === 'outlined'
                                      ? 'fade'
                                      : notched && variant === 'dark'
                                        ? 'dark'
                                        : 'none'
                        }
                        onClick={handleCloseSnackbar}
                    >
                        <CloseIcon />
                    </Button>

                    <Box>{children}</Box>
                </ModSnackbar>
            )}
        </>
    )
}

export default withLayout(Snackbar)
