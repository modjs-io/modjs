import React, {useState, useEffect} from 'react'
import {styled} from 'styled-components'
import Box from '../Box/Box'
import withLayout from '../../assets/withLayout'

interface SnackbarProps {
  children: React.ReactNode
  type?: 'success' | 'error'
  show?: string
}

const forwardProps = (prop: string) => !['type', 'show'].includes(prop);

const ModSnackbar = styled.div.withConfig({
    shouldForwardProp: (prop) => forwardProps(prop)
  })<SnackbarProps>`
    background: ${({theme, type}) => type === 'success' ? theme.color.success : theme.color.error};
    margin-bottom: ${({theme}) => theme.spacing.normal};
    clip-path: polygon(0% 10px, 10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%);
    padding: ${({theme}) => theme.spacing.udense};
    filter: drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.1));
  `

const Snackbar = ({children, type, show, ...props}: SnackbarProps) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        if (show) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [show]);

  return (
    <>
        {visible && 
           <Box elevation = "light">
           <ModSnackbar {...props} type = {type}>
               {children}
           </ModSnackbar>
            </Box> 
        }
    </>
  )
}

export default withLayout(Snackbar)