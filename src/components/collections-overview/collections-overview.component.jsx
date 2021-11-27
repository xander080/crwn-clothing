import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PreviewCollection from '../preview-collection/preview-collection.component';
import { collectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    <div className='shope-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: collectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
