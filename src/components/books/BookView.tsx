import * as React from 'react';
import './style.css';
import { Book } from '../../store/home/actions';

export interface Props {
    book?: Book;
    key?: number;
}

const BookView = ({ book }: Props) => {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="product-grid4">
                <div className="product-image4">
                    <a href="#">
                        <img className="pic-1" src={book?.cover} />
                        <img className="pic-2" src={book?.cover} />
                    </a>
                    <ul className="social">
                        <li><a href="#" data-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                        <li><a href="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                        <li><a href="#" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span className="product-new-label">New</span>
                    <span className="product-discount-label">-10%</span>
                </div>
                <div className="product-content">
                    <h3 className="title textOneLine"><a href="#">{book?.name}</a></h3>
                    <div className="price">
                        `${book?.price}`
                                <span>$16.00</span>
                    </div>
                    <a className="add-to-cart" href="">ADD TO CART</a>
                </div>
            </div>
        </div>
    );
}

export default React.memo(BookView);
