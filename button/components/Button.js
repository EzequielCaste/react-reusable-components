import React from 'react';

export const Button = ({
  variant = '',
  disableShadow = false,
  disabled = false,
  startIcon = '',
  endIcon = '',
  size = 'md',
  color = 'default',
}) => {
  // {{marginRight: spacing + 'em'}}
  const shadow = disableShadow ? '' : 'withShadow';
  const classes = `${color} ${size} btn ${shadow} ${variant} ${
    startIcon || endIcon ? 'blue' : ''
  }`;

  return (
    <button disabled={disabled} className={classes}>
      {startIcon && <span className="material-icons">{startIcon}</span>}
      <span>Default</span>
      {endIcon && <span className="material-icons">{endIcon}</span>}
    </button>
  );
};
