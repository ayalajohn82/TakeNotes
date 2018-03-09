import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { notesLoaded } from './actions';

const request = () => axios.get('/retrieve').then((response) => response);

export function* getNotes() {
  const notes = yield call(request, '/retrieve');
  // console.log('in saga', notes);
  yield put(notesLoaded(notes.data));
}

export default function* notesData() {
  yield takeLatest('LOAD_NOTES', getNotes);
}
