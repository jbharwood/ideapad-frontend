import React from "react";

class Idea extends React.Component {

  render() {
    return (
      <div>
        {this.props.idea.subject}
        {this.props.idea.category}
      </div>
    )
  }
}
export default Idea
