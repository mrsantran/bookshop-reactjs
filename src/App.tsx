import * as React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import BookList from './components/books/BookList';
import Cart from './components/books/Cart';
import NotFound from './components/notfound/NotFound';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { PATH } from './config/Constants';
import PrivateRoute from './components/common/PrivateRoute';
import Home from './components/home/Home';
import Logout from './components/auth/Logout';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { isValidToken } from './utils/Request';
import CarouselSlide from './components/header/CarouselSlide';
import CustomHeader from './components/header/CustomHeader';

const App = (props: any) => {

  return (
    <Router >
      <div className="App">
        {/* <Header /> */}
        <CustomHeader />
        {isValidToken() && <CarouselSlide />}
        <main className="mainBody">
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path={PATH.Login} component={Login} />
              <Route exact path={PATH.Register} component={Register} />
              <PrivateRoute exact path={PATH.Book} component={BookList} />
              <PrivateRoute exact path={PATH.Cart} component={Cart} />
              <PrivateRoute exact path={PATH.Logout} component={Logout} />
              <Route path='*' component={NotFound} />
            </Switch>
          </div>
        </main>
        <Footer />
      </div>
    </Router>);
}

export default React.memo(App);
