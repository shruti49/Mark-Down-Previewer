import React, { Component } from 'react';

import marked from 'marked';

import './output-styles.scss';

export default class Output extends Component {
  getMarkdownText = () => {
    var rawMarkup = marked(this.props.markdown);
    return { __html: rawMarkup };
  };
  render() {
    return (
      <div className='output'>
        <div className='output__header'>magic output</div>
        <div
          id='preview'
          className='output__preview'
          dangerouslySetInnerHTML={this.getMarkdownText()}
        ></div>
      </div>
    );
  }
}
