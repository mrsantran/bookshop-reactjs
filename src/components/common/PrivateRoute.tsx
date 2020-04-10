import * as React from 'react';
import { Route, Router, Redirect, RouteProps } from 'react-router-dom';
import { CUSTOMER_TOKEN, PATH } from '../../config/Constants';

const { Component } = React;

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }: RouteProps) => {
    if (!Component) return null;
    const token = localStorage.getItem(CUSTOMER_TOKEN);
    return (
        <Route {...rest} render={(props) => (
            (token && Object.keys(token).length !== 0 && token.constructor !== Object)
                ? <Component {...props} />
                : <Redirect to={PATH.Login} />
        )} />
    )
}
export default PrivateRoute;