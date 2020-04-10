import * as React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { isValidToken } from '../../utils/Request';
import { PATH } from '../../config/Constants';
const { useEffect } = React;

const AuthLoading = () => {
    const _his = useHistory();
    useEffect(() => {
        if (!isValidToken()) {
            _his.push(PATH.Login);
        }
        return _his.push(PATH.Book);
    }, []);
    return (
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
}

export default withRouter(React.memo(AuthLoading));