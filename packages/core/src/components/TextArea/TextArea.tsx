import React, { useEffect, useState, useRef } from 'react'
import { styled } from 'styled-components'
import { ModTheme, withLayout } from '@modjs/utils'
import { validateText } from '@modjs/helpers'
import { ErrorIcon, SuccessIcon } from '@modjs/icons'
import { Box, Typography } from '../../index'

interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    minLength?: string
    maxLength?: string
    autoComplete?: string
    type?: string
    rows?: string
    resize?: string
}

interface ModTextAreaProps extends TextAreaProps {
    active?: boolean
    valid?: boolean
    dataValue?: string
    variant?: 'filled' | 'outlined' | 'transparent'
    notched?: boolean //works only on variant filled and outlined
}

const forwardProps = (prop: string) =>
    !['active', 'valid', 'variant', 'notched', 'dataValue'].includes(prop)

const ModTextAreaWrapper = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModTextAreaProps>`
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

const ModTextarea = styled.textarea.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<TextAreaProps>`
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
const TextArea = ({
    minLength,
    maxLength,
    autoComplete,
    type,
    rows,
    resize,
    variant,
    notched,
    ...props
}: ModTextAreaProps) => {
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

    const [active, setActive] = useState(false)
    const [valid, setValid] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [inputMaxLength, setInputMaxLength] = useState(5000)
    const [inputLength, setInputLength] = useState(0)
    const [validLength, setValidLength] = useState(false)

    const handleInput: React.FormEventHandler<HTMLTextAreaElement> = event => {
        const { value, minLength, maxLength } = event.target as HTMLInputElement
        setInputLength(value.length)
        setInputValue(value)
        if (validateText(value, minLength, maxLength)) {
            setValid(true)
            setValidLength(true)
        } else {
            setValid(false)
            setValidLength(false)
        }
    }

    useEffect(() => {
        if (textAreaRef.current) {
            setInputMaxLength(textAreaRef.current.maxLength)
        }
    }, [])

    return (
        <>
            <ModTextAreaWrapper
                minLength={minLength}
                maxLength={maxLength}
                autoComplete={autoComplete}
                type={type}
                rows={rows}
                resize={resize}
                dataValue={inputValue}
                active={active}
                valid={valid}
                variant={variant ? variant : 'filled'}
                notched={notched === false ? false : true}
            >
                <ModTextarea
                    {...props}
                    ref={textAreaRef}
                    minLength={minLength ? minLength : '1'}
                    maxLength={maxLength ? maxLength : '5000'}
                    autoComplete={autoComplete ? autoComplete : 'off'}
                    type={type ? type : 'text'}
                    rows={rows ? rows : '9'}
                    resize={resize ? resize : 'vertical'}
                    value={inputValue}
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)}
                    onInput={handleInput}
                    data-test="text-area"
                />
            </ModTextAreaWrapper>

            {active && (
                <Box
                    display="flex"
                    gap="udense"
                    alignItems="center"
                    mb="udense"
                    data-testid="character-count"
                >
                    {validLength ? (
                        <>
                            <SuccessIcon
                                fill={ModTheme.color.success}
                                data-testid="length-success"
                            />
                            <Typography
                                variant="small"
                                color="success"
                                data-testid="char-length"
                            >{`${inputLength} / ${inputMaxLength} characters`}</Typography>
                        </>
                    ) : (
                        <>
                            <ErrorIcon
                                fill={ModTheme.color.error}
                                data-testid="length-error"
                            />
                            <Typography
                                variant="small"
                                color="error"
                                data-testid="char-length"
                            >{`${inputLength} / ${inputMaxLength} characters`}</Typography>
                        </>
                    )}
                </Box>
            )}
        </>
    )
}

export default withLayout(TextArea)
