import React from "react";

class Content extends React.Component {

  renderContent = () => {
    // if (!!this.props.content) {
      return (
        <div>

        </div>
      )
    // }
  }

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
