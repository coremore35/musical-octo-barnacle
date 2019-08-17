import React, { Component } from 'react';
import { tsConstructorType } from '@babel/types';

class ShowBookmark extends Component {
  render() {
    return (
      <div>
        <ul className='bookmark-ul'>
          {this.props.bookmarks.map(bookmark => {
            return (
              <div key={bookmark._id}>
                <li className='bookmark-li'>
                  <a className='bookmark-a' href={bookmark.url}>
                    {bookmark.title}{' '}
                  </a>
                  <button
                    className='edit-btn'
                    onClick={() => this.props.handleUpdate(bookmark)}
                  >
                    EDIT
                  </button>
                  <button
                    className='delete-btn'
                    onClick={this.props.deleteBookmark}
                  >
                    DELETE
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ShowBookmark;
