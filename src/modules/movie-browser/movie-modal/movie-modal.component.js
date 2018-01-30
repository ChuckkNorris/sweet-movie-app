import React from 'react';
import {Dialog} from 'material-ui';

class MovieModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {

    return (
      <Dialog
        title="Dialog With Actions"
        actions={actions}
        modal={true}
        open={this.state.open}
      >
        Only actions can close this dialog.
    </Dialog>
    );
  }
}

// const MoveModalComponent = ({movieModal}) => {
//   return (
//     <Dialog
//       title="Dialog With Actions"
//       actions={actions}
//       modal={true}
//       open={this.state.open}
//     >
//       Only actions can close this dialog.
//     </Dialog>
//   );
// }

export default MovieModalComponent;
