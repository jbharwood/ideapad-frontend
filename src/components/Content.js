import React from "react";
import { Markup } from 'interweave';

class Content extends React.Component {

  renderContent = () => {
    if (!!this.props.content) {
      debugger
    }
  }

  render() {
    return (
      <div classname="content">
        <Markup content={this.props.content.html} />
        <li>{this.props.content.audio}</li>
      </div>
    )
  }
}
export default Content
