import React, { Component } from 'react';

class ShowBookmark extends Component {
  render() {
    return (
      <ul className='bookmark-ul'>
        {this.props.bookmarks.map(bookmark => {
          return (
            <div>
              <a className='bookmark-a' href={bookmark.url} key={bookmark._id}>
                <li className='bookmark-li'>
                  {bookmark.title}{' '}
                  <button href='#' className='edit-btn'>
                    EDIT
                  </button>
                  <button href='#' className='delete-btn'>
                    DELETE
                  </button>
                </li>
              </a>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default ShowBookmark;
