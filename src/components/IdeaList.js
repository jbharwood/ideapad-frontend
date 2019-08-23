import React from "react";
import Idea from './Idea.js';

class IdeaList extends React.Component {

  state = {
    ideaClicked: false
  }

  renderIdeas = () => {
    if (this.props.ideas.length > 0) {
      return this.props.ideas.map(idea => {
        return (
          <ul onClick={this.handleClick}>
            <Idea idea={idea} fetchIdeas={this.props.fetchIdeas}/>
          </ul>
        )
      })
    }
  }

  render() {
    return (
      <div>
        {this.renderIdeas()}
      </div>
    )
  }
}
export default IdeaList
