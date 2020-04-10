import * as React from 'react';
import './style.css';
import { Author } from '../../store/home/actions';

export interface Props {
    author?: Author;
    key?: number;
}

const AuthorView = ({author}: Props) => {
    return (
        <div className="col-md-2 col-sm-4">
            <div className="product-grid4">
                <div className="user-avatar">
                    <img src="https://previews.123rf.com/images/flukesamed/flukesamed1407/flukesamed140700014/30020064-passport-photo-of-young-attractive-sexy-beautiful-woman-in-white-shirt-and-suit-isolated-on-a-white-.jpg" className="rounded-circle img-fluid"/>
                </div>
            </div>
            <div className="product-content">
                <br/>
                <h4 className="title textOneLine"><a href="#">{author?.name}</a></h4>
            </div>
        </div>
    );
}
export default React.memo(AuthorView);