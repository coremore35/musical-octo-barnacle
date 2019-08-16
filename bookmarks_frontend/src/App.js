import React, { Component } from 'react';
import './App.css';
import NewBookmarkForm from './components/NewBookmarkForm';
import axios from 'axios';
import ShowBookmark from './components/ShowBookmark';
import NewBookmarkForm from './components/NewBookmarkForm';

let baseURL = 'http://localhost:3003';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: []
    };
    this.getBookmarks = this.getBookmarks.bind(this);
    this.handleAddBookmark = this.handleAddBookmark.bind(this);
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

  render() {
    return (
      <div className='App'>
        <div class='header'>
          <h1>Bookmark! </h1>
        </div>
        <NewBookmarkForm
          baseURL={baseURL}
          handleAddBookmark={this.handleAddBookmark}
        />
        <ShowBookmark bookmarks={this.state.bookmarks} />
      </div>
    );
  }
}

export default App;
