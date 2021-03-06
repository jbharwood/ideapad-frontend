import React from "react";
import ContentList from './ContentList.js';

class Idea extends React.Component {

  state = {
    ideaClicked: false
  }

  postContent = (content) => {
    fetch(`/api/content/`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(content)
    })
    .then(r => r.json())
    .then(r => {
      this.props.fetchIdeas()
    })
  }

  editContent = (content, contentID) => {
    let id = contentID.toString()
    debugger
    fetch(`http://localhost:3000/api/content/${id}`, {
      method: "PATCH",
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(content)
    })
    .then(r => r.json())
    .then(r => {
      debugger
      this.props.fetchIdeas()
    })
  }

  renderContents = () => {
    if (this.state.ideaClicked === true) {
        return (
          <ul>
            <ContentList contents={this.props.idea.contents}
              postContent={this.postContent} idea={this.props.idea}
              fetchIdeas={this.props.fetchIdeas} editContent={this.editContent}/>
          </ul>
        )
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
