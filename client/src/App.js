import React from 'react';
import './scss/main.scss';
import logo from './logo.svg';
import Builder from './javascripts/pages/Builder';
import Library from './javascripts/pages/Library';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="cl-header pt-20 pr-10 pb-20 pl-20">
        <header className="cl-header__menu col-12">
          <div className="cl-header__menu-left col-6">
            <Link to="/library" className="col-3 btn-blue--solid">Library</Link>
            <Link to="/builder" className="col-3">Builder</Link>
          </div>
          <div className="cl-header__menu-right col-6">
            <Link to="/library" className="col-3">Login</Link>
          </div>
        </header>
        <div className="cl-content">
          <Route exact path="/library" component={Library} />
          <Route exact path="/builder" component={Builder} />
        </div>
      </div>
    </Router>
  );
}

export default App;
