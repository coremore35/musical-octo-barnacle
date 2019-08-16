import React, { Component } from 'react';
import axios from 'axios';

class NewBookmarkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: ''
    };
  }

  handleChange() {}

  render() {
    return (
      <form className='bookmark-form'>
        <label htmlFor='title' />
        <input
          type='text'
          id='title'
          onChange={this.handleChange}
          value={this.state.title}
          placeholder='add a developer site'
        />
        <label htmlFor='url' />
        <input
          type='text'
          id='url'
          onChange={this.handleChange}
          value={this.state.url}
          placeholder='Enter URL...'
        />
      </form>
    );
  }
}

export default NewBookmarkForm;
