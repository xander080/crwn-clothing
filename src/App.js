import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import CheckOutPage from './pages/checkout/checkout.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// firebase
import { checkUserSession } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

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
            currentUser ? <Navigate replace to='/' /> : <SignInAndSignUpPage />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
