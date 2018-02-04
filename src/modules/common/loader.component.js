import React from 'react';
import _ from 'lodash';
import {RefreshIndicator} from 'material-ui'

const styles = {
  refreshStyle: {
    position: 'relative',
    display: 'block',
    margin: '0 auto'
  }
};

const LoaderComponent = ({isLoading, children}) => {
  if (isLoading) {
    return (
      <RefreshIndicator
        style={styles.refreshStyle}
        top={0}
        left={0}
        size={80}
        status={'loading'} 
      />
    );
  }
  // Render nothing if no children present
  return children ? children : null;
}

export default LoaderComponent;
