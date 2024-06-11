import React, { useState } from 'react'
import { styled } from 'styled-components'
import { ModTheme, withLayout } from '@modjs/utils'

import {
    formatPassword,
    validatePasswordDigit,
    validatePasswordLength,
    validatePasswordLowercase,
    validatePasswordSpecialChar,
    validatePasswordUppercase,
} from '@modjs/helpers'
import {
    NotVisibleIcon,
    SuccessIcon,
    ErrorIcon,
    PasswordIcon,
    VisibleIcon,
} from '@modjs/icons'
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

interface ModCreatePasswordFieldProps extends TextFieldProps {
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

const ModCreatePasswordFieldWrapper = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModCreatePasswordFieldProps>`
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

const ModCreatePasswordField = styled.input.withConfig({
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

const CreatePasswordField = ({
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
}: ModCreatePasswordFieldProps) => {
    const [active, setActive] = useState(false)
    const [valid, setValid] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [inputMinLength, setInputMinLength] = useState(8)
    const [inputMaxLength, setInputMaxLength] = useState(32)
    const [visible, setVisible] = useState(false)

    const [validPasswordLength, setValidPasswordLength] = useState(false)
    const [validPasswordDigit, setValidPasswordDigit] = useState(false)
    const [validPasswordUppercase, setValidPasswordUppercase] = useState(false)
    const [validPasswordLowercase, setValidPasswordLowercase] = useState(false)
    const [validPasswordSpecialChar, setValidPasswordSpecialChar] =
        useState(false)

    const handleInput: React.FormEventHandler<HTMLInputElement> = event => {
        const { value, minLength, maxLength } = event.target as HTMLInputElement
        const formattedPassword = formatPassword(value)
        setInputValue(formattedPassword)
        setInputMinLength(minLength)
        setInputMaxLength(maxLength)
        const isValidLength = validatePasswordLength(
            value,
            minLength,
            maxLength,
        )
        const isValidDigit = validatePasswordDigit(value)
        const isValidUppercase = validatePasswordUppercase(value)
        const isValidLowercase = validatePasswordLowercase(value)
        const isValidSpecialChar = validatePasswordSpecialChar(value)

        setValid(
            isValidLength &&
                isValidDigit &&
                isValidUppercase &&
                isValidLowercase &&
                isValidSpecialChar,
        )
        setValidPasswordLength(isValidLength)
        setValidPasswordDigit(isValidDigit)
        setValidPasswordUppercase(isValidUppercase)
        setValidPasswordLowercase(isValidLowercase)
        setValidPasswordSpecialChar(isValidSpecialChar)
    }

    const toggleVisibility = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.preventDefault()
        setVisible(!visible)
    }

    return (
        <>
            <ModCreatePasswordFieldWrapper
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
                <ModCreatePasswordField
                    {...props}
                    minLength={minLength ? minLength : '8'}
                    maxLength={maxLength ? maxLength : '32'}
                    autoComplete={autoComplete ? autoComplete : 'off'}
                    placeholder={placeholder ? placeholder : 'New Password *'}
                    type={visible ? 'text' : 'password'}
                    name={name ? name : 'new-password'}
                    id={id ? id : 'new-password'}
                    value={inputValue}
                    data-testid="new-password-field"
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)}
                    onInput={handleInput}
                    data-test="create-password-field"
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
            </ModCreatePasswordFieldWrapper>

            {active && !valid && (
                <Box data-testid="error">
                    <Box
                        display="flex"
                        gap="udense"
                        mb="udense"
                        alignItems="center"
                    >
                        {validPasswordLength ? (
                            <SuccessIcon
                                fill={ModTheme.color.success}
                                data-testid="length-satisfied"
                            />
                        ) : (
                            <ErrorIcon
                                fill={ModTheme.color.error}
                                data-testid="length-not-satisfied"
                            />
                        )}
                        <Typography
                            variant="small"
                            color={validPasswordLength ? 'success' : 'error'}
                        >{`Password must be between ${inputMinLength} and ${inputMaxLength} characters.`}</Typography>
                    </Box>
                    <Box
                        display="flex"
                        gap="udense"
                        mb="udense"
                        alignItems="center"
                    >
                        {validPasswordDigit ? (
                            <SuccessIcon
                                fill={ModTheme.color.success}
                                data-testid="digit-satisfied"
                            />
                        ) : (
                            <ErrorIcon
                                fill={ModTheme.color.error}
                                data-testid="digit-not-satisfied"
                            />
                        )}{' '}
                        <Typography
                            variant="small"
                            color={validPasswordDigit ? 'success' : 'error'}
                        >
                            Password must contain atleast one digit.
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        gap="udense"
                        mb="udense"
                        alignItems="center"
                    >
                        {validPasswordUppercase ? (
                            <SuccessIcon
                                fill={ModTheme.color.success}
                                data-testid="uppercase-satisfied"
                            />
                        ) : (
                            <ErrorIcon
                                fill={ModTheme.color.error}
                                data-testid="uppercase-not-satisfied"
                            />
                        )}{' '}
                        <Typography
                            variant="small"
                            color={validPasswordUppercase ? 'success' : 'error'}
                        >
                            Password must contain atleast one uppercase letter.
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        gap="udense"
                        mb="udense"
                        alignItems="center"
                    >
                        {validPasswordLowercase ? (
                            <SuccessIcon
                                fill={ModTheme.color.success}
                                data-testid="lowercase-satisfied"
                            />
                        ) : (
                            <ErrorIcon
                                fill={ModTheme.color.error}
                                data-testid="lowercase-not-satisfied"
                            />
                        )}{' '}
                        <Typography
                            variant="small"
                            color={validPasswordLowercase ? 'success' : 'error'}
                        >
                            Password must contain atleast one lowercase letter.
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        gap="udense"
                        mb="udense"
                        alignItems="center"
                    >
                        {validPasswordSpecialChar ? (
                            <SuccessIcon
                                fill={ModTheme.color.success}
                                data-testid="specialChar-satisfied"
                            />
                        ) : (
                            <ErrorIcon
                                fill={ModTheme.color.error}
                                data-testid="specialChar-not-satisfied"
                            />
                        )}{' '}
                        <Typography
                            variant="small"
                            color={
                                validPasswordSpecialChar ? 'success' : 'error'
                            }
                        >
                            Password must contain atleast one special character.
                        </Typography>
                    </Box>
                </Box>
            )}
        </>
    )
}

export default withLayout(CreatePasswordField)
