import React, { useEffect, useState } from 'react';
import {styled} from 'styled-components'

const ModProgressBar = styled.div`
    display: ${props => props.isLoading === 'true' ? "block" : "none"};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4em;
    background-color: red;
`

const ProgressBar = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const finishLoading = () => {
      setLoading(false);
    };

    window.addEventListener('load', finishLoading);

    return () => {
      window.removeEventListener('load', finishLoading);
    };
  }, []);

  return (
    <ModProgressBar style={{ display: loading ? 'block' : 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '4px', backgroundColor: '#5a6b31' }}>
    </ModProgressBar>
  );
};

export default ProgressBar;
