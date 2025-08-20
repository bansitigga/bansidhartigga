import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button className="px-4 py-2 bg-blue-600 text-white" {...props}>
    {children}
  </button>
);

export default Button;
