import React, {useState} from 'react'
import {styled} from 'styled-components'
import Typography from '../Typography/Typography'
import withLayout from '../../assets/withLayout'

interface MessageAreaProps {
  type?: 'text' | 'email' | 'password' | 'search' | 'url'
  variant?: 'outlined'
  resize? : 'vertical' | 'horizontal' | 'none'
}

const forwardProps = (prop: string) => !['type', 'variant', 'resize', 'focusWithin', 'active', 'valid'].includes(prop);

const ModMessageAreaWrap = styled.div.withConfig({
  shouldForwardProp: (prop) => forwardProps(prop)
})<MessageAreaProps>`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-left: ${({theme}) => theme.spacing.xdense};
    margin-top: ${({theme}) => theme.spacing.dense};
    margin-bottom: ${({theme}) => theme.spacing.dense};
    &:before {
        content: '';
        background: ${({ theme, focusWithin, active, valid }) =>
        (focusWithin && !valid || active && !valid ) ? theme.color.error : valid ? theme.color.success : theme.color.light};
        clip-path: polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px,8px 0%,9.9px 0px,1px 8px,1px calc(100% - 1px),calc(100% - 8px) calc(100% - 1px),calc(100% - 1px) calc(100% - 8px),calc(100% - 1px) 1px,7px 1px);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const ModMessageArea = styled.textarea.withConfig({
  shouldForwardProp: (prop) => forwardProps(prop)
})<MessageAreaProps>`
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
const MessageArea = ({ ...props }: MessageAreaProps) => {
    const [focusWithin, setFocusWithin] = useState(false);
    const [active, setActive] = useState(false);
    const [valid, setValid] = useState(false);
  
    const handleInput = (event: any) => {
      if(event.target.value.length >=1) {
        setValid(true);
      } else {
        setValid(false)
      }
    };
  return (
    <>
      <ModMessageAreaWrap focusWithin={focusWithin} active={active} valid={valid}>
        <ModMessageArea 
            {...props} 
            type = "text"
            onFocus={() => setFocusWithin(true)}
            onBlur={() => setFocusWithin(false)}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            onInput={handleInput}
        />
      </ModMessageAreaWrap>
      {focusWithin && !valid && 
          <Typography variant = "small" color = "error">Please enter your message.</Typography>
        }
    </>
  )
}

export default withLayout(MessageArea)