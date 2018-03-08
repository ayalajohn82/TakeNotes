import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { notesLoaded } from './actions';

const request = () => axios.get('/retrieve');

export function* getNotes() {
  const notes = yield call(request, '/retrieve');
  yield put(notesLoaded(notes));
}

export default function* notesData() {
  yield takeLatest('LOAD_NOTES', getNotes);
}
