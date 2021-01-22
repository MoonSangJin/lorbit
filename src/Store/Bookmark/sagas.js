import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { HOST } from '../../Constants/requests';
import {
  fetchBookmarkFolderRequest,
  fetchBookmarkFolderSuccess,
  fetchBookmarkFolderFailure,
  fetchBookmarkRequest,
  fetchBookmarkSuccess,
  fetchBookmarkFailure,
  deleteBookmarkFolderRequest,
  deleteBookmarkFolderSuccess,
  deleteBookmarkFolderFailure,
} from './actions';
import { getAccessToken } from '../../Utils/tokenHandler';

const fetchBookmarkFolderApi = (token) =>
  axios.get(HOST + '/bookmark-folder', {
    headers: { Authorization: `Bearer ${token}` },
  });

function* fetchBookmarkFolderAsync() {
  try {
    const token = yield call(getAccessToken);
    const res = yield call(fetchBookmarkFolderApi, token);

    yield put(fetchBookmarkFolderSuccess({ bookmarkFolderList: res.data }));
  } catch (e) {
    yield put(fetchBookmarkFolderFailure());
  }
}

const fetchBookmarkApi = (token) =>
  axios.get(HOST + '/bookmark', {
    headers: { Authorization: `Bearer ${token}` },
  });

function* fetchBookmarkAsync() {
  try {
    const token = yield call(getAccessToken);
    const res = yield call(fetchBookmarkApi, token);

    yield put(fetchBookmarkSuccess({ bookmarkList: res.data }));
  } catch (e) {
    yield put(fetchBookmarkFailure());
  }
}

function* deleteBookmarkFolderAsync() {
  try {
    yield console.log('지웠니?');
    // yield put(deleteBookmarkFolderSuccess({ bookmarkFolderList: res.data }));
  } catch (e) {
    yield put(fetchBookmarkFolderFailure());
  }
}

export function* watchBookmark() {
  yield takeEvery(fetchBookmarkFolderRequest, fetchBookmarkFolderAsync);
  yield takeEvery(fetchBookmarkRequest, fetchBookmarkAsync);
  yield takeEvery(deleteBookmarkFolderRequest, deleteBookmarkFolderAsync);
}
