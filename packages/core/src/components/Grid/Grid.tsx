import React from 'react'
import {styled} from 'styled-components'
import withLayout from '../../assets/withLayout'

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: Number;
}

const ModGrid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: ${props => 
        props.columns === 1 ? 'repeat(1, 1fr)' : 
        props.columns === 2 ? 'repeat(2, 1fr)' : 
        props.columns === 3 ? 'repeat(3, 1fr)' : 
        props.columns === 4 ? 'repeat(4, 1fr)' : 
        props.columns === 5 ? 'repeat(5, 1fr)' : 
        props.columns === 6 ? 'repeat(6, 1fr)' : 
        props.columns === 7 ? 'repeat(7, 1fr)' : 
        props.columns === 8 ? 'repeat(8, 1fr)' : 
        props.columns === 9 ? 'repeat(9, 1fr)' : 
        props.columns === 10 ? 'repeat(10, 1fr)' : 
        props.columns === 11 ? 'repeat(11, 1fr)' : 
        props.columns === 12 ? 'repeat(12, 1fr)' : 
    ''};
    @media (max-width: 768px) {
        display: block;
    };
`
const Grid: React.FC<GridProps> = ({ children, columns, ...props }) => {
  return (
    <ModGrid columns = {columns} {...props}>{children}</ModGrid>
  )
}

export default withLayout(Grid)