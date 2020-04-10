import {
    composeTypes,
} from 'iron-redux';

/**
 * types
 */
const prefix = 'home/';

enum BasicTypes {
    book,
    author,
    user,
    newestBooks,
    bestSellerBooks,
    mostPopularBooks,
    clearFetchBook,
    clearFetchAuthor,
    clearfetchUser,
    clearFetchNewestBooks,
    clearFetchBestSellerBooks,
    clearFetchMostPopularBooks
}

enum FetchTypes {
    fetchBook,
    fetchAuthor,
    fetchUser,
    fetchNewestBooks,
    fetchBestSellerBooks,
    fetchMostPopularBooks
}

const Types = composeTypes({
    prefix,
    BasicTypes,
    FetchTypes,
});

export { Types, prefix };
