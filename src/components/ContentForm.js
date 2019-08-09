import React from "react";

class ContentForm extends React.Component {

  state = {
    idea_id: null,
    post: '',
    audio: ''
  };

  handleChange = (e) => {
    let value = e.target.value
    if (e.target.name === "idea_id") {
      value = parseInt(e.target.value)
    }
		this.setState({
			[e.target.name]: value
		})
	}

  handleSubmit = e => {
    e.preventDefault();
    this.props.postContent(this.state)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} action="">
          <div>
            <input
              onChange={this.handleChange}
              value={this.state.idea_id}
              name="idea_id"
              type="text"
              placeholder="idea_id"
            />
            <input
              onChange={this.handleChange}
              value={this.state.post}
              name="post"
              type="text"
              placeholder="post"
            />
            <input
              onChange={this.handleChange}
              value={this.state.audio}
              name="audio"
              type="text"
              placeholder="audio"
            />
            <button type="submit">
              Create Content
            </button>
          </div>
        </form>
      </div>
    )
  }
}
export default ContentForm
