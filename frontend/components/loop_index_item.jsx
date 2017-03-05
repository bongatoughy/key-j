import React from 'react';
import {Howl, Howler} from 'howler';

class LoopIndexItem extends React.Component {

  render() {
    return (
      <li onClick={() => this.props.updateLoop(this.props.loop)} >
        {this.props.loop.name}
      </li>
    );
  }
}

export default LoopIndexItem;
