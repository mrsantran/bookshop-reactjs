import * as React from 'react';
import './style.css';
import { User } from '../../store/home/actions';

export interface Props {
    user?: User;
    key?: number;
}

const UserView = ({ user }: Props) => {
    return (
        <div className="col-md-2 col-sm-4">
            <div className="product-grid4">
                <div className="user-avatar">
                    <img src="https://previews.123rf.com/images/flukesamed/flukesamed1407/flukesamed140700014/30020064-passport-photo-of-young-attractive-sexy-beautiful-woman-in-white-shirt-and-suit-isolated-on-a-white-.jpg" className="rounded-circle img-fluid"/>
                </div>
            </div>
            <div className="product-content">
                <br/>
                <h4 className="title textOneLine"><a href="#">{user?.name}</a></h4>
            </div>
        </div>
    );
}

export default React.memo(UserView);