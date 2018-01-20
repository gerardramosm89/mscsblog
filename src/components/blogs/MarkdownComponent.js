import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class MarkdownComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="allMarkdownBoxes">
          <ReactMarkdown
          source={this.props.source}
          escapeHtml={false}
          />
        </div>
      </div>
    );
  }
}

export default MarkdownComponent;