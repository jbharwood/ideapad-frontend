import React from "react";
import ContentForm from './ContentForm.js';
import Content from './Content.js';

class ContentList extends React.Component {

  state = {
    contentClicked: false
  }

  handleClick = () => {
    this.setState({contentClicked: true})
  }

  renderContent = () => {
    if (this.props.contents.length > 0) {
      return this.props.contents.map(content => {
        return (
          <ul>
            <Content content={content} />
          </ul>
        )
      })
    } else {
        return (
          <ul>
            <ContentForm idea={this.props.idea} postContent={this.props.postContent}
              fetchIdeas={this.props.fetchIdeas}/>
          </ul>
        )
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}
export default ContentList
