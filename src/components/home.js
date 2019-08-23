import React from "react";
import IdeaForm from './IdeaForm.js';
import IdeaList from './IdeaList.js';

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
      this.fetchIdeas()
    })
  }

  componentDidMount = () => {
    this.fetchIdeas()
  }

  render() {
    return (
      <div>
        <div className="home">
          <h1>IdeaPad</h1>
          <IdeaForm postIdea={this.postIdea}/>
          <IdeaList ideas={this.state.ideas} fetchIdeas={this.fetchIdeas}/>
        </div>
      </div>
    )
  }
}
export default Home
