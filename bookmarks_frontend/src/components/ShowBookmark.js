import React, { Component } from 'react';

class ShowBookmark extends Component {
  render() {
    return (
      <ul className="bookmark-ul">
        {this.props.bookmarks.map(bookmark => {
          return (
            <a className="bookmark-a" href={bookmark.url} key={bookmark._id}>
              <li className="bookmark-li">{bookmark.title} </li>
            </a>
          );
        })}
      </ul>
    );
  }
}

export default ShowBookmark;
