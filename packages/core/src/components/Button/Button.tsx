import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  variant?: 'filled' | 'outlined' | 'transparent' | 'icon' | 'text';
  notched?: 'true' | 'false';
}

const forwardProps = (prop: string) => !['variant', 'notched'].includes(prop);

const ModButton = styled.button.withConfig({
  shouldForwardProp: (prop) => forwardProps(prop)
})<ButtonProps>`
  background-color: ${props => 
    props.variant === "filled" ? ({theme}) => theme.color.primary : 
    props.variant === "outlined" ? ({theme}) => theme.color.transparent : 
    props.variant === "icon" ? ({theme}) => theme.color.transparent :
    props.variant === "text" ? ({theme}) => theme.color.transparent :
    props.variant === "transparent" ? ({theme}) => theme.color.transparent :
    ({theme}) => theme.color.primary
  };
  clip-path: ${props => 
    props.notched === "true" ? ({theme}) => theme.notched.secondary : 
    ({theme}) => theme.style.none
  };
  width: fit-content;
  max-width: fit-content;
  font-family: ${({theme}) => theme.font.primary};
  font-size: ${props => props.variant === "text" ? ({theme}) => theme.fs.md : ({theme}) => theme.fs.xsm};
  font-weight: medium;
  text-transform: ${props => props.variant === "filled" ? "uppercase" : props.variant === "outlined" ? "uppercase" : props.variant === "transparent"? "uppercase" : ""};
  text-decoration: none;
  padding: ${props => 
    props.variant === "filled" ? ({theme}) => theme.spacing.dense : 
    props.variant === "outlined" ? ({theme}) => theme.spacing.dense : 
    props.variant === "icon" ? ({theme}) => theme.spacing.xdense :
    ({theme}) => theme.style.none
  };
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: ${props => props.variant === "text" ? "" : "flex"};
  gap: ${({theme}) => theme.spacing.udense};
  align-items: center;
  justify-content: ${props => 
    props.variant === "outlined" ? "center" : "left"
  };
  border: ${props => props.variant === "icon" ? `1px solid ${props.theme.color.light}` : ({theme}) => theme.style.none};
  ${props => props.variant === "outlined" && `
    &::before {
      content: '';
      background-color: ${props.theme.color.primary};
      clip-path: ${props.theme.notched.primary};
      position: absolute;
      top: none;
      left: none;
      width: 100%;
      height: 100%;
    }
  `};
  &:hover {
    opacity: ${({theme}) => theme.opacity.medium};
  }
`
const Button: React.FC<ButtonProps> = ({ children, startAdornment, endAdornment, ...props }) => {
  return (
    <ModButton {...props}>{startAdornment}{children}{endAdornment}</ModButton>
  )
}

export default withLayout(Button)