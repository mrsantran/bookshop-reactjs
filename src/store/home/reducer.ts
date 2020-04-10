import {
  AsyncTuple,
  ActionType,
} from 'iron-redux';
import { Types, prefix } from './types';
import actions, { FetchUserRes, FetchBookRes, FetchAuthorRes, FetchBookCarouselRes} from './actions';

// 1. Complex properties can be written with comments as much as possible so that they can be identified when called
// 2. Use AsyncTuple to manage asynchronously retrieved data. Do not have various loading and error fields in InitialState
// 3. Name the initial state as State, so that both the initial value of state and the type definition of state can be generated.
// 4. Naming convention: API prefix plus fetch

const fetchAuthor = new AsyncTuple<FetchAuthorRes>(false);
const fetchBook = new AsyncTuple<FetchBookRes>(false);
const fetchUser = new AsyncTuple<FetchUserRes>(false);
const fetchNewestBooks = new AsyncTuple<FetchBookCarouselRes>(false);
const fetchBestSellerBooks = new AsyncTuple<FetchBookCarouselRes>(false);
const fetchMostPopularBooks = new AsyncTuple<FetchBookCarouselRes>(false);

class State {
  public fetchBook = fetchBook;
  public fetchAuthor = fetchAuthor;
  public fetchUser = fetchUser;
  public fetchNewestBooks = fetchNewestBooks;
  public fetchBestSellerBooks = fetchBestSellerBooks;
  public fetchMostPopularBooks = fetchMostPopularBooks;
}

/**
 * reducer
 */
export default (
  state = new State(),
  action: ActionType<typeof actions>
): State => {
  switch (action.type) {
    case Types.clearFetchAuthor: {
      return { ...state, fetchAuthor };
    }
    case Types.clearFetchBook: {
      return { ...state, fetchBook };
    }
    case Types.clearFetchBestSellerBooks: {
      return { ...state, fetchBestSellerBooks };
    }
    case Types.clearFetchMostPopularBooks: {
      return { ...state, fetchMostPopularBooks };
    }
    case Types.clearFetchNewestBooks: {
      return { ...state, fetchNewestBooks };
    }
    case Types.clearfetchUser: {
      return { ...state, fetchUser };
    }
    default: {
      return AsyncTuple.handleAll(prefix, state, action);
    }
  }
};
