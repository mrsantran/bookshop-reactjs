import * as React from 'react';
import { Book, book } from '../../store/home/actions';

export interface Props {
    book?: Book;
    key?: number;
}

const PopularBookView = ({ book }: Props) => {
    return (
        <div className="col-6 pb-1 pt-0 pr-1">
            <div className="card border-0 rounded-0 text-white overflow zoom">
                <div className="position-relative">
                    <div className="ratio_right-cover-2 image-wrapper-1">
                        <a href="#">
                            <img className="img-fluid"
                                src={book?.cover}
                                alt="simple blog template bootstrap" />
                        </a>
                    </div>
                    <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                        <a className="p-1 badge badge-primary rounded-0" href="#">{book?.name}</a>

                        <a href="#">
                            <h2 className="h5 text-white my-1">{book?.shortDescription}</h2>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(PopularBookView);