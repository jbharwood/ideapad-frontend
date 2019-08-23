import React from "react";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";

class ContentForm extends React.Component {

  state = {
    idea_id: null,
    post: '',
    audio: '',
    html: `<p>Hello <b>World</b> !</p><p>Paragraph 2</p>`,
    editable: true
  };

  handleChange2 = e => {
    this.setState({ html: e.target.value, post: e.target.value.replace(/<[^>]+>/g, '') });
  };

  sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
    allowedAttributes: { a: ["href"] }
  };

  sanitize = () => {
    this.setState({ html: sanitizeHtml(this.state.html, this.sanitizeConf) });
  };

  toggleEditable = () => {
    this.setState({ editable: !this.state.editable });
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
    this.props.postContent({
      idea_id: this.props.idea.id,
      post: this.state.post,
      audio: this.state.audio,
      html: this.state.html
    })
  };

  // <textarea
  //   onChange={this.handleChange}
  //   value={this.state.post}
  //   name="post"
  //   type="text"
  //   placeholder="post"
  // />

  render() {
    return (
      <div className="contentForm">
        <EditButton cmd="italic" />
        <EditButton cmd="bold" />
        <EditButton cmd="formatBlock" arg="h1" name="heading" />
        <EditButton
          cmd="createLink"
          arg="https://github.com/lovasoa/react-contenteditable"
          name="hyperlink"
        />
        <button onClick={this.toggleEditable}>
          Make {this.state.editable ? "readonly" : "editable"}
        </button>
        <form onSubmit={this.handleSubmit} action="">
          <div>
            <ContentEditable
              className="editable"
              html={this.state.html} // innerHTML of the editable div
              disabled={!this.state.editable} // use true to disable edition
              onChange={this.handleChange2} // handle innerHTML change
              onBlur={this.sanitize}
              value={this.state.post}
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

function EditButton(props) {
  return (
    <button
      key={props.cmd}
      onMouseDown={evt => {
        evt.preventDefault(); // Avoids loosing focus from the editable area
        document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
      }}
    >
      {props.name || props.cmd}
    </button>
  );
}

export default ContentForm
