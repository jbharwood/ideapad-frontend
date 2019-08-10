import React from "react";
import Content from './Content.js';

class Idea extends React.Component {

  renderContents = () => {
    if (!!this.props.idea) {
      return this.props.idea.contents.map(content => {
        return (
          <ul>
            <Content content={content}/>
          </ul>
        )
      })
    }
  }

  render() {
    return (
      <div className="idea">
        <li>{this.props.idea.subject}</li>
        <li>{this.props.idea.category}</li>
        {this.renderContents()}
      </div>
    )
  }
}
export default Idea
