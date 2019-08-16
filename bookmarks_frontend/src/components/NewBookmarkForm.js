import React, { Component } from 'react';
import axios from 'axios';

class NewBookmarkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post(`${this.props.baseURL}/bookmarks`, {
      title: this.state.title,
      url: this.state.url
    });
    this.setState({ title: '', url: '' });
    console.log(response.data);
    this.props.handleAddBookmark(response.data);
  }

  render() {
    return (
      <form className='bookmark-form' onSubmit={this.handleSubmit}>
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
        <input type='submit' value='Add New' />
      </form>
    );
  }
}

export default NewBookmarkForm;
