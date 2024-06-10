import React, { useState } from 'react'
import { styled } from 'styled-components'
import { ModTheme, withLayout } from '../../../../utils/src/index'
import { formatPassword, validatePassword } from '../../../../helpers/src/index'
import {
    ErrorIcon,
    NotVisibleIcon,
    PasswordIcon,
    VisibleIcon,
} from '../../../../icons/src/index'
import { Box, Button, Typography } from '../../index'

interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    minLength?: string
    maxLength?: string
    autoComplete?: string
    placeholder?: string
    type?: string
    name?: string
    id?: string
    value?: string
}

interface ModPasswordFieldProps extends TextFieldProps {
    active?: boolean
    valid?: boolean
    dataValue?: string
    variant?: 'filled' | 'outlined' | 'transparent'
    notched?: boolean //works only on variant filled and outlined
    startAdornment?: React.ReactNode
}

const forwardProps = (prop: string) =>
    ![
        'active',
        'valid',
        'variant',
        'notched',
        'startAdornment',
        'dataValue',
    ].includes(prop)

const ModPasswordFieldWrapper = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModPasswordFieldProps>`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-left: 0.4em;
    margin: 0.8em 0em;
    background: ${props =>
        props.variant === 'filled'
            ? props.theme.color.fade
            : props.theme.color.transparent};
    ${props =>
        props.notched &&
        `
    clip-path: polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%);
    `}
    ${props =>
        ((!props.notched && props.variant === 'outlined') ||
            (!props.notched && props.variant === 'filled')) &&
        `
    border: ${
        (props.active && !props.valid) || (props.dataValue && !props.valid)
            ? `1px solid ${props.theme.color.error}`
            : (props.active && props.valid) || (props.dataValue && props.valid)
              ? `1px solid ${props.theme.color.success}`
              : `1px solid ${props.theme.color.light}`
    };
    `};
    ${props =>
        props.variant === 'transparent' &&
        `
    border-bottom: ${
        (props.active && !props.valid) || (props.dataValue && !props.valid)
            ? `1px solid ${props.theme.color.error}`
            : (props.active && props.valid) || (props.dataValue && props.valid)
              ? `1px solid ${props.theme.color.success}`
              : `1px solid ${props.theme.color.light}`
    };
    `}
    ${props =>
        ((props.variant === 'filled' && props.notched) ||
            (props.variant === 'outlined' && props.notched)) &&
        `
    &:before { 
        content: '';
        background: ${
            (props.active && !props.valid) || (props.dataValue && !props.valid)
                ? props.theme.color.error
                : (props.active && props.valid) ||
                    (props.dataValue && props.valid)
                  ? props.theme.color.success
                  : props.theme.color.light
        };
        clip-path: polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px,8px 0%,9.9px 0px,1px 8px,1px calc(100% - 1px),calc(100% - 8px) calc(100% - 1px),calc(100% - 1px) calc(100% - 8px),calc(100% - 1px) 1px,7px 1px);
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    };
    `};
`

const ModPasswordField = styled.input.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<TextFieldProps>`
    font-size: ${props => props.theme.fs.md};
    font-family: ${props => props.theme.font.primary};
    display: flex;
    align-items: center;
    padding: 0.6em 0.2em;
    width: 100%;
    border: none;
    box-sizing: border-box;
    background: transparent;
    &:focus {
        outline: none;
    }
    &:active {
        outline: none;
    }
`

const PasswordField = ({
    minLength,
    maxLength,
    autoComplete,
    placeholder,
    type,
    name,
    id,
    variant,
    notched,
    startAdornment,
    ...props
}: ModPasswordFieldProps) => {
    const [active, setActive] = useState(false)
    const [valid, setValid] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const [visible, setVisible] = useState(false)

    const handleInput: React.FormEventHandler<HTMLInputElement> = event => {
        const { value, minLength, maxLength } = event.target as HTMLInputElement
        const formattedPassword = formatPassword(value)
        setInputValue(formattedPassword)
        if (validatePassword(value, minLength, maxLength)) {
            setValid(true)
        } else {
            setValid(false)
        }
    }

    const toggleVisibility = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.preventDefault()
        setVisible(!visible)
    }

    return (
        <>
            <ModPasswordFieldWrapper
                minLength={minLength}
                maxLength={maxLength}
                autoComplete={autoComplete}
                placeholder={placeholder}
                type={type}
                name={name}
                id={id}
                dataValue={inputValue}
                active={active}
                valid={valid}
                variant={variant ? variant : 'filled'}
                notched={notched === false ? false : true}
            >
                {startAdornment ? (
                    startAdornment
                ) : (
                    <PasswordIcon
                        fill={
                            (active && !valid) || (inputValue && !valid)
                                ? ModTheme.color.error
                                : (active && valid) || (inputValue && valid)
                                  ? ModTheme.color.success
                                  : ModTheme.color.light
                        }
                    />
                )}
                <ModPasswordField
                    {...props}
                    minLength={minLength ? minLength : '8'}
                    maxLength={maxLength ? maxLength : '32'}
                    autoComplete={autoComplete ? autoComplete : 'off'}
                    placeholder={placeholder ? placeholder : 'Your Password *'}
                    type={visible ? 'text' : 'password'}
                    name={name ? name : 'password'}
                    id={id ? id : 'password'}
                    value={inputValue}
                    data-testid="password-field"
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)}
                    onInput={handleInput}
                    data-test="password-field"
                />
                <Button
                    onClick={toggleVisibility}
                    variant="transparent"
                    pr="xdense"
                >
                    {visible ? (
                        <NotVisibleIcon height="1rem" width="1.5rem" />
                    ) : (
                        <VisibleIcon height="1rem" width="1.5rem" />
                    )}
                </Button>
            </ModPasswordFieldWrapper>

            {active && !valid && (
                <Box
                    display="flex"
                    gap="udense"
                    alignItems="center"
                    data-testid="error"
                >
                    <ErrorIcon fill={ModTheme.color.error} />{' '}
                    <Typography variant="small" color="error">
                        Please enter a valid password.
                    </Typography>
                </Box>
            )}
        </>
    )
}

export default withLayout(PasswordField)
