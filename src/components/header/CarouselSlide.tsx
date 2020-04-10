import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './style.css';
import firstSlide from './../../assets/first.svg';
import secondSlide from './../../assets/second.svg';
import thirdSlide from './../../assets/third.svg';
import { Book, book, bestSellerBooks, mostPopularBooks } from '../../store/home/actions';
import CarouselItem from './CarouselItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/types';
import PopularBookView from './PopularBookView';

const { useState, useEffect } = React;

export interface Props {
    books?: Book[]
}

const CarouselSlide = () => {
    const dispatch = useDispatch();
    const [index, setIndex] = useState(0);
    const [bSBooks, setBSBooks] = useState<Book[]>([]);
    const [mPBooks, setMPBooks] = useState<Book[]>([]);
    const fetchBestSellerBooks = useSelector((state: RootState) => state.home.fetchBestSellerBooks);
    const fetchMostPopularBooks = useSelector((state: RootState) => state.home.fetchMostPopularBooks);

    useEffect(() => {
        setTimeout(() => {
            dispatch(mostPopularBooks());
            dispatch(bestSellerBooks());
        }, 500);
    }, []);

    useEffect(() => {
        if (fetchBestSellerBooks.data) {
            setBSBooks(fetchBestSellerBooks.data.data);
        }
        if (fetchMostPopularBooks.data) {
            setMPBooks(fetchMostPopularBooks.data.data);
        }
    }, [fetchBestSellerBooks, fetchMostPopularBooks])

    const handleSelect = (selectedIndex: number, e: any) => {
        setIndex(selectedIndex);
    };

    const renderIndicator = () => {
        if (!bSBooks || bSBooks.length == 0) return null;
        var rows = [];
        var size = bSBooks.length;
        if (size >= 4) {
            size = 4
        }
        for (var i = 0; i < size; i++) {
            if (i == 0) {
                rows.push(<li data-target="#featured" data-slide-to="0" className="active" key={i}></li>)
            } else {
                rows.push(<li data-target="#featured" data-slide-to="0" key={i}></li>);
            }
        }
        return rows;
    }

    const renderCarouselItem = () => {
        if (!bSBooks || bSBooks.length == 0) return null;
        var rows = [];
        var size = bSBooks.length;
        if (size >= 4) {
            size = 4
        }
        for (var i = 0; i < size; i++) {
            rows.push(<CarouselItem book={bSBooks[i]} active={i == 0 ? true : false} key={bSBooks[i].id} />);
        }
        return rows;
    }


    const renderPopularBooks = () => {
        if (!mPBooks || mPBooks.length == 0) return null;
        var rows = [];
        for (var i = 0; i < mPBooks.length; i++) {
            rows.push(<PopularBookView book={mPBooks[i]} key={mPBooks[i].id} />);
        }
        return rows;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 pb-5">
                    <section className="row">
                        <div className="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
                            <div id="featured" className="carousel slide carousel" data-ride="carousel">
                                <ol className="carousel-indicators top-indicator">
                                    {renderIndicator()}
                                </ol>

                                <div className="carousel-inner">
                                    {renderCarouselItem()}
                                </div>
                            </div>

                            <a className="carousel-control-prev" href="#featured" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#featured" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                        <div className="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
                            <div className="row">
                                {renderPopularBooks()}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default React.memo(CarouselSlide);