import {
    createAction,
    createFetchAction,
    Method,
} from 'iron-redux';
import { Types } from './types';
import API from '../../config/Apis';

/**
 |--------------------------------------------------
 | DEFINE REDUCER ACTION INTERFACE
 |--------------------------------------------------
 */
export interface FetchPageData<T> {
    data: PageContent<T>,
    status: number,
    timestamp: string,
    path: string
}

export interface PageContent<T> {
    content: T[],
    totalPages: number,
    totalElements: number,
    size: number,
    numberOfElements: number
}

export interface Book {
    id: number,
    name: string,
    price: number,
    thump: string,
    cover: string,
    shortDescription: string,
    description: string,
    status: string,
}

export interface FetchPageRes<T> {
    data: PageContent<T>,
    status: number,
    timestamp: string,
    path: string
}

export interface FetchBookReq {
    pageNo: number,
    pageSize: number,
    descending?: boolean,
    sortBy?: string,
    author?: string,
}

export interface FetchBookRes extends FetchPageRes<Book> {
}

const fetchBook = createFetchAction(Types.fetchBook, API.book, Method.Get)<FetchBookReq, FetchBookRes>('fetchBook');

export interface Author {
    id: number,
    name: string,
    rate: number,
    shortDescription: string,
    description: string,
    hideProfile: boolean,
    birthday: string,
}

export interface FetchAuthorRes extends FetchPageRes<Author> {

}

export interface FetchPageReq {
    pageNo: number,
    pageSize: number,
}

const fetchAuthor = createFetchAction(Types.fetchAuthor, API.author, Method.Get)<FetchPageReq, FetchAuthorRes>('fetchAuthor');

export interface User {
    id: number,
    name: string,
}

export interface FetchUserRes extends FetchPageRes<User> {

}

const fetchUser = createFetchAction(Types.fetchUser, API.user, Method.Get)<FetchPageReq, FetchUserRes>('fetchUser');

export interface FetchBookCarouselRes {
    data: Book[],
    status: number,
    timestamp: string,
    path: string
}

export interface FetchBookCarouselReq {

}

const fetchNewestBooks = createFetchAction(Types.fetchNewestBooks, API.newestBooks, Method.Get)<FetchBookCarouselReq, FetchBookCarouselRes>('fetchNewestBooks');
const fetchBestSellerBooks = createFetchAction(Types.fetchBestSellerBooks, API.bestSellerBooks, Method.Get)<FetchBookCarouselReq, FetchBookCarouselRes>('fetchBestSellerBooks');
const fetchMostPopularBooks = createFetchAction(Types.fetchMostPopularBooks, API.mostPopularBooks, Method.Get)<FetchBookCarouselReq, FetchBookCarouselRes>('fetchMostPopularBooks');

// fetch state
const clearFetchBook = createAction(Types.clearFetchBook)();

const clearFetchAuthor = createAction(Types.clearFetchAuthor)();

const clearFetchUser = createAction(Types.clearfetchUser)();

const clearFetchNewestBooks = createAction(Types.clearFetchNewestBooks)();
const clearFetchBestSellerBooks = createAction(Types.clearFetchBestSellerBooks)();
const clearFetchMostPopularBooks = createAction(Types.clearFetchMostPopularBooks)();


export default {
    fetchBook,
    fetchAuthor,
    fetchUser,
    fetchNewestBooks,
    fetchBestSellerBooks, 
    fetchMostPopularBooks,
    clearFetchNewestBooks,
    clearFetchBestSellerBooks,
    clearFetchMostPopularBooks,
    clearFetchAuthor,
    clearFetchBook,
    clearFetchUser
};

/**
 |--------------------------------------------------
 | DEFINE SERVICE ACTION INTERFACE
 |--------------------------------------------------
 */

export const book = createAction(Types.book)<FetchBookReq>();
export const author = createAction(Types.author)<FetchPageReq>();
export const user = createAction(Types.user)<FetchPageReq>();
export const newestBooks = createAction(Types.newestBooks)<FetchBookCarouselRes>();
export const mostPopularBooks = createAction(Types.mostPopularBooks)<FetchBookCarouselRes>();
export const bestSellerBooks = createAction(Types.bestSellerBooks)<FetchBookCarouselRes>();