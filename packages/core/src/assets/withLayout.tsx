import React from 'react';
import styled from 'styled-components';

type LayoutProps = {
    m?: 'udense' | 'xdense' | 'mdense' | 'dense' | 'normal' | 'wide' | 'mwide' | 'xwide' | 'uwide' | 'uuwide' | 'auto' | 'none' | 'negudense' | 'negxdense' | 'negmdense' | 'negdense' | 'negnormal' | 'negwide' | 'negmwide' | 'negxwide' | 'neguwide' | 'neguuwide';
    mt?: 'udense' | 'xdense' | 'mdense' | 'dense' | 'normal' | 'wide' | 'mwide' | 'xwide' | 'uwide' | 'uuwide' | 'auto' | 'none' | 'negudense' | 'negxdense' | 'negmdense' | 'negdense' | 'negnormal' | 'negwide' | 'negmwide' | 'negxwide' | 'neguwide' | 'neguuwide';
    mr?: 'udense' | 'xdense' | 'mdense' | 'dense' | 'normal' | 'wide' | 'mwide' | 'xwide' | 'uwide' | 'uuwide' | 'auto' | 'none' | 'negudense' | 'negxdense' | 'negmdense' | 'negdense' | 'negnormal' | 'negwide' | 'negmwide' | 'negxwide' | 'neguwide' | 'neguuwide';
    mb?: 'udense' | 'xdense' | 'mdense' | 'dense' | 'normal' | 'wide' | 'mwide' | 'xwide' | 'uwide' | 'uuwide' | 'auto' | 'none' | 'negudense' | 'negxdense' | 'negmdense' | 'negdense' | 'negnormal' | 'negwide' | 'negmwide' | 'negxwide' | 'neguwide' | 'neguuwide';
    ml?: 'udense' | 'xdense' | 'mdense' | 'dense' | 'normal' | 'wide' | 'mwide' | 'xwide' | 'uwide' | 'uuwide' | 'auto' | 'none' | 'negudense' | 'negxdense' | 'negmdense' | 'negdense' | 'negnormal' | 'negwide' | 'negmwide' | 'negxwide' | 'neguwide' | 'neguuwide';
    p?: 'udense' | 'xdense' | 'mdense' | 'dense' | 'normal' | 'wide' | 'mwide' | 'xwide' | 'uwide' | 'uuwide' | 'auto' | 'none' | 'negudense' | 'negxdense' | 'negmdense' | 'negdense' | 'negnormal' | 'negwide' | 'negmwide' | 'negxwide' | 'neguwide' | 'neguuwide';
    pt?: 'udense' | 'xdense' | 'mdense' | 'dense' | 'normal' | 'wide' | 'mwide' | 'xwide' | 'uwide' | 'uuwide' | 'auto' | 'none' | 'negudense' | 'negxdense' | 'negmdense' | 'negdense' | 'negnormal' | 'negwide' | 'negmwide' | 'negxwide' | 'neguwide' | 'neguuwide';
    pr?: 'udense' | 'xdense' | 'mdense' | 'dense' | 'normal' | 'wide' | 'mwide' | 'xwide' | 'uwide' | 'uuwide' | 'auto' | 'none' | 'negudense' | 'negxdense' | 'negmdense' | 'negdense' | 'negnormal' | 'negwide' | 'negmwide' | 'negxwide' | 'neguwide' | 'neguuwide';
    pb?: 'udense' | 'xdense' | 'mdense' | 'dense' | 'normal' | 'wide' | 'mwide' | 'xwide' | 'uwide' | 'uuwide' | 'auto' | 'none' | 'negudense' | 'negxdense' | 'negmdense' | 'negdense' | 'negnormal' | 'negwide' | 'negmwide' | 'negxwide' | 'neguwide' | 'neguuwide';
    pl?: 'udense' | 'xdense' | 'mdense' | 'dense' | 'normal' | 'wide' | 'mwide' | 'xwide' | 'uwide' | 'uuwide' | 'auto' | 'none'| 'negudense' | 'negxdense' | 'negmdense' | 'negdense' | 'negnormal' | 'negwide' | 'negmwide' | 'negxwide' | 'neguwide' | 'neguuwide';
    border?: 'light' | 'dark' | 'none';
    borderTop?: 'light' | 'dark' | 'none';
    borderRight?: 'light' | 'dark' | 'none';
    borderBottom?: 'light' | 'dark' | 'none';
    borderLeft?: 'light' | 'dark' | 'none';
    circular?: 'true' | 'false';
    display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'grid' | 'none';
    flexWrap?: 'wrap' | 'nowrap';
    gap?: 'udense' | 'xdense' | 'mdense' | 'dense' | 'normal' | 'wide' | 'mwide' | 'xwide' | 'uwide' | 'auto' | 'none';
    justifyContent?: 'start' | 'center' | 'end' | 'space-between';
    alignItems?: 'start' | 'center' | 'end';
    float?: 'right' | 'left';
    elevation?: 'light' | 'normal' | 'heavy' | 'none';
    textAlign?: 'left' | 'center' | 'right';
    fs?: 'xsm' | 'sm' | 'md' | 'lg' | 'xl';
    fw?: 'medium' | 'semibold' | 'bold';
    color?: 'primary' | 'secondary' | 'white' | 'black' | 'dark' | 'light' | 'transparent';
    bgColor?: 'primary' | 'secondary' | 'white' | 'black' | 'dark' | 'light' | 'transparent';
    position?: 'absolute' | 'relative' | 'fixed' | 'sticky' | 'static' | 'inherit';
    bottom?: 'none';
    top?: 'none';
};

