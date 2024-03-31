import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface TextAreaProps {
  type?: 'text' | 'email' | 'password' | 'search' | 'url'
  variant?: 'outlined'
  resize? : 'vertical' | 'horizontal' | 'none'
}

const ModTextAreaWrap = styled.div<TextAreaProps>`
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

const ModTextarea = styled.textarea<TextAreaProps>`
    resize: ${props => props.resize === "vertical" ? "vertical" : props.resize === "horizontal" ? "horizontal" : props.resize === "none" ? "none" : ''};
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
const TextArea = ({ type, variant, resize, ...props }: TextAreaProps) => {
  return (
    <>
      <ModTextAreaWrap>
        <ModTextarea {...props} type={type} variant = {variant} resize = {resize}/>
      </ModTextAreaWrap>
    </>
  )
}

export default withLayout(TextArea)