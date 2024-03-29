import { ReactNode, HTMLAttributes } from 'react';
import classes from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={`${classes.card} ${className || ''}`} {...props}>
      {children}
    </div>
  );
}
