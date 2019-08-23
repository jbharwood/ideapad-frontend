import React from "react";
import { Markup } from 'interweave';
import Audio from './Audio.js';

class Content extends React.Component {

  render() {
    return (
      <div className="content">
        <Markup content={this.props.content.html} />
        <Audio />
      </div>
    )
  }
}
export default Content
