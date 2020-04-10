import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/types';
import actions, { signIn } from '../../store/auth/actions';
import Loading from './../common/Loading';
import History from './../common/History';
import './style.css';
// import { Redirect } from 'react-router-dom';
import { useHistory, withRouter } from 'react-router-dom';
import { PATH } from '../../config/Constants';

const { useEffect, useState } = React;
let _loadKey: any = null;
export interface Props {

}

const Login = (props?: Props) => {
    const dispatch = useDispatch();
    const _his = useHistory();
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('Aa@123456');
    const [seePwd, setSeePwd] = useState(false);

    const fetchSignIn = useSelector((state: RootState) => state.auth.fetchSignIn);

    useEffect(() => {

        // handleStatusChange
        // if (fetchSignIn.loading) {
        //   _loadKey && Portal.remove(_loadKey);
        //   _loadKey = Toast.loading('loading...', 0);
        // } else {
        //   _loadKey && Portal.remove(_loadKey);
        // }
        // alert(fetchSignIn.error);
        // alert(fetchSignIn.loading)
        if (fetchSignIn.error) {
            //   Toast.fail(fetchSignIn.message || '');
            // dispatch(resetAuthStatus());
            alert("Error");
        }
        if (fetchSignIn.data) {
            // alert(fetchSignIn.data);
            // onBack();
            //   onBackToHome();
            // History.push("/dashboard")
            // return (<Redirect to="/your-new-location" push />);
            // setTimeout(()=> {
            //     history.push("/books");
            // },0);
            _his.push(PATH.Home);
            location.reload();
        }
    }, [fetchSignIn]);

    const onSignInPress = (event: any) => {
        // history.push("/books");
        // alert ("submit");
        // if (!username) {
        //   setTimeout(() => {
        //     Toast.fail('Username can not be empty');
        //   }, 1);
        //   return;
        // }
        // if (!password) {
        //   Toast.info('Password can not be empty');
        //   return;
        // }
        dispatch(signIn({ username, password }));
        event.preventDefault();
    };
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Sign In</div>
                    <div className="card-body"></div>
                    <form onSubmit={onSignInPress}>
                        <div className="form-group row">
                            <label className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                            <div className="col-md-6">
                                <input type="text" className="form-control" defaultValue={username} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-4 col-form-label text-md-right">Password</label>
                            <div className="input-group input-group-lg col-md-6">
                                <input type={seePwd ? "password" : "text"}
                                    required
                                    defaultValue={password}
                                    className="form-control" />
                                <div className="input-group-append">
                                    <button type="button" className="btn btn-sm btn-secondary" onClick={() => {
                                        setSeePwd(!seePwd);
                                    }}>
                                        {seePwd && (
                                            <i className="fa fa-eye" aria-hidden="true"></i>
                                        )}
                                        {!seePwd && (
                                            <i className="fa fa-eye-slash" aria-hidden="true"></i>
                                        )}

                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-6 offset-md-4">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" name="remember" /> Remember Me
                                </label>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-6 offset-md-4">
                                <button type="submit" className="btn btn-primary btn-block" disabled={fetchSignIn.loading}>Login</button>
                            </div>
                        </div>
                        <div className="form-group row">
                            <span className="col-md-6 offset-md-4">
                                <a href="#" className="btn btn-link">Forgot Your Password?</a>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default withRouter(React.memo(Login));