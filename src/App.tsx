import * as React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import BookList from './components/books/BookList';
import Cart from './components/books/Cart';
import NotFound from './components/notfound/NotFound';
import logo from './assets/story.png';
import cart from './assets/cart.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { browserHistory } from 'react-router';

const App = () => {
  return (
    <Router>
      <div className="App">

        <nav className="navbar navbar-expand-lg navbar-light navbar-laravel">
          <div className="container">
            {/* <a className="navbar-brand" href="#">Laravel</a> */}
            <img src={logo} width="40px" height="40px" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/books"}>Books</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/cart"}><img src={cart} width="30px" height="30px" alt="Your cart" /></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="login-form">
          <div className="container">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={Register} />
              <Route path="/books" component={BookList} />
              <Route path="/cart" component={Cart} />
              <Route path='*' component={NotFound} />
            </Switch>
          </div>
        </main>
      </div>
      {/* <div className="auth-wrapper">
        <div className="auth-inner">
          
        </div>
      </div>
    </div> */}
    </Router>);
}

export default App;
