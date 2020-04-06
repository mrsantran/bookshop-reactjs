import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/types';
import actions, { signIn } from '../../store/auth/actions';
import './style.css';

const { useEffect, useState } = React;
let _loadKey: any = null;
export interface Props {

}

const Login = (props?: Props) => {
    const dispatch = useDispatch();
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
        // if (fetchSignIn.error) {
        //   Toast.fail(fetchSignIn.message || '');
        //   // dispatch(resetAuthStatus());
        // }
        if (fetchSignIn.data) {
            alert(fetchSignIn.data);
            // onBack();
            //   onBackToHome();
        }
    }, [fetchSignIn]);

    const onSignInPress = () => {
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
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Sign In</div>
                    <div className="card-body"></div>
                    <form action="" method="" onSubmit={onSignInPress}>
                        <div className="form-group row">
                            <label className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" defaultValue={username} />
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
                                <button type="submit" className="btn btn-primary btn-block" >Login</button>
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

export default React.memo(Login);