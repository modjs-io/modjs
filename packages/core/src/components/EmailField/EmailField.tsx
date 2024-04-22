import React, {useState, useEffect} from 'react'
import {styled} from 'styled-components'
import { validateEmail } from '@modjs/utils'
import Typography from '../Typography/Typography'
import withLayout from '../../assets/withLayout'

interface EmailFieldProps {
  variant?: 'outlined'
  startAdornment?: React.ReactNode
  value?: string
}
const forwardProps = (prop: string) => !['variant', 'focusWithin', 'active', 'valid'].includes(prop);

const ModEmailFieldWrap = styled.div.withConfig({
  shouldForwardProp: (prop) => forwardProps(prop)
})<EmailFieldProps>`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-left: ${({theme}) => theme.spacing.xdense};
    margin-top: ${({theme}) => theme.spacing.dense};
    margin-bottom: ${({theme}) => theme.spacing.dense};
    &:before {
        content: '';
        background: ${({ theme, focusWithin, active, valid, value }) =>
        (focusWithin && !valid || active && !valid ) ? theme.color.error : value && !valid ? theme.color.error : valid ? theme.color.success : theme.color.light};
        clip-path: polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px,8px 0%,9.9px 0px,1px 8px,1px calc(100% - 1px),calc(100% - 8px) calc(100% - 1px),calc(100% - 1px) calc(100% - 8px),calc(100% - 1px) 1px,7px 1px);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const ModInput = styled.input.withConfig({
  shouldForwardProp: (prop) => forwardProps(prop)
})<EmailFieldProps>`
    ${props => props.variant === "outlined" && `
        font-size: ${props.theme.fs.md};
        font-family: ${props.theme.font.primary};
        display: flex;
        align-items: center;
        padding: ${props.theme.spacing.mdense} ${props.theme.spacing.mdense} ${props.theme.spacing.mdense} ${props.theme.spacing.udense};
        width: 100%;
        border: ${props.theme.style.none};
        border-radius: ${props.theme.style.none};
        box-sizing: border-box;
        background: transparent;
        &:focus {
            outline: none;
        };
        &:active {
            outline: none;
        };
    `
}
`

const EmailField = ({ startAdornment, value, ...props }: EmailFieldProps) => {
    const [focusWithin, setFocusWithin] = useState(false);
    const [active, setActive] = useState(false);
    const [valid, setValid] = useState(false)

    const handleInput = (event: any) => {
        if(validateEmail(event.target.value)) {
            setValid(true) 
        } else {
            setValid(false)
        }
    };

  return (
    <>
        <ModEmailFieldWrap focusWithin={focusWithin} active={active} valid = {valid} value = {value}>
            {startAdornment}
            <ModInput 
                {...props} 
                type = "text" 
                value = {value}
                onInput = {handleInput} 
                onFocus={() => setFocusWithin(true)}
                onBlur={() => setFocusWithin(false)}
                onMouseDown={() => setActive(true)}
                onMouseUp={() => setActive(false)}
            />
        </ModEmailFieldWrap>
        {focusWithin && !valid && 
            <Typography variant = "small" color = "error">Please enter a valid email.</Typography>
        }
    </>
  )
}

export default withLayout(EmailField)