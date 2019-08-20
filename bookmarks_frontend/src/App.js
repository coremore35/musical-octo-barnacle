import React, { Component } from 'react';
import './App.css';
import NewBookmarkForm from './components/NewBookmarkForm';
import axios from 'axios';
import ShowBookmark from './components/ShowBookmark';
import EditBookmark from './components/EditBookmark';

let baseURL = 'http://localhost:3003';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      makeEdit: false,
      bookmark: {}
    };
    this.getBookmarks = this.getBookmarks.bind(this);
    this.handleAddBookmark = this.handleAddBookmark.bind(this);
    this.deleteBookmark = this.deleteBookmark.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.editBookmark = this.editBookmark.bind(this);
  }

  getBookmark(bookmark) {
    this.setState({ bookmark: bookmark });
  }

  async getBookmarks() {
    console.log('getting bookmarks');
    const response = await axios(`${baseURL}/bookmarks`);
    const data = response.data;
    console.log(data);
    this.setState({
      bookmarks: data,
      edit: false
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

  async editBookmark(id) {
    console.log(id);
    console.log('editBookmark called');
    const response = await axios.get(`${baseURL}/bookmarks/${id}`);
    const editThisBookmark = response.data;
    console.log(editThisBookmark);
    this.setState(prevState => ({
      editThisBookmark: editThisBookmark,
      edit: true
    }));
    // console.log(this.state);
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

  async handleUpdate(selectedBookmark) {
    console.log(selectedBookmark);
    console.log('update hit');
    await axios.put(`${baseURL}/bookmarks/${selectedBookmark._id}`, {
      makeEdit: !selectedBookmark.makeEdit
    });
    const updatedBookmarks = this.state.bookmarks.map(bookmark => {
      if (bookmark._id === selectedBookmark._id) {
        bookmark.makeEdit = !bookmark.makeEdit;
        return bookmark;
      } else {
        return bookmark;
      }
    });
    this.setState({
      bookmarks: updatedBookmarks
    });
    console.log(updatedBookmarks);
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Bookmark!</h1>
        </div>
        <NewBookmarkForm
          baseURL={baseURL}
          handleAddBookmark={this.handleAddBookmark}
        />
        <ShowBookmark
          bookmarks={this.state.bookmarks}
          deleteBookmark={this.deleteBookmark}
          handleUpdate={this.handleUpdate}
          editBookmark={this.editBookmark}
        />
        {this.state.edit && (
          <EditBookmark
            editThisBookmark={this.state.editThisBookmark}
            getBookmarks={this.getBookmarks}
          />
        )}
      </div>
    );
  }
}

export default App;
