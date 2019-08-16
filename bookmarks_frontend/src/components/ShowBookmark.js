import React, { Component } from 'react';

class ShowBookmark extends Component {
  render() {
    return (
      <ul>
        {this.props.bookmarks.map(bookmark => {
          return (
            <a href={bookmark.url} key={bookmark._id}>
              <li>{bookmark.title} </li>
            </a>
          );
        })}
      </ul>
    );
  }
}

export default ShowBookmark;
