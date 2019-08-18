import React from "react";
import ContentEditable from "react-contenteditable";
// import sanitizeHtml from "sanitize-html";

class ContentForm extends React.Component {

  state = {
    idea_id: null,
    post: '',
    audio: '',
    html: `<p>Hello <b>World</b> !</p><p>Paragraph 2</p>`,
    editable: true
  };

  handleChange2 = evt => {
    this.setState({ html: evt.target.value });
  };

  // sanitizeConf = {
  //   allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
  //   allowedAttributes: { a: ["href"] }
  // };

  // sanitize = () => {
  //   this.setState({ html: sanitizeHtml(this.state.html, this.sanitizeConf) });
  // };

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
    this.props.postContent({
      idea_id: this.props.idea.id,
      post: this.state.post,
      audio: this.state.audio
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} action="">
          <div>
          <ContentEditable
            className="editable"
            html={this.state.html} // innerHTML of the editable div
            disabled={!this.state.editable} // use true to disable edition
            onChange={this.handleChange2} // handle innerHTML change
            onBlur={this.sanitize}
          />
            <textarea
              onChange={this.handleChange}
              value={this.state.post}
              name="post"
              type="text"
              placeholder="post"
            />
            <br/>
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
