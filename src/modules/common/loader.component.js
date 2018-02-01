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

const LoaderComponent = ({isLoading}) => {
  const refreshStatus = isLoading ? 'loading' : 'hide';
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
  // This tells react not to render anything
  return null;
}

// class LoaderComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       refreshStatus: 'hide'
//     };
//   }

//   componentWillReceiveProps(nextProps) {
//     const isLoading = _.get(this.props, 'isLoading', false);
//     const willStartLoading = _.get(nextProps, 'isLoading', false);

//     if (!isLoading && !willStartLoading && this.state.refreshStatus === 'ready') {
//       console.log('HIDE');
//       // It's ready and stopped loading, hide the loader
//       this.setState({
//         refreshStatus: 'hide'
//       });
//     } else if (!isLoading && willStartLoading) {
//       console.log('LOADING');
//       // It's about to start loading, show the loader
//       this.setState({
//         refreshStatus: 'loading'
//       });
//     } else if (isLoading && !willStartLoading) {
//       console.log('READY');
//       // It's about to stop loading
//       this.setState({
//         refreshStatus: 'ready'
//       });
//       this.setState({
//         refreshStatus: 'hide'
//       });
//     }

//   }

//   render() {
//     const {children} = this.props;
//     const showChildren = this.state.refreshStatus === 'hide';
//     return (
//       <div>
//         <RefreshIndicator
//           style={styles.refreshStyle}
//           top={0}
//           left={0}
//           size={80}
//           status={'readyw'} 
//         />
//         {showChildren ? children : null}
//       </div>
//     )
//   }
// }

export default LoaderComponent;
