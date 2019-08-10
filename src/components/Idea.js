import React from "react";
import Content from './Content.js';

class Idea extends React.Component {

  state = {
    ideaClicked: false
  }

  renderContents = () => {
    if (this.state.ideaClicked === true) {
      return this.props.idea.contents.map(content => {
        return (
          <ul>
            <Content content={content}/>
          </ul>
        )
      })
    }
  }

  displayContent = () => {
    if (!!this.props.idea) {
      this.setState({ideaClicked: !this.state.ideaClicked})
    }
  }

  render() {
    return (
      <div className="idea">
        <li onClick={this.displayContent}>{this.props.idea.subject}</li>
        {this.renderContents()}
      </div>
    )
  }
}
export default Idea
