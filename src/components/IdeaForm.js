import React from "react";

class IdeaForm extends React.Component {

  state = {
    subject: '',
    category: ''
  };

  handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

  handleSubmit = e => {
    e.preventDefault();
    this.props.postIdea(this.state)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} action="">
          <div>
            <input
              onChange={this.handleChange}
              value={this.state.subject}
              name="subject"
              type="text"
            />
            <input
              onChange={this.handleChange}
              value={this.state.category}
              name="category"
              type="text"
            />
            <button type="submit">
              Create an Idea
            </button>
          </div>
        </form>
      </div>
    )
  }
}
export default IdeaForm
