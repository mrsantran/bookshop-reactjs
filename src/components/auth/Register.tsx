import * as React from 'react';
import './style.css';

export interface Props {

}

const Register = (props?: Props) => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    {/* <div className="card-header">Sign Up</div> */}
                    <header className="card-header">
                        <a href="" className="float-right btn btn-outline-primary mt-1">Log in</a>
                        <h4 className="card-title mt-2">Sign up</h4>
                    </header>
                    <div className="card-body"></div>
                    <form action="" method="">
                        <div className="form-group row">
                            <label className="col-md-4 col-form-label text-md-right">Full Name</label>
                            <div className="col-md-6">
                                <input type="text" id="fullname" className="form-control" name="fullname" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-4 col-form-label text-md-right">Age</label>
                            <div className="col-md-6">
                                <input type="text" id="age" className="form-control" name="age" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-4 col-form-label text-md-right">Phone Number</label>
                            <div className="col-md-6">
                                <input type="text" id="phone" className="form-control" name="phone" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="option1" />
                                <span className="form-check-label"> Male </span>
                            </label>
                            <label className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="option2" />
                                <span className="form-check-label"> Female</span>
                            </label>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-4 col-form-label text-md-right">E-Mail Address *</label>
                            <div className="col-md-6">
                                <input type="text" id="email_address" className="form-control" name="email-address" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-4 col-form-label text-md-right">Password *</label>
                            <div className="col-md-6">
                                <input type="password" id="password" className="form-control" name="password" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-4 col-form-label text-md-right">Confirm Password *</label>
                            <div className="col-md-6">
                                <input type="password" id="confirm_password" className="form-control" name="confirm_password" />
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
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Register);