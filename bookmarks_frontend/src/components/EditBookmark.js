import React, { Component } from 'react';
import axios from 'axios';

let baseURL = 'http://localhost:3003';

class EditBookmark extends Component {
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
    const response = await axios.put(
      `${baseURL}/bookmarks/${this.props.editThisBookmark._id}`,
      this.state
    );
    this.setState({ title: '', url: '' });
    this.props.getBookmarks();
  }

  render() {
    console.log('edit reached');
    console.log(this.props.editThisBookmark);

    return (
      <form className='bookmark-form' onSubmit={this.handleSubmit}>
        <label htmlFor='title' />
        <input
          type='text'
          id='title'
          onChange={this.handleChange}
          defaultValue={this.props.editThisBookmark.title}
          placeholder='add a developer site'
        />
        <label htmlFor='url' />
        <input
          type='text'
          id='url'
          onChange={this.handleChange}
          defaultValue={this.props.editThisBookmark.url}
          placeholder='Enter URL...'
        />
        <input type='submit' value='Finish Editing' />
      </form>
    );
  }
}

export default EditBookmark;
