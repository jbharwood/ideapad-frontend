import React from "react";
import Content from './Content.js';

class Idea extends React.Component {

  renderContents = () => {
    if (!!this.props.idea) {
      return this.props.idea.contents.map(content => {
        return <Content content={content}/>
      })
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.idea.subject}</h2>
        <p>{this.props.idea.category}</p>
        {this.renderContents()}
      </div>
    )
  }
}
export default Idea
