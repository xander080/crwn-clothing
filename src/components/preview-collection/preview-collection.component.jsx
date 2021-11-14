import React from 'react';
import './collection-preview.styles.scss';

import CollectionItem from '../colllection-item/collection-item.component';

const PreviewCollection = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItem }) => (
          <CollectionItem key={id} {...otherItem} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
