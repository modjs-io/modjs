import React from 'react';
import { styled } from 'styled-components';
import withLayout from '../../assets/withLayout';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'small';
}

const ModTypographyH1 = styled.h1`
    font-family: ${({theme}) => theme.font.primary};
`;
const ModTypographyH2 = styled.h2`
    font-family: ${({theme}) => theme.font.primary};
`;
const ModTypographyH3 = styled.h3`
    font-family: ${({theme}) => theme.font.primary};
    font-size: ${({theme}) => theme.fs.md};
`;
const ModTypographyH4 = styled.h4`
    font-family: ${({theme}) => theme.font.primary};
    font-size: ${({theme}) => theme.fs.md};
`;
const ModTypographyH5 = styled.h5`
    font-family: ${({theme}) => theme.font.primary};
    font-size: ${({theme}) => theme.fs.md};
`;
const ModTypographyH6 = styled.h6`
    font-family: ${({theme}) => theme.font.primary};
    font-size: ${({theme}) => theme.fs.md};
`;
const ModTypographyBody1 = styled.p`
    font-family: ${({theme}) => theme.font.primary};
    font-size: ${({theme}) => theme.fs.md};
`;
const ModTypographyBody2 = styled.p`
    font-family: ${({theme}) => theme.font.primary};
    font-size: ${({theme}) => theme.fs.sm};
`;
const ModTypographySmall = styled.small`
    font-family: ${({theme}) => theme.font.primary};
    font-size: ${({theme}) => theme.fs.xsm};
`;

const Typography = ({ children, variant, ...props }: TypographyProps) => {
  const TypographyComponent = getTypographyComponent(variant);
  return <TypographyComponent {...props}>{children}</TypographyComponent>;
};

const getTypographyComponent = (variant?: TypographyProps['variant']) => {
  switch (variant) {
    case 'h1':
      return ModTypographyH1;
    case 'h2':
      return ModTypographyH2;
    case 'h3':
      return ModTypographyH3;
    case 'h4':
      return ModTypographyH4;
    case 'h5':
      return ModTypographyH5;
    case 'h6':
      return ModTypographyH6;
    case 'small':
      return ModTypographySmall;
    case 'body1':
      return ModTypographyBody1;
    case 'body2':
      return ModTypographyBody2;
    default:
      return ModTypographyBody1;
  }
};

export default withLayout(Typography);