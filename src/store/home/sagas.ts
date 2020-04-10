import { takeLatest, call, put } from 'redux-saga/effects';
import { Types } from './types';
import actions, { author, book, user } from './actions';
import { fetchService } from '../fetchService';

function* bookService(action: ReturnType<typeof book>){
    const {payload} = action;
    try {
        const api = actions.fetchBook();
        yield* fetchService(api);
    } catch (error) {
        console.log('server', error);
    }
}

function* authorService(action: ReturnType<typeof author>){
    const {payload} = action;
    try {
        const api = actions.fetchAuthor();
        yield* fetchService(api);
    } catch (error) {
        console.log('server', error);
    }
}

function* userService(action: ReturnType<typeof user>){
    const {payload} = action;
    try {
        const api = actions.fetchUser();
        yield* fetchService(api);
    } catch (error) {
        console.log('server', error);
    }
}

function* newestBookService(action: ReturnType<typeof user>){
    const {payload} = action;
    try {
        const api = actions.fetchNewestBooks();
        yield* fetchService(api);
    } catch (error) {
        console.log('server', error);
    }
}

function* mostPopularBookService(action: ReturnType<typeof user>){
    const {payload} = action;
    try {
        const api = actions.fetchMostPopularBooks();
        yield* fetchService(api);
    } catch (error) {
        console.log('server', error);
    }
}

function* bestSellerBookService(action: ReturnType<typeof user>){
    const {payload} = action;
    try {
        const api = actions.fetchBestSellerBooks();
        yield* fetchService(api);
    } catch (error) {
        console.log('server', error);
    }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(Types.book, bookService);
  yield takeLatest(Types.author, authorService);
  yield takeLatest(Types.user, userService);
  yield takeLatest(Types.newestBooks, newestBookService);
  yield takeLatest(Types.mostPopularBooks, mostPopularBookService);
  yield takeLatest(Types.bestSellerBooks, bestSellerBookService);
}
