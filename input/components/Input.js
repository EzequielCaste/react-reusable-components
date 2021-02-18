import React, { useState } from 'react';

export const Input = ({
  error = false,
  disabled = false,
  helperText = '',
  startIcon = false,
  endIcon = false,
  value = '',
  fullWidth = false,
  multiline = false,
  row = '0',
  size = 'md',
}) => {
  let classes = `${fullWidth && 'fullWidth'} ${
    error ? 'red' : ''
  } ${size} input`;
  const labelClasses = `${error ? 'red' : ''} ${disabled ? 'disabled' : ''}`;
  const [inputValue, setValue] = useState(value);
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="inputContainer">
      <label className={labelClasses} htmlFor="main-input">
        Label
      </label>
      {startIcon && <span className="material-icons">phone</span>}
      {multiline ? (
        <textarea className={size} placeholder="Placeholder" rows={row} />
      ) : (
        <input
          placeholder="Placeholder"
          onChange={handleInputChange}
          disabled={disabled}
          name="main-input"
          className={classes}
          value={inputValue && inputValue}
          style={startIcon ? { paddingLeft: '35px' } : {}}
        />
      )}

      {endIcon && (
        <span
          style={endIcon ? { paddingLeft: '165px' } : {}}
          className="material-icons"
        >
          lock
        </span>
      )}
      {helperText && (
        <span className={labelClasses}>{helperText ? helperText : ''}</span>
      )}
    </div>
  );
};
