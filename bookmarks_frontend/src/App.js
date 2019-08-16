import React, { Component } from 'react';
import './App.css';
import NewBookmarkForm from './components/NewBookmarkForm';
import axios from 'axios';
import ShowBookmark from './components/ShowBookmark';

let baseURL = 'http://localhost:3003';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: []
    };
    this.getBookmarks = this.getBookmarks.bind(this);
    this.handleAddBookmark = this.handleAddBookmark.bind(this);
    this.deleteBookmark = this.deleteBookmark.bind(this);
  }

  async getBookmarks() {
    console.log('getting bookmarks');
    const response = await axios(`${baseURL}/bookmarks`);
    const data = response.data;
    console.log(data);
    this.setState({
      bookmarks: data
    });
  }

  componentDidMount() {
    this.getBookmarks();
    console.log('component mount call');
  }

  handleAddBookmark(bookmark) {
    const copyBookmarks = this.state.bookmarks;
    copyBookmarks.unshift(bookmark);
    this.setState({
      bookmarks: copyBookmarks
    });
  }

  async deleteBookmark(id) {
    console.log('delete hit');
    await axios.delete(`${baseURL}/bookmarks/${id}`);
    const filteredBookmarks = this.state.bookmarks.filter(bookmark => {
      return bookmark._id !== id;
    });
    this.setState({
      bookmarks: filteredBookmarks
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Bookmark! </h1>
        </div>
        <NewBookmarkForm
          baseURL={baseURL}
          handleAddBookmark={this.handleAddBookmark}
        />
        <ShowBookmark
          bookmarks={this.state.bookmarks}
          deleteBookmark={this.deleteBookmark}
        />
      </div>
    );
  }
}

export default App;
