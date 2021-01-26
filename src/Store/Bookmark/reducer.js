import { createReducer } from '@reduxjs/toolkit';

import {
  fetchBookmarkFolderFailure,
  fetchBookmarkFolderSuccess,
  fetchBookmarkSuccess,
  fetchBookmarkFailure,
  deleteBookmarkFolderSuccess,
  deleteBookmarkFolderFailure,
  renameBookmarkFolderSuccess,
  renameBookmarkFolderFailure,
} from './actions';

const initState = {
  bookmarkFolderList: [],
  bookmarkList: [],
};

const bookmarkReducer = createReducer(initState, {
  [fetchBookmarkFolderSuccess]: (state, action) => ({
    ...state,
    bookmarkFolderList: action.payload.bookmarkFolderList,
  }),
  [fetchBookmarkFolderFailure]: (state) => state,
  [fetchBookmarkSuccess]: (state, action) => ({
    ...state,
    bookmarkList: action.payload.bookmarkList,
  }),
  [fetchBookmarkFailure]: (state) => state,
  [deleteBookmarkFolderSuccess]: (state, action) => ({
    ...state,
    bookmarkFolderList: state.filter((bookmarkFolder) => {
      return (
        bookmarkFolder.bookmarkFolderId !== action.payload.bookmarkFolderId
      );
    }),
  }),
  [deleteBookmarkFolderFailure]: (state) => state,
  [renameBookmarkFolderSuccess]: (state, action) => ({
    ...state,
    //bookmarkFolderList: state.filter
  }),
  [renameBookmarkFolderFailure]: (state) => state,
});

export default bookmarkReducer;
