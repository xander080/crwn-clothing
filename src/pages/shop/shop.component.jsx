import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionsPageContainer from '../collection/collection.container';

const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className='shope-page'>
      <Routes>
        <Route path='/' element={<CollectionsOverviewContainer />} />
        <Route path='/:collectionId' element={<CollectionsPageContainer />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
