import Network from './Network'
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
export default {
    book: `${Network.API_ROOT_DOMAIN}/book`,
    author: `${Network.API_ROOT_DOMAIN}/author`,
    user: `${Network.API_ROOT_DOMAIN}/user`,
    newestBooks : `${Network.API_ROOT_DOMAIN}/book/newest`,
    mostPopularBooks : `${Network.API_ROOT_DOMAIN}/book/popular`,
    bestSellerBooks : `${Network.API_ROOT_DOMAIN}/book/bestseller`,
}