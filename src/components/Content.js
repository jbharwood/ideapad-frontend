import React from "react";

class Content extends React.Component {

  render() {
    return (
      <div>
        {this.props.content.post}<br/>
        {this.props.content.audio}
      </div>
    )
  }
}
export default Content
