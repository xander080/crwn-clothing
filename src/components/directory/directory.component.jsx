import React from 'react';
import { useSelector } from 'react-redux';

import { selecDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.components';

const Directory = () => {
  const sections = useSelector(selecDirectorySections);
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...section }) => (
        <MenuItem key={id} {...section} />
      ))}
    </div>
  );
};

export default Directory;
