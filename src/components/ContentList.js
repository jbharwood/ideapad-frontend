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
      return this.props.contents.map(content => {
        return (
          <ul>
            <Content content={content} />
          </ul>
        )
      })
  }

  render() {
    return (
      <div>
        {this.renderContent()}
        <ContentForm idea={this.props.idea} postContent={this.props.postContent}
          fetchIdeas={this.props.fetchIdeas}/>
      </div>
    )
  }
}
export default ContentList