const forwardProps = (prop: string) => !['m', 'mt', 'mr', 'mb', 'ml', 'p', 'pt', 'pr', 'pb', 'pl', 'border', 'borderTop', 'borderRight', 'borderBottom', 'borderLeft', 'circular', 'display', 'flexWrap', 'gap', 'justifyContent', 'alignItems', 'float', 'elevation', 'textAlign', 'fs', 'fw', 'color', 'bgColor', 'position', 'bottom', 'top'].includes(prop);

const withLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const LayoutComponent = styled(WrappedComponent).withConfig({
        shouldForwardProp: (prop) => forwardProps(prop)
      })<LayoutProps>`
        margin: ${({theme, m}) => (
            m === 'udense' ? theme.spacing.udense : 
            m === 'xdense' ? theme.spacing.xdense : 
            m === 'mdense' ? theme.spacing.mdense : 
            m === 'dense' ? theme.spacing.dense : 
            m === 'normal' ? theme.spacing.normal : 
            m === 'wide' ? theme.spacing.wide : 
            m === 'mwide' ? theme.spacing.mwide : 
            m === 'xwide' ? theme.spacing.xwide : 
            m === 'uwide' ? theme.spacing.uwide :
            m === 'uuwide' ? theme.spacing.uuwide :
            m === 'auto' ? theme.spacing.auto :
            m === 'none' ? theme.style.none :
            m === 'negudense' ? theme.spacing.negudense : 
            m === 'negxdense' ? theme.spacing.negxdense : 
            m === 'negmdense' ? theme.spacing.negmdense : 
            m === 'negdense' ? theme.spacing.negdense : 
            m === 'negnormal' ? theme.spacing.negnormal : 
            m === 'negwide' ? theme.spacing.negwide : 
            m === 'negmwide' ? theme.spacing.negmwide : 
            m === 'negxwide' ? theme.spacing.negxwide : 
            m === 'neguwide' ? theme.spacing.neguwide :
            m === 'neguuwide' ? theme.spacing.neguuwide :
        '')};
        margin-top: ${({theme, mt}) => (
            mt === 'udense' ? theme.spacing.udense : 
            mt === 'xdense' ? theme.spacing.xdense : 
            mt === 'mdense' ? theme.spacing.mdense : 
            mt === 'dense' ? theme.spacing.dense : 
            mt === 'normal' ? theme.spacing.normal : 
            mt === 'wide' ? theme.spacing.wide : 
            mt === 'mwide' ? theme.spacing.mwide : 
            mt === 'xwide' ? theme.spacing.xwide : 
            mt === 'uwide' ? theme.spacing.uwide :
            mt === 'uuwide' ? theme.spacing.uuwide :
            mt === 'auto' ? theme.spacing.auto :
            mt === 'none' ? theme.style.none :
            mt === 'negudense' ? theme.spacing.negudense : 
            mt === 'negxdense' ? theme.spacing.negxdense : 
            mt === 'negmdense' ? theme.spacing.negmdense : 
            mt === 'negdense' ? theme.spacing.negdense : 
            mt === 'negnormal' ? theme.spacing.negnormal : 
            mt === 'negwide' ? theme.spacing.negwide : 
            mt === 'negmwide' ? theme.spacing.negmwide : 
            mt === 'negxwide' ? theme.spacing.negxwide : 
            mt === 'neguwide' ? theme.spacing.neguwide :
            mt === 'neguuwide' ? theme.spacing.neguuwide :
        '')};
        margin-right: ${({theme, mr}) => (
            mr === 'udense' ? theme.spacing.udense : 
            mr === 'xdense' ? theme.spacing.xdense : 
            mr === 'mdense' ? theme.spacing.mdense : 
            mr === 'dense' ? theme.spacing.dense : 
            mr === 'normal' ? theme.spacing.normal : 
            mr === 'wide' ? theme.spacing.wide : 
            mr === 'mwide' ? theme.spacing.mwide : 
            mr === 'xwide' ? theme.spacing.xwide : 
            mr === 'uwide' ? theme.spacing.uwide :
            mr === 'uuwide' ? theme.spacing.uuwide :
            mr === 'auto' ? theme.spacing.auto :
            mr === 'none' ? theme.style.none :
            mr === 'negudense' ? theme.spacing.negudense : 
            mr === 'negxdense' ? theme.spacing.negxdense : 
            mr === 'negmdense' ? theme.spacing.negmdense : 
            mr === 'negdense' ? theme.spacing.negdense : 
            mr === 'negnormal' ? theme.spacing.negnormal : 
            mr === 'negwide' ? theme.spacing.negwide : 
            mr === 'negmwide' ? theme.spacing.negmwide : 
            mr === 'negxwide' ? theme.spacing.negxwide : 
            mr === 'neguwide' ? theme.spacing.neguwide :
            mr === 'neguuwide' ? theme.spacing.neguuwide :
        '')};
        margin-bottom: ${({theme, mb}) => (
            mb === 'udense' ? theme.spacing.udense : 
            mb === 'xdense' ? theme.spacing.xdense : 
            mb === 'mdense' ? theme.spacing.mdense : 
            mb === 'dense' ? theme.spacing.dense : 
            mb === 'normal' ? theme.spacing.normal : 
            mb === 'wide' ? theme.spacing.wide : 
            mb === 'mwide' ? theme.spacing.mwide : 
            mb === 'xwide' ? theme.spacing.xwide : 
            mb === 'uwide' ? theme.spacing.uwide :
            mb === 'uuwide' ? theme.spacing.uuwide :
            mb === 'auto' ? theme.spacing.auto :
            mb === 'none' ? theme.style.none :
            mb === 'negudense' ? theme.spacing.negudense : 
            mb === 'negxdense' ? theme.spacing.negxdense : 
            mb === 'negmdense' ? theme.spacing.negmdense : 
            mb === 'negdense' ? theme.spacing.negdense : 
            mb === 'negnormal' ? theme.spacing.negnormal : 
            mb === 'negwide' ? theme.spacing.negwide : 
            mb === 'negmwide' ? theme.spacing.negmwide : 
            mb === 'negxwide' ? theme.spacing.negxwide : 
            mb === 'neguwide' ? theme.spacing.neguwide :
            mb === 'neguuwide' ? theme.spacing.neguuwide :
        '')};
        margin-left: ${({theme, ml}) => (
            ml === 'udense' ? theme.spacing.udense : 
            ml === 'xdense' ? theme.spacing.xdense : 
            ml === 'mdense' ? theme.spacing.mdense : 
            ml === 'dense' ? theme.spacing.dense : 
            ml === 'normal' ? theme.spacing.normal : 
            ml === 'wide' ? theme.spacing.wide : 
            ml === 'mwide' ? theme.spacing.mwide : 
            ml === 'xwide' ? theme.spacing.xwide : 
            ml === 'uwide' ? theme.spacing.uwide :
            ml === 'uuwide' ? theme.spacing.uuwide :
            ml === 'auto' ? theme.spacing.auto :
            ml === 'none' ? theme.style.none :
            ml === 'negudense' ? theme.spacing.negudense : 
            ml === 'negxdense' ? theme.spacing.negxdense : 
            ml === 'negmdense' ? theme.spacing.negmdense : 
            ml === 'negdense' ? theme.spacing.negdense : 
            ml === 'negnormal' ? theme.spacing.negnormal : 
            ml === 'negwide' ? theme.spacing.negwide : 
            ml === 'negmwide' ? theme.spacing.negmwide : 
            ml === 'negxwide' ? theme.spacing.negxwide : 
            ml === 'neguwide' ? theme.spacing.neguwide :
            ml === 'neguuwide' ? theme.spacing.neguuwide :
        '')};
        padding: ${({theme, p}) => (
            p === 'udense' ? theme.spacing.udense : 
            p === 'xdense' ? theme.spacing.xdense : 
            p === 'mdense' ? theme.spacing.mdense : 
            p === 'dense' ? theme.spacing.dense : 
            p === 'normal' ? theme.spacing.normal : 
            p === 'wide' ? theme.spacing.wide : 
            p === 'mwide' ? theme.spacing.mwide : 
            p === 'xwide' ? theme.spacing.xwide : 
            p === 'uwide' ? theme.spacing.uwide :
            p === 'uuwide' ? theme.spacing.uuwide :
            p === 'auto' ? theme.spacing.auto :
            p === 'none' ? theme.style.none :
            p === 'negudense' ? theme.spacing.negudense : 
            p === 'negxdense' ? theme.spacing.negxdense : 
            p === 'negmdense' ? theme.spacing.negmdense : 
            p === 'negdense' ? theme.spacing.negdense : 
            p === 'negnormal' ? theme.spacing.negnormal : 
            p === 'negwide' ? theme.spacing.negwide : 
            p === 'negmwide' ? theme.spacing.negmwide : 
            p === 'negxwide' ? theme.spacing.negxwide : 
            p === 'neguwide' ? theme.spacing.neguwide :
            p === 'neguuwide' ? theme.spacing.neguuwide :
        '')}; 
        padding-top: ${({theme, pt}) => (
            pt === 'udense' ? theme.spacing.udense : 
            pt === 'xdense' ? theme.spacing.xdense : 
            pt === 'mdense' ? theme.spacing.mdense : 
            pt === 'dense' ? theme.spacing.dense : 
            pt === 'normal' ? theme.spacing.normal : 
            pt === 'wide' ? theme.spacing.wide : 
            pt === 'mwide' ? theme.spacing.mwide : 
            pt === 'xwide' ? theme.spacing.xwide : 
            pt === 'uwide' ? theme.spacing.uwide :
            pt === 'uuwide' ? theme.spacing.uuwide :
            pt === 'auto' ? theme.spacing.auto :
            pt === 'none' ? theme.style.none :
            pt === 'negudense' ? theme.spacing.negudense : 
            pt === 'negxdense' ? theme.spacing.negxdense : 
            pt === 'negmdense' ? theme.spacing.negmdense : 
            pt === 'negdense' ? theme.spacing.negdense : 
            pt === 'negnormal' ? theme.spacing.negnormal : 
            pt === 'negwide' ? theme.spacing.negwide : 
            pt === 'negmwide' ? theme.spacing.negmwide : 
            pt === 'negxwide' ? theme.spacing.negxwide : 
            pt === 'neguwide' ? theme.spacing.neguwide :
            pt === 'neguuwide' ? theme.spacing.neguuwide :
        '')}; 
        padding-right: ${({theme, pr}) => (
            pr === 'udense' ? theme.spacing.udense : 
            pr === 'xdense' ? theme.spacing.xdense : 
            pr === 'mdense' ? theme.spacing.mdense : 
            pr === 'dense' ? theme.spacing.dense : 
            pr === 'normal' ? theme.spacing.normal : 
            pr === 'wide' ? theme.spacing.wide : 
            pr === 'mwide' ? theme.spacing.mwide : 
            pr === 'xwide' ? theme.spacing.xwide : 
            pr === 'uwide' ? theme.spacing.uwide :
            pr === 'uuwide' ? theme.spacing.uuwide :
            pr === 'auto' ? theme.spacing.auto :
            pr === 'none' ? theme.style.none :
            pr === 'negudense' ? theme.spacing.negudense : 
            pr === 'negxdense' ? theme.spacing.negxdense : 
            pr === 'negmdense' ? theme.spacing.negmdense : 
            pr === 'negdense' ? theme.spacing.negdense : 
            pr === 'negnormal' ? theme.spacing.negnormal : 
            pr === 'negwide' ? theme.spacing.negwide : 
            pr === 'negmwide' ? theme.spacing.negmwide : 
            pr === 'negxwide' ? theme.spacing.negxwide : 
            pr === 'neguwide' ? theme.spacing.neguwide :
            pr === 'neguuwide' ? theme.spacing.neguuwide :
        '')}; 
        padding-bottom: ${({theme, pb}) => (
            pb === 'udense' ? theme.spacing.udense : 
            pb === 'xdense' ? theme.spacing.xdense : 
            pb === 'mdense' ? theme.spacing.mdense : 
            pb === 'dense' ? theme.spacing.dense : 
            pb === 'normal' ? theme.spacing.normal : 
            pb === 'wide' ? theme.spacing.wide : 
            pb === 'mwide' ? theme.spacing.mwide : 
            pb === 'xwide' ? theme.spacing.xwide : 
            pb === 'uwide' ? theme.spacing.uwide :
            pb === 'uuwide' ? theme.spacing.uuwide :
            pb === 'auto' ? theme.spacing.auto :
            pb === 'none' ? theme.style.none :
            pb === 'negudense' ? theme.spacing.negudense : 
            pb === 'negxdense' ? theme.spacing.negxdense : 
            pb === 'negmdense' ? theme.spacing.negmdense : 
            pb === 'negdense' ? theme.spacing.negdense : 
            pb === 'negnormal' ? theme.spacing.negnormal : 
            pb === 'negwide' ? theme.spacing.negwide : 
            pb === 'negmwide' ? theme.spacing.negmwide : 
            pb === 'negxwide' ? theme.spacing.negxwide : 
            pb === 'neguwide' ? theme.spacing.neguwide :
            pb === 'neguuwide' ? theme.spacing.neguuwide :
        '')}; 
        padding-left: ${({theme, pl}) => (
            pl === 'udense' ? theme.spacing.udense : 
            pl === 'xdense' ? theme.spacing.xdense : 
            pl === 'mdense' ? theme.spacing.mdense : 
            pl === 'dense' ? theme.spacing.dense : 
            pl === 'normal' ? theme.spacing.normal : 
            pl === 'wide' ? theme.spacing.wide : 
            pl === 'mwide' ? theme.spacing.mwide : 
            pl === 'xwide' ? theme.spacing.xwide : 
            pl === 'uwide' ? theme.spacing.uwide :
            pl === 'uuwide' ? theme.spacing.uuwide :
            pl === 'auto' ? theme.spacing.auto :
            pl === 'none' ? theme.style.none :
            pl === 'negudense' ? theme.spacing.negudense : 
            pl === 'negxdense' ? theme.spacing.negxdense : 
            pl === 'negmdense' ? theme.spacing.negmdense : 
            pl === 'negdense' ? theme.spacing.negdense : 
            pl === 'negnormal' ? theme.spacing.negnormal : 
            pl === 'negwide' ? theme.spacing.negwide : 
            pl === 'negmwide' ? theme.spacing.negmwide : 
            pl === 'negxwide' ? theme.spacing.negxwide : 
            pl === 'neguwide' ? theme.spacing.neguwide :
            pl === 'neguuwide' ? theme.spacing.neguuwide :
        '')};
        border: ${({theme, border}) => (
            border === 'light' ? theme.border.light :
            border === 'dark' ? theme.border.dark : 
            border === 'none' ? theme.style.none : 
        '')};
        border-top: ${({theme, borderTop}) => (
            borderTop === 'light' ? theme.border.light :
            borderTop === 'dark' ? theme.border.dark : 
            borderTop === 'none' ? theme.style.none : 
        '')};
        border-right: ${({theme, borderRight}) => (
            borderRight === 'light' ? theme.border.light :
            borderRight === 'dark' ? theme.border.dark : 
            borderRight === 'none' ? theme.style.none : 
        '')};
        border-bottom: ${({theme, borderBottom}) => (
            borderBottom === 'light' ? theme.border.light :
            borderBottom === 'dark' ? theme.border.dark : 
            borderBottom === 'none' ? theme.style.none : 
        '')};
        border-left: ${({theme, borderLeft}) => (
            borderLeft === 'light' ? theme.border.light :
            borderLeft === 'dark' ? theme.border.dark : 
            borderLeft === 'none' ? theme.style.none : 
        '')};
        border-radius: ${({circular}) => (
            circular === 'true' ? '100%' : '0' 
        )};
        display: ${({display}) => (
            display === 'block' ? 'block' :
            display === 'inline' ? 'inline' : 
            display === 'inline-block' ? 'inline-block' : 
            display === 'flex' ? 'flex' : 
            display === 'grid' ? 'grid' : 
            display === 'none' ? 'none' : 
        '')};
        flex-wrap: ${({flexWrap}) => (
            flexWrap === 'wrap' ? 'wrap' : 
            flexWrap === 'nowrap' ? 'nowrap' : 
        '')};
        gap: ${({theme, gap}) => (
            gap === 'udense' ? theme.spacing.udense : 
            gap === 'xdense' ? theme.spacing.xdense : 
            gap === 'mdense' ? theme.spacing.mdense : 
            gap === 'dense' ? theme.spacing.dense : 
            gap === 'normal' ? theme.spacing.normal : 
            gap === 'wide' ? theme.spacing.wide : 
            gap === 'mwide' ? theme.spacing.mwide : 
            gap === 'xwide' ? theme.spacing.xwide : 
            gap === 'uwide' ? theme.spacing.uwide :
            gap === 'auto' ? theme.spacing.auto :
            gap === 'none' ? theme.style.none :
        '')};
        justify-content: ${({justifyContent}) => (
            justifyContent === 'start' ? 'flex-start' :
            justifyContent === 'center' ? 'center' : 
            justifyContent === 'end' ? 'flex-end' : 
            justifyContent === 'space-between' ? 'space-between' : 
        '')};
        align-items: ${({alignItems}) => (
            alignItems === 'start' ? 'start' :
            alignItems === 'center' ? 'center' : 
            alignItems === 'end' ? 'end' : 
        '')};
        float: ${({float}) => (
            float === 'right' ? 'right' :
            float === 'left' ? 'left' : 
        '')};
        filter: ${({theme, elevation}) => (
            elevation === 'light' ? theme.elevation.light :
            elevation === 'normal' ? theme.elevation.normal :
            elevation === 'heavy' ? theme.elevation.heavy :
            elevation === 'none' ? theme.elevation.none :
        '')};
        text-align: ${({textAlign}) => (
            textAlign === 'left' ? 'left' :
            textAlign === 'center' ? 'center' : 
            textAlign === 'right' ? 'right' : 
        '')};
        font-size: ${({theme, fs}) => (
            fs === 'xsm' ? theme.fs.xsm : 
            fs === 'sm' ? theme.fs.sm : 
            fs === 'md' ? theme.fs.md : 
            fs === 'lg' ? theme.fs.lg : 
            fs === 'xl' ? theme.fs.xl : 
        '')};
        font-weight: ${({theme, fw}) => (
            fw === 'medium' ? theme.fw.medium : 
            fw === 'semibold' ? theme.fw.semibold : 
            fw === 'bold' ? theme.fw.bold : 
        '')};
        color: ${({theme, color}) => (
            color === 'primary' ? theme.color.primary : 
            color === 'secondary' ? theme.color.secondary : 
            color === 'white' ? theme.color.white : 
            color === 'black' ? theme.color.black : 
            color === 'dark' ? theme.color.dark : 
            color === 'light' ? theme.color.light : 
            color === 'transparent' ? theme.color.transparent : 
        '')};
        background-color: ${({theme, bgColor}) => (
            bgColor === 'primary' ? theme.color.primary : 
            bgColor === 'secondary' ? theme.color.secondary : 
            bgColor === 'white' ? theme.color.white : 
            bgColor === 'black' ? theme.color.black : 
            bgColor === 'dark' ? theme.color.dark : 
            bgColor === 'light' ? theme.color.light : 
            bgColor === 'transparent' ? theme.color.transparent : 
        '')};
        position: ${({position}) => (
            position === 'absolute' ? 'absolute' :
            position === 'relative' ? 'relative' : 
            position === 'fixed' ? 'fixed' : 
            position === 'sticky' ? 'sticky' : 
            position === 'static' ? 'static' : 
            position === 'inherit' ? 'inherit' : 
        '')};
        bottom: ${({bottom}) => (
            bottom === "none" ? '0' :
        '')};
        top: ${({top}) => (
            top === "none" ? '0' :
        '')};
    `;

    const NewComponent = (props:any) => {
        return <LayoutComponent {...props} />;
    };

  return NewComponent;
};

export default withLayout;