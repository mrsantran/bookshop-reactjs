import * as React from 'react';
import { Book } from '../../store/home/actions';

export interface Props {
    book?: Book;
    key?: number;
    active?: boolean;
}

const CarouselItem = ({ book, active }: Props) => {
    return (
        <div className={active ? "carousel-item active" : "carousel-item"}>
            <div className="card border-0 rounded-0 text-light overflow zoom">
                <div className="position-relative">
                    <div className="ratio_left-cover-1 image-wrapper">
                        <a href="#">
                            <img className="img-fluid w-100"
                                src={book?.cover}
                                alt="Bootstrap news theme" />
                        </a>
                    </div>
                    <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                        <a href="#">
                            <h2 className="h3 post-title text-white my-1">{book?.name}</h2>
                        </a>
                        <div className="news-meta">
                            <span className="news-author">by <a className="text-white font-weight-bold" href="#">Jennifer</a></span>
                            <span className="news-date">Oct 22, 2019</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(CarouselItem);