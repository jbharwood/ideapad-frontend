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
    // fetch(`http://localhost:3000/api/idea`, {'mode': 'no-cors'})
    // fetch(`http://localhost:3000/api/idea`, {
    //     mode: "no-cors",
    // })
    // fetch(`http://localhost:3000/api/idea`, {
    //       method: 'GET',
    //       mode: "no-cors",
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       }
    //     })
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

  postContent = (idea) => {
    fetch(`/api/content/`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "content": "application/json"
      },
      body: JSON.stringify({
        idea_id: idea.idea_id,
        post: idea.content,
        audio: idea.audio
      })
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
