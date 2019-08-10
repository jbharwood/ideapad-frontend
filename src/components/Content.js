import React from "react";

class Content extends React.Component {

  render() {
    return (
      <div classname="content">
        <li>{this.props.content.post}</li>
        <li>{this.props.content.audio}</li>
      </div>
    )
  }
}
export default Content
