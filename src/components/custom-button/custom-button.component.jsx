import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignin, ...otherProps }) => (
  <button className={`${isGoogleSignin} custom-button`} {...otherProps}>
    {children}
  </button>
);
export default CustomButton;
