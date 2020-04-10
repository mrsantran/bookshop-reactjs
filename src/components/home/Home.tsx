import * as React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { isValidToken } from '../../utils/Request';
import { PATH } from '../../config/Constants';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/types';
import { FetchPageData, User, FetchUserRes, FetchAuthorRes, FetchBookRes, Book, Author, book, FetchPageReq, user, author, bestSellerBooks } from '../../store/home/actions';
import BookView from '../books/BookView';
import UserView from '../books/UserView';
import AuthorView from '../books/AuthorView';

const { useEffect, useState } = React;



const Home = () => {
    const _his = useHistory();
    const dispatch = useDispatch();

    const [users, setUsers] = useState<User[]>([]);
    const [books, setBooks] = useState<Book[]>([]);
    const [authors, setAuthors] = useState<Author[]>([]);

    const fetchAuthor = useSelector((state: RootState) => state.home.fetchAuthor);
    const fetchUser = useSelector((state: RootState) => state.home.fetchUser);
    const fetchBook = useSelector((state: RootState) => state.home.fetchBook);

    const pageRequest: FetchPageReq = {
        pageNo: 0,
        pageSize: 100
    }

    useEffect(() => {
        dispatch(book(pageRequest));
        // dispatch(user(pageRequest));
        dispatch(author(pageRequest));
    }, []);

    useEffect(() => {
        if (fetchUser.data) {
            setUsers(fetchUser.data.data.content);
        }
        if (fetchBook.data) {
            setBooks(fetchBook.data.data.content);
        }
        if (fetchAuthor.data) {
            setAuthors(fetchAuthor.data.data.content);
        }

    }, [fetchAuthor, fetchBook, fetchUser]);

    return (
        <div className="container">
            {/* <div className="row">
                {
                    users.map((value, index) => {
                        return <UserView user={value} key={value.id} />
                    })
                }
            </div>
            <hr /> */}
            <div className="row">
                {
                    authors.map((value, index) => {
                        return <AuthorView author={value} key={value.id} />
                    })
                }
            </div>
            <hr />
            <div className="row">
                {
                    books.map((value, index) => {
                        return <BookView book={value} key={value.id} />
                    })
                }
            </div>
        </div>
    );
}
export default withRouter(React.memo(Home));