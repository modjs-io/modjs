// REMOVE

import React, {useState, useEffect} from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface PhoneFieldProps {
  variant?: 'outlined'
  startAdornment?: React.ReactNode
}
const forwardProps = (prop: string) => !['variant'].includes(prop);

const ModPhoneFieldWrap = styled.div.withConfig({
  shouldForwardProp: (prop) => forwardProps(prop)
})<PhoneFieldProps>`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-left: ${({theme}) => theme.spacing.xdense};
    margin-top: ${({theme}) => theme.spacing.dense};
    margin-bottom: ${({theme}) => theme.spacing.dense};
    &:before {
        content: '';
        background: ${({theme}) => theme.color.light};
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
})<PhoneFieldProps>`
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

const PhoneField = ({ startAdornment, ...props }: PhoneFieldProps) => {

    const [data, setData] = useState({ phone: "" });

    const handlePhoneNumberChange = (event) => {
        let value = event.target.value;
        value = value.replace(/\D/g, '');
        if (value.length <= 3) {
            setData({ ...data, [event.target.id]: value });
        } else if (value.length <= 6) {
            setData({ ...data, [event.target.id]: `(${value.slice(0, 3)}) ${value.slice(3)}` });
        } else {
            setData({ ...data, [event.target.id]: `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}` });
        }
      };

  return (
      <ModPhoneFieldWrap>
        {startAdornment}
        <ModInput {...props} type = "text" id = "phone" onChange = {handlePhoneNumberChange}/>
      </ModPhoneFieldWrap>
  )
}

export default withLayout(PhoneField)