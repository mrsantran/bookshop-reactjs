import * as React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { CUSTOMER_TOKEN, PATH } from '../../config/Constants';

const Logout = () => {
    const _his = useHistory();
    const onLogout = (event: any) => {
        event.preventDefault();
        localStorage.removeItem(CUSTOMER_TOKEN);
        _his.push(PATH.Login);
    }
    return (
        <div className="container center">
            <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Do you want to logout?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={onLogout}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(React.memo(Logout));