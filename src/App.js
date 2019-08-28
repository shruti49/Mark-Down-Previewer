import React, { Component } from 'react';
import './App.css';

import Input from './components/input/input-component';
import Output from './components/output/output-component';
import Header from './components/header/header-component';

import { placeholder } from './components/input/Placeholder';

export default class App extends Component {
  state = {
    markdown: placeholder
  };

  handleChange = event => {
    this.setState({
      markdown: event.target.value
    });
  };

  render() {
    const { markdown } = this.state;
    return (
      <div className='app'>
        <div style={style}>&nbsp;</div>
        <Header />
        <div className='container'>
          <Input markdown={markdown} handleChange={this.handleChange} />
          <Output markdown={markdown} />
        </div>
      </div>
    );
  }
}

const style = {
  height: '4rem',
  backgroundColor: '#328d90',
  borderRadius: '.2rem',
  boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.2)'
};
