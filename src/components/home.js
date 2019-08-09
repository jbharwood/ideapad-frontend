import React from "react";
import IdeaForm from './IdeaForm.js';
import ContentForm from './ContentForm.js';
import Idea from './Idea.js';

class Home extends React.Component {

  state = {
    ideas: []
  }

  fetchIdeas = () => {
    fetch(`/api/idea`)
    .then(r => r.json())
    .then(i => {
      this.setState({
        ideas: i
      })
    })
  }

  postIdea = (idea) => {
    fetch(`/api/idea/`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(idea)
    })
    .then(r => r.json())
    .then(r => {

    })
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
      debugger
    })
  }

  renderIdeas = () => {
    if (this.state.ideas.length > 0) {
      return this.state.ideas.map(idea => {
        return <Idea idea={idea}/>
      })
    }
  }


  componentDidMount = () => {
    this.fetchIdeas()
  }

  render() {
    return (
      <div>
        <h1>Ideapad</h1>
        <IdeaForm postIdea={this.postIdea}/>
        <ContentForm postContent={this.postContent}/>
        {this.renderIdeas()}
      </div>
    )
  }
}
export default Home
