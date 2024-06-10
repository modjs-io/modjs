import React, { useState } from 'react'
import { styled } from 'styled-components'
import { ModTheme, withLayout } from '../../../../utils/src/index'
import { validateEmail, formatEmail } from '../../../../helpers/src/index'
import { EmailIcon, ErrorIcon } from '../../../../icons/src/index'
import { Box, Typography } from '../../index'

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

interface ModEmailFieldProps extends TextFieldProps {
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

const ModEmailFieldWrapper = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModEmailFieldProps>`
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
                (props.active && !props.valid) ||
                (props.dataValue && !props.valid)
                    ? `1px solid ${props.theme.color.error}`
                    : (props.active && props.valid) ||
                        (props.dataValue && props.valid)
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

const ModEmailField = styled.input.withConfig({
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

const EmailField = ({
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
}: ModEmailFieldProps) => {
    const [active, setActive] = useState(false)
    const [valid, setValid] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const handleInput: React.FormEventHandler<HTMLInputElement> = event => {
        const { value, minLength, maxLength } = event.target as HTMLInputElement
        const formattedEmail = formatEmail(value)
        setInputValue(formattedEmail)
        if (validateEmail(value, minLength, maxLength)) {
            setValid(true)
        } else {
            setValid(false)
        }
    }

    return (
        <>
            <ModEmailFieldWrapper
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
                    <EmailIcon
                        fill={
                            (active && !valid) || (inputValue && !valid)
                                ? ModTheme.color.error
                                : (active && valid) || (inputValue && valid)
                                  ? ModTheme.color.success
                                  : ModTheme.color.light
                        }
                    />
                )}
                <ModEmailField
                    {...props}
                    minLength={minLength ? minLength : '6'}
                    maxLength={maxLength ? maxLength : '64'}
                    autoComplete={autoComplete ? autoComplete : 'off'}
                    placeholder={placeholder ? placeholder : 'Your Email *'}
                    type={type ? type : 'text'}
                    name={name ? name : 'email'}
                    id={id ? id : 'email'}
                    value={inputValue}
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)}
                    onInput={handleInput}
                />
            </ModEmailFieldWrapper>
            {active && !valid && (
                <Box
                    display="flex"
                    gap="udense"
                    alignItems="center"
                    data-testid="error"
                >
                    <ErrorIcon fill={ModTheme.color.error} />
                    <Typography variant="small" color="error">
                        Please enter a valid email.
                    </Typography>
                </Box>
            )}
        </>
    )
}

export default withLayout(EmailField)
