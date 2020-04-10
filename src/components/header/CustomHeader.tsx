import * as React from 'react'
import { NavLink } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import { isValidToken } from '../../utils/Request';
import logo from './../../assets/story.png';
import { PATH } from '../../config/Constants';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/types';
import { logout } from '../../store/actions';
import './style.css';
import { bestSellerBooks, Book } from '../../store/home/actions';
const { useEffect, useState } = React;

declare global {
    interface Window {
        openNav: () => void;
        closeNav: () => void;
    }
}

const CustomerHeader = () => {

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const fetchLogout = useSelector((state: RootState) => state.auth.fetchLogout);
    useEffect(() => {
        if (fetchLogout.data) {
            location.reload();
        }
    }, [fetchLogout,]);

    const onLogout = (event: any) => {
        event.preventDefault();
        setOpen(false);
        dispatch(logout())
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">
                <NavLink to={PATH.Home} exact={true} className="nav-item nav-link" >
                    <img src={logo} width="40px" height="40px" />
                    &nbsp;Home
                </NavLink>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav">
                        {/* {isValidToken() &&
                            <NavLink exact={true} className="nav-item nav-link" to={PATH.Book}>Books</NavLink>
                        } */}
                    </div>
                    <form className="form-inline">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <div className="input-group-append">
                                <button type="button" className="btn btn-secondary"><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </form>
                    {/* <div className="navbar-nav">
                        <a href="#" className="nav-item nav-link">Login</a>

                    </div> */}
                    <div className="navbar-nav">
                        {!isValidToken() && (
                            <NavLink to={PATH.Login} exact={true} className="nav-item nav-link" >Login</NavLink>
                        )}
                        {!isValidToken() && (
                            <NavLink to={PATH.Register} exact={true} className="nav-item nav-link">Register</NavLink>
                        )}
                        <NavLink to="/cart" exact={true} className="nav-item nav-link"><i className="material-icons">shopping_cart</i></NavLink>
                        {isValidToken() && (
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Profile</a>
                                <div className="dropdown-menu">
                                    <NavLink to={PATH.Me} exact={true} className="dropdown-item">
                                        <i className="fa fa-user" aria-hidden="true"></i>&nbsp;Me
                                    </NavLink>
                                    <button type="button" className="dropdown-item" onClick={() => setOpen(true)}>
                                        <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Modal show={open} onHide={() => setOpen(false)} aria-labelledby="contained-modal-title-vcenter" centered
                dialogClassName="border-radius-2">
                <Modal.Header>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <i className="fa fa-exclamation-triangle" aria-hidden="true">&nbsp;</i>
                    <span />Are you sure you want to logout?
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => setOpen(false)}>Cancel</button>
                    <button onClick={onLogout}>Yes</button>
                </Modal.Footer>
            </Modal>
        </nav>
    );
}

export default React.memo(CustomerHeader);