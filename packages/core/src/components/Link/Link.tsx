import React from 'react';
import styled from 'styled-components';
import withLayout from '../../assets/withLayout';

interface LinkProps extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  variant?: 'filled' | 'outlined' | 'transparent' | 'icon' | 'text';
  notched?: 'true' | 'false';
}

// Define which props should be forwarded to the DOM
const forwardProps = (prop: string) => !['variant', 'notched'].includes(prop);

const ModLink = styled.a.withConfig({
  shouldForwardProp: (prop) => forwardProps(prop)
})<LinkProps>`
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
  text-transform: ${props => props.variant === "filled" ? "uppercase" : props.variant === "outlined" ? "uppercase" : props.variant === "transparent"? "uppercase" : ""};
  text-decoration: none;
  padding: ${props => 
    props.variant === "filled" ? ({theme}) => theme.spacing.dense : 
    props.variant === "outlined" ? ({theme}) => theme.spacing.dense : 
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
  border: ${(({theme}) => theme.style.none)};
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
`;

const Link: React.FC<LinkProps> = ({ children, startAdornment, endAdornment, ...props }) => {
  return (
    <ModLink {...props}>{startAdornment}{children}{endAdornment}</ModLink>
  );
}

export default withLayout(Link);


// import React from 'react'
// import {styled} from 'styled-components'
// import withLayout from '../../assets/withLayout'

// interface LinkProps extends React.LinkHTMLAttributes<HTMLAnchorElement> {
//   children: React.ReactNode;
//   startAdornment?: React.ReactNode;
//   endAdornment?: React.ReactNode;
//   variant?: 'filled' | 'outlined' | 'transparent' | 'icon' | 'text';
//   notched?: 'true' | 'false';
// }

// const ModLink = styled.a<LinkProps>`
  // background-color: ${props => 
  //   props.variant === "filled" ? ({theme}) => theme.color.primary : 
  //   props.variant === "outlined" ? ({theme}) => theme.color.transparent : 
  //   props.variant === "icon" ? ({theme}) => theme.color.transparent :
  //   props.variant === "text" ? ({theme}) => theme.color.transparent :
  //   props.variant === "transparent" ? ({theme}) => theme.color.transparent :
  //   ({theme}) => theme.color.primary
  // };
  // clip-path: ${props => 
  //   props.notched === "true" ? ({theme}) => theme.notched.secondary : 
  //   ({theme}) => theme.style.none
  // };
  // width: fit-content;
  // max-width: fit-content;
  // font-family: ${({theme}) => theme.font.primary};
  // text-transform: ${props => props.variant === "filled" ? "uppercase" : props.variant === "outlined" ? "uppercase" : props.variant === "transparent"? "uppercase" : ""};
  // text-decoration: none;
  // padding: ${props => 
  //   props.variant === "filled" ? ({theme}) => theme.spacing.dense : 
  //   props.variant === "outlined" ? ({theme}) => theme.spacing.dense : 
  //   ({theme}) => theme.style.none
  // };
  // cursor: pointer;
  // position: relative;
  // overflow: hidden;
  // display: ${props => props.variant === "text" ? "" : "flex"};
  // gap: ${({theme}) => theme.spacing.udense};
  // align-items: center;
  // justify-content: ${props => 
  //   props.variant === "outlined" ? "center" : "left"
  // };
  // border: ${(({theme}) => theme.style.none)};
  // ${props => props.variant === "outlined" && `
  //   &::before {
  //     content: '';
  //     background-color: ${props.theme.color.primary};
  //     clip-path: ${props.theme.notched.primary};
  //     position: absolute;
  //     top: none;
  //     left: none;
  //     width: 100%;
  //     height: 100%;
  //   }
  // `};
  // &:hover {
  //   opacity: ${({theme}) => theme.opacity.medium};
  // }
// `
// const Link: React.FC<LinkProps> = ({ children, startAdornment, endAdornment, variant, notched, ...props }) => {
//   return (
//     <ModLink variant = {variant} notched = {notched} {...props}>{startAdornment}{children}{endAdornment}</ModLink>
//   )
// }

// export default withLayout(Link)