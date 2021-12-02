import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';

import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import CheckOutPage from './pages/checkout/checkout.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// firebase
import { checkUserSession } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='shop/*' element={<ShopPage />} />
          <Route path='/checkout' element={<CheckOutPage />} />
          <Route
            exact
            path='/signin'
            element={
              this.props.currentUser ? (
                <Navigate replace to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
