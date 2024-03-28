import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

import classes from './Button.module.scss';

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`${classes['custom-button']} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
