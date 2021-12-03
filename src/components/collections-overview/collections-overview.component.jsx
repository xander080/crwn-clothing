import React from 'react';
import { useSelector } from 'react-redux';

import PreviewCollection from '../preview-collection/preview-collection.component';
import { collectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {
  const collections = useSelector(collectionsForPreview);
  return (
    <div className='collections-overview'>
      <div className='shope-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    </div>
  );
};

export default CollectionsOverview;
