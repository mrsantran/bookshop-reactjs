import * as React from 'react'
import { NavLink } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import { isValidToken } from '../../utils/Request';
import logo from './../../assets/story.png';
import logoutIcon from './../../assets/logout.png';
import cart from './../../assets/cart.png';
import { PATH } from '../../config/Constants';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/types';
import { logout } from '../../store/actions';
import './style.css';
const { useEffect, useState } = React;

export interface Props {
    onLogout: (event: any) => void;
}


const Header = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const fetchLogout = useSelector((state: RootState) => state.auth.fetchLogout);
    useEffect(() => {
        if (fetchLogout.data) {
            location.reload();
        }
    }, [fetchLogout]);

    const onLogout = (event: any) => {
        event.preventDefault();
        setOpen(false);
        dispatch(logout())
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-laravel">
            <div className="container">
                <img src={logo} width="40px" height="40px" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink exact={true} className="inActiveRoute" activeClassName="activeRoute" to={PATH.Home}>Home</NavLink>
                        </li>
                        {!isValidToken() &&
                            <li className="nav-item">
                                <NavLink exact={true} className="inActiveRoute" activeClassName="activeRoute" to={PATH.Login}>Login</NavLink>
                            </li>
                        }
                        {!isValidToken() &&
                            <li className="nav-item">
                                <NavLink exact={true} className="inActiveRoute" activeClassName="activeRoute" to={PATH.Register}>Register</NavLink>
                            </li>
                        }
                        <li className="nav-item">
                            <NavLink exact={true} className="inActiveRoute" activeClassName="activeRoute" to={PATH.Book}>Books</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact={true} className="inActiveRoute" activeClassName="activeRoute" to={PATH.Cart}><img src={cart} width="30px" height="24px" alt="Your cart" /></NavLink>
                        </li>
                    </ul>
                </div>
                {isValidToken() &&
                    // <button type="button" className="btn btn-link" data-toggle="modal" data-target="#exampleModal"><img src={logoutIcon} width="30px" height="24px" /></button>
                    <button type="button" className="logout">
                        <img src={logoutIcon} width="30px" height="24px" onClick={() => setOpen(true)} />
                    </button>
                }
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

export default React.memo(Header);