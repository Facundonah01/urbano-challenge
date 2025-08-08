import React from 'react';

type Props = {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      type = 'text',
      placeholder = '',
      disabled = false,
      className = '',
      ...rest
    },
    ref,
  ) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full mt-1 text-sm font-light input focus:ring-2 focus:ring-red-600 focus:outline-none ${className}`}
        ref={ref}
        {...rest}
      />
    );
  },
);

Input.displayName = 'Input';
export default Input;
