import React from "react";
import { Markup } from 'interweave';

class Content extends React.Component {

  render() {
    return (
      <div className="content">
        <Markup content={this.props.content.html} />
        <li>{this.props.content.audio}</li>
      </div>
    )
  }
}
export default Content
