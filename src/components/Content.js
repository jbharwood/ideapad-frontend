import React from "react";

class Content extends React.Component {

  renderContent = () => {
    if (!!this.props.content) {
      debugger
    }
  }

  render() {
    return (
      <div classname="content">
        {this.renderContent()}
        <li>{this.props.content.post}</li>
        <li>{this.props.content.audio}</li>
      </div>
    )
  }
}
export default Content
