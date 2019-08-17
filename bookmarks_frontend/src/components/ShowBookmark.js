import React, { Component } from 'react';

class ShowBookmark extends Component {
  render() {
    return (
      <ul className='bookmark-ul'>
        {this.props.bookmarks.map(bookmark => {
          return (
            <div className="bookmark-list-wrapper">
              <a className='bookmark-a' href={bookmark.url} key={bookmark._id}>
                <li className='bookmark-li'>
                  {bookmark.title}{' '}

                </li>
              </a>
              <button href='#' className='edit-btn'>
                EDIT
                  </button>
              <button
                href='#'
                className='delete-btn'
                onClick={() => this.props.deleteBookmark(bookmark._id)}
              >
                DELETE
                  </button>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default ShowBookmark;
