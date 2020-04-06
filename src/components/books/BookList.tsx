import * as React from 'react';
import './style.css';

export interface Props {

}

const BookList = (props: Props) => {
    return (
        <div className="row">
            <div className="col-md-3 col-sm-6">
                <div className="product-grid4">
                    <div className="product-image4">
                        <a href="#">
                            <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-1.jpg" />
                            <img className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-2.jpg" />
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
                        <h3 className="title"><a href="#">Women's Black Top</a></h3>
                        <div className="price">
                            $14.40
                                <span>$16.00</span>
                        </div>
                        <a className="add-to-cart" href="">ADD TO CART</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="product-grid4">
                    <div className="product-image4">
                        <a href="#">
                            <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-3.jpg" />
                            <img className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-4.jpg" />
                        </a>
                        <ul className="social">
                            <li><a href="#" data-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                            <li><a href="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                            <li><a href="#" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                        <span className="product-discount-label">-12%</span>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="#">Men's Blue Shirt</a></h3>
                        <div className="price">
                            $17.60
                                <span>$20.00</span>
                        </div>
                        <a className="add-to-cart" href="">ADD TO CART</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="product-grid4">
                    <div className="product-image4">
                        <a href="#">
                            <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-5.jpg" />
                            <img className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-6.jpg" />
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
                        <h3 className="title"><a href="#">Women's Black Top</a></h3>
                        <div className="price">
                            $14.40
                                <span>$16.00</span>
                        </div>
                        <a className="add-to-cart" href="">ADD TO CART</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="product-grid4">
                    <div className="product-image4">
                        <a href="#">
                            <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-7.jpg" />
                            <img className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-8.jpg" />
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
                        <h3 className="title"><a href="#">Women's Black Top</a></h3>
                        <div className="price">
                            $14.40
                                <span>$16.00</span>
                        </div>
                        <a className="add-to-cart" href="">ADD TO CART</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(BookList);
